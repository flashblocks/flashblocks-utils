<?php
/**
 * Plugin Name: Class Selector
 * Description: Extend blocks with a custom multi-class selector.
 * Version: 1.0.0
 * Author: Sunny Morgan
 * Text Domain: class-selector
 */

namespace Flashblocks\Utils;

/*
 * Example

add_filter( 'flashblocks_class_selector_classes', function ( $classes ) {
	// Classes for all blocks
	$classes['all'] = [ 'common-class', 'bg-gray' ];

	// Classes for blocks with no styles
	$classes['no-styles'] = [ 'no-style-class', 'another-no-style-class' ];

	// Classes for specific blocks
	$classes['core/paragraph'] = [ 'large-text', 'text-red' ];
	$classes['core/heading']   = [ 'heading-large', 'heading-blue' ];

	return $classes;
} );

 */

class ClassSelector {
	public string $handle = 'flashblocks-class-selector';

	public function __construct() {
		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_assets' ] );
	}

	function enqueue_block_editor_assets(): void {

		wp_enqueue_script( $this->handle,
			URL . '/build/class-selector/index.js',
			[
				'wp-plugins',
				'wp-edit-post',
				'wp-element',
				'wp-components',
				'wp-data',
				'wp-compose',
				'wp-hooks',
				'wp-block-editor',
				'wp-i18n'
			],
			VERSION,
			true
		);

		// Enqueue the CSS
		wp_enqueue_style(
			$this->handle . '-css',
			URL . '/build/class-selector/index.css',
			[], VERSION
		);

		// Localize the script with classes passed from PHP
		wp_localize_script( $this->handle, 'flashblocks_class_selector', [
			'classes' => apply_filters( 'flashblocks_class_selector_classes', [] )
		] );
	}
}

