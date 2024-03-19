<?php

namespace Flashblocks\Utils;

class Parallax {

//	const PARALLAX_CLASS = 'is-style-parallax';

	/* The html class that activates parallax */
	public string $handle = 'parallax';

	public int $instances = 0;

	public array $blocks = [
		'core/cover'      => 0,
		'core/query'      => 0,
		'core/image'      => 0,
		'core/media-text' => 0,
	];

	public function __construct() {
		foreach ( $this->blocks as $block => $count ) {
			register_block_style( $block, [
				'name'  => $this->handle,
				'label' => 'Parallax'
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

		// only allow one enqueue per block type
//		if ( ( $this->blocks[ $block['blockName'] ] ?? 1 ) > 0 ) return $html;
//		$this->blocks[ $block['blockName'] ]++;

		// only allow one enqueue
		if ( $this->instances++ ) return $html;
		ddd( $block['blockName'] );

		$this->enqueue_parallax();

		return $html;
	}

	/**
	 * https://simpleparallax.com/
	 * https://github.com/geosigno/simpleParallax.js/
	 * document.querySelectorAll('.is-style-$this->parallax_class .wp-block-cover__image-background').forEach(function(image) {
	 */
	public function enqueue_parallax() {
		wp_enqueue_script( $this->handle, URL . 'assets/simpleParallax.min.js', [], '5.5.1', true );

		/*
		 overflow:true,
		 scale:2,
		 overflow: false,
		 */
		Utils::enqueue_js_inline( "$this->handle-js", <<<js
document.querySelectorAll('.is-style-$this->handle img').forEach(function(image) {
	new simpleParallax(image, {
		orientation:'down',
		overflow: false,
		delay: .5,
		transition: 'cubic-bezier(0,0,0,1)',
		scale: 1.2
	});
});
js
			, [ $this->handle ] );

		Utils::enqueue_css_inline( "$this->handle-css", <<<css
.is-style-$this->handle {
	overflow: hidden;
	transition: all .5s ease-out;
}
@media only screen and (max-width: 600px) {
.is-style-$this->handle {
	transform: none !important;
}
}
css
		);

	}
}


