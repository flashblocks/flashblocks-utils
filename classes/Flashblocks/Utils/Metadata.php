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

	public function __construct() {
		add_filter( 'render_block_core/paragraph', [ $this, 'render' ], 10, 2 );
		add_filter( 'render_block_core/heading', [ $this, 'render' ], 10, 2 );
		add_filter( 'render_block_core/button', [ $this, 'render' ], 10, 2 );
//		add_filter( 'render_block', [ $this, 'render' ], 10, 4 );

		add_filter( 'flashblocks-utils-metadata-value', [ $this, 'metadata_value' ], 10, 4 );
	}

	function render( string $block_content, $block ): string {
		// Match all instances of {{your-meta-tag}}
		preg_match_all( '/{{(.*?)}}/', $block_content, $matches );

		foreach ( $matches[1] as $index => $meta_key ) {
			$match = $matches[0][ $index ];

			$remove_parent_tag = strpos( $meta_key, '?' ) === 0; // Determine if the key starts with a ?
			if ( $remove_parent_tag ) $meta_key = substr( $meta_key, 1 );  // remove ? from {{?meta_key

//			$meta_value = '';
//			$meta_value = apply_filters( 'flashblocks-utils-metadata-get-value', $meta_value, $meta_key, $block_content, $block );;            // meta value found - replace {{key}} with get_post_meta value
//			$meta_value = apply_filters( 'flashblocks-utils-metadata-get-value-' . $meta_key, $meta_value, $meta_key, $block_content, $block );;            // meta value found - replace {{key}} with get_post_meta value
//			if ( ! $meta_value ) {
			$meta_value = get_post_meta( get_the_id(), $meta_key, true );
//			$meta_value = apply_filters( 'flashblocks-utils-metadata-value', $meta_value, $meta_key, $block_content, $block );;            // meta value found - replace {{key}} with get_post_meta value
//			$meta_value = apply_filters( 'flashblocks-utils-metadata-value-' . $meta_key, $meta_value, $meta_key, $block_content, $block );;            // meta value found - replace {{key}} with get_post_meta value
//			}

			// meta value found
			if ( ! empty( $meta_value ) ) {
				// Replace the full match (e.g., {{ANYTHING}} or {{?ANYTHING}}) with the value.
				$block_content = str_replace( $match, $meta_value, $block_content );
			}

			// no meta value found
			else {
				// If key starts with ? {{?key}} then remove entire html container tag.
				if ( $remove_parent_tag ) {
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

	function metadata_value( $val, $key, $block_content, $block ): string {
		return 'zzz';
	}
}
