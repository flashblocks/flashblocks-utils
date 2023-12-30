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

