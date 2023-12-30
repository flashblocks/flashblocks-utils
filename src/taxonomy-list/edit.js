/**
 * External dependencies
 */
import {unescape} from 'lodash';

/**
 * WordPress dependencies
 */
import {
	PanelBody,
	Placeholder,
	Spinner,
	ToggleControl,
	FormTokenField,
	TextControl,
	PanelRow,
	VisuallyHidden,
} from '@wordpress/components';
import {useInstanceId} from '@wordpress/compose';
import {InspectorControls, useBlockProps} from '@wordpress/block-editor';
import {__} from '@wordpress/i18n';
import {pin} from '@wordpress/icons';

// 6.1
// import {useEntityRecords} from '@wordpress/core-data';
// 6.0
import {__experimentalUseEntityRecords as useEntityRecords} from '@wordpress/core-data';

import {useSelect} from '@wordpress/data';
import {useState} from '@wordpress/element';
import {store as coreStore} from '@wordpress/core-data';

// console.log("useEntityRecords", useEntityRecords);

export default function CategoriesEdit({
																				 attributes: {
																											 taxonomies,
																											 orderby,
																											 // displayAsDropdown,
																											 showHierarchy,
																											 showPostCounts,
																											 showOnlyTopLevel,
																											 showEmpty,
																											 containerElement,
																										 },
																				 setAttributes,
																			 }) {

	console.log('taxonomies', taxonomies);

	const allTaxonomies = useSelect(
		(select) => {
			const {getTaxonomies} = select(coreStore);
			return getTaxonomies();
			// const filteredTaxonomies = getTaxonomies( {} );
			// return filteredTaxonomies;
		},
		// [ postType ]
	);
	// const getAllTaxonomies = () => {
	// 	const taxonomies = wp.data.select("core").getTaxonomies()
	// 	// console.log(taxonomies);
	// 	return taxonomies;
	// }

	// const selectId = useInstanceId(CategoriesEdit, 'blocks-category-select');
	const query = {per_page: -1, hide_empty: !showEmpty, context: 'view', orderBy: orderby};
	if (showOnlyTopLevel) query.parent = 0;

	const {records: categories, isResolving} = useEntityRecords(
		'taxonomy',
		taxonomies?.[0]?.slug ?? 'category',
		// 'school_degree',
		query
	);

	const getCategoriesList = (parentId) => {
		if (!categories?.length) return [];
		if (parentId === null) return categories;
		return categories.filter(({parent}) => parent === parentId);
	};

	const getCategoryListClassName = (level) => {
		return `wp-block-categories__list wp-block-categories__list-level-${level}`;
	};

	const toggleAttribute = (attributeName) => (newValue) =>
		setAttributes({[attributeName]: newValue});

	const renderCategoryName = (name) =>
		!name ? __('(Untitled)') : unescape(name).trim();

	const renderCategoryList = () => {
		const parentId       = showHierarchy ? 0 : null;
		const categoriesList = getCategoriesList(parentId);
		return (
			<ul className={getCategoryListClassName(0)}>
				{categoriesList.map((category) =>
					renderCategoryListItem(category, 0)
				)}
			</ul>
		);
	};

	const renderCategoryListItem = (category, level) => {
		const childCategories         = getCategoriesList(category.id);
		const {id, link, count, name} = category;
		return (
			<li key={id}>
				<a href={link} target="_blank" rel="noreferrer noopener">
					{renderCategoryName(name)}
				</a>
				{showPostCounts && (
					<span className="wp-block-categories__post-count">
						{` (${count})`}
					</span>
				)}
				{showHierarchy && !!childCategories.length && (
					<ul className={getCategoryListClassName(level + 1)}>
						{childCategories.map((childCategory) =>
							renderCategoryListItem(childCategory, level + 1)
						)}
					</ul>
				)}
			</li>
		);
	};

	// const renderCategoryDropdown = () => {
	// 	const parentId       = showHierarchy ? 0 : null;
	// 	const categoriesList = getCategoriesList(parentId);
	// 	return (
	// 		<>
	// 			<VisuallyHidden as="label" htmlFor={selectId}>
	// 				{__('Categories')}
	// 			</VisuallyHidden>
	// 			<select
	// 				id={selectId}
	// 				className="wp-block-categories__dropdown"
	// 			>
	// 				{categoriesList.map((category) =>
	// 					renderCategoryDropdownItem(category, 0)
	// 				)}
	// 			</select>
	// 		</>
	// 	);
	// };

	// const renderCategoryDropdownItem = (category, level) => {
	// 	const {id, count, name} = category;
	// 	const childCategories   = getCategoriesList(id);
	// 	return [
	// 		<option key={id}>
	// 			{Array.from({length: level * 3}).map(() => '\xa0')}
	// 			{renderCategoryName(name)}
	// 			{showPostCounts && ` (${count})`}
	// 		</option>,
	// 		showHierarchy &&
	// 		!!childCategories.length &&
	// 		childCategories.map((childCategory) =>
	// 			renderCategoryDropdownItem(childCategory, level + 1)
	// 		),
	// 	];
	// };


	// const [selectedTaxonomies, setSelectedTaxonomies] = useState([]);

	return (
		<div {...useBlockProps()}>
			<InspectorControls>

				<PanelBody title={__('Settings')}>

					{!isResolving &&
						<FormTokenField
							label="Taxonomies"
							title="Taxonomies"
							placeholder="Type a taxonomy"
							suggestions={allTaxonomies?.map((tax) => tax.name)}
							value={taxonomies?.map((tax) => tax.name)}
							onChange={(newTaxonomyNames) => {
								// setSelectedTaxonomies(newTaxonomyNames)
								let taxonomies = []
								newTaxonomyNames.forEach(name => {
									const obj = allTaxonomies?.find(tax => tax.name === name);
									if (obj) taxonomies.push({name: obj.name, slug: obj.slug})
								})
								setAttributes({taxonomies})
							}}
						/>
					}

					<PanelRow className="edit-post-post-schedule">
						<TextControl
							label={"Order by"}
							value={orderby}
							onChange={(v) => setAttributes({orderby: v})}
						/>
						<p>
							<a href="https://developer.wordpress.org/reference/classes/wp_query/#order-orderby-parameters"
								 target={"__blank"}>?</a>
						</p>
					</PanelRow>

					{/*<ToggleControl
						label={__('Display as dropdown')}
						checked={displayAsDropdown}
						onChange={toggleAttribute('displayAsDropdown')}
					/>*/}
					<ToggleControl
						label={__('Show post counts')}
						checked={showPostCounts}
						onChange={toggleAttribute('showPostCounts')}
					/>
					<ToggleControl
						label={__('Show only top level categories')}
						checked={showOnlyTopLevel}
						onChange={toggleAttribute('showOnlyTopLevel')}
					/>
					<ToggleControl
						label={__('Show empty categories')}
						checked={showEmpty}
						onChange={toggleAttribute('showEmpty')}
					/>
					{!showOnlyTopLevel && (
						<ToggleControl
							label={__('Show hierarchy')}
							checked={showHierarchy}
							onChange={toggleAttribute('showHierarchy')}
						/>
					)}

					<ToggleControl
						label={__('Container Element (ul)')}
						checked={containerElement}
						onChange={toggleAttribute('containerElement')}
					/>

				</PanelBody>
			</InspectorControls>
			{isResolving && (
				<Placeholder icon={pin} label={__('Categories')}>
					<Spinner/>
				</Placeholder>
			)}
			{!isResolving && categories?.length === 0 && (
				<p>
					{__(
						'Your site does not have any posts, so there is nothing to display here at the moment.'
					)}
				</p>
			)}
			{!isResolving &&
				categories?.length > 0 &&
				// (null //displayAsDropdown
				//  ? null//renderCategoryDropdown()
				//  :
				renderCategoryList()
				// )
			}
		</div>
	);
}
