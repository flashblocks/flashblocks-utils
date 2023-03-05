<?php
/*
 * Enqueue V1
 */

namespace Flashblocks\Utils;


if ( ! defined( 'WPINC' ) ) die;


//wp_die( 'test', 'test2' );

class Enqueue {

	/**
	 * @var array
	 */
	public $deps;
	/**
	 * Full path to $file
	 * @var string
	 */
	public $dir;
	/** @var string */
	public $handle;
	/**
	 * @var bool js - if in_footer
	 * @var string css - media type
	 */
	public $footer_or_media;
	/**
	 * @var bool insert the $file inline
	 * @var string will insert that string inline
	 * @var array if callback callable array e.g. [$this, 'test'] inline will be replaced by callback response.
	 * @var \Closure if callback function inline will be replaced by callback response.
	 *
	 */
	public $inline;
	/**
	 * 'js' 'css' in the case of hard coded $inline data, so we know what kind of data.
	 * @var string
	 */
	public $src;
	/** @var string */
	public $url;
	/** @var string */
	public $ver;

	const HOOK_FRONT  = 'wp_enqueue_scripts';
	const HOOK_EDITOR = 'enqueue_block_editor_assets';
	const HOOK_ADMIN  = 'admin_enqueue_scripts';
	const HOOK_LOGIN  = 'login_enqueue_scripts';


	/**
	 * $handle, $src = '', $deps = array(), $ver = false, $in_footer = false
	 * $handle, $src = '', $deps = array(), $ver = false, $media = 'all'
	 *
	 * @param string           $handle             Name of the script. Should be unique.
	 * @param string           $src                Full URL of the script, or path of the script relative to the WordPress root directory.
	 *                                             Default empty.
	 * @param string[]         $deps               Optional. An array of registered script handles this script depends on. Default empty array.
	 * @param string|bool|null $ver                Optional. String specifying script version number, if it has one, which is added to the URL
	 *                                             as a query string for cache busting purposes. If version is set to false, a version
	 *                                             number is automatically added equal to current installed WordPress version.
	 *                                             If set to null, no version is added.
	 * @param bool             $footer_or_media    Optional. Whether to enqueue the script before `</body>` instead of in the `<head>`.
	 */
	public function __construct( $handle = null, $src = null, $deps = null, $ver = null, $footer_or_media = null ) {
		$this->handle          = $handle;
		$this->src             = $src;
		$this->deps            = $deps;
		$this->ver             = $ver;
		$this->footer_or_media = $footer_or_media;

		return $this;
	}

	/**
	 *
	 * @param $hook_name string
	 * @param $priority  int
	 *
	 * @return $this
	 */
	public function add_action( $hook_name = self::HOOK_FRONT, $priority = null ) {
		add_action( $hook_name, [ $this, 'start' ], $priority );

		return $this;
	}


	public function start() {
		if ( is_callable( $this->inline ) ) {
			$this->inline = call_user_func_array( $this->inline, [ $this ] );
		}

		$ext = ! $this->src || $this->src === 'js'
			? $this->src
			: pathinfo( $this->src, PATHINFO_EXTENSION );

		if ( $ext === 'js' ) {

			//JS
			if ( $this->inline ) {
				$this->enqueue_script_inline();
			}
			else {
				$this->enqueue_script();
			}
		}
		else {

			//CSS
			if ( $this->inline ) {
				$this->enqueue_style_inline();
			}
			else {
				$this->enqueue_style();
			}
		}
	}


	/* Scripts */


	public function enqueue_script() {
		wp_enqueue_script( $this->get_handle(),
			$this->get_url(),
			[],
			$this->ver,
			$this->footer_or_media );

	}

	public function enqueue_script_inline() {
		$handle = $this->get_handle();
		$data   = $this->get_data();
		if ( $data ) {
			wp_register_script( $handle, false, $this->deps, $this->ver, $this->footer_or_media );
			wp_enqueue_script( $handle, null, $this->deps );
			wp_add_inline_script( $handle, $data );
		}
	}


	/* Styles */

	public function enqueue_style() {
		wp_enqueue_style( $this->get_handle(),
			$this->get_url(),
			$this->deps,
			$this->ver,
			$this->footer_or_media );
	}

	public function enqueue_style_inline() {
		$handle = $this->get_handle();
		wp_register_style( $handle, null, $this->deps, $this->ver, $this->footer_or_media );
		wp_enqueue_style( $handle, null, $this->deps );
		wp_add_inline_style( $handle, $this->get_data() );
	}


	/* set */

	public function set_inline( $inline ) {
		$this->inline = $inline;

		return $this;
	}

	public function set_url( $url ) {
		$this->url = $url;

		return $this;
	}

	public function set_dir( $dir ) {
		$this->dir = $dir;

		return $this;
	}

	public function set_ver( $ver ) {
		$this->ver = $ver;

		return $this;
	}


	/* Util */


	public function get_data() {
		if ( $this->inline === true ) {
			return file_get_contents( $this->get_path() );
//			$path = $this->get_path();
//			return filesize( $path ) ? file_get_contents( $path ) : false;
		}

		return $this->inline;
	}

	public function get_handle() {
		if ( $this->handle ) return $this->handle;

		$handle = __NAMESPACE__ . '-' . $this->src;
		$handle = trim( strtolower( pathinfo( $handle, PATHINFO_FILENAME ) ) );;
		$handle = preg_replace( '/[^a-z0-9-]+/', '-', $handle );

		return $handle;
	}

	public function get_path() {
		return wp_normalize_path( $this->dir . DIRECTORY_SEPARATOR . $this->src );
	}

	public function get_url() {
		if ( $this->url ) return wp_normalize_path( $this->url . DIRECTORY_SEPARATOR . $this->src );
		if ( $this->dir ) return $this->get_url_from_path( $this->dir . DIRECTORY_SEPARATOR . $this->src );

		return $this->src;
	}

	public function get_url_from_path( $path ) {
		// Get correct URL and path to wp-content
		$content_url = untrailingslashit( dirname( dirname( get_stylesheet_directory_uri() ) ) );
		$content_dir = untrailingslashit( WP_CONTENT_DIR );

		// Fix path on Windows
		$path        = wp_normalize_path( $path );
		$content_dir = wp_normalize_path( $content_dir );

		return str_replace( $content_dir, $content_url, $path );
	}

}
