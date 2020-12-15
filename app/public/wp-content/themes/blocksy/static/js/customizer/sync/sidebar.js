import {
	changeTagName,
	getOptionFor,
	responsiveClassesFor,
	watchOptionsWithPrefix
} from './helpers'

watchOptionsWithPrefix({
	getOptionsForPrefix: ({ prefix }) => [
		`${prefix}_sidebar_position`,
		'separated_widgets',
		'widgets_title_wrapper',
		'has_sticky_sidebar',
		'sidebar_type',
		'sidebar_visibility'
	],

	render: ({ prefix }) => {
		const sidebar = document.querySelector('.ct-sidebar')

		if (!sidebar) return

		sidebar.parentNode.dataset.type = getOptionFor('sidebar_type')

		sidebar.removeAttribute('data-widgets')

		if (
			getOptionFor('separated_widgets') === 'yes' &&
			getOptionFor('sidebar_type') === 'type-2'
		) {
			document.querySelector('.ct-sidebar').dataset.widgets = 'separated'
		}

		if (getOptionFor('has_sticky_sidebar') === 'yes') {
			sidebar.dataset.sticky = ''
		}

		sidebar.removeAttribute('data-sticky')
		;[...document.querySelectorAll('.widget-title')].map(el =>
			changeTagName(el, wp.customize('widgets_title_wrapper')())
		)

		if (getOptionFor('sidebar_position', prefix)) {
			sidebar.closest('[data-sidebar]').dataset.sidebar = getOptionFor(
				'sidebar_position',
				prefix
			)
		}

		responsiveClassesFor('sidebar_visibility', sidebar.parentNode)
	}
})
