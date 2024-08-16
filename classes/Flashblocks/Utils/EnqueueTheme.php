<?php

/**
 * work in progress
 */

namespace Flashblocks\Utils;

class EnqueueTheme {

	public string $handle;

	public string $assets_dir;

	public string $assets_url;

	public string $version;

	public function __construct( string $assets_dir, string $assets_url = '', string $version = '', $handle = 'theme' ) {
		$this->assets_dir = $assets_dir;
		$this->assets_url = $assets_url;
		$this->version    = $version;
		$this->handle     = $handle;

		/**
		 * Enqueue scripts and styles
		 */
		add_action( 'wp_enqueue_scripts', function () {

			// critical
			wp_register_style( $this->handle . '-critical', false );
			wp_enqueue_style( $this->handle . '-critical' );
			wp_add_inline_style( $this->handle . '-critical',
				file_get_contents( DIR . "/build/css/site-critical.css" )
//		. file_get_contents( DIR . "/build/css/site.css" ) // if small then inline site css
			);

			/* if large then enqueue site.css
			*/
			wp_enqueue_style( $this->handle, URL . 'build/css/site.css', null, VERSION );

			/* site js
			*/
			wp_enqueue_script( $this->handle, URL . 'build/js/site.js', null, VERSION, [
				'strategy'  => 'defer',
				'in_footer' => false,
			] );

		} );


		/**
		 * Load custom block styles only when the block is used.
		 */
		add_filter( 'should_load_separate_core_block_assets', '__return_true' );
		/**
		 * Enqueues a stylesheet for specific blocks as needed.
		 * moved to Flashblocks\Utils Block_styles
		 */
//add_action( 'after_setup_theme', function () {
//	$build = '/build/css/blocks/';
//	$paths = glob( DIR . $build . '*/*.css' );
//	foreach ( $paths as $path ) {
//		$textdomain = basename( dirname( $path ) ); // core
//		$block      = basename( $path, '.css' ); // group
//		$block      = $textdomain . '/' . $block; // core/group
////		ddd([filesize($path), $block]);
//		$obj        = [
//			'handle' => $this->handle.'-block-' . $block,
//			'path'   => $path,
//			'src'    => URL . $build . $block . '.css',
//			'ver'    => VERSION
//		];
//		wp_enqueue_block_style( $block, $obj );
//	}
//} );


		/**
		 * Enqueue styles for Gutenberg Editor
		 */
		add_action( 'enqueue_block_editor_assets', function () {

			/* editor css */
			wp_enqueue_style( $this->handle . '-editor', URL . 'build/css/editor.css', [], VERSION );

			/* editor js
			wp_enqueue_script( $this->handle.'-editor', URL . 'build/js/editor.js', [
				'wp-i18n',
				'wp-blocks',
				'wp-dom-ready',
				//'wp-element',
			], VERSION );
			*/

		}, 10 );


		/**
		 * Enqueue css for admin
		 */
		add_action( 'admin_enqueue_scripts', function () {

			// admin.css
			wp_enqueue_style( $this->handle . '-admin', URL . 'build/css/admin.css', null, VERSION );

		} );


		/*
		 * admin pages <head>

		add_action( 'admin_head', function () {
			// Clean up dom for users
			$current_user = wp_get_current_user();
			if ( $current_user->user_login != 'sunny' ) {
				?>
				<style>
					#wposes-settings-sub-nav {
						display: none !important;
					}
				</style>
				  <?php
			}
		} );

		 */
	}
}

