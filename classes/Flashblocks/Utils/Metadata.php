<?php
/*
 * Pass this code to get metadata from meta, acf options or anywhere in post e.g. {{meta-data-key}}
 * add optional commends e.g. {{primary_color options debug}}
 *      options - get from acf options table
 *      debug
 *      hide
 * Pass ? before the metadata to remove containing <tag> if value is empty e.g. <p>{{?meta-data}}</p> to remove

	// set value like a shortcode

	add_filter( 'flashblocks-utils-metadata-key-year', function ( $meta_value ) {
		return $meta_value ?? date( 'Y' );
	} );

	add_filter( 'flashblocks-utils-metadata-key-year', function ( $meta_value, $meta_key, $commands, $block_content, $block ) {
		return $meta_value ?? date( 'Y' );
	}, 10, 5 );

 */

namespace Flashblocks\Utils;

class Metadata {

	public array $blocks = [
		'render_block_core/paragraph',
		'render_block_core/heading',
//		'render_block_core/button',
//		'render_block_core/table',
	];

	public bool $log = false;

	public bool $log_hidden = false;

	public bool $log_inline = false;

	public bool $get_meta = false;

	public bool $get_options = false;


	// Static method to get the instance of the class
	private static ?Metadata $instance = null;

	public static function getInstance(): Metadata {
		if ( self::$instance === null ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	private function __construct() {
		add_action( 'init', [ $this, 'init' ] );
	}


	// add filters
	function init() {
		foreach ( $this->blocks as $block_name ) {
			add_filter( $block_name, [ $this, 'render' ], 10, 2 );
		}

		if ( $this->log ) {
			add_filter( 'the_content', [ $this, 'log_metadata' ] );
		}

		// Get val from acf options
		if ( $this->get_options && function_exists( 'acf_add_options_page' ) ) {
			add_filter( 'flashblocks-utils-metadata', function ( $val, $key, $commands ) {
				if ( ! isset( $val ) && in_array( "option", $commands ) ) {
					$val = get_field( $key, 'option', ! in_array( "raw", $commands ) );
				}

				return $val;
			}, 20, 3 );

			// This filter is helpful
//			add_filter( 'acf_the_content', function ( $content ) {
//				ddd($content);
//				return $content;
//			}, 10, 3 );
		}

		// get val from post meta via acf
		if ( $this->get_meta ) {
			if ( function_exists( 'get_field' ) ) {
				add_filter( 'flashblocks-utils-metadata', function ( $cal, $key, $commands ) {
					$cal = $cal ?? get_field( $key, null, ! in_array( "raw", $commands ) );

					return $cal ?? get_field( $key );
				}, 20, 3 );
			}
			// no acf - get val from post meta
			else {
				add_filter( 'flashblocks-utils-metadata', function ( $val, $key, $commands ) {
					$val = $val ?? get_post_meta( get_the_id(), $key, true );

					return $val;
				}, 20, 3 );
			}
		}
	}

	function render( string $block_content, $block ): string {
		// Match all instances of {{your-meta-tag}}
		preg_match_all( '/{{(.*?)}}/', $block_content, $matches );

		foreach ( $matches[1] as $index => $key ) {
			$match = $matches[0][ $index ]; // with {}

			$commands = explode( ' ', $key );
			$key      = array_shift( $commands );
			$val      = null;
			$val      = apply_filters( 'flashblocks-utils-metadata', $val, $key, $commands, $block_content, $block );
			$val      = apply_filters( 'flashblocks-utils-metadata-key-' . $key, $val, $key, $commands, $block_content, $block );;

			// meta value found - replace {{key}} with get_post_meta value

			// meta value found
			if ( ! empty( $val ) ) {
				// Replace the full match (e.g., {{ANYTHING}} or {{?ANYTHING}}) with the value.
				$block_content = str_replace( $match, $val, $block_content );
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
