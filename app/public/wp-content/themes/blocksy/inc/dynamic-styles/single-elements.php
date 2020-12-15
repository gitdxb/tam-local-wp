<?php

$prefix = blocksy_manager()->screen->get_prefix();

// Share Box
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-share-box[data-location="top"]',
	'variableName' => 'margin',
	'value' => get_theme_mod(
		$prefix . '_top_share_box_spacing',
		[
			'mobile' => '30px',
			'tablet' => '50px',
			'desktop' => '70px',
		]
	),
	'unit' => ''
]);

blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-share-box[data-location="bottom"]',
	'variableName' => 'margin',
	'value' => get_theme_mod(
		'bottom_share_box_spacing',
		[
			'mobile' => '30px',
			'tablet' => '50px',
			'desktop' => '70px',
		]
	),
	'unit' => ''
]);

blocksy_output_colors([
	'value' => get_theme_mod(
		$prefix . '_share_items_icon_color',
		[]
	),
	'default' => [
		'default' => [ 'color' => 'var(--color)' ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-share-box[data-type="type-1"]',
			'variable' => 'linkInitialColor'
		],

		'hover' => [
			'selector' => '.ct-share-box[data-type="type-1"]',
			'variable' => 'linkHoverColor'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod($prefix . '_share_items_border', []),
	'default' => [
		'default' => [ 'color' => '#e0e5eb' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-share-box[data-type="type-1"]',
			'variable' => 'borderColor'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod(
		$prefix . '_share_items_icon',
		[]
	),
	'default' => [
		'default' => [ 'color' => '#ffffff' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-share-box[data-type="type-2"]',
			'variable' => 'color'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod($prefix . '_share_items_background', []),
	'default' => [
		'default' => [ 'color' => 'var(--paletteColor1)' ],
		'hover' => [ 'color' => 'var(--paletteColor2)' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-share-box[data-type="type-2"]',
			'variable' => 'backgroundColor'
		],

		'hover' => [
			'selector' => '.ct-share-box[data-type="type-2"]',
			'variable' => 'backgroundColorHover'
		]
	],
]);

// Author Box
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.author-box',
	'variableName' => 'spacing',
	'value' => get_theme_mod(
		$prefix . '_single_author_box_spacing',
		[
			'mobile' => '40px',
			'tablet' => '40px',
			'desktop' => '40px',
		]
	),
	'unit' => ''
]);

blocksy_output_colors([
	'value' => get_theme_mod($prefix . '_single_author_box_background', []),
	'default' => [
		'default' => [ 'color' => '#ffffff' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.author-box[data-type="type-1"]',
			'variable' => 'backgroundColor'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod($prefix . '_single_author_box_border', []),
	'default' => [
		'default' => [ 'color' => '#e8ebf0' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.author-box[data-type="type-2"]',
			'variable' => 'borderColor'
		],
	],
]);

blocksy_output_box_shadow([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.author-box[data-type="type-1"]',
	'value' => get_theme_mod(
		$prefix . '_single_author_box_shadow',
		blocksy_box_shadow_value([
			'enable' => true,
			'h_offset' => 0,
			'v_offset' => 50,
			'blur' => 90,
			'spread' => 0,
			'inset' => false,
			'color' => [
				'color' => 'rgba(210, 213, 218, 0.4)',
			],
		])
	),
	'responsive' => true
]);

// Posts Navigation
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.post-navigation',
	'variableName' => 'margin',
	'value' => get_theme_mod($prefix . '_post_nav_spacing', [
		'mobile' => '40px',
		'tablet' => '60px',
		'desktop' => '80px',
	]),
	'unit' => ''
]);

blocksy_output_colors([
	'value' => get_theme_mod($prefix . '_posts_nav_font_color', []),
	'default' => [
		'default' => [ 'color' => 'var(--color)' ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.post-navigation',
			'variable' => 'linkInitialColor'
		],

		'hover' => [
			'selector' => '.post-navigation',
			'variable' => 'linkHoverColor'
		],
	],
]);

// Related Posts
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => ".ct-related-posts-container",
	'variableName' => 'padding',
	'value' => get_theme_mod(
		$prefix . '_related_posts_container_spacing',
		[
			'mobile' => '30px',
			'tablet' => '50px',
			'desktop' => '70px',
		]
	),
	'unit' => ''
]);

blocksy_output_colors([
	'value' => get_theme_mod($prefix . '_related_posts_label_color'),
	'default' => [
		'default' => ['color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-related-posts .ct-block-title',
			'variable' => 'headingColor'
		],
	],
]);

if (function_exists('blocksy_output_responsive_switch')) {
	blocksy_output_responsive_switch([
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => '.ct-related-posts-container',
		'value' => get_theme_mod(
			$prefix . '_related_visibility',
			[
				'desktop' => true,
				'tablet' => false,
				'mobile' => false,
			]
		),
		'on' => 'block'
	]);
}

if (function_exists('blocksy_output_responsive_switch')) {
	blocksy_output_responsive_switch([
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => '.ct-related-posts',
		'value' => get_theme_mod(
			$prefix . '_related_visibility',
			[
				'desktop' => true,
				'tablet' => false,
				'mobile' => false,
			]
		),
		'on' => 'grid'
	]);
}

blocksy_output_colors([
	'value' => get_theme_mod($prefix . '_related_posts_link_color'),
	'default' => [
		'default' => [ 'color' => 'var(--color)' ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.related-entry-title',
			'variable' => 'linkInitialColor'
		],

		'hover' => [
			'selector' => '.related-entry-title',
			'variable' => 'linkHoverColor'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod($prefix . '_related_posts_meta_color'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-related-posts .entry-meta',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.ct-related-posts .entry-meta',
			'variable' => 'linkHoverColor'
		],
	],
]);

blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-related-posts .ct-image-container',
	'property' => 'borderRadius',
	'value' => get_theme_mod($prefix . '_related_thumb_radius',
		blocksy_spacing_value([
			'linked' => true,
			'top' => '5px',
			'left' => '5px',
			'right' => '5px',
			'bottom' => '5px',
		])
	)
]);

$relatedNarrowWidth = get_theme_mod($prefix . '_related_narrow_width', 750 );
$css->put(
	'.ct-related-posts-container',
	'--narrowContainer: ' . $relatedNarrowWidth . 'px'
);
