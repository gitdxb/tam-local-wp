import ctEvents from 'ct-events'
import {
	getCache,
	handleResponsiveSwitch
} from '../../../../static/js/customizer/sync/helpers'
import { updateAndSaveEl } from '../../../../static/js/frontend/header/render-loop'
import { responsiveClassesFor } from '../../../../static/js/customizer/sync/helpers'

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['socials'] = ({ itemId }) => ({
			socialsIconSize: {
				selector: `[data-id="${itemId}"]`,
				variable: 'iconSize',
				responsive: true,
				unit: 'px'
			},

			socialsIconSpacing: {
				selector: `[data-id="${itemId}"]`,
				variable: 'spacing',
				responsive: true,
				unit: 'px'
			},

			headerSocialsIconColor: [
				{
					selector: `[data-id="${itemId}"] [data-color="custom"]`,
					variable: 'linkInitialColor',
					type: 'color:default',
					responsive: true
				},

				{
					selector: `[data-id="${itemId}"] [data-color="custom"]`,
					variable: 'linkHoverColor',
					type: 'color:hover',
					responsive: true
				}
			],

			headerSocialsIconBackground: [
				{
					selector: `[data-id="${itemId}"] [data-color="custom"]`,
					variable: 'backgroundColor',
					type: 'color:default',
					responsive: true
				},

				{
					selector: `[data-id="${itemId}"] [data-color="custom"]`,
					variable: 'backgroundColorHover',
					type: 'color:hover',
					responsive: true
				}
			],

			headerSocialsMargin: {
				selector: '.ct-header-socials',
				type: 'spacing',
				variable: 'margin',
				responsive: true,
				important: true
			},

			socialsLabelVisibility: handleResponsiveSwitch({
				selector: `[data-id="${itemId}"] .ct-label`
			})
		})
	}
)

ctEvents.on(
	'ct:header:sync:item:socials',
	({ itemId, optionId, optionValue, values }) => {
		const selector = `[data-id="${itemId}"]`

		if (optionId === 'socialsType' || optionId === 'socialsFillType') {
			updateAndSaveEl(selector, el => {
				const box = el.querySelector('.ct-social-box')
				box.dataset.type = values.socialsType

				box.removeAttribute('data-fill')

				if (values.socialsType !== 'simple') {
					box.dataset.fill = values.socialsFillType
				}
			})
		}

		if (optionId === 'socialsIconSize') {
			updateAndSaveEl(
				selector,
				el =>
					(el.querySelector('.ct-social-box').dataset.size =
						values.socialsIconSize)
			)
		}

		if (optionId === 'headerSocialsColor') {
			updateAndSaveEl(
				selector,
				el =>
					(el.querySelector(
						'.ct-social-box'
					).dataset.color = optionValue)
			)
		}

		if (optionId === 'header_socials') {
			updateAndSaveEl(selector, el => {
				const newHtml = getCache().querySelector(
					`.ct-customizer-preview-cache [data-id="socials-general-cache"]`
				).innerHTML

				const cache = document.createElement('div')
				cache.innerHTML = newHtml

				el.querySelector('.ct-social-box').innerHTML = ''

				optionValue.map(({ id, enabled }) => {
					if (!enabled) return

					el.querySelector('.ct-social-box').appendChild(
						cache.querySelector(`[data-network=${id}]`)
					)
				})
			})
		}

		if (optionId === 'visibility') {
			updateAndSaveEl(selector, el =>
				responsiveClassesFor({ ...optionValue, desktop: true }, el)
			)
		}

		if (
			optionId === 'header_socials' ||
			optionId === 'socialsLabelVisibility'
		) {
			const socialsLabelVisibility = values.socialsLabelVisibility || {
				desktop: false,
				tablet: false,
				mobile: false
			}

			updateAndSaveEl(selector, el => {
				if (
					socialsLabelVisibility.desktop ||
					socialsLabelVisibility.tablet ||
					socialsLabelVisibility.mobile
				) {
					;[...el.querySelectorAll('span.ct-label')].map(el =>
						el.removeAttribute('hidden')
					)
				} else {
					;[...el.querySelectorAll('span.ct-label')].map(el =>
						el.setAttribute('hidden', '')
					)
				}
			})
		}
	}
)
