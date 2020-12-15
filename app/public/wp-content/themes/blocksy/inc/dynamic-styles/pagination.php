<?php

$prefix = blocksy_manager()->screen->get_prefix([
	'allowed_prefixes' => [
		'blog',
		'woo_categories'
	],
	'default_prefix' => 'blog'
]);

// Pagination
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-pagination',
	'variableName' => 'spacing',
	'value' => get_theme_mod($prefix . '_paginationSpacing', [
		'mobile' => 50,
		'tablet' => 60,
		'desktop' => 80,
	])
]);

blocksy_output_border([
	'css' => $css,
	'selector' => '.ct-pagination[data-divider]',
	'variableName' => 'border',
	'value' => get_theme_mod($prefix . '_paginationDivider', [
		'width' => 1,
		'style' => 'none',
		'color' => [
			'color' => 'rgba(224, 229, 235, 0.5)',
		],
	])
]);

blocksy_output_colors([
	'value' => get_theme_mod($prefix . '_simplePaginationFontColor', []),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'active' => [ 'color' => '#ffffff' ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-pagination[data-type="simple"], .ct-pagination[data-type="next_prev"]',
			'variable' => 'color'
		],

		'active' => [
			'selector' => '.ct-pagination[data-type="simple"]',
			'variable' => 'colorActive'
		],

		'hover' => [
			'selector' => '.ct-pagination[data-type="simple"], .ct-pagination[data-type="next_prev"]',
			'variable' => 'linkHoverColor'
		],
	],
]);


blocksy_output_colors([
	'value' => get_theme_mod($prefix . '_paginationButtonText', []),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-pagination[data-type="load_more"]',
			'variable' => 'buttonTextInitialColor'
		],

		'hover' => [
			'selector' => '.ct-pagination[data-type="load_more"]',
			'variable' => 'buttonTextHoverColor'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod($prefix . '_paginationButton', []),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-pagination[data-type="load_more"]',
			'variable' => 'buttonInitialColor'
		],

		'hover' => [
			'selector' => '.ct-pagination[data-type="load_more"]',
			'variable' => 'buttonHoverColor'
		],
	],
]);

