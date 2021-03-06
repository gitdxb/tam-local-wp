import { getPrefixFor, watchOptionsWithPrefix, getOptionFor } from '../helpers'
import { handleBackgroundOptionFor } from '../variables/background'

watchOptionsWithPrefix({
	getPrefix: () => getPrefixFor(),
	getOptionsForPrefix: ({ prefix }) => [
		`${prefix}_content_style`,
		`${prefix}_content_area_spacing`
	],
	render: ({ prefix, id }) => {
		if (id === `${prefix}_content_style`) {
			let el = document.querySelector('[data-structure]')

			if (!el) {
				return
			}

			el.dataset.structure = el.dataset.structure.replace(
				/(wide|boxed)/,
				getOptionFor('content_style', prefix)
			)
		}

		if (id === `${prefix}_content_area_spacing`) {
			let el = document.querySelector('#primary.content-area')

			if (!el) {
				return
			}

			let spacingComponents = []

			let contentAreaSpacing = getOptionFor(
				'content_area_spacing',
				prefix
			)

			if (contentAreaSpacing === 'both' || contentAreaSpacing === 'top') {
				spacingComponents.push('top')
			}

			if (
				contentAreaSpacing === 'both' ||
				contentAreaSpacing === 'bottom'
			) {
				spacingComponents.push('bottom')
			}

			el.removeAttribute('data-v-spacing')

			if (spacingComponents.length > 0) {
				el.dataset.vSpacing = spacingComponents.join(':')
			}
		}
	}
})

export const getSingleContentVariablesFor = () => {
	const prefix = getPrefixFor()

	return {
		...handleBackgroundOptionFor({
			id: `${prefix}_background`,
			selector: `body[data-prefix="${prefix}"]`
		}),

		...handleBackgroundOptionFor({
			id: `${prefix}_content_background`,
			selector: `body[data-prefix="${prefix}"] [data-structure*="boxed"]`
		}),

		[`${prefix}_content_boxed_spacing`]: {
			selector: `body[data-prefix="${prefix}"] [data-structure*="boxed"]`,
			variable: 'contentBoxedSpacing',
			responsive: true,
			unit: ''
		},

		[`${prefix}_content_boxed_radius`]: {
			selector: `body[data-prefix="${prefix}"] [data-structure*="boxed"]`,
			type: 'spacing',
			variable: 'borderRadius',
			responsive: true
		},

		[`${prefix}_content_boxed_shadow`]: {
			selector: `body[data-prefix="${prefix}"] [data-structure*="boxed"]`,
			type: 'box-shadow',
			variable: 'boxShadow',
			responsive: true
		}
	}
}
