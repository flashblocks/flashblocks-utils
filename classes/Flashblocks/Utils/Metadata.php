<?php
/*
 * Pass this code to get metadata from acf or anywhere in post e.g. {{meta-data}}
 * Pass ? before the metadata to remove containing tag if it's empty e.g. <p>{{?meta-data}}</p> to remove

	add_filter( 'flashblocks-utils-metadata', function ( $meta_key, $block_content, $block ) {
		return "works";
	}, 10, 4 );

 */

namespace Flashblocks\Utils;

class Metadata {

	public function __construct() {
		add_filter( 'render_block_core/paragraph', [ $this, 'render' ], 10, 2 );
		add_filter( 'render_block_core/heading', [ $this, 'render' ], 10, 2 );

//		add_filter( 'flashblocks-utils-metadata', [ $this, 'meta_value' ], 10, 3 );
	}

	function render( string $block_content, $block ): string {
		// Match all instances of {{your-meta-tag}}
		preg_match_all( '/{{(.*?)}}/', $block_content, $matches );

		foreach ( $matches[1] as $index => $meta_key ) {
			$meta_value = '';
			$meta_value = apply_filters( 'flashblocks-utils-metadata-' . $meta_key, $meta_key, $block_content, $block );
			if ( ! $meta_value ) $meta_value = apply_filters( 'flashblocks-utils-metadata', $meta_key, $block_content, $block );

			if ( $meta_value ) {
				$block_content = str_replace( $matches[0][ $index ], $meta_value, $block_content );
			}

			// default process key
			// replace {{key}} with get_post_meta value
			// if {{?key}} has no value then remove the entire parent tag
			else {
				// Determine if the placeholder starts with a ?
				$remove_parent_tag = strpos( $meta_key, '?' ) === 0;
				$meta_key          = $remove_parent_tag ? substr( $meta_key, 1 ) : $meta_key; // remove ? from {{?meta_key
				$meta_value        = get_post_meta( get_the_id(), $meta_key, true );

				// if meta value
				if ( ! empty( $meta_value ) ) {
					// Replace the full match (e.g., {{ANYTHING}} or {{?ANYTHING}}) with the value.
					$block_content = str_replace( $matches[0][ $index ], $meta_value, $block_content );
				}

				// If the value is empty and the placeholder starts with ?, remove the entire container tag.
				elseif ( $remove_parent_tag ) {
					$pattern       = sprintf( '/<([^>\s]+)[^>]*>\s*%s\s*<\/\1>/', preg_quote( $matches[0][ $index ], '/' ) );
					$block_content = preg_replace( $pattern, '', $block_content );
				}
			}
		}

		return $block_content;
	}

	function meta_value( $meta_key, $block_content, $block ) {  }
}
