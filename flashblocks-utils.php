<?php
/**
 * Plugin Name:       Flashblocks Utils
 * Description:       Utils and blocks that are instantiated with new Classname
 * Requires at least: 6.0
 * Requires PHP:      7.4.0
 * Version:           1.0.13
 * Author:            Sunny Morgan
 * Text Domain:       flashblocks
 *
 * @package           flashblocks
 */

namespace Flashblocks\Utils;

if ( ! defined( 'WPINC' ) ) die;

//define( __NAMESPACE__ . '\VERSION', '1.0.0' );
const DIR = __DIR__;
//define( __NAMESPACE__ . '\FILE', __FILE__ );
define( __NAMESPACE__ . '\URL', plugin_dir_url( __FILE__ ) );

require __DIR__ . '/vendor/autoload.php';



//add_action( 'init', function () {
//	register_block_type( __DIR__ . '/build/taxonomy-links' );
//} );

/**
 * Notice: Function WP_Block_Type_Registry::register was called incorrectly. Block type names must not contain uppercase characters. Please see Debugging in WordPress for more information. (This message was added in version 5.0.0.) in /Users/sun/www/teamdesoto/app/public/wp-includes/functions.php on line 6031

 */
