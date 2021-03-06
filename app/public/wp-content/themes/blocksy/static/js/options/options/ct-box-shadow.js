import {
	createElement,
	Component,
	useState,
	useRef,
	useContext
} from '@wordpress/element'
import OutsideClickHandler from './react-outside-click-handler'
import classnames from 'classnames'
import SingleColorPicker from './color-picker/single-picker'
import { __ } from 'ct-i18n'
import { Manager, Reference, Popper } from 'react-popper'
import BoxShadowModal from './box-shadow/box-shadow-modal'

import { ColorPickerContext } from './ct-color-picker'

const clamp = (min, max, value) => Math.max(min, Math.min(max, value))

const BoxShadow = ({ value, option, onChange }) => {
	const [{ isPicking, isTransitioning }, setAnimationState] = useState({
		isPicking: null,
		isTransitioning: null
	})

	const { modalWrapper } = useContext(ColorPickerContext)

	const [focusedComponent, setFocusedComponent] = useState(null)

	const el = useRef()
	const colorPicker = useRef()

	const hOffsetRef = useRef()
	const vOffsetRef = useRef()
	const blurRef = useRef()
	const spreadRef = useRef()

	return (
		<div
			ref={el}
			className={classnames('ct-box-shadow', {
				'ct-disabled': !value.enable
			})}>
			<div className="ct-box-shadow-options">
				<OutsideClickHandler
					useCapture={false}
					disabled={!isPicking}
					className="ct-box-shadow-values"
					additionalRefs={[colorPicker, modalWrapper]}
					onOutsideClick={() => {
						if (!isPicking) {
							return
						}

						setAnimationState({
							isTransitioning: isPicking.split(':')[0],
							isPicking: null
						})
					}}
					wrapperProps={{
						onClick: e => {
							e.preventDefault()

							if (!value.enable) {
								return
							}

							let futureIsPicking = isPicking
								? isPicking.split(':')[0] === 'opts'
									? null
									: `opts:${isPicking.split(':')[0]}`
								: 'opts'

							setAnimationState({
								isTransitioning: 'opts',
								isPicking: futureIsPicking
							})
						}
					}}>
					<button
						type="button"
						className={classnames({
							crossed: !value.enable
						})}
						onClick={e => {
							e.preventDefault()
							e.stopPropagation()

							onChange({
								...value,
								enable: !value.enable
							})
						}}>
						<svg width="14px" height="14px" viewBox="0 0 24 24">
							<path d="M12,4C4.1,4,0,12,0,12s3.1,8,12,8c8.1,0,12-8,12-8S20.1,4,12,4z M12,17c-2.9,0-5-2.2-5-5c0-2.8,2.1-5,5-5s5,2.2,5,5C17,14.8,14.9,17,12,17z M12,9c-1.7,0-3,1.4-3,3c0,1.6,1.3,3,3,3s3-1.4,3-3C15,10.4,13.7,9,12,9z"></path>
						</svg>
					</button>

					<span>
						<span>
							{value.inset
								? __('Inset', 'blocksy')
								: __('Outline', 'blocksy')}
						</span>
					</span>

					<i>/</i>

					<span
						onClick={e => {
							e.preventDefault()
							if (!value.enable) {
								return
							}

							if (
								isPicking &&
								isPicking.split(':')[0] === 'opts'
							) {
								e.stopPropagation()
							}

							setTimeout(() => {
								hOffsetRef &&
									hOffsetRef.current &&
									hOffsetRef.current.focus()
							}, 100)
						}}>
						<span>{value.h_offset}</span>
					</span>

					<i>/</i>

					<span
						onClick={e => {
							e.preventDefault()

							if (!value.enable) {
								return
							}

							if (
								isPicking &&
								isPicking.split(':')[0] === 'opts'
							) {
								e.stopPropagation()
							}

							setTimeout(() => {
								vOffsetRef &&
									vOffsetRef.current &&
									vOffsetRef.current.focus()
							}, 100)
						}}>
						<span>{value.v_offset}</span>
					</span>

					<i>/</i>

					<span
						onClick={e => {
							e.preventDefault()

							if (!value.enable) {
								return
							}

							if (
								isPicking &&
								isPicking.split(':')[0] === 'opts'
							) {
								e.stopPropagation()
							}

							setTimeout(() => {
								blurRef &&
									blurRef.current &&
									blurRef.current.focus()
							}, 100)
						}}>
						<span>{value.blur}</span>
					</span>

					<i>/</i>

					<span
						onClick={e => {
							e.preventDefault()

							if (!value.enable) {
								return
							}

							if (
								isPicking &&
								isPicking.split(':')[0] === 'opts'
							) {
								e.stopPropagation()
							}

							setTimeout(() => {
								spreadRef &&
									spreadRef.current &&
									spreadRef.current.focus()
							}, 100)
						}}>
						<span>{value.spread}</span>
					</span>
				</OutsideClickHandler>

				<SingleColorPicker
					innerRef={colorPicker}
					picker={{
						id: 'default',
						title: 'Initial'
					}}
					option={{
						pickers: [
							{
								id: 'default',
								title: 'Initial'
							}
						]
					}}
					isPicking={isPicking}
					isTransitioning={isTransitioning}
					onPickingChange={isPicking => {
						if (!value.enable) {
							return
						}

						setAnimationState({
							isTransitioning: 'default',
							isPicking
						})
					}}
					stopTransitioning={() =>
						setAnimationState({
							isPicking,
							isTransitioning: false
						})
					}
					onChange={colorValue =>
						onChange({
							...value,
							color: colorValue
						})
					}
					value={value.color}
				/>
			</div>

			<BoxShadowModal
				el={el}
				value={value}
				onChange={onChange}
				option={option}
				isPicking={isPicking}
				isTransitioning={isTransitioning}
				hOffsetRef={hOffsetRef}
				vOffsetRef={vOffsetRef}
				blurRef={blurRef}
				spreadRef={spreadRef}
				picker={{
					id: 'opts'
				}}
				onPickingChange={isPicking => {
					if (!value.enable) {
						return
					}

					setAnimationState({
						isTransitioning: 'opts',
						isPicking
					})
				}}
				stopTransitioning={() =>
					setAnimationState({
						isPicking,
						isTransitioning: false
					})
				}
			/>
		</div>
	)
}

BoxShadow.ControlEnd = () => {
	const { modalWrapper } = useContext(ColorPickerContext)

	return <div ref={modalWrapper} className="ct-color-modal-wrapper" />
}

BoxShadow.MetaWrapper = ({ getActualOption }) => {
	const ref = useRef()

	return (
		<ColorPickerContext.Provider
			value={{
				modalWrapper: ref
			}}>
			{getActualOption()}
		</ColorPickerContext.Provider>
	)
}

export default BoxShadow
