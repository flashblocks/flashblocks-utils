<?php

namespace Flashblocks\Utils;

use WP_Term;

class TaxonomyLinks {

	public static array $styles = [
		'alternating' => 'Alternating',
	];

	public function __construct() {
		add_action( 'init', [ $this, 'register_block_type' ] );
//		add_action( 'init', [ $this, 'register_block_styles' ] );

		// default layout if content is empty
		add_filter( 'flashblocks_taxonomies_links', [ $this, 'flashblocks_taxonomies_links' ], 100, 4 );
	}

	function register_block_type() {
		register_block_type( DIR . '/build/taxonomy-links' );
	}

//	function register_block_styles() {
//		foreach ( self::$styles as $name => $label ) {
//			$path         = "/build/taxonomy-links/styles/$name.css";
//			$style_handle = 'flashblocks-taxonomy-links-' . $name;
//			$path         = DIR . $path;
//			d( $path );
//			$style_properties = [
//				'name'         => $name,
//				'label'        => $label,
//				'inline_style' => true || file_exists( $path ) ? file_get_contents( $path ) : false,
//				'style_handle' => $style_handle,
//			];
//			register_block_style( 'flashblocks/taxonomy-links', $style_properties );
//		}
//	}

	function flashblocks_taxonomies_links( $content, $attributes, $block ) {
		if ( $content ) return $content;

		if ( str_contains( $attributes['className'] ?? '', 'is-style-style1' ) )
			return $this->style1( $content, $attributes, $block );


		// default style


		foreach ( $attributes['terms'] as $term_id ) {
			$term = get_term( $term_id );
			if ( ! $term instanceof WP_Term ) continue;

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
	 *
	 * @return string
	 */
	private function style1( $content, $attributes, $block ): string {

		foreach ( $attributes['terms'] as $term_id ) {
			$term = get_term( $term_id );
			if ( ! $term instanceof WP_Term ) continue;

			$fb_taxonomy = 'fb-taxonomy';
			$link        = get_term_link( $term );
			$name        = esc_html( $term->name );
//			$img         = get_field( 'image', 'maps_alive_marker_' . $term_id );
			$img = get_term_meta( $term_id, 'image', true );
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

}

?>
