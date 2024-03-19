<?php

namespace Flashblocks\Utils;

class NavigationContainer {
	public function __construct() {

		add_action( 'init', function () {
			register_block_type( DIR . '/build/navigation-container' );

			// Pass to JS
//	wp_register_script( 'ss-blocks-inline-js', '', );
//	wp_enqueue_script( 'ss-blocks-inline-js' );
//	wp_add_inline_script( 'ss-blocks-inline-js',
//		'const SS_BLOCKS_PLUGIN=' . json_encode( [ 'url' => SS_BLOCKS_PLUGIN_URL ] )
//	);
		} );
	}
}
