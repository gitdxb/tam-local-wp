export const getAllRegularSelects = ({ includeExtra = false } = {}) =>
	[
		'table.variations select',
		'.woocommerce-ordering select',
		'.woocommerce-input-wrapper select',
		'.widget_product_categories select',
		'.woocommerce-shipping-totals select',

		'.forminator-design--none select',

		'.wp-block-archives-dropdown select',
		'.wp-block-categories select',
		'.widget_categories select',
		'.widget_archive select'
	].reduce(
		(all, selector) => [...all, ...document.querySelectorAll(selector)],
		[]
	)
