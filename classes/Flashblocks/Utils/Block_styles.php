<?php
/**
 * register_block_style from directory structure
 *
 * src:
 * /src-assets/core/button/arrow-Arrow.css
 *
 * assets:
 * $assets_dir = /build/css/blocks-styles/
 * core/button/arrow-Arrow.css
 */

namespace Flashblocks\Utils;

class Block_styles {

	/**
	 * @var string the path to parent of $glob e.g. DIR
	 */
	private string $assets_dir;

//	private string $assets_url;

	/**
	 * @var string
	 */
	private string $build_path = '/build/css/block-styles/';

	/**
	 * @param $assets_dir - The root directory that contains the assets directory e.g. __DIR__/assets/css/core/group/
	 * @param $assets_url - not used yet but may in future update
	 *
	 * @todo wp_register_style below using URL
	 */
	public function __construct( string $assets_dir, string $assets_url = '' ) {
		$this->assets_dir = $assets_dir;
//		$this->assets_url = $assets_url;
		add_action( 'init', [ $this, 'init' ] );
	}

	function init() {
		// get files e.g. core--button / arrow--Arrow.css
		$paths = glob( "$this->assets_dir/$this->build_path*/*/*.css" );
		foreach ( $paths as $path ) {
			$items     = explode( '/', $path );
			$file      = array_pop( $items );
			$file_name = str_replace( '.css', '', $file );
			$str       = explode( '--', $file_name );

			$slug         = $str[0];
			$label        = $str[1] ?? ucfirst( $slug );
			$block        = array_pop( $items );
			$namespace    = array_pop( $items );
			$block        = "$namespace/$block";
			$path         = "$this->build_path/$block/$file";
			$style_handle = "flashblocks-site-block-style-$block-$slug";
			$inline_style = trim( file_get_contents( $this->assets_dir . $path ) );

//			ddd( "------------------- $block $slug $label" );
//			ddd( "\t$label" );
//			ddd( "\t$slug \t .is-style-$slug" );

//			wp_register_style( $style_handle, $this->>assets_url . $path, null, VERSION );
//			wp_register_style( $style_handle, false, null, VERSION );

			$style_properties = [
				'name'         => $slug, // slug
				'label'        => $label, // a human-readable label for the style.
				'inline_style' => $inline_style,
				'style_handle' => $style_handle,
			];

			register_block_style( $block, $style_properties );
		}
	}
}
