/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/class-selector/editor.scss":
/*!****************************************!*\
  !*** ./src/class-selector/editor.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!*************************************!*\
  !*** ./src/class-selector/index.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/class-selector/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);





 // Import custom CSS for styling

// Use the predefined classes mapping passed from PHP

const CLASSES = flashblocks_class_selector.classes || {};
const isAdmin = flashblocks_class_selector.is_admin;
const ClassSelector = ({
  className,
  setClassName,
  blockName
}) => {
  // State to keep track of selected classes for the block
  const [selectedClasses, setSelectedClasses] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  // State to keep track of possible classes to suggest
  const [possibleClasses, setPossibleClasses] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  // Update selected classes when className changes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const classesArray = className ? className.split(' ') : [];
    setSelectedClasses(classesArray);
  }, [className]);

  // Update possible classes when blockName changes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!blockName) {
      console.warn('Block name is undefined');
      setPossibleClasses([]);
      return;
    }
    let combinedClasses = [];

    // Iterate through the CLASSES object to find applicable classes for the current block
    Object.entries(CLASSES).forEach(([key, value]) => {
      const {
        blocks,
        classes,
        icon
      } = value;

      // Add classes if applicable to all blocks
      if (blocks === 'all') {
        combinedClasses = [...combinedClasses, ...classes.map(cls => ({
          name: cls,
          isGlobal: true,
          icon
        }))];
      }

      // Add classes if there are no registered styles
      if (blocks === 'no-styles' && (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)('core/blocks').getBlockStyles(blockName).length === 0) {
        combinedClasses = [...combinedClasses, ...classes.map(cls => ({
          name: cls,
          isGlobal: false,
          icon
        }))];
      }

      // Add classes if the blockName matches any of the blocks in the array
      if (Array.isArray(blocks) && blocks.includes(blockName)) {
        combinedClasses = [...combinedClasses, ...classes.map(cls => ({
          name: cls,
          isGlobal: false,
          icon
        }))];
      }
    });

    // Get the registered styles for the block
    const styles = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)('core/blocks').getBlockStyles(blockName) || [];

    // Map styles to class names with 'is-style-' prefix and filter out 'default' style
    const styleClasses = styles.filter(style => style.name !== 'default') // Remove default style
    .map(style => ({
      name: `is-style-${style.name}`,
      isGlobal: false,
      icon: ''
    }));

    // Merge predefined classes and style classes
    combinedClasses = [...combinedClasses, ...styleClasses];

    // Remove duplicates based on the 'name' property
    const uniqueClasses = Array.from(new Map(combinedClasses.map(item => [item.name, item])).values());
    setPossibleClasses(uniqueClasses);
  }, [blockName]);

  // Create a mapping from class names to icons
  const classIconMap = {};
  possibleClasses.forEach(cls => {
    classIconMap[cls.name] = cls.icon;
  });

  // Build suggestions array containing only class names (strings)
  const suggestions = possibleClasses.map(cls => cls.name);

  // Handle changes in selected classes
  const onChange = newClasses => {
    setSelectedClasses(newClasses);
    setClassName(newClasses.join(' '));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FormTokenField, {
    label: "Select CSS Classes",
    value: selectedClasses,
    suggestions: suggestions,
    onChange: onChange,
    maxSuggestions: 1000,
    tokenizeOnSpace: true,
    __experimentalExpandOnFocus: true,
    __experimentalShowHowTo: false,
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    __experimentalRenderItem: ({
      item
    }) => {
      const icon = classIconMap[item];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "form-token-field-list-item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "icon",
          children: icon || ''
        }), item]
      });
    }
  });
};

// Map the selected block's attributes to props
const mapSelectToProps = select => {
  const block = select('core/block-editor').getSelectedBlock();
  return {
    className: block?.attributes?.className || '',
    blockName: block?.name || ''
  };
};

// Map dispatch actions to props
const mapDispatchToProps = dispatch => {
  const {
    updateBlockAttributes
  } = dispatch('core/block-editor');
  const clientId = wp.data.select('core/block-editor').getSelectedBlockClientId();
  return {
    setClassName: className => {
      updateBlockAttributes(clientId, {
        className
      });
    }
  };
};

// Compose the ClassSelector component with data
const ClassSelectorWithData = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(mapSelectToProps), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withDispatch)(mapDispatchToProps))(ClassSelector);

// High-order component to add the ClassSelector to the block's inspector controls
const withClassSelector = BlockEdit => props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockEdit, {
    ...props
  }), isAdmin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
      title: "CSS Classes",
      initialOpen: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ClassSelectorWithData, {})
    })
  }), !isAdmin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorAdvancedControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ClassSelectorWithData, {})
  })]
});

// Add the filter to inject the ClassSelector into the block editor
wp.hooks.addFilter('editor.BlockEdit', 'my-plugin/with-class-selector', withClassSelector);
}();
/******/ })()
;
//# sourceMappingURL=index.js.map