import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';

export default function save() {

	const blockProps = useBlockProps.save({
		className: 'wp-block-navigation-item',
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content/>
		</div>
	)
}
