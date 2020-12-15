import {
	getPrefixFor,
	getOptionFor,
	responsiveClassesFor,
	watchOptionsWithPrefix
} from './helpers'

const prefix = getPrefixFor({
	allowed_prefixes: ['blog', 'woo_categories'],
	default_prefix: 'blog'
})

watchOptionsWithPrefix({
	getPrefix: () => prefix,
	getOptionsForPrefix: () => [
		`${prefix}_load_more_label`,
		`${prefix}_paginationDivider`
	],

	render: () => {
		if (document.querySelector('.ct-load-more')) {
			document.querySelector('.ct-load-more').innerHTML = getOptionFor(
				'load_more_label',
				prefix
			)
		}

		;[...document.querySelectorAll('.ct-pagination')].map(el => {
			el.removeAttribute('data-divider')

			if (getOptionFor('paginationDivider', prefix).style === 'none')
				return

			if (
				getOptionFor('pagination_global_type', prefix) ===
				'infinite_scroll'
			) {
				return
			}

			el.dataset.divider = ''
		})
	}
})

export const getPaginationVariables = () => ({
	[`${prefix}_paginationSpacing`]: {
		selector: '.ct-pagination',
		variable: 'spacing',
		responsive: true,
		unit: 'px'
	},

	[`${prefix}_paginationDivider`]: {
		selector: '.ct-pagination[data-divider]',
		variable: 'border',
		type: 'border'
	},

	[`${prefix}_simplePaginationFontColor`]: [
		{
			selector:
				'.ct-pagination[data-type="simple"], .ct-pagination[data-type="next_prev"]',
			variable: 'color',
			type: 'color:default'
		},

		{
			selector: '.ct-pagination[data-type="simple"]',
			variable: 'colorActive',
			type: 'color:active'
		},

		{
			selector:
				'.ct-pagination[data-type="simple"], .ct-pagination[data-type="next_prev"]',
			variable: 'linkHoverColor',
			type: 'color:hover'
		}
	],

	[`${prefix}_paginationButtonText`]: [
		{
			selector: '.ct-pagination[data-type="load_more"]',
			variable: 'buttonTextInitialColor',
			type: 'color:default'
		},

		{
			selector: '.ct-pagination[data-type="load_more"]',
			variable: 'buttonTextHoverColor',
			type: 'color:hover'
		}
	],

	[`${prefix}_paginationButton`]: [
		{
			selector: '.ct-pagination[data-type="load_more"]',
			variable: 'buttonInitialColor',
			type: 'color:default'
		},

		{
			selector: '.ct-pagination[data-type="load_more"]',
			variable: 'buttonHoverColor',
			type: 'color:hover'
		}
	]
})
