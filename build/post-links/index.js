/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/post-links/edit.js":
/*!********************************!*\
  !*** ./src/post-links/edit.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/post-links/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/post-links/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








// 1) Base label builder (no ID)

function buildBaseHierarchicalLabel(post, allPosts) {
  let label = post.title.raw;
  let current = post;
  while (current.post_parent) {
    const parent = allPosts.find(p => p.id === current.post_parent);
    if (!parent) break;
    label = parent.title.raw + ' – ' + label;
    current = parent;
  }
  return label;
}
const Edit = ({
  attributes,
  setAttributes
}) => {
  const {
    textAlign,
    postType,
    selectedPosts,
    orderby,
    order
  } = attributes;

  // Fetch post types
  const postTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select('core').getPostTypes({
    per_page: -1
  }) || [], []);

  // Fetch posts for chosen post type
  const posts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => postType ? select('core').getEntityRecords('postType', postType, {
    per_page: -1
  }) || [] : [], [postType]);

  // When post type changes, reset the selection
  const onPostTypeChange = newPostType => {
    setAttributes({
      postType: newPostType,
      selectedPosts: []
    });
  };

  // 2) Build label groups & final maps
  const labelGroups = {};
  posts.forEach(post => {
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
      postArray.forEach(p => {
        const uniqueLabel = `${baseLabel} (#${p.id})`;
        labelToIdMap.set(uniqueLabel, p.id);
        idToLabelMap[p.id] = uniqueLabel;
      });
    }
  });
  const suggestions = [...labelToIdMap.keys()];

  // 3) Convert label -> ID on selection
  const onPostsChange = tokens => {
    const selectedIds = tokens.map(token => labelToIdMap.get(token) || null).filter(id => id !== null);
    setAttributes({
      selectedPosts: selectedIds
    });
  };

  // Show the final label in the field, from the stored IDs
  const valueLabels = selectedPosts.map(id => idToLabelMap[id] || null).filter(label => label !== null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
        value: textAlign,
        onChange: nextAlign => setAttributes({
          textAlign: nextAlign
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Settings', 'flashblocks'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Post Type', 'flashblocks'),
          value: postType,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a post type', 'flashblocks'),
            value: ''
          }, ...postTypes.map(type => ({
            label: type.name,
            value: type.slug
          }))],
          onChange: onPostTypeChange
        }), postType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FormTokenField, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Posts', 'flashblocks'),
          value: valueLabels,
          suggestions: suggestions,
          onChange: onPostsChange,
          displayTransform: token => token,
          __experimentalExpandOnFocus: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sorting Order', 'flashblocks'),
          value: orderby,
          onChange: v => {
            setAttributes({
              orderby: v
            });
          },
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'flashblocks'),
            value: ''
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'flashblocks'),
            value: 'post_title'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Date', 'flashblocks'),
            value: 'post_date'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Modified', 'flashblocks'),
            value: 'post_modified'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Random', 'flashblocks'),
            value: 'rand'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Comment Count', 'flashblocks'),
            value: 'comment_count'
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Order', 'flashblocks'),
          value: order,
          onChange: v => {
            setAttributes({
              order: v
            });
          },
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'flashblocks'),
            value: ''
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ascending', 'flashblocks'),
            value: 'ASC'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Descending', 'flashblocks'),
            value: 'DESC'
          }]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)(),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Disabled, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default()), {
          block: _block_json__WEBPACK_IMPORTED_MODULE_5__.name,
          attributes: attributes
        })
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/post-links/index.js":
/*!*********************************!*\
  !*** ./src/post-links/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/post-links/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/post-links/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/post-links/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */


/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/post-links/editor.scss":
/*!************************************!*\
  !*** ./src/post-links/editor.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/post-links/style.scss":
/*!***********************************!*\
  !*** ./src/post-links/style.scss ***!
  \***********************************/
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

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ (function(module) {

module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./src/post-links/block.json":
/*!***********************************!*\
  !*** ./src/post-links/block.json ***!
  \***********************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"flashblocks/post-links","version":"0.1.0","title":"Post Links","category":"widgets","keywords":["post","CPT"],"icon":"","description":"Display posts.","example":{},"attributes":{"postType":{"type":"string","default":""},"selectedPosts":{"type":"array","default":[]},"orderby":{"type":"string","default":""},"order":{"type":"string","default":""},"textAlign":{"type":"string"},"assigned":{"type":"boolean","default":false},"showEmpty":{"type":"boolean","default":false},"terms":{"type":"array","default":[]},"container":{"type":"boolean","default":true}},"supports":{"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true,"link":true}},"align":true,"anchor":true,"ariaLabel":true,"html":true,"spacing":{"margin":true,"padding":true,"__experimentalDefaultControls":{"margin":false,"padding":false},"blockGap":true},"dimensions":{"minHeight":true},"position":{"sticky":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"textdomain":"flashblocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","//viewScript":"file:./view.js"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"post-links/index": 0,
/******/ 			"post-links/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkflashblocks"] = self["webpackChunkflashblocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["post-links/style-index"], function() { return __webpack_require__("./src/post-links/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map