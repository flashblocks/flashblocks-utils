<?php

namespace Flashblocks\Utils;

class TaxonomyList {
	public function __construct() {
		add_action( 'init', [ $this, 'register_block_type' ] );
	}

	function register_block_type() {
		register_block_type( DIR . '/build/taxonomy-list' );
	}
}
