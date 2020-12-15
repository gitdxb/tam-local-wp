import ctEvents from 'ct-events'
import {
	watchOptionsWithPrefix,
	getPrefixFor,
	setRatioFor,
	disableTransitionsStart,
	disableTransitionsEnd,
	getOptionFor
} from '../helpers'
import { typographyOption } from '../variables/typography'
import { renderSingleEntryMeta } from '../helpers/entry-meta'
import { replaceFirstTextNode } from '../helpers'

const prefix = getPrefixFor()

watchOptionsWithPrefix({
	getPrefix: () => prefix,
	getOptionsForPrefix: ({ prefix }) => [
		`${prefix}_archive_order`,
		`${prefix}_card_type`
	],

	render: ({ id }) => {
		if (id === `${prefix}_card_type`) {
			disableTransitionsStart(document.querySelectorAll('.entries'))
			;[...document.querySelectorAll('.entries')].map(el => {
				const structure = getOptionFor('structure', prefix)

				if (structure !== 'gutenberg') {
					el.dataset.cards = getOptionFor('card_type', prefix)
				}
			})

			disableTransitionsEnd(document.querySelectorAll('.entries'))
		}

		if (id === `${prefix}_archive_order`) {
			let archiveOrder = getOptionFor('archive_order', prefix)
			disableTransitionsStart(document.querySelectorAll('.entries'))

			archiveOrder.map(component => {
				if (!component.enabled) return
				;[...document.querySelectorAll('.entries > article')].map(
					article => {
						let image = article.querySelector('.ct-image-container')
						let button = article.querySelector('.entry-button')

						if (component.id === 'featured_image' && image) {
							setRatioFor(
								component.thumb_ratio,
								image.querySelector('.ct-ratio')
							)

							image.classList.remove('boundless-image')

							if (
								(component.is_boundless || 'yes') === 'yes' &&
								getOptionFor('card_type', prefix) === 'boxed' &&
								getOptionFor('structure', prefix) !==
									'gutenberg'
							) {
								image.classList.add('boundless-image')
							}
						}

						if (component.id === 'read_more' && button) {
							button.dataset.type =
								component.button_type || 'simple'

							button.classList.remove('ct-button')

							if (
								(component.button_type || 'simple') ===
								'background'
							) {
								button.classList.add('ct-button')
							}

							button.dataset.alignment =
								component.read_more_alignment || 'left'

							replaceFirstTextNode(
								button,
								component.read_more_text || 'Read More'
							)
						}

						if (component.id === 'post_meta') {
							let moreDefaults = {}
							let el = article.querySelectorAll('.entry-meta')

							if (
								archiveOrder.filter(
									({ id }) => id === 'post_meta'
								).length > 1
							) {
								if (
									archiveOrder
										.filter(({ id }) => id === 'post_meta')
										.map(({ __id }) => __id)
										.indexOf(component.__id) === 0
								) {
									moreDefaults = {
										meta_elements: [
											{
												id: 'categories',
												enabled: true
											}
										]
									}

									el = el[0]
								}

								if (
									archiveOrder
										.filter(({ id }) => id === 'post_meta')
										.map(({ __id }) => __id)
										.indexOf(component.__id) === 1
								) {
									moreDefaults = {
										meta_elements: [
											{
												id: 'author',
												enabled: true
											},

											{
												id: 'post_date',
												enabled: true
											},

											{
												id: 'comments',
												enabled: true
											}
										]
									}

									if (el.length > 1) {
										el = el[1]
									}
								}
							}

							renderSingleEntryMeta({
								el,
								...moreDefaults,
								...component
							})
						}
					}
				)
			})

			disableTransitionsEnd(document.querySelectorAll('.entries'))
		}
	}
})

