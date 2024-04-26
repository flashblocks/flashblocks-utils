wp.domReady(() => {
	console.log('Block styles enhancement script initialized.');

	wp.blocks.getBlockTypes().forEach(blockType => {
		if (blockType.styles && blockType.styles.length) {
			blockType.styles.forEach(style => {
				const originalStyle = {
					...style,
					isDefault: false,
					__unstable_isActive: (blockAttributes) => {
						return blockAttributes.className && blockAttributes.className.includes(style.name);
					}
				};

				// Extend the existing unregister and register logic to ensure proper toggle handling
				wp.blocks.unregisterBlockStyle(blockType.name, style.name);
				wp.blocks.registerBlockStyle(blockType.name, {
					...originalStyle,
					onToggle: (isActive, blockAttributes, setAttributes) => {
						let currentClasses = blockAttributes.className || '';
						const styleClassNameRegex = new RegExp(`\\b${style.name}\\b`, 'g');
						const hasClass = currentClasses.includes(style.name);

						if (hasClass && !isActive) {
							// Remove the class
							currentClasses = currentClasses.replace(styleClassNameRegex, '').trim();
						} else if (!hasClass && isActive) {
							// Add the class
							currentClasses = `${currentClasses} ${style.name}`.trim();
						}

						setAttributes({ className: currentClasses });
						console.log(`Toggled style: ${style.name}, isActive: ${isActive}`);
					}
				});
			});
		}
	});
});
