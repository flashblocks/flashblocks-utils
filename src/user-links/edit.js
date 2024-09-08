import {__} from '@wordpress/i18n';
import {useSelect} from '@wordpress/data';
import {
	PanelBody,
	Disabled,
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
		selectedUsers,
	} = attributes;

	const users = useSelect(select =>
		select('core').getUsers({per_page: -1}) || []
	, []);

	const selectedUserNames = selectedUsers.map(id => {
		const user = users.find(u => u.id === id);
		return user ? user.name : null;
	}).filter(name => name !== null);

	const onUsersChange = (tokens) => {
		const selectedUserIds = tokens.map(token => {
			const user = users.find(u => u.name === token);
			return user ? user.id : null;
		}).filter(id => id !== null);
		setAttributes({selectedUsers: selectedUserIds});
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
				<PanelBody title={__('User Settings', 'flashblocks')}>
					<FormTokenField
						label={__('Select Users', 'flashblocks')}
						value={selectedUserNames}
						suggestions={users.map(user => user.name)}
						onChange={onUsersChange}
						__experimentalExpandOnFocus={true}
					/>
					{/* Additional controls can be added here */}
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
