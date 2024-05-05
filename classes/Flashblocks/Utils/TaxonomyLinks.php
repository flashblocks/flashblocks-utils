<?php

namespace Flashblocks\Utils;

use WP_Term;

class TaxonomyLinks {

	public static array $styles = [
		'alternating' => 'Alternating',
	];

	public bool $is_admin;

	public function __construct() {
		$this->is_admin = is_admin();
		add_action( 'init', [ $this, 'register_block_type' ] );

		// default layout if content is empty
		add_filter( 'flashblocks_taxonomies_links', [ $this, 'flashblocks_taxonomies_links' ], 100, 4 );
	}

	function register_block_type() {
		register_block_type( DIR . '/build/taxonomy-links' );
	}

	function flashblocks_taxonomies_links( $content, $attributes, $block, $terms ) {
		if ( $content ) return $content;

		if ( str_contains( $attributes['className'] ?? '', 'is-style-style1' ) )
			return $this->style1( $content, $attributes, $block, $terms );


		// default style

		foreach ( $terms as $term ) {
			$link    = get_term_link( $term );
			$name    = esc_html( $term->name );
			$content .= "<li><a href=\"$link\">$name</a></li>";
		}

		return $content;
	}



	// custom style 1


	/**
	 * Style 1
	 * Filter content
	 *
	 * @param $content
	 * @param $attributes
	 * @param $block
	 * @param $terms
	 *
	 * @return string
	 */
	private function style1( $content, $attributes, $block, $terms ): string {

		foreach ( $terms as $term ) {
			$fb_taxonomy = 'fb-taxonomy';
			$link        = get_term_link( $term );
			$name        = esc_html( $term->name );
			$img         = get_term_meta( $term->term_id, 'image', true );
			if ( $img ) {
				$img = wp_get_attachment_image_src( $img, 'large' );
				$img = $img[0];
//				$img = "<img src=\"$img\" alt=\"$name\">";
			}

			$content .= <<<htm
<div class="$fb_taxonomy-item" style="background-image:url($img)">
	<div class="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
		<div class="wp-block-button">
			<a class="wp-block-button__link wp-element-button" href="$link">$name</a>
		</div>
	</div>
</div>
htm;
		}

		return $content;
	}

//	public function get_terms( $term_ids, $attributes = [] ): array {
//		$args = [
//			'include'    => $term_ids,
//			'hide_empty' => ! $attributes['showEmpty'],
//
//		];
//
//		if ( $attributes['showEmpty'] ?? '' ) $args['hide_empty'] = false;
//		if ( $attributes['orderby'] ?? '' ) $args['orderby'] = $attributes['orderby'];
//
//		$terms = get_terms( $args );
//
//
////		$terms = [];
////		foreach ( $term_ids as $term_id ) {
////			$term = $this->get_term( $term_id, $attributes );
////			if ( $term ) $terms[] = $term;
////		}
//
//		return $terms;
//	}

//	public function get_term( $term_id, $attributes = [] ): WP_Term|bool {
//		$term = get_term( $term_id );
//		if ( ! $term instanceof WP_Term ) return false;
//		if ( ! $attributes['showEmpty'] && $term->count == 0 ) return false;
//
//		return $term;
//	}

}

?>
