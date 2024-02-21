import {__} from '@wordpress/i18n';
import {withSelect, useSelect} from '@wordpress/data';
import {
	SelectControl,
	CheckboxControl,
	PanelBody,
	Disabled,
	ToggleControl,
	Button,
	PanelRow
} from '@wordpress/components';
import {
	AlignmentToolbar,
	InspectorControls,
	BlockControls,
	useBlockProps,
	useBlockDisplayInformation,
	RichText,
} from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import {postCategories, postTerms} from '@wordpress/icons';


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
					terms,
					showEmpty,
					orderby
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

					<SelectControl
						label={__('Sort Terms By', 'flashblocks')}
						value={orderby}
						options={[
							{label: 'Default', value: ''},
							{label: 'Name', value: 'name'},
							{label: 'Count', value: 'count'},
						]}
						onChange={(val) => setAttributes({orderby: val})}
					/>

					<ToggleControl
						label="Show empty categories"
						checked={showEmpty}
						onChange={(val) => setAttributes({showEmpty: val})}
					/>

					<ToggleControl
						label="Display only assigned terms from the post"
						help={assigned ? `Optionally, limit term results to those selected below` : ""}
						checked={assigned}
						onChange={toggleAssigned}
					/>

					<Button
						isSmall
						isSecondary
						onClick={() => setAttributes({terms: taxonomyTerms.map(term => term.id)})}
					>
						{__('Select All', 'flashblocks')}
					</Button>
					{" "}
					<Button
						isSmall
						isSecondary
						onClick={() => setAttributes({terms: []})}
					>
						{__('Clear All', 'flashblocks')}
					</Button>

					<br/> <br/>

					{/*{taxonomyTerms &&*/}
					{/*	<p>test</p>*/}
					{/*}*/}
					{taxonomyTerms && taxonomyTerms.map(term => (
						<div>
							<CheckboxControl
								key={term.id}
								label={`${term.name} (${term.count})`}
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
