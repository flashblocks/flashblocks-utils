import {__} from '@wordpress/i18n';
import {withSelect, useSelect} from '@wordpress/data';
import {SelectControl, CheckboxControl, PanelBody, Disabled} from '@wordpress/components';
import {InspectorControls, useBlockProps} from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';


import metadata from './block.json';
import './editor.scss';


const Edit = withSelect(
	select => {
		const taxonomies = select('core').getTaxonomies() || [];
		return {taxonomies};
	}
)(({taxonomies, attributes, setAttributes}) => {
	const {taxonomy, terms} = attributes;

	const onTaxonomyChange = (taxonomy) => {
		setAttributes({taxonomy: taxonomy, terms: []});
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
			<InspectorControls>
				<PanelBody title="Taxonomy Settings">

					<SelectControl
						label="Select Taxonomy"
						value={taxonomy}
						options={taxonomies.map(taxonomy => ({label: taxonomy.name, value: taxonomy.slug}))}
						onChange={onTaxonomyChange}
					/>

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
