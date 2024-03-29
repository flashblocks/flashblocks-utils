<?php

namespace Flashblocks\Utils;

class Utils {

	public function __construct() {}

	/**
	 * @param string $css path or data
	 */
	public static function enqueue_css_inline( string $handle, string $css, $deps = [], $ver = VERSION, $media = 'all' ) {
		wp_register_style( $handle, false, $deps, $ver, $media );
		wp_enqueue_style( $handle );
		wp_add_inline_style( $handle, ! preg_match( '/[a-z]$/', $css ) ? $css : file_get_contents( $css ) );
	}

	/**
	 * @param string $js path or data
	 */
	public static function enqueue_js_inline( string $handle, string $js, $deps = [], $ver = VERSION, $in_footer = true ) {
		wp_register_script( $handle, false, $deps, $ver, $in_footer );
		wp_enqueue_script( $handle );
		wp_add_inline_script( $handle, ! preg_match( '/[a-z]$/', $js ) ? $js : file_get_contents( $js ) );
	}

	/**
	 * convert var:preset|spacing|... to var(--wp--preset--spacing--...)
	 * How can this not be automated by WP????
	 */
	public static function get_var_wp_preset( $attribute ) {
		if ( ! $attribute ) return $attribute;

		$parts = explode( "|", $attribute );
		if ( count( $parts ) < 3 ) return $attribute;

		return "var(--wp--preset--$parts[1]--$parts[2])";
		//	$parts2 = explode( ':', $parts[0] );
		//	return "var(--wp--$parts2[1]--$parts[1]--$parts[2])";

		//$spacing_value = $attributes['style']['spacing']['blockGap'] ?? '';
		//if ( is_string( $spacing_value ) && str_contains( $spacing_value, 'var:preset|spacing|' ) ) {
		//	$spacing_value = str_replace( 'var:preset|spacing|', '', $spacing_value );
		//	$spacing_value = sprintf( 'var(--wp--preset--spacing--%s)', $spacing_value );
		//}

	}


}
