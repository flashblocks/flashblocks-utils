import {__} from '@wordpress/i18n';
import {useSelect} from '@wordpress/data';
import {
	PanelBody,
	Disabled,
	SelectControl,
	FormTokenField,
} from '@wordpress/components';
import {
	AlignmentToolbar,
	InspectorControls,
	BlockControls,
	useBlockProps,
} from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';

import metadata from './block.json';
import './editor.scss';

// 1) Base label builder (no ID)
function buildBaseHierarchicalLabel(post, allPosts) {
	let label = post.title.raw;
	let current = post;
	while (current.post_parent) {
		const parent = allPosts.find((p) => p.id === current.post_parent);
		if (!parent) break;
		label = parent.title.raw + ' – ' + label;
		current = parent;
	}
	return label;
}

const Edit = ({attributes, setAttributes}) => {
	const {textAlign, postType, selectedPosts, orderby, order} = attributes;

	// Fetch post types
	const postTypes = useSelect(
		(select) => select('core').getPostTypes({per_page: -1}) || [],
		[]
	);

	// Fetch posts for chosen post type
	const posts = useSelect(
		(select) =>
			postType
				? select('core').getEntityRecords('postType', postType, {
				per_page: -1,
			}) || []
				: [],
		[postType]
	);

	// When post type changes, reset the selection
	const onPostTypeChange = (newPostType) => {
		setAttributes({
			postType: newPostType,
			selectedPosts: [],
		});
	};

	// 2) Build label groups & final maps
	const labelGroups = {};
	posts.forEach((post) => {
		const baseLabel = buildBaseHierarchicalLabel(post, posts);
		if (!labelGroups[baseLabel]) {
			labelGroups[baseLabel] = [];
		}
		labelGroups[baseLabel].push(post);
	});

	const labelToIdMap = new Map();
	const idToLabelMap = {};

	Object.entries(labelGroups).forEach(([baseLabel, postArray]) => {
		if (postArray.length === 1) {
			// Single post with this label
			const singlePost = postArray[0];
			labelToIdMap.set(baseLabel, singlePost.id);
			idToLabelMap[singlePost.id] = baseLabel;
		} else {
			// Multiple posts share this label -> append (#ID)
			postArray.forEach((p) => {
				const uniqueLabel = `${baseLabel} (#${p.id})`;
				labelToIdMap.set(uniqueLabel, p.id);
				idToLabelMap[p.id] = uniqueLabel;
			});
		}
	});

	const suggestions = [...labelToIdMap.keys()];

	// 3) Convert label -> ID on selection
	const onPostsChange = (tokens) => {
		const selectedIds = tokens
			.map((token) => labelToIdMap.get(token) || null)
			.filter((id) => id !== null);
		setAttributes({selectedPosts: selectedIds});
	};

	// Show the final label in the field, from the stored IDs
	const valueLabels = selectedPosts
		.map((id) => idToLabelMap[id] || null)
		.filter((label) => label !== null);

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={(nextAlign) => setAttributes({textAlign: nextAlign})}
				/>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={__('Post Settings', 'flashblocks')}>
					<SelectControl
						label={__('Select Post Type', 'flashblocks')}
						value={postType}
						options={[
							{label: __('Select a post type', 'flashblocks'), value: ''},
							...postTypes.map((type) => ({
								label: type.name,
								value: type.slug,
							})),
						]}
						onChange={onPostTypeChange}
					/>

					{postType && (
						<FormTokenField
							label={__('Select Posts', 'flashblocks')}
							value={valueLabels}
							suggestions={suggestions}
							onChange={onPostsChange}
							displayTransform={(token) => token}
							__experimentalExpandOnFocus={true}
						/>
					)}

					<SelectControl
						label={__('Sorting Order', 'flashblocks')}
						value={orderby}
						onChange={(v) => {
							setAttributes({orderby: v});
						}}
						options={[
							{label: __('Default', 'flashblocks'), value: ''},
							{label: __('Title', 'flashblocks'), value: 'post_title'},
							{label: __('Date', 'flashblocks'), value: 'post_date'},
							{label: __('Modified', 'flashblocks'), value: 'post_modified'},
							{label: __('Random', 'flashblocks'), value: 'rand'},
							{label: __('Comment Count', 'flashblocks'), value: 'comment_count'},
						]}
					/>

					<SelectControl
						label={__('Order', 'flashblocks')}
						value={order}
						onChange={(v) => {
							setAttributes({order: v});
						}}
						options={[
							{label: __('Default', 'flashblocks'), value: ''},
							{label: __('Ascending', 'flashblocks'), value: 'ASC'},
							{label: __('Descending', 'flashblocks'), value: 'DESC'},
						]}
					/>

				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<Disabled>
					<ServerSideRender block={metadata.name} attributes={attributes}/>
				</Disabled>
			</div>
		</>
	);
};

export default Edit;
