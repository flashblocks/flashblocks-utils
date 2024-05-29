<?php
/*
 * Pass this code to get metadata from acf or anywhere in post e.g. {{meta-data}}
 * Pass ? before the metadata to remove containing tag if it's empty e.g. <p>{{?meta-data}}</p> to remove

	function metadata_value( $val, $key, $block_content, $block ): string {
		return 'custom value';
	}

 */

namespace Flashblocks\Utils;

class Metadata {

	private static ?Metadata $instance = null;

	public array $blocks = [
		'render_block_core/paragraph',
		'render_block_core/heading',
		'render_block_core/button',
		'render_block_core/table',
	];

	public bool $log = false;

	public bool $log_hidden = false;

	public bool $log_inline = false;

	private function __construct() {
		add_action( 'init', [ $this, 'init' ] );

//		add_filter( 'flashblocks-utils-metadata-value', function ( $val, $key, $block_content, $block ): string {
//			return 'zzz';
//		}, 10, 4 );
	}

	// Static method to get the instance of the class
	public static function getInstance(): Metadata {
		if ( self::$instance === null ) {
			self::$instance = new self();
		}

		return self::$instance;
	}


	function init() {
		foreach ( $this->blocks as $block_name ) {
			add_filter( $block_name, [ $this, 'render' ], 10, 2 );
		}

		if ( $this->log ) {
			add_filter( 'the_content', [ $this, 'log_metadata' ] );
		}

	}

	function render( string $block_content, $block ): string {
		// Match all instances of {{your-meta-tag}}
		preg_match_all( '/{{(.*?)}}/', $block_content, $matches );

		foreach ( $matches[1] as $index => $meta_key ) {
			$match = $matches[0][ $index ]; // with {}

			$commands   = explode( ' ', $meta_key );
			$meta_key   = array_shift( $commands );
			$meta_value = '';

//			ddd( $meta_key );
//			ddd( $commands );


			// option page
			if ( in_array( "log", $commands ) ) {
//				$this->log        = true;
//				$this->log_hidden = true;//in_array( "hidden", $commands );
//				$this->log_inline = true;
//				$block_content    .= $this->log_metadata();
			}

			if ( in_array( "option", $commands ) ) {
				// acf
				if ( function_exists( 'acf_add_options_page' ) ) {
					$meta_value = get_field( $meta_key, 'option' );
				}
			}

			// metadata from current post
			else {
				// acf
				if ( function_exists( 'the_field' ) ) {
					$meta_value = get_field( $meta_key );
				}
				// wp
				else {
					$meta_value = get_post_meta( get_the_id(), $meta_key, true );
				}
			}

//			$meta_value = apply_filters( 'flashblocks-utils-metadata-value', $meta_value, $meta_key, $block_content, $block );;            // meta value found - replace {{key}} with get_post_meta value
			$meta_value = apply_filters( 'flashblocks-utils-metadata-key-' . $meta_key, $meta_value ?? '', $meta_key, $block_content, $block );;            // meta value found - replace {{key}} with get_post_meta value

			// meta value found
			if ( ! empty( $meta_value ) ) {
				// Replace the full match (e.g., {{ANYTHING}} or {{?ANYTHING}}) with the value.
				$block_content = str_replace( $match, $meta_value, $block_content );
			}

			// no meta value found
			else {
				// If command: ? then remove entire html container tag.
				if ( in_array( "?", $commands ) ) {
					$pattern       = sprintf(
						'/<([^>\s]+)[^>]*>.*%s.*<\/\1>/s',
						preg_quote( $match, '/' )
					);
					$block_content = preg_replace( $pattern, '', $block_content );
				}

				// remove {{key}}
				else {
					$block_content = str_replace( $match, '', $block_content );
				}
			}
		}

		return $block_content;
	}

	/**
	 * log existing meta data
	 *
	 * @param string $content
	 *
	 * @return mixed|string
	 */
	function log_metadata( string $content = '' ) {
		// Get the current post ID.
		$post_id       = get_the_ID();
		$all_meta_data = get_post_meta( $post_id );

		$li = '';
		foreach ( $all_meta_data as $key => $values ) {
			if ( ! $this->log_hidden && strpos( $key, '_' ) === 0 ) continue;

			// $values is an array. If you expect single value meta fields, use $values[0].
			$val = is_array( $values ) && count( $values ) === 1 ? $values[0] : json_encode( $values );

			// Append each meta key-value pair to the content.
			$li .= sprintf( '<li><strong>%s:</strong> %s</li>', esc_html( $key ), esc_html( $val ) );
//			if ( function_exists( 'ddd' ) ) {
//				ddd( "$key:\t$val" );
//			}
		}

		if ( $this->log_inline ) $content .= "<ul>$li</ul>";

		return $content;
	}
}
