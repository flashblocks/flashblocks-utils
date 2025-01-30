<?php

namespace Flashblocks\Utils;

use WP_Query;
use WP_Post;

/**
 * @var array $attributes Block attributes.
 * @var string $content Block default content.
 * @var \WP_Block $block Block instance.
 */

// Check if post type is selected
if ( ! $attributes['postType'] ) {
	return 'No post type selected.';
}

// Check if posts are selected
//if ( empty( $attributes['selectedPosts'] ) ) return 'No posts selected.';

// Prepare query arguments
$args = [
	'post_type'      => $attributes['postType'],
	'post__in'       => $attributes['selectedPosts'],
	'orderby'        => $attributes['orderby'],
	'order'          => $attributes['order'],
//	'orderby'     => $attributes['orderby'] ?: 'post__in', // Preserve the order of selected posts
//	'order'       => $attributes['order'] ?: 'ASC',
	'posts_per_page' => - 1,
];

// Query posts
$query = new WP_Query( $args );

// Apply filters to the content
$content = apply_filters( 'flashblocks_posts_links', $content, $attributes, $block, $query->posts );

wp_reset_postdata();


// Styles
$styles = [];
$gap    = $attributes['style']['spacing']['blockGap'] ?? '';
if ( $gap ) {
	$styles[] = '--gap:' . Utils::get_var_wp_preset( $gap );
}
$styles[] = 'gap:var(--gap)';

// Classes
$classes = [ 'post-type-' . $attributes['postType'] ];
if ( isset( $attributes['textAlign'] ) ) {
	$classes[] = 'has-text-align-' . $attributes['textAlign'];
}
if ( isset( $attributes['style']['elements']['link']['color']['text'] ) ) {
	$classes[] = 'has-link-color';
}

// Wrap content if container attribute is set
if ( $attributes['container'] ) {

	$wrapper_attributes = get_block_wrapper_attributes( [
		'class' => implode( ' ', $classes ),
		'style' => implode( ';', $styles ),
	] );

	$content = "<div $wrapper_attributes>$content</div>";
}

echo $content;
