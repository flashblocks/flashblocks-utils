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

const Edit = ({attributes, setAttributes}) => {
	const {
					textAlign,
					postType,
					selectedPosts,
				} = attributes;

	const postTypes = useSelect(select =>
			select('core').getPostTypes({per_page: -1}) || []
		, []);

	const posts = useSelect(select =>
			postType ? select('core').getEntityRecords('postType', postType, {per_page: -1}) || [] : []
		, [postType]);

	const selectedPostTitles = selectedPosts.map(id => {
		const post = posts.find(p => p.id === id);
		return post ? post.title.raw : null;
	}).filter(title => title !== null);

	const onPostTypeChange = (newPostType) => {
		setAttributes({postType: newPostType, selectedPosts: []});
	};

	const onPostsChange = (tokens) => {
		const selectedPostIds = tokens.map(token => {
			const post = posts.find(p => p.title.raw === token);
			return post ? post.id : null;
		}).filter(id => id !== null);
		setAttributes({selectedPosts: selectedPostIds});
	};

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
							...postTypes.map(type => ({label: type.name, value: type.slug}))
						]}
						onChange={onPostTypeChange}
					/>

					{postType && (
						<FormTokenField
							label={__('Select Posts', 'flashblocks')}
							value={selectedPostTitles}
							suggestions={posts.map(post => post.title.raw)}
							onChange={onPostsChange}
							displayTransform={(token) => token} // No decoding needed as raw titles are used
							__experimentalExpandOnFocus={true}
						/>
					)}

					{/* Additional controls go here */}

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
};

export default Edit;
