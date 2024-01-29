<?php

/**
 * @var array $attributes Block attributes.
 * @var string $content Block default content.
 * @var \WP_Block $block Block instance.
 */

use function Flashblocks\Utils\get_var_wp_preset;

ddd( $attributes );
ddd( $attributes['assigned'] );

// taxonomy
if ( ! $attributes['taxonomy'] ) return 'No taxonomy selected.';

// Display a list of assigned terms from the taxonomy
// get the terms that are explicitly assigned to the post or custom post type here
if ( $attributes['assigned'] ) {
	$post_id        = get_the_ID();
	$assigned_terms = get_the_terms( $post_id, $attributes['taxonomy'] );

	ddd( $assigned_terms );

	if ( is_wp_error( $assigned_terms ) || empty( $assigned_terms ) ) {
//		ddd( $attributes );
		ddd( 'No terms found or error retrieving terms.' );

		return 'No terms found or error retrieving terms.';
	}

	$attributes['terms'] = empty( $attributes['terms'] )
		? $assigned_terms
		// if $attributes['terms'] then only display the $terms that are in $attributes['terms']
		: array_filter( $assigned_terms, function ( $term ) use ( $attributes ) {
			return in_array( $term->term_id, $attributes['terms'] );
		} );

}

// terms
else if ( ! count( $attributes['terms'] ?? [] ) ) {
	$terms = get_terms( [
		'taxonomy'   => $attributes['taxonomy'],
		'hide_empty' => true, // Set to false if you want to include terms without posts
	] );

	if ( ! is_wp_error( $terms ) ) {
		$attributes['terms'] = wp_list_pluck( $terms, 'term_id' );
	}
}
//if ( ! count( $attributes['terms'] ?? [] ) return 'No terms selected.';

// get content
$content = apply_filters( 'flashblocks_taxonomies_links', $content, $attributes, $block );

// css gap
$gap = $attributes['style']['spacing']['blockGap'] ?? '';
if ( $gap ) $gap = get_var_wp_preset( $gap );

$wrapper_attributes = get_block_wrapper_attributes( [
	'style' => $gap ? "--gap:$gap; gap:var(--gap);" : '',
] );

echo <<<htm
<div $wrapper_attributes>
    $content
</div>
htm;

