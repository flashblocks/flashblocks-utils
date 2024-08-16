<?php

namespace Flashblocks\Utils;

/**
 * @var array $attributes Block attributes.
 * @var string $content Block default content.
 * @var \WP_Block $block Block instance.
 */

// filter content
//$content = apply_filters( 'flashblocks_dynamic', $attributes['val'], $attributes, $block );

$attributes['atts'] = explode( "\n", $attributes['atts'] ?? '' );
$attributes['atts'] = array_map( 'trim', $attributes['atts'] );

$dynamic_value = 'flashblocks_dynamic_' . $attributes['val'];
$content       = apply_filters( $dynamic_value, '', $attributes, $block );

//ddd('flashblocks_dynamic_' . $attributes['val']);
//ddd($content);

$styles = [];
$gap    = $attributes['style']['spacing']['blockGap'] ?? '';
if ( $gap ) {
	$styles[] = '--gap:' . Utils::get_var_wp_preset( $gap );
	$styles[] = 'gap:var(--gap);';
}

$classes   = [];
$classes[] = $dynamic_value;
if ( ! $content ) {
	$classes[] = 'no-content';
}

//if ( isset( $attributes['textAlign'] ) ) {
//	$classes[] = 'has-text-align-' . $attributes['textAlign'];
//}
//if ( isset( $attributes['style']['elements']['link']['color']['text'] ) ) {
//	$classes[] = 'has-link-color';
//}

$wrapper_attributes = get_block_wrapper_attributes( [
	'class' => implode( ' ', $classes ),
	'style' => implode( ';', $styles ),
] );

echo <<<htm
<div $wrapper_attributes>
    $content
</div>
htm;

