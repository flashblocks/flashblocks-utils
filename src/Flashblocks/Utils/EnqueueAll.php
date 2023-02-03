<?php
/*
 * Enqueue V1
 */

namespace Flashblocks\Utils;

if ( ! defined( 'WPINC' ) ) die;

class EnqueueAll {

	/** @var string */
	public $dir;
	/** @var string */
	public $handle;
	/** @var array */
	public $files;
	/** @var string */
	public $url;
	/** @var string */
	public $ver;

	/**
	 * @param array|string|null $files
	 * @param                   $priority
	 */
	public function __construct( $files = null, $priority = null ) {
		$this->files = $files;
		add_action( 'wp_enqueue_scripts', [ $this, 'wp_enqueue' ], $priority );
	}

	public function wp_enqueue() {

		// allow passing single file string instead of array
		if ( ! is_array( $this->files ) ) $this->files = [ $this->files ];

		foreach ( $this->files as $file => $obj ) {
//			ddd( '----- ' );

			// pass new Enqueue()
			if ( $obj instanceof Enqueue ) {
				$enq = $obj;
				$this->passEnqProps( $enq );
			}
			else {
				$enq = new Enqueue();
				$this->passEnqProps( $enq );

				// pass string
				if ( is_string( $obj ) ) {
					$enq->src = $obj;
				}

				// pass array of props
				else {
					$enq->src = $file;

					// pass all values from file object to $enq
					foreach ( $obj as $key => $value ) {
//						ddd( '  ' . $key . ' => ' . $value );
						$enq->{$key} = $value;
					}
				}
			}

			$enq->wp_enqueue();
		}
	}


	// pass all values from $this to $enq
	private function passEnqProps( Enqueue $enq ) {
		foreach ( get_object_vars( $this ) as $key => $value ) {
			if ( $value ) $enq->$key = $value;
		}
	}
}
