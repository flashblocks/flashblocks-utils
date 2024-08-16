<?php

namespace Flashblocks\Utils;

use WP_Error;
use WP_Term;

/**
 * @var array $attributes Block attributes.
 * @var string $content Block default content.
 * @var \WP_Block $block Block instance.
 */

// taxonomy
if ( ! $attributes['taxonomy'] ) return 'No taxonomy selected.';


// get terms

/**
 * @var WP_Term[]|false|WP_Error $terms
 */
$terms = $attributes['terms'];

if ( is_wp_error( $terms ) ) return 'Error';

// get the current posts terms
if ( $attributes['assigned'] ) {
	$post_id        = get_the_ID();
	$assigned_terms = get_the_terms( $post_id, $attributes['taxonomy'] );

	if ( is_wp_error( $assigned_terms ) || empty( $assigned_terms ) ) {
		return 'No terms found or error retrieving terms.';
	}

	$terms = empty( $terms )
		// display all post terms
		? $assigned_terms
		// display only the posts terms that are assigned AND selected $attributes['terms']
		: array_filter( $assigned_terms, function ( $term ) use ( $terms ) {
			return in_array( $term->term_id, $terms );
		} );
}

// get specified or all terms from taxonomy
else {

	$args = [
		'taxonomy'   => $attributes['taxonomy'],
		'hide_empty' => ! $attributes['showEmpty'] ?? false,
	];

	if ( $attributes['orderby'] ) $args['orderby'] = $attributes['orderby']; // name, ASC, DESC

	// get specified term ids
	if ( count( $terms ?? [] ) ) $args['include'] = $terms;

	$terms = get_terms( $args );
}

// Ensure $terms is an array of WP_Term objects
//$terms = is_array($terms) ? array_filter($terms, fn($term) => $term instanceof WP_Term) : [];

// only show good terms
//if ( ! is_wp_error( $terms ) )
//$attributes['terms'] = wp_list_pluck( $terms, 'term_id' );

// get content

$content = apply_filters( 'flashblocks_taxonomies_links', $content, $attributes, $block, $terms );


// styles


// css gap
$styles = [];
$gap    = $attributes['style']['spacing']['blockGap'] ?? '';
if ( $gap ) {
	$styles[] = '--gap:' . Utils::get_var_wp_preset( $gap );
}
$styles[] = 'gap:var(--gap)';


// classes


$classes = [ 'taxonomy-' . $attributes['taxonomy'] ];
if ( isset( $attributes['textAlign'] ) ) {
	$classes[] = 'has-text-align-' . $attributes['textAlign'];
}
if ( isset( $attributes['style']['elements']['link']['color']['text'] ) ) {
	$classes[] = 'has-link-color';
}
if ( $attributes['assigned'] ) {
	$classes[] = 'has-assigned';
}

if ( $attributes['container'] ) {
	$wrapper_attributes = get_block_wrapper_attributes( [
		'class' => implode( ' ', $classes ),
		'style' => implode( ';', $styles ),
	] );

	$content = "<div $wrapper_attributes>$content</div>";
}

echo $content;