export const getPostListingVariables = () => ({
	...typographyOption({
		id: `${prefix}_cardTitleFont`,
		selector: '.entry-card .entry-title'
	}),

	[`${prefix}_cardTitleSize`]: {
		variable: 'cardTitleSize',
		responsive: true,
		unit: 'px'
	},

	[`${prefix}_cardTitleColor`]: [
		{
			selector: '.entry-card .entry-title',
			variable: 'headingColor',
			type: 'color:default'
		},

		{
			selector: '.entry-card .entry-title',
			variable: 'linkHoverColor',
			type: 'color:hover'
		}
	],

	[`${prefix}_cardExcerptSize`]: {
		selector: '.entry-excerpt',
		variable: 'cardExcerptSize',
		responsive: true,
		unit: 'px'
	},

	[`${prefix}_cardExcerptColor`]: {
		selector: '.entry-excerpt',
		variable: 'color',
		type: 'color'
	},

	...typographyOption({
		id: `${prefix}_cardMetaFont`,
		selector: '.entry-card .entry-meta'
	}),

	[`${prefix}_cardMetaColor`]: [
		{
			selector: '.entry-card .entry-meta',
			variable: 'color',
			type: 'color:default'
		},

		{
			selector: '.entry-card .entry-meta',
			variable: 'linkHoverColor',
			type: 'color:hover'
		}
	],

	[`${prefix}_cardButtonSimpleTextColor`]: [
		{
			selector: '.entry-button[data-type="simple"]',
			variable: 'color',
			type: 'color:default'
		},

		{
			selector: '.entry-button[data-type="simple"]',
			variable: 'colorHover',
			type: 'color:hover'
		}
	],

	[`${prefix}_cardButtonBackgroundTextColor`]: [
		{
			selector: '.entry-button[data-type="background"]',
			variable: 'buttonTextInitialColor',
			type: 'color:default'
		},

		{
			selector: '.entry-button[data-type="background"]',
			variable: 'buttonTextHoverColor',
			type: 'color:hover'
		}
	],

	[`${prefix}_cardButtonOutlineTextColor`]: [
		{
			selector: '.entry-button[data-type="outline"]',
			variable: 'color',
			type: 'color:default'
		},

		{
			selector: '.entry-button[data-type="outline"]',
			variable: 'colorHover',
			type: 'color:hover'
		}
	],

	[`${prefix}_cardButtonColor`]: [
		{
			selector: '.entry-button',
			variable: 'buttonInitialColor',
			type: 'color:default'
		},

		{
			selector: '.entry-button',
			variable: 'buttonHoverColor',
			type: 'color:hover'
		}
	],

	[`${prefix}_cardBackground`]: {
		selector: '[data-cards="boxed"] .entry-card',
		variable: 'cardBackground',
		type: 'color'
	},

	[`${prefix}_cardBorder`]: {
		selector: '[data-cards="boxed"] .entry-card',
		variable: 'border',
		type: 'border'
	},

	[`${prefix}_cardDivider`]: {
		selector: '[data-cards="simple"] .entry-card',
		variable: 'border',
		type: 'border'
	},

	[`${prefix}_cardsGap`]: {
		selector: '.entries',
		variable: 'cardsGap',
		responsive: true,
		unit: 'px'
	},

	[`${prefix}_card_spacing`]: {
		selector: '[data-cards="boxed"] .entry-card',
		variable: 'cardSpacing',
		responsive: true,
		unit: 'px'
	},

	[`${prefix}_cardRadius`]: {
		selector: '[data-cards="boxed"] .entry-card',
		type: 'spacing',
		variable: 'borderRadius',
		responsive: true
	},

	[`${prefix}_cardShadow`]: {
		selector: '[data-cards="boxed"] .entry-card',
		type: 'box-shadow',
		variable: 'boxShadow',
		responsive: true
	},

	[`${prefix}_cardThumbRadius`]: {
		selector: '.entry-card .ct-image-container',
		type: 'spacing',
		variable: 'borderRadius',
		responsive: true
	},

	[`${prefix}_archive_order`]: {
		selector: '.entry-card .meta-author',
		variable: 'avatarSize',
		unit: 'px',
		extractValue: value =>
			(
				value.find(
					component =>
						component.id === 'post_meta' &&
						component.has_author_avatar === 'yes'
				) || { avatar_size: 25 }
			).avatar_size
	}
})
