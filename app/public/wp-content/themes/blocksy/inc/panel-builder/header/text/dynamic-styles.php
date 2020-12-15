<?php

// Container max-width
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $root_selector,
	'variableName' => 'maxWidth',
	'value' => blocksy_akg('headerTextMaxWidth', $atts, [
		'mobile' => 100,
		'tablet' => 100,
		'desktop' => 100,
	]),
	'unit' => '%',
	'responsive' => true,
]);

// Font
blocksy_output_font_css([
	'font_value' => blocksy_akg( 'headerTextFont', $atts,
		blocksy_typography_default_values([
			'size' => '15px',
			'line-height' => '1.3',
		])
	),
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $root_selector
]);

// Font color
blocksy_output_colors([
	'value' => blocksy_akg('headerTextColor', $atts),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'link_initial' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'link_hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'default' => [
			'selector' => $root_selector,
			'variable' => 'color'
		],

		'link_initial' => [
			'selector' => $root_selector,
			'variable' => 'linkInitialColor'
		],

		'link_hover' => [
			'selector' => $root_selector,
			'variable' => 'linkHoverColor'
		],
	],
	'responsive' => true
]);

// Margin
blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $root_selector,
	'important' => true,
	'value' => blocksy_default_akg(
		'headerTextMargin', $atts,
		blocksy_spacing_value([
			'linked' => true,
		])
	)
]);
