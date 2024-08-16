<?php
if ( defined( 'WP_DEBUG' ) && WP_DEBUG === true ) {
	require __DIR__ . '/debug.php';
//	require __DIR__ . '/dev-touch-php.php';
}
else {

	if ( ! function_exists( 'd' ) ) {
		function d() {}
	}
	if ( ! function_exists( 'dd' ) ) {
		function dd( $obj ) {}
	}
	if ( ! function_exists( 'ddd' ) ) {
		function ddd( $obj ) {}
	}
}
