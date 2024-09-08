<?php

namespace Flashblocks\Utils;

/**
 * @var array $attributes Block attributes.
 * @var string $content Block default content.
 * @var \WP_Block $block Block instance.
 */

// Check if users are selected
if ( empty( $attributes['selectedUsers'] ) )
	return 'No users selected.';

// Get selected users
$users = get_users( [ 
	'include' => $attributes['selectedUsers'],
	'orderby' => 'include',
] );

// Apply filters to the content
$content = apply_filters( 'flashblocks_user_links', $content, $attributes, $block, $users );

// Styles
$styles = [];
$gap = $attributes['style']['spacing']['blockGap'] ?? '';
if ( $gap ) {
	$styles[] = '--gap:' . Utils::get_var_wp_preset( $gap );
}
$styles[] = 'gap:var(--gap)';

// Classes
$classes = [ 'user-links' ];
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
