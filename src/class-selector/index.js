import {FormTokenField, PanelBody} from '@wordpress/components';
import {Fragment, useEffect, useState} from '@wordpress/element';
import {select, withDispatch, withSelect} from '@wordpress/data';
import {compose} from '@wordpress/compose';
import {InspectorAdvancedControls, InspectorControls} from '@wordpress/block-editor';
import './editor.scss'; // Import custom CSS for styling

// Use the predefined classes mapping passed from PHP
const CLASSES = flashblocks_class_selector.classes || {};
const isAdmin = flashblocks_class_selector.is_admin;

const ClassSelector = ({className, setClassName, blockName}) => {
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

		let combinedClasses = [];

		// Iterate through the CLASSES object to find applicable classes for the current block
		Object.entries(CLASSES).forEach(([key, value]) => {
			const {blocks, classes, icon} = value;

			// Add classes if applicable to all blocks
			if (blocks === 'all') {
				combinedClasses = [
					...combinedClasses,
					...classes.map((cls) => ({name: cls, isGlobal: true, icon})),
				];
			}

			// Add classes if there are no registered styles
			if (
				blocks === 'no-styles' &&
				select('core/blocks').getBlockStyles(blockName).length === 0
			) {
				combinedClasses = [
					...combinedClasses,
					...classes.map((cls) => ({name: cls, isGlobal: false, icon})),
				];
			}

			// Add classes if the blockName matches any of the blocks in the array
			if (Array.isArray(blocks) && blocks.includes(blockName)) {
				combinedClasses = [
					...combinedClasses,
					...classes.map((cls) => ({name: cls, isGlobal: false, icon})),
				];
			}
		});

		// Get the registered styles for the block
		const styles = select('core/blocks').getBlockStyles(blockName) || [];

		// Map styles to class names with 'is-style-' prefix and filter out 'default' style
		const styleClasses = styles
			.filter((style) => style.name !== 'default') // Remove default style
			.map((style) => ({
				name:     `is-style-${style.name}`,
				isGlobal: false,
				icon:     '',
			}));

		// Merge predefined classes and style classes
		combinedClasses = [...combinedClasses, ...styleClasses];

		// Remove duplicates based on the 'name' property
		const uniqueClasses = Array.from(
			new Map(combinedClasses.map((item) => [item.name, item])).values()
		);

		setPossibleClasses(uniqueClasses);
	}, [blockName]);

	// Create a mapping from class names to icons
	const classIconMap = {};
	possibleClasses.forEach((cls) => {
		classIconMap[cls.name] = cls.icon;
	});

	// Build suggestions array containing only class names (strings)
	const suggestions = possibleClasses.map((cls) => cls.name);

	// Handle changes in selected classes
	const onChange = (newClasses) => {
		setSelectedClasses(newClasses);
		setClassName(newClasses.join(' '));
	};

	return (
		<FormTokenField
			label="Select CSS Classes"
			value={selectedClasses}
			suggestions={suggestions}
			onChange={onChange}
			maxSuggestions={1000}
			tokenizeOnSpace={true}
			__experimentalExpandOnFocus={true}
			__experimentalShowHowTo={false}
			__next40pxDefaultSize={true}
			__nextHasNoMarginBottom={true}
			__experimentalRenderItem={({item}) => {
				const icon = classIconMap[item];
				return (
					<div className="form-token-field-list-item">
						<div className="icon">{icon || ''}</div>
						{item}
					</div>
				);
			}}
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
	const {updateBlockAttributes} = dispatch('core/block-editor');
	const clientId                = wp.data
		.select('core/block-editor')
		.getSelectedBlockClientId();

	return {
		setClassName: (className) => {
			updateBlockAttributes(clientId, {className});
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

		{isAdmin && (
			<InspectorControls>
				<PanelBody title="CSS Classes" initialOpen={true}>
					<ClassSelectorWithData/>
				</PanelBody>
			</InspectorControls>
		)}

		{!isAdmin && (
			<InspectorAdvancedControls>
				<ClassSelectorWithData/>
			</InspectorAdvancedControls>
		)}

	</Fragment>
);

// Add the filter to inject the ClassSelector into the block editor
wp.hooks.addFilter(
	'editor.BlockEdit',
	'my-plugin/with-class-selector',
	withClassSelector
);
