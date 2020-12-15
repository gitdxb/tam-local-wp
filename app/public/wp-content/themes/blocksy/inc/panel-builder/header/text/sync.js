import { typographyOption } from '../../../../static/js/customizer/sync/variables/typography'
import ctEvents from 'ct-events'
import { updateAndSaveEl } from '../../../../static/js/frontend/header/render-loop'
import { responsiveClassesFor } from '../../../../static/js/customizer/sync/helpers'

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['text'] = ({ itemId }) => ({
			headerTextMaxWidth: {
				selector: `[data-id="${itemId}"]`,
				variable: 'maxWidth',
				responsive: true,
				unit: '%'
			},

			...typographyOption({
				id: 'headerTextFont',
				selector: `[data-id="${itemId}"]`
			}),

			headerTextColor: [
				{
					selector: `[data-id="${itemId}"]`,
					variable: 'color',
					type: 'color:default',
					responsive: true
				},

				{
					selector: `[data-id="${itemId}"]`,
					variable: 'linkInitialColor',
					type: 'color:link_initial',
					responsive: true
				},

				{
					selector: `[data-id="${itemId}"]`,
					variable: 'linkHoverColor',
					type: 'color:link_hover',
					responsive: true
				}
			],

			headerTextMargin: {
				selector: `[data-id="${itemId}"]`,
				type: 'spacing',
				variable: 'margin',
				responsive: true,
				important: true
			}
		})
	}
)

ctEvents.on('ct:header:sync:item:text', ({ itemId, optionId, optionValue }) => {
	const selector = `[data-id="${itemId}"]`

	if (optionId === 'visibility') {
		updateAndSaveEl(selector, el =>
			responsiveClassesFor({ ...optionValue, desktop: true }, el)
		)
	}

	if (optionId === 'header_text') {
		updateAndSaveEl(selector, el => {
			el.querySelector('.entry-content').innerHTML = optionValue
		})
	}
})
