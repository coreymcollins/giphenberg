<?php
/**
 * Plugin Name: Giphenberg
 * Plugin URI: https://github.com/coreymcollins/giphenberg/
 * Description: Search for and display GIFs from Giphy in a Gutenberg block
 * Author: Corey M Collins
 * Author URI: https://coreymcollins.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package Giphenberg
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
