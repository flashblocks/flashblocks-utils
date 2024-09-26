import { PanelBody, FormTokenField } from '@wordpress/components';
import { Fragment, useState, useEffect } from '@wordpress/element';
import { withSelect, withDispatch, select } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { InspectorControls, InspectorAdvancedControls } from '@wordpress/block-editor';

// Use the predefined classes mapping passed from PHP
const CLASSES = flashblocks_class_selector.classes || {};

const ClassSelector = ({ className, setClassName, blockName }) => {
	// State to keep track of selected classes for the block
	const [selectedClasses, setSelectedClasses] = useState([]);

	// State to keep track of possible classes to suggest
	const [possibleClasses, setPossibleClasses] = useState([]);

	// Update selected classes when className changes
	useEffect(() => {
		const classesArray = className ? className.split(' ') : [];
		setSelectedClasses(classesArray);
	}, [className]);

	// Update possible classes when blockName changes
	useEffect(() => {
		if (!blockName) {
			console.warn('Block name is undefined');
			setPossibleClasses([]);
			return;
		}

		// Get the registered styles for the block
		const styles = select('core/blocks').getBlockStyles(blockName) || [];

		// Map styles to class names with 'is-style-' prefix
		// and filter out 'default' style
		const styleClasses = styles
			.filter((style) => style.name !== 'default') // Remove default style
			.map((style) => `is-style-${style.name}`);

		// Get predefined classes for the block
		const predefinedClassesForBlock = CLASSES[blockName] || [];

		// Get predefined classes for all blocks
		const predefinedClassesForAll = CLASSES['all'] || [];

		// Get predefined classes for blocks with no styles
		const predefinedClassesForNoStyles = styles.length === 0 ? (CLASSES['no-styles'] || []) : [];

		// Merge predefined classes and style classes
		const combinedClasses = [
			...new Set([
				...predefinedClassesForBlock,
				...predefinedClassesForAll,
				...predefinedClassesForNoStyles,
				...styleClasses,
			]),
		];

		setPossibleClasses(combinedClasses);
	}, [blockName]);

	// Handle changes in selected classes
	const onChange = (newClasses) => {
		setSelectedClasses(newClasses);
		setClassName(newClasses.join(' '));
	};

	return (
		<FormTokenField
			label="Select CSS Classes"
			value={selectedClasses}
			suggestions={possibleClasses}
			onChange={onChange}
			maxSuggestions={1000}
			tokenizeOnSpace={true}
			__experimentalExpandOnFocus={true}
			__experimentalShowHowTo={false}
			__next40pxDefaultSize={true}
			__nextHasNoMarginBottom={true}
		/>
	);
};

// Map the selected block's attributes to props
const mapSelectToProps = (select) => {
	const block = select('core/block-editor').getSelectedBlock();
	return {
		className: block?.attributes?.className || '',
		blockName: block?.name || '',
	};
};

// Map dispatch actions to props
const mapDispatchToProps = (dispatch) => {
	const { updateBlockAttributes } = dispatch('core/block-editor');
	const clientId = wp.data.select('core/block-editor').getSelectedBlockClientId();

	return {
		setClassName: (className) => {
			updateBlockAttributes(clientId, { className });
		},
	};
};

// Compose the ClassSelector component with data
const ClassSelectorWithData = compose(
	withSelect(mapSelectToProps),
	withDispatch(mapDispatchToProps)
)(ClassSelector);

// High-order component to add the ClassSelector to the block's inspector controls
const withClassSelector = (BlockEdit) => (props) => (
	<Fragment>
		<BlockEdit {...props} />
		<InspectorControls>
			<PanelBody title="CSS Classes" initialOpen={true}>
				<ClassSelectorWithData />
			</PanelBody>
		</InspectorControls>
	</Fragment>
);

// Add the filter to inject the ClassSelector into the block editor
wp.hooks.addFilter(
	'editor.BlockEdit',
	'my-plugin/with-class-selector',
	withClassSelector
);
