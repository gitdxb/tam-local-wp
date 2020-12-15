import { handleResponsiveSwitch, getPrefixFor } from '../../helpers'
import { handleBackgroundOptionFor } from '../../variables/background'

let prefix = getPrefixFor()

export const getSingleElementsVariables = () => ({
	// Autor Box
	[`${prefix}_single_author_box_spacing`]: {
		selector: '.author-box',
		variable: 'spacing',
		responsive: true,
		unit: ''
	},

	[`${prefix}_single_author_box_background`]: {
		selector: '.author-box[data-type="type-1"]',
		variable: 'backgroundColor',
		type: 'color'
	},

	[`${prefix}_single_author_box_shadow`]: {
		selector: '.author-box[data-type="type-1"]',
		type: 'box-shadow',
		variable: 'boxShadow',
		responsive: true
	},

	[`${prefix}_single_author_box_border`]: {
		selector: '.author-box[data-type="type-2"]',
		variable: 'borderColor',
		type: 'color'
	},

	// Share Box
	[`${prefix}_top_share_box_spacing`]: {
		selector: '.ct-share-box[data-location="top"]',
		variable: 'margin',
		responsive: true,
		unit: ''
	},

	[`${prefix}_bottom_share_box_spacing`]: {
		selector: '.ct-share-box[data-location="bottom"]',
		variable: 'margin',
		responsive: true,
		unit: ''
	},

	[`${prefix}_share_items_icon_color`]: [
		{
			selector: '.ct-share-box[data-type="type-1"]',
			variable: 'linkInitialColor',
			type: 'color:default'
		},

		{
			selector: '.ct-share-box[data-type="type-1"]',
			variable: 'linkHoverColor',
			type: 'color:hover'
		}
	],

	[`${prefix}_share_items_border`]: {
		selector: '.ct-share-box[data-type="type-1"]',
		variable: 'borderColor',
		type: 'color'
	},

	[`${prefix}_share_items_icon`]: {
		selector: '.ct-share-box[data-type="type-2"]',
		variable: 'color',
		type: 'color'
	},

	[`${prefix}_share_items_background`]: [
		{
			selector: '.ct-share-box[data-type="type-2"]',
			variable: 'backgroundColor',
			type: 'color:default'
		},

		{
			selector: '.ct-share-box[data-type="type-2"]',
			variable: 'backgroundColorHover',
			type: 'color:hover'
		}
	],

	// Related Posts
	[`${prefix}_related_visibility`]: [
		handleResponsiveSwitch({
			selector: '.ct-related-posts',
			on: 'grid'
		}),

		handleResponsiveSwitch({
			selector: '.ct-related-posts-container',
			on: 'block'
		})
	],

	...handleBackgroundOptionFor({
		id: `${prefix}_related_posts_background`,
		selector: '.ct-related-posts-container'
	}),

	[`${prefix}_related_posts_container_spacing`]: {
		selector: '.ct-related-posts-container',
		variable: 'padding',
		responsive: true,
		unit: ''
	},

	[`${prefix}_related_posts_label_color`]: {
		selector: '.ct-related-posts .ct-block-title',
		variable: 'headingColor',
		type: 'color:default'
	},

	[`${prefix}_related_posts_link_color`]: [
		{
			selector: '.related-entry-title',
			variable: 'color',
			type: 'color:default'
		},

		{
			selector: '.related-entry-title',
			variable: 'colorHover',
			type: 'color:hover'
		}
	],

	[`${prefix}_related_posts_meta_color`]: [
		{
			selector: '.ct-related-posts .entry-meta',
			variable: 'color',
			type: 'color:default'
		},

		{
			selector: '.ct-related-posts .entry-meta',
			variable: 'colorHover',
			type: 'color:hover'
		}
	],

	[`${prefix}_related_thumb_radius`]: {
		selector: '.ct-related-posts .ct-image-container',
		type: 'spacing',
		variable: 'borderRadius',
		responsive: true
	},

	[`${prefix}_related_narrow_width`]: {
		selector: '.ct-related-posts-container',
		variable: 'narrowContainer',
		unit: 'px'
	},

	// Posts Navigation
	[`${prefix}_post_nav_spacing`]: {
		selector: '.post-navigation',
		variable: 'margin',
		responsive: true,
		unit: ''
	},

	[`${prefix}_posts_nav_font_color`]: [
		{
			selector: '.post-navigation',
			variable: 'linkInitialColor',
			type: 'color:default'
		},

		{
			selector: '.post-navigation',
			variable: 'linkHoverColor',
			type: 'color:hover'
		}
	]
})
