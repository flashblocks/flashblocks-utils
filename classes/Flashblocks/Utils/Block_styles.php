<?php

namespace Flashblocks\Utils;

class Block_styles {

	/**
	 * @var string the path to parent of $glob e.g. DIR
	 */
	private string $assets_dir;

	private string $assets_url;

	private string $version;

	/**
	 * @var string
	 */
	private string $build_path = '/build/css/blocks/';

	/**
	 * @param $assets_dir - The root directory that contains the assets directory e.g. __DIR__/assets/css/core/group/
	 * @param $assets_url - not used yet but may in future update
	 *
	 * @todo wp_register_style below using URL
	 */
	public function __construct( string $assets_dir, string $assets_url = '', string $version = '' ) {
		$this->assets_dir = $assets_dir;
		$this->assets_url = $assets_url;
		$this->version    = $version;
		add_action( 'init', [ $this, 'init' ] );
		add_action( 'after_setup_theme', [ $this, 'after_setup_theme' ] );
	}


	/**
	 * register_block_style from directory structure
	 *
	 * src:
	 * /src-assets/blocks/core/button/arrow--Arrow.css
	 *
	 * assets:
	 * $assets_dir = /build/css/blocks-styles/
	 * core/button/arrow-Arrow.css
	 *
	 * @return void
	 */
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

//			wp_register_style( $style_handle, $this->>assets_url . $path, null, $this->version );
//			wp_register_style( $style_handle, false, null, $this->version );

			$style_properties = [
				'name'         => $slug, // slug
				'label'        => $label, // a human-readable label for the style.
				'inline_style' => $inline_style,
				'style_handle' => $style_handle,
			];

			register_block_style( $block, $style_properties );
		}
	}


	/**
	 *  wp_enqueue_block_style from directory structure
	 *
	 *   src:
	 *   /src-assets/blocks/core/button.css
	 *
	 *   assets:
	 *   $assets_dir = /build/css/blocks-styles/
	 *   core/button.css
	 *
	 * @return void
	 */
	function after_setup_theme() {
		$paths = glob( $this->assets_dir . $this->build_path . '*/*.css' );
		foreach ( $paths as $path ) {
			$textdomain = basename( dirname( $path ) ); // core
			$block      = basename( $path, '.css' ); // group
//			$block      = str_replace( "core-", "", $block ); // core-group to group - as in ollie css
			$block = $textdomain . '/' . $block; // core/group
//			ddd( [ filesize( $path ), $block ] );
			$obj = [
				'handle' => 'flashblocks-site-block-' . $block,
				'path'   => $path,
				'src'    => $this->assets_url ? $this->assets_url . $this->build_path . $block . '.css' : '',
				'ver'    => $this->version
			];
			wp_enqueue_block_style( $block, $obj );
		}
	}
}
