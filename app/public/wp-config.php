<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Whk6BkA4kugYKVbbJhtS5u3LHORNLdcE+ELBLGatQo3ffzWzgBQLqcK+Z2Zk2vqwuywdCV99I4h/QH7cf9hX4w==');
define('SECURE_AUTH_KEY',  'nqG9DQsnFeMqhJbeE09TIhaDBbdqchIdO3qVUQbEz0XWALBCxzS3JnfNcDfHTgbct/7D5jizGiixShAoneWNvA==');
define('LOGGED_IN_KEY',    'TaClV7qORjMJG8iSFVdgRxHnMnpupFuogl0wtdpbGgwrYrKEY+l119dhx8dq7G4fGolFMYjJwBvqYTmlq7LBCw==');
define('NONCE_KEY',        'fTjj2n+RfV0Cdkx1+5k6JRC2BUPtjF7V12ok++Ezq7VsR9squCDE++qqenwcmxI6bxM4BDFk3Lly3nahQnUD6w==');
define('AUTH_SALT',        'fm+vQmL1sbBV8IYaAItqh9D5EJRXWyFg7CWVbrtdDsWVn6JqALqe19nXd0dQ9YCn/WooZ8fWQRxyrbWKSv5ZJQ==');
define('SECURE_AUTH_SALT', '/CA0oZdKOFVX1mgoyjjA4IYqZrJY/sozZPKGIaOcke8dhbdiSWoRMtEuzhfoSBLnGr74D9KsoENhooop/3mIPQ==');
define('LOGGED_IN_SALT',   '8YdTVIP0GkKbnmbt2/34oN72DTzj0cjwSC73kQiUyIE8GyEpMvxNlquc/2f5/+Qslb7XM/6rY/7gWtmY+P+Wjw==');
define('NONCE_SALT',       '2eyYs20IwaOhSg8gqzidv9NanXWIheW36a4lRf6WEQALExFWkY2xFaGzE6YHVF7uCj5lZ6nLlvEN3L1xe2MkcA==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';






define( 'WP_ALLOW_MULTISITE', true );
define( 'MULTISITE', true );
define( 'SUBDOMAIN_INSTALL', true );
$base = '/';
define( 'DOMAIN_CURRENT_SITE', 'tam.local' );
define( 'PATH_CURRENT_SITE', '/' );
define( 'SITE_ID_CURRENT_SITE', 1 );
define( 'BLOG_ID_CURRENT_SITE', 1 );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
