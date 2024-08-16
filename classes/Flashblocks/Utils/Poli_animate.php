<?php

namespace Flashblocks\Utils;

class Poli_animate {

	/* Only load once */
	public static int $instances = 0;

	/* The html class e.g. "$handle-css-inline", "is-style-$handle" */
	public string $handle = 'poli-animate';

	public array $blocks = [
		'core/cover',
	];

	public string $js = '';

	public string $props = '';

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





$poli_animate = new \Flashblocks\Utils\Poli_animate();

$poli_animate->js = <<<js
document.addEventListener("DOMContentLoaded", function () {
	const pa = new PoliAnimate({
			dots: {
				r: 200, // Default color used to fill the dots.
				g: 200, // Default color used to fill the dots.
				b: 200, // Default color used to fill the dots.
				distance:   100, // Max distance between dots for drawing a line between them.
				d_radius:   200, // Distance from the mouse cursor within which dots will react (increase size or change opacity).
				nb:         100, // Default number of dots to be drawn on the canvas.
				radius:     4, // Default radius of dots.
				maxRadius:  8, // Maximum radius of dots when close to the mouse cursor.
				minRadius:  0, // Minimum radius of dots when far from the mouse cursor.
				maxOpacity: 1, // Maximum opacity of dots when close to the mouse cursor.
				minOpacity: 1 // Minimum opacity of dots when far from the mouse cursor. Note: With both max and min opacity set to 1, dots will not fade based on distance.
			},
			// Gradient color stops for drawing lines between dots.
			colorStops:        [
				{ stop:  0, color: "#bbb" },
			]
	} )
});
js;




new \Flashblocks\Utils\Poli_animate( <<<txt
{
	"containerSelector":".is-style-poli-animate",
	"dots":{ "radius":2 },
	colorStops: [
			{stop: 0, color: "#0f0"},
			{stop: 0.5, color: "#fff"},
			{stop: 1.0, color: "red"}
		],
}
txt
	);

	*/
	/**
	 * @param string $props
	 */
	public function __construct( string $props = '' ) {
		$this->props = $props;
		apply_filters( "flashblocks-$this->handle", $this );

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
		if ( ! str_contains( ( ( $block['attrs']['className'] ?? '' ) ), 'is-style-' . $this->handle ) ) return $html;

		// only allow one enqueue
		if ( ! self::$instances++ ) $this->enqueue();

		return $html;
	}

	public function enqueue() {
		wp_enqueue_script( $this->handle, URL . "build/$this->handle/index.js", [], VERSION );

		if ( ! $this->js ) $this->js = <<<js
document.addEventListener("DOMContentLoaded", function () { new PoliAnimate($this->props) });
js;

		Utils::enqueue_js_inline( "$this->handle-js", $this->js, [ $this->handle ] );

		Utils::enqueue_css_inline( "$this->handle-css", <<<css
.is-style-$this->handle canvas { display:block; position: absolute; }
css
		);
	}
}


