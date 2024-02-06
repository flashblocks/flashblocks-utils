<?php

/**
 * @var array $attributes Block attributes.
 * @var string $content Block default content.
 * @var \WP_Block $block Block instance.
 */

use function Flashblocks\Utils\get_var_wp_preset;

//ddd( $attributes );
//ddd( $content );


// filter content


$content = apply_filters( 'flashblocks_content', $content, $attributes, $block );

if (!$content) return '';
// styles


// css gap
$styles = [];
$gap    = $attributes['style']['spacing']['blockGap'] ?? '';
if ( $gap ) {
	$styles[] = '--gap:' . get_var_wp_preset( $gap );
	$styles[] = 'gap:var(--gap)';
}


// classes


$classes = [];
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

