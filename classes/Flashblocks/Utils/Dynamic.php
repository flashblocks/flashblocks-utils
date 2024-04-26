<?php

namespace Flashblocks\Utils;

class Dynamic {
	public function __construct() {
		add_action( 'init', [ $this, 'register' ] );
	}

	function register() {
		register_block_type( DIR . '/build/dynamic' );
	}
}
