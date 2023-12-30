<?php
/*
 * Navigation Container is a container block allowing you to
 * insert anything into the navigation block e.g. the taxonomy-list block
 * */

add_action( 'init', function () {

	$handle     = basename( __DIR__ );
	$build_path = TAXONOMY_LIST_PLUGIN_DIR . '/build/' . $handle;

	register_block_type( $build_path, [
//		'render_callback' => function ( $atts, $content = '', $block = '' ) {
//			$atts = (object) shortcode_atts( [
//				'test' => '',
//			], $atts );
//
//
//			$wrapper_attributes = get_block_wrapper_attributes( [
//				'class' => 'featured-ad-card'
//			] );
//
//			return <<<htm
//<aside $wrapper_attributes>
//    Works! $atts->test
//</aside>
//htm;
//		}
	] );

	// Pass to JS
//	wp_register_script( 'ss-blocks-inline-js', '', );
//	wp_enqueue_script( 'ss-blocks-inline-js' );
//	wp_add_inline_script( 'ss-blocks-inline-js',
//		'const SS_BLOCKS_PLUGIN=' . json_encode( [ 'url' => SS_BLOCKS_PLUGIN_URL ] )
//	);

} );

