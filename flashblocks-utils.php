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

//$enq = new EnqueueAll( 'assets/testx.js' );

$enq = new Enqueue( '', 'assets/testx.js' );
//$enq->dir = __DIR__;
$enq->url = plugin_dir_url( __FILE__ );
$enq->wp_enqueue_scripts();

//( new Enqueue( '', 'assets/testx.js' ) )->wp_enqueue_scripts()->dir = __DIR__;

//add_action( 'wp_enqueue_scripts', function () {
//	( new Enqueue( '', 'assets/testx.js' ) )->wp_enqueue();
//} );


//$enq = new EnqueueAll( [
//	new Enqueue( '', 'assets/testx.js' ),
//	new Enqueue( '', 'assets/testx2.js' ),
//	new Enqueue( '', 'assets/testx.css' )
//], __DIR__, plugin_dir_url( __FILE__ ) );


//$enq = new EnqueueAll( [
////	'assets/testx.js',
//	'assets/testx.js'  => [ 'inline' => true ],
//	'assets/testx2.js',
////	'assets/testx.css',
//	'assets/testx.css' => [ 'inline' => true ],
//] );

//$enq->items   = [
//	[ 'files' => 'js', 'inline' => 'console.log(1111);' ],
//	[ 'files' => 'assets/test2.js', 'inline' => true ],
//	[ 'files' => 'assets/test.css' ],
//	[ 'files' => 'assets/test.js' ],
////	[ 'files' => [ 'assets/test.js', 'assets/test.css' ] ]
//];

//$enq->version = 1;
//$enq->dir     = __DIR__;
//$enq->url     = plugin_dir_url( __FILE__ );

//$log = new Monolog\Logger( 'name' );
//$log->pushHandler( new Monolog\Handler\StreamHandler( 'app.log', Monolog\Logger::WARNING ) );
//$log->warning( 'Foo' );

