<?php

/**
 * @var array $attributes Block attributes.
 * @var string $content Block default content.
 * @var \WP_Block $block Block instance.
 */

use function Flashblocks\Utils\get_var_wp_preset;

// taxonomy
if ( ! $attributes['taxonomy'] ) return 'No taxonomy selected.';

// Display a list of assigned terms from the taxonomy
// get the terms that are explicitly assigned to the post or custom post type here
if ( $attributes['assigned'] ) {
	$post_id        = get_the_ID();
	$assigned_terms = get_the_terms( $post_id, $attributes['taxonomy'] );

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


// get content


$content = apply_filters( 'flashblocks_taxonomies_links', $content, $attributes, $block );


// styles


// css gap
$styles = [];
$gap    = $attributes['style']['spacing']['blockGap'] ?? '';
if ( $gap ) {
	$styles[] = '--gap:' . get_var_wp_preset( $gap );
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


$wrapper_attributes = get_block_wrapper_attributes( [
	'class' => implode( ' ', $classes ),
	'style' => implode( ';', $styles ),
] );

echo <<<htm
<ul $wrapper_attributes>
    $content
</ul>
htm;

