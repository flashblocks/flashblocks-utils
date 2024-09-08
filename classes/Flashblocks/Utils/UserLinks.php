<?php

namespace Flashblocks\Utils;

class UserLinks {
	// Static method to get the instance of the class
	private static ?UserLinks $instance = null;

	public static function getInstance(): UserLinks {
		if ( self::$instance === null ) {
			self::$instance = new self();
		}

		return self::$instance;
	}


	private function __construct() {
		add_action( 'init', [ $this, 'register_block_type' ] );

		// default layout if content is empty
		add_filter( 'flashblocks_user_links', [ $this, 'flashblocks_user_links' ], 100, 4 );
	}

	function register_block_type() {
		register_block_type( DIR . '/build/user-links' );
	}

	function flashblocks_user_links( $content, $attributes, $block, $users ) {
		// If $content is already set, return it
		if ( $content ) return $content;


		// If no users are provided, return a message
		if ( empty( $users ) ) {
			return 'No users found.';
		}

		// Start building content
		$content = '';
		foreach ( $users as $user ) {
			$content .= <<<HTM
<li><a href="{$user->guid}">{$user->post_title}</a></li>
HTM;
		}

		// Wrap content in <ul> if it's not empty
		if ( $content ) {
			$content = "<ul>$content</ul>";
		}

		return $content;
	}
}
