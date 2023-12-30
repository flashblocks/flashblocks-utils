<?php


add_action( 'init', function () {
	$handle     = basename( __DIR__ );
	$build_path = TAXONOMY_LIST_PLUGIN_DIR . '/build/' . $handle;

	register_block_type( $build_path, [

		'render_callback' => function ( $attributes, $content, $block ) {
//			static $block_id = 0;
//			$block_id++;

			$args = [
				'echo'         => false,
				'hierarchical' => ! empty( $attributes['showHierarchy'] ),
				'orderby'      => $attributes['orderby'],
				'show_count'   => ! empty( $attributes['showPostCounts'] ),
				'title_li'     => '',
				'hide_empty'   => empty( $attributes['showEmpty'] ),
				'taxonomy'     => $attributes['taxonomies'][0]['slug'] ?? 'category',
			];

			if ( ! empty( $attributes['showOnlyTopLevel'] ) &&
			     $attributes['showOnlyTopLevel'] ) {
				$args['parent'] = 0;
			}

			/* remove drop down option*/

			$items_markup = wp_list_categories( $args );
			$type         = 'list';

			$wrapper_attributes = get_block_wrapper_attributes( [
				'class' => "wp-block-categories-{$type}"
			] );

			if ( $attributes['containerElement'] ) {
				$items_markup = "<ul $wrapper_attributes>$items_markup</ul>";
			}

			return $items_markup;//apply_filters( 'example_filter', $output, $args );
		}
	] );
} );


