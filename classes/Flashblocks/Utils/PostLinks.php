<?php

namespace Flashblocks\Utils;

class PostLinks {
	// Static method to get the instance of the class
	private static ?PostLinks $instance = null;

	public static function getInstance(): PostLinks {
		if ( self::$instance === null ) {
			self::$instance = new self();
		}

		return self::$instance;
	}


	private function __construct() {
		add_action( 'init', [ $this, 'register_block_type' ] );

		// default layout if content is empty
		add_filter( 'flashblocks_posts_links', [ $this, 'flashblocks_posts_links' ], 100, 4 );
	}

	function register_block_type() {
		register_block_type( DIR . '/build/post-links' );
	}

	function flashblocks_posts_links( $content, $attributes, $block, $posts ) {
		// If $content is already set, return it
		if ( $content ) return $content;

		// If no posts are provided, return a message
		if ( empty( $posts ) ) {
			return 'No posts found.';
		}

		// Start building content
		$content = '';
		foreach ( $posts as $post ) {
			$content .= <<<HTM
<li><a href="{$post->guid}">{$post->post_title}</a></li>
HTM;
		}

		// Wrap content in <ul> if it's not empty
		if ( $content ) {
			$content = "<ul>$content</ul>";
		}

		return $content;
	}
}

?>
