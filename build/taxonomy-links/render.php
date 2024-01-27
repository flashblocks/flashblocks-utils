<?php

/**
 * @var array $attributes Block attributes.
 * @var string $content Block default content.
 * @var \WP_Block $block Block instance.
 */

if ( ! $attributes['terms'] ) return 'No terms selected.';

$content = apply_filters( 'flashblocks_taxonomies_links', $content, $attributes, $block );

$wrapper_attributes = get_block_wrapper_attributes(); // [ 'class' => 'swiper', ]);

echo <<<htm
<div $wrapper_attributes>
    $content
</div>
htm;
