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
	 * @var bool insert the $file inline
	 * @var string will insert that string inline
	 * @var array if callback callable array e.g. [$this, 'test'] inline will be replaced by callback response.
	 * @var \Closure if callback function inline will be replaced by callback response.
	 *
	 */
	public $inline;

	/**
	 * @param array|string $files
	 * @param string       $hook_name
	 * @param int          $priority
	 */
	public function __construct( $files = null, $hook_name = Enqueue::HOOK_FRONT, $priority = null ) {
		if ( $files ) $this->files = $files;
		add_action( $hook_name, [ $this, 'start' ], $priority );

		return $this;
	}

	public function start() {

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

			$enq->start();
		}
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


	/* */


	// pass all values from $this to $enq
	private function passEnqProps( Enqueue $enq ) {
		foreach ( get_object_vars( $this ) as $key => $value ) {
			if ( $value ) $enq->$key = $value;
		}
	}
}
