<?php

if (! isset($prefix)) {
	$prefix = '';
} else {
	$prefix = $prefix . '_';
}

if (! isset($options_conditions)) {
	$options_conditions = [];
}

$options = [
	$prefix . 'background' => [
		'label' => __('Page Background', 'blocksy'),
		'type' => 'ct-background',
		'design' => 'inline',
		'sync' => 'live',
		'value' => blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => Blocksy_Css_Injector::get_skip_rule_keyword(),
				],
			],
		]),
		'desc' => sprintf(
			// translators: placeholder here means the actual URL.
			__( 'Please note, by default this option is inherited from Colors ➝ %sSite Background%s.', 'blocksy' ),
			sprintf(
				'<a data-trigger-section="color" href="%s">',
				admin_url('/customize.php?autofocus[section]=color')
			),
			'</a>'
		),
	],

	blocksy_rand_md5() => [
		'type' => 'ct-condition',
		'condition' => array_merge([
			$prefix . 'content_style' => 'boxed'
		], $options_conditions),
		'options' => [
			$prefix . 'content_background' => [
				'label' => __( 'Content Area Background', 'blocksy' ),
				'type' => 'ct-background',
				'design' => 'inline',
				'divider' => 'top',
				'sync' => 'live',
				'value' => blocksy_background_default_value([
					'backgroundColor' => [
						'default' => [
							'color' => '#ffffff',
						],
					],
				])
			],

			$prefix . 'content_boxed_spacing' => [
				'label' => __( 'Content Area Spacing', 'blocksy' ),
				'type' => 'ct-slider',
				'value' => [
					'desktop' => '40px',
					'tablet' => '35px',
					'mobile' => '20px',
				],
				'units' => blocksy_units_config([
					[
						'unit' => 'px',
						'min' => 0,
						'max' => 200,
					],
				]),
				'responsive' => true,
				'divider' => 'top',
				'sync' => 'live',
			],

			$prefix . 'content_boxed_radius' => [
				'label' => __( 'Border Radius', 'blocksy' ),
				'type' => 'ct-spacing',
				'divider' => 'top',
				'value' => blocksy_spacing_value([
					'linked' => true,
					'top' => '3px',
					'left' => '3px',
					'right' => '3px',
					'bottom' => '3px',
				]),
				'responsive' => true,
				'sync' => 'live',
			],

			$prefix . 'content_boxed_shadow' => [
				'label' => __( 'Content Area Shadow', 'blocksy' ),
				'type' => 'ct-box-shadow',
				'responsive' => true,
				'divider' => 'top',
				'sync' => 'live',
				'value' => blocksy_box_shadow_value([
					'enable' => true,
					'h_offset' => 0,
					'v_offset' => 12,
					'blur' => 18,
					'spread' => -6,
					'inset' => false,
					'color' => [
						'color' => 'rgba(34, 56, 101, 0.04)',
					],
				])
			],
		],
	],
];

