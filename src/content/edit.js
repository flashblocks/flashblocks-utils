/*
* @todo Is this better?
*   https://wordpress.stackexchange.com/questions/385880/wp-blocks-gutenberg-serversiderender-not-rendering-content
*/

import {__} from '@wordpress/i18n';
import {withSelect, useSelect} from '@wordpress/data';
import {
	SelectControl,
	CheckboxControl,
	PanelBody,
	PanelRow,
	Disabled,
	ToggleControl,
	TextareaControl,
	InnerBlock
} from '@wordpress/components';
import {
	InspectorControls,
	useBlockProps,
	InnerBlocks,
	AlignmentToolbar,
	BlockControls,
	TextControl,
	RichText,
	useBlockDisplayInformation,
} from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import {postCategories, postTerms} from '@wordpress/icons';


import metadata from './block.json';
import './editor.scss';


const Edit = ({attributes, setAttributes}) => {
	const {
					atts,
					displayMetaData,
					displayHidden,
				} = attributes;

	// Fetch the current post's ID
	const postId = useSelect(select => select('core/editor').getCurrentPostId(), []);

	// Fetch all metadata for the current post
	const metaData = useSelect(select => {
		if (!postId) return {};
		return select('core/editor').getEditedPostAttribute('meta');
	}, [postId]);


	return (
		<>
			<InspectorControls>
				<PanelBody title="Content">
					<PanelRow>
						<TextareaControl
							label="Attributes"
							help='Shortcode style e.g. prop="some value" prop2=value'
							value={atts}
							onChange={(val) => setAttributes({atts: val})}
						/>
					</PanelRow>

					<PanelRow>
						<ToggleControl
							label="Display Metadata"
							checked={displayMetaData}
							onChange={(val) => setAttributes({displayMetaData: val})}
						/>
					</PanelRow>

					{attributes.displayMetaData &&

						<ToggleControl
							label="Display hidden fields"
							checked={displayHidden}
							onChange={(val) => setAttributes({displayHidden: val})}
						/>

					}

				</PanelBody>

				{/*<PanelBody title="Metadata" initialOpen={false}>*/}
				{/*	<PanelRow>*/}
				{/*		<ul>*/}
				{/*			{Object.entries(metaData).map(([key, value], index) => (*/}
				{/*				<li key={key}>*/}
				{/*					<strong>{key}</strong>: {value.toString()}*/}
				{/*				</li>*/}
				{/*			))}*/}
				{/*		</ul>*/}
				{/*	</PanelRow>*/}
				{/*</PanelBody>*/}

			</InspectorControls>

			<div {...useBlockProps()}>
				<InnerBlocks></InnerBlocks>

				{!attributes.displayMetaData &&
					<Disabled>
						<ServerSideRender
							block={metadata.name}
							attributes={attributes}
						/>
					</Disabled>
				}

				{attributes.displayMetaData &&
					<ServerSideRender
						block={metadata.name}
						attributes={attributes}
					/>
				}
			</div>

		</>
	);
};

export default Edit;
