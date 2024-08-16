<?php

namespace Flashblocks\Utils;

/*

add_filter( 'flashblocks_dynamic_project_meta', [ $this, 'flashblocks_dynamic_project_meta' ], 3, 10 );
function flashblocks_dynamic_project_meta( string $content, array $attributes, \WP_Block $block ): string {
});

 */
class Dynamic {

	private static $instance = null;

	public static function getInstance() {
		if ( self::$instance === null ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	private function __construct() {
		add_action( 'init', [ $this, 'register' ] );
	}

	function register() {
		register_block_type( DIR . '/build/dynamic' );
	}
}
