<?php
if ( ! function_exists( 'd' ) ) {

	/**
	 * Example
	 * global $_wp_additional_image_sizes;
	 * dd( $_wp_additional_image_sizes );
	 *
	 * @param mixed $obj
	 * @param bool $print
	 *
	 * @return  mixed
	 */
	function d() {
		foreach ( func_get_args() as $obj ) {
			$obj = preg_replace( '(\d+\s=>)', "", var_export( $obj, true ) );
			echo '<pre style="display:inline-block;background:#000;color:#fff;padding:20px;">' .
			     $obj .
			     '</pre>';
		}
	}

	if ( ! function_exists( 'dd' ) ) {
		/**
		 * @param mixed $obj
		 */
		function dd( $obj ) {
			d( $obj, true );
			die();
		}
	}
}


if ( ! function_exists( 'ddd' ) ) {
	function ddd( $obj ) {
		SDM_Debug::instance()->log( $obj );
	}
}


if ( ! class_exists( 'SDM_Debug' ) ) {

	class SDM_Debug {

		public array $debug_obj;

		public string $file = WP_CONTENT_DIR . '/debug.json';

		public bool $write = true;

		private static $instance;

		public static function instance() {
			if ( ! self::$instance ) self::$instance = new self();

			return self::$instance;
		}

		/**
		 * Debug constructor.
		 *
		 */
		public function __construct() {
			$this->init();
		}

		/**
		 * @param $obj - add item to the debug log
		 */
		public function log( $obj ) {
			$text              = json_encode( $obj );
			$this->debug_obj[] = $text;

			if ( $this->file ) file_put_contents( $this->file, $text . PHP_EOL, FILE_APPEND );
		}

		private function init() {
			$this->debug_obj = [];

			/**
			 * front end
			 */
			add_action( 'wp_footer', [ $this, 'wp_footer' ], 99999 );
			add_action( 'admin_footer', [ $this, 'wp_footer' ], 99999 );
			add_action( 'admin_footer', [ $this, 'admin_footer' ], 99999 );
		}

		public function wp_footer() {

			if ( $this->debug_obj ) {

				$this->write_log();

				foreach ( $this->debug_obj as $obj ) {
//					echo '<script>console.log(' . json_encode( $obj ) . ')</script>';
					echo '<script>console.log(' . $obj . ')</script>';
				}
			}
		}

		public function admin_footer() {
			$this->write_log();
		}


		public function write_log() {
			if ( $this->debug_obj ) {
				$txt = '';
//			    $txt = strtotime( "now" ) . PHP_EOL . '-----------------' . PHP_EOL;
				foreach ( $this->debug_obj as $obj ) {
//				    $txt .= json_encode( $obj ) . PHP_EOL;
					$txt .= $obj . PHP_EOL;
				}
				$this->write_file( $txt );
			}
		}

		public function write_file( $txt ) {
			if ( ! $this->file ) return;
			$file = fopen( $this->file, "w" ) or die( "Unable to open file!" );
			fwrite( $file, $txt );
			fclose( $file );
		}
	}
}