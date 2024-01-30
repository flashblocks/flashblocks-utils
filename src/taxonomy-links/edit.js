import {__} from '@wordpress/i18n';
import {withSelect, useSelect} from '@wordpress/data';
import {SelectControl, CheckboxControl, PanelBody, Disabled, ToggleControl} from '@wordpress/components';
import {
	AlignmentToolbar,
	InspectorControls,
	BlockControls,
	useBlockProps,
	useBlockDisplayInformation,
	RichText,
} from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { postCategories, postTerms } from '@wordpress/icons';


import metadata from './block.json';
import './editor.scss';


const Edit = withSelect(
	select => {
		const taxonomies = select('core').getTaxonomies() || [];
		return {taxonomies};
	}
)(({taxonomies, attributes, setAttributes}) => {
	const {
					textAlign,
					assigned,
					taxonomy,
					terms
				} = attributes;

	const onTaxonomyChange = (taxonomy) => {
		setAttributes({taxonomy: taxonomy, terms: []});
	};

	// Handler for the toggle change
	const toggleAssigned = () => {
		setAttributes({assigned: !assigned});
		if (!assigned) {
			// Reset selected terms when showing all terms
			// setAttributes({terms: []});
		}
	};

	const onTermChange = (termId, isChecked) => {
		const newTerms = isChecked
										 ? [...terms, termId]
										 : terms.filter(id => id !== termId);
		setAttributes({terms: newTerms});
	};

	const taxonomyTerms = useSelect(select => {
		if (!taxonomy) return [];
		return select('core').getEntityRecords('taxonomy', taxonomy, {per_page: -1}) || [];
	}, [taxonomy]);

	return (
		<>

			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={(nextAlign) => {
						setAttributes({textAlign: nextAlign});
					}}
				/>
			</BlockControls>


			<InspectorControls>
				<PanelBody title="Taxonomy Settings">


					<SelectControl
						label="Select Taxonomy"
						value={taxonomy}
						options={taxonomies.map(taxonomy => ({label: taxonomy.name, value: taxonomy.slug}))}
						onChange={onTaxonomyChange}
						help={`taxonomy: ${taxonomy}`}
					/>

					<ToggleControl
						label="Display only assigned terms from the post"
						help={assigned ? `Optionally, limit term results to those selected below` : ""}
						checked={assigned}
						onChange={toggleAssigned}
					/>

					{/*{taxonomyTerms &&*/}
					{/*	<p>test</p>*/}
					{/*}*/}
					{taxonomyTerms && taxonomyTerms.map(term => (
						<div>
							<CheckboxControl
								key={term.id}
								label={term.name}
								checked={terms.includes(term.id)}
								onChange={(isChecked) => onTermChange(term.id, isChecked)}
							/>
						</div>
					))}

				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<Disabled>
					<ServerSideRender
						block={metadata.name}
						attributes={attributes}
					/>
				</Disabled>
			</div>
		</>
	);
});

export default Edit;
