<?php
/**
 * Plugin Name:       Flashblocks Utils
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.6
 * Requires PHP:      7.0
 * Version:           1.0.5
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sidebar-content
 *
 * @package           flashblocks
 */

namespace Flashblocks\Utils;


if ( ! defined( 'WPINC' ) ) die;


//define( __NAMESPACE__ . '\VERSION', '1.0.0' );
//define( __NAMESPACE__ . '\DIR', __DIR__ );
//define( __NAMESPACE__ . '\FILE', __FILE__ );
define( __NAMESPACE__ . '\URL', plugin_dir_url( __FILE__ ) );

require __DIR__ . '/vendor/autoload.php';

//$enq = new EnqueueAll( 'assets/testx.js', Enqueue::HOOK_FRONT );

//$enq      = new Enqueue( '', 'assets/testx.css' );
//$enq->dir = __DIR__;
//$enq->url = plugin_dir_url( __FILE__ );
//$enq->add_action();

//( new Enqueue( '', 'assets/testx.js' ) )->add_action()->set_dir( __DIR__ );

//add_action( 'wp_enqueue_scripts', function () {
//	( new Enqueue( '', URL . '/assets/testx.js' ) )->start();
//} );

//( new EnqueueAll( [
//	new Enqueue( '', 'assets/testx.js' ),
//	new Enqueue( '', 'assets/testx2.js' ),
//	new Enqueue( '', 'assets/testx.css' )
//] ) )->set_dir( __DIR__ )->set_url( URL )->set_inline( true );
