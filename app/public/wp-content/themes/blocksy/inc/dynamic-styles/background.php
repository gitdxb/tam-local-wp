<?php

// Site background
blocksy_output_background_css([
	'selector' => 'body',
	'css' => $css,
	'value' => get_theme_mod(
		'site_background',
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => '#f8f9fb'
				],
			],
		])
	)
]);

blocksy_output_background_css([
	'selector' => '.ct-related-posts-container',
	'css' => $css,
	'value' => get_theme_mod(
		'related_posts_background',
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => '#eff1f5'
				],
			],
		])
	)
]);

// Footer
blocksy_output_background_css([
	'selector' => '.footer-widgets-area',
	'css' => $css,
	'value' => get_theme_mod(
		'widgets_area_background',
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => '#f4f5f8'
				],
			],
		])
	)
]);

