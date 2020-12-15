<?php

$prefix = blocksy_manager()->screen->get_prefix();

if (get_theme_mod($prefix . '_has_comments', 'yes') !== 'yes') {
	return;
}

$commentsNarrowWidth = get_theme_mod($prefix. '_comments_narrow_width', 750);

$css->put(
	'.ct-comments-container',
	'--narrowContainer: ' . $commentsNarrowWidth . 'px'
);

blocksy_output_colors([
	'value' => get_theme_mod(
		$prefix . '_comments_font_color',
		[
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		]
	),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-comments',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.ct-comments',
			'variable' => 'linkHoverColor'
		],
	],
]);

blocksy_output_background_css([
	'selector' => '.ct-comments-container',
	'css' => $css,
	'value' => get_theme_mod(
		$prefix . '_comments_background',
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => 'rgba(255, 255, 255, 0)'
				],
			],
		])
	)
]);

