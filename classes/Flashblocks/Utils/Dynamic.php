<?php

namespace Flashblocks\Utils;

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
