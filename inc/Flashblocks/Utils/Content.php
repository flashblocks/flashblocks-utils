<?php

namespace Flashblocks\Utils;

/*
 * Notice: Function WP_Block_Type_Registry::register was called incorrectly.
 * Block type "flashblocks/taxonomy-links" is already registered. Please see Debugging in WordPress for more information. (This message was added in version 5.0.0.) in /Users/sun/www/teamdesoto/app/public/wp-includes/functions.php on line 6031
 */

class Content {

	public function __construct() {
		add_action( 'init', [ $this, 'register_block_type' ] );
		add_filter( 'flashblocks_content', [ $this, 'flashblocks_content' ], 100, 4 );
	}

	function register_block_type() {
		register_block_type( DIR . '/build/content' );
	}

	function flashblocks_content( $content, $attributes, $block ) {
		if ( $content ) return $content;

		if ( str_contains( $attributes['className'] ?? '', 'is-style-list-meta' ) )
			return $this->list_meta( $content, $attributes, $block );

		return 'No style';
	}



	// custom style list_meta


	/**
	 * @return string
	 * @var string $content Block default content.
	 * @var \WP_Block $block Block instance.
	 *
	 * @var array $attributes Block attributes.
	 */
	private function list_meta( $content, $attributes, $block ): string {

		// Get the current post ID.
		$post_id       = get_the_ID();
		$all_meta_data = get_post_meta( $post_id );
		$show_         = $attributes['atts']['all'] ?? '';

		foreach ( $all_meta_data as $key => $values ) {
			if ( ! $show_ && strpos( $key, '_' ) === 0 ) continue;

			// $values is an array. If you expect single value meta fields, use $values[0].
			$meta_value = is_array( $values ) && count( $values ) === 1 ? $values[0] : json_encode( $values );

			// Append each meta key-value pair to the content.
			$content .= sprintf( '<li><strong>%s:</strong> %s</li>', esc_html( $key ), esc_html( $meta_value ) );
		}

		return <<<htm
<small>
<b>Metadata</b>
<ul>
	$content
</ul>

<br>
<b>Content Block Attributes</b>
<ul>
	<il>all=1 - show hidden metadata</il>
</ul>
</small>

htm;

	}

}

?>
