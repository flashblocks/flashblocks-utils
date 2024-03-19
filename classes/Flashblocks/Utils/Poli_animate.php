<?php

namespace Flashblocks\Utils;

class Poli_animate {

	/* The html class e.g. "$handle-css-inline", "is-style-$handle" */
	public string $handle = 'poli-animate';

	/* Only load once */
	public int $instances = 0;

	public array $blocks = [
		'core/cover',
	];

	public function __construct() {
		foreach ( $this->blocks as $block ) {
			register_block_style( $block, [
				'name'  => $this->handle,
				'label' => 'Poli Animate'
			] );
		}

		if ( is_admin() ) {
		}
		else {
			add_filter( 'render_block', [ $this, 'render_block' ], 10, 2 );
//			add_action( 'wp_enqueue_scripts', [ $this, 'wp_enqueue_scripts' ] );
		}

	}

	/**
	 * enqueue scripts once if classNames exist
	 *
	 * @param $html
	 * @param $block
	 *
	 * @return mixed
	 */
	public function render_block( $html, $block ) {

		// make sure is-style-parallax
		if ( ! str_contains( ( $block['attrs']['className'] ?? '' ), 'is-style-' . $this->handle ) ) return $html;

		// only allow one enqueue
		if ( $this->instances++ ) return $html;

		$this->enqueue();

		return $html;
	}

	public function enqueue() {
		wp_enqueue_script( $this->handle, URL . "build/$this->handle/index.js", [], VERSION );

		/*
const poliAnimate = {
	ctx: {
		fillStyle: "#fff"
	},
	dots: {
	   nb:       canvas.width * canvas.height / 10000,
	   distance: 100,
	   d_radius: 150,
	   array:    [],
   },
	colorStops: [
	    {stop: 0, color: "#0f0"},
	    {stop: 0.5, color: "#fff"},
	    {stop: 1.0, color: "red"}
	],
		colorStops: [
		    {stop: 0, color: "#0f0"},
		    {stop: 0.5, color: "#fff"},
		    {stop: 1.0, color: "red"}
		],
	speed: 10
}
		 */
		Utils::enqueue_js_inline( "$this->handle-js", <<<js
document.addEventListener("DOMContentLoaded", function () {
	new PoliAnimate({
		containerSelector: '.is-style-poli-animate',
		dots: {
			radius:1.5
		},
	});
});
js
			, [ $this->handle ] );

		Utils::enqueue_css_inline( "$this->handle-css", <<<css
.is-style-$this->handle canvas { display:block; position: absolute; }
css
		);
	}
}


