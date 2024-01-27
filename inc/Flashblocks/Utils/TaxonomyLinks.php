<?php

namespace Flashblocks\Utils;

use WP_Term;

class TaxonomyLinks {
	public function __construct() {
		add_action( 'init', [ $this, 'register_block_type' ] );

		// default layout if content is empty
		add_filter( 'flashblocks_taxonomies_links', [ $this, 'flashblocks_taxonomies_links' ], 100, 4 );
	}

	function register_block_type() {
		register_block_type( DIR . '/build/taxonomy-links' );
	}

	function flashblocks_taxonomies_links( $content, $attributes, $block ) {
		if ( $content ) return $content;

		foreach ( $attributes['terms'] as $term_id ) {
			$term = get_term( $term_id );
			if ( ! $term instanceof WP_Term ) continue;
			$content .= sprintf( '<li><a href="%s">%s</a></li>', get_term_link( $term ), esc_html( $term->name ) );
		}

		return "<ul>$content</ul>";
	}
}
