import {
	useBlockProps, InspectorControls, InnerBlocks, getBlocks, MediaUploadCheck, MediaUpload
} from '@wordpress/block-editor';

//[['core/paragraph', {placeholder: 'Ad block content...'}]]
let MY_TEMPLATE = [
	['core/paragraph', {placeholder: 'Menu content...'}]
];

// MY_TEMPLATE = null;

export default function Edit() {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps} onClick={(e) => {
			// const element = document.getElementById("test");
			// console.log(this);
		}}>
			<InnerBlocks template={MY_TEMPLATE}/>
		</div>
	)
}
