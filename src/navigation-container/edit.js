import {
	useBlockProps, InspectorControls, InnerBlocks, getBlocks, MediaUploadCheck, MediaUpload
} from '@wordpress/block-editor';

//[['core/paragraph', {placeholder: 'Ad block content...'}]]
let MY_TEMPLATE = [
	['core/paragraph', {placeholder: 'Menu content...'}]
];

import './index.scss'

// MY_TEMPLATE = null;

export default function Edit() {
	const blockProps = useBlockProps({
		className: 'wp-block-navigation-item',
	});

	return (
		<div {...blockProps} >
			<InnerBlocks template={MY_TEMPLATE}/>
		</div>
	)
}
