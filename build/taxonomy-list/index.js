/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../node_modules/@wordpress/icons/build-module/library/pin.js":
/*!***********************************************************************************!*\
  !*** ../../../../../../node_modules/@wordpress/icons/build-module/library/pin.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const pin = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m21.5 9.1-6.6-6.6-4.2 5.6c-1.2-.1-2.4.1-3.6.7-.1 0-.1.1-.2.1-.5.3-.9.6-1.2.9l3.7 3.7-5.7 5.7v1.1h1.1l5.7-5.7 3.7 3.7c.4-.4.7-.8.9-1.2.1-.1.1-.2.2-.3.6-1.1.8-2.4.6-3.6l5.6-4.1zm-7.3 3.5.1.9c.1.9 0 1.8-.4 2.6l-6-6c.8-.4 1.7-.5 2.6-.4l.9.1L15 4.9 19.1 9l-4.9 3.6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pin);
//# sourceMappingURL=pin.js.map

/***/ }),

/***/ "./src/taxonomy-list/edit.js":
/*!***********************************!*\
  !*** ./src/taxonomy-list/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CategoriesEdit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "../../../../../../node_modules/@wordpress/icons/build-module/library/pin.js");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






// 6.1
// import {useEntityRecords} from '@wordpress/core-data';
// 6.0





// console.log("useEntityRecords", useEntityRecords);

function CategoriesEdit(_ref) {
  var _taxonomies$0$slug, _taxonomies$;
  var _ref$attributes = _ref.attributes,
    taxonomies = _ref$attributes.taxonomies,
    orderby = _ref$attributes.orderby,
    showHierarchy = _ref$attributes.showHierarchy,
    showPostCounts = _ref$attributes.showPostCounts,
    showOnlyTopLevel = _ref$attributes.showOnlyTopLevel,
    showEmpty = _ref$attributes.showEmpty,
    containerElement = _ref$attributes.containerElement,
    setAttributes = _ref.setAttributes;
  console.log('taxonomies', taxonomies);
  var allTaxonomies = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.useSelect)(function (select) {
    var _select = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.store),
      getTaxonomies = _select.getTaxonomies;
    return getTaxonomies();
    // const filteredTaxonomies = getTaxonomies( {} );
    // return filteredTaxonomies;
  }
  // [ postType ]
  );
  // const getAllTaxonomies = () => {
  // 	const taxonomies = wp.data.select("core").getTaxonomies()
  // 	// console.log(taxonomies);
  // 	return taxonomies;
  // }

  // const selectId = useInstanceId(CategoriesEdit, 'blocks-category-select');
  var query = {
    per_page: -1,
    hide_empty: !showEmpty,
    context: 'view',
    orderBy: orderby
  };
  if (showOnlyTopLevel) query.parent = 0;
  var _useEntityRecords = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.__experimentalUseEntityRecords)('taxonomy', (_taxonomies$0$slug = taxonomies === null || taxonomies === void 0 || (_taxonomies$ = taxonomies[0]) === null || _taxonomies$ === void 0 ? void 0 : _taxonomies$.slug) !== null && _taxonomies$0$slug !== void 0 ? _taxonomies$0$slug : 'category',
    // 'school_degree',
    query),
    categories = _useEntityRecords.records,
    isResolving = _useEntityRecords.isResolving;
  var getCategoriesList = function getCategoriesList(parentId) {
    if (!(categories !== null && categories !== void 0 && categories.length)) return [];
    if (parentId === null) return categories;
    return categories.filter(function (_ref2) {
      var parent = _ref2.parent;
      return parent === parentId;
    });
  };
  var getCategoryListClassName = function getCategoryListClassName(level) {
    return "wp-block-categories__list wp-block-categories__list-level-".concat(level);
  };
  var toggleAttribute = function toggleAttribute(attributeName) {
    return function (newValue) {
      return setAttributes((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributeName, newValue));
    };
  };
  var renderCategoryName = function renderCategoryName(name) {
    return !name ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('(Untitled)') : (0,lodash__WEBPACK_IMPORTED_MODULE_2__.unescape)(name).trim();
  };
  var renderCategoryList = function renderCategoryList() {
    var parentId = showHierarchy ? 0 : null;
    var categoriesList = getCategoriesList(parentId);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("ul", {
      className: getCategoryListClassName(0)
    }, categoriesList.map(function (category) {
      return renderCategoryListItem(category, 0);
    }));
  };
  var renderCategoryListItem = function renderCategoryListItem(category, level) {
    var childCategories = getCategoriesList(category.id);
    var id = category.id,
      link = category.link,
      count = category.count,
      name = category.name;
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
      key: id
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      href: link,
      target: "_blank",
      rel: "noreferrer noopener"
    }, renderCategoryName(name)), showPostCounts && (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "wp-block-categories__post-count"
    }, " (".concat(count, ")")), showHierarchy && !!childCategories.length && (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("ul", {
      className: getCategoryListClassName(level + 1)
    }, childCategories.map(function (childCategory) {
      return renderCategoryListItem(childCategory, level + 1);
    })));
  };

  // const renderCategoryDropdown = () => {
  // 	const parentId       = showHierarchy ? 0 : null;
  // 	const categoriesList = getCategoriesList(parentId);
  // 	return (
  // 		<>
  // 			<VisuallyHidden as="label" htmlFor={selectId}>
  // 				{__('Categories')}
  // 			</VisuallyHidden>
  // 			<select
  // 				id={selectId}
  // 				className="wp-block-categories__dropdown"
  // 			>
  // 				{categoriesList.map((category) =>
  // 					renderCategoryDropdownItem(category, 0)
  // 				)}
  // 			</select>
  // 		</>
  // 	);
  // };

  // const renderCategoryDropdownItem = (category, level) => {
  // 	const {id, count, name} = category;
  // 	const childCategories   = getCategoriesList(id);
  // 	return [
  // 		<option key={id}>
  // 			{Array.from({length: level * 3}).map(() => '\xa0')}
  // 			{renderCategoryName(name)}
  // 			{showPostCounts && ` (${count})`}
  // 		</option>,
  // 		showHierarchy &&
  // 		!!childCategories.length &&
  // 		childCategories.map((childCategory) =>
  // 			renderCategoryDropdownItem(childCategory, level + 1)
  // 		),
  // 	];
  // };

  // const [selectedTaxonomies, setSelectedTaxonomies] = useState([]);

  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", _objectSpread({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)()), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Settings')
  }, !isResolving && (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FormTokenField, {
    label: "Taxonomies",
    title: "Taxonomies",
    placeholder: "Type a taxonomy",
    suggestions: allTaxonomies === null || allTaxonomies === void 0 ? void 0 : allTaxonomies.map(function (tax) {
      return tax.name;
    }),
    value: taxonomies === null || taxonomies === void 0 ? void 0 : taxonomies.map(function (tax) {
      return tax.name;
    }),
    onChange: function onChange(newTaxonomyNames) {
      // setSelectedTaxonomies(newTaxonomyNames)
      var taxonomies = [];
      newTaxonomyNames.forEach(function (name) {
        var obj = allTaxonomies === null || allTaxonomies === void 0 ? void 0 : allTaxonomies.find(function (tax) {
          return tax.name === name;
        });
        if (obj) taxonomies.push({
          name: obj.name,
          slug: obj.slug
        });
      });
      setAttributes({
        taxonomies: taxonomies
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
    className: "edit-post-post-schedule"
  }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Order by",
    value: orderby,
    onChange: function onChange(v) {
      return setAttributes({
        orderby: v
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    href: "https://developer.wordpress.org/reference/classes/wp_query/#order-orderby-parameters",
    target: "__blank"
  }, "?"))), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show post counts'),
    checked: showPostCounts,
    onChange: toggleAttribute('showPostCounts')
  }), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show only top level categories'),
    checked: showOnlyTopLevel,
    onChange: toggleAttribute('showOnlyTopLevel')
  }), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show empty categories'),
    checked: showEmpty,
    onChange: toggleAttribute('showEmpty')
  }), !showOnlyTopLevel && (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show hierarchy'),
    checked: showHierarchy,
    onChange: toggleAttribute('showHierarchy')
  }), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Container Element (ul)'),
    checked: containerElement,
    onChange: toggleAttribute('containerElement')
  }))), isResolving && (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Categories')
  }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null)), !isResolving && (categories === null || categories === void 0 ? void 0 : categories.length) === 0 && (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Your site does not have any posts, so there is nothing to display here at the moment.')), !isResolving && (categories === null || categories === void 0 ? void 0 : categories.length) > 0 &&
  // (null //displayAsDropdown
  //  ? null//renderCategoryDropdown()
  //  :
  renderCategoryList()
  // )
  );
}

/***/ }),

/***/ "./src/taxonomy-list/save.js":
/*!***********************************!*\
  !*** ./src/taxonomy-list/save.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
function save() {
  return null;
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["lodash"];

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

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["coreData"];

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

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "../../../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!***********************************************************************************!*\
  !*** ../../../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "../../../../../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "../../../../../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!********************************************************************************!*\
  !*** ../../../../../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "../../../../../../node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "../../../../../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!**********************************************************************************!*\
  !*** ../../../../../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "../../../../../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "../../../../../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "../../../../../../node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***************************************************************************!*\
  !*** ../../../../../../node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./src/taxonomy-list/block.json":
/*!**************************************!*\
  !*** ./src/taxonomy-list/block.json ***!
  \**************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"sdm/taxonomy-list","version":"0.1.0","title":"Taxonomy List","category":"widgets","icon":"categories","description":"List taxonomies","attributes":{"taxonomies":{"type":"array","default":[]},"orderby":{"type":"string","default":""},"displayAsDropdown":{"type":"boolean","default":false},"showHierarchy":{"type":"boolean","default":false},"showPostCounts":{"type":"boolean","default":false},"showOnlyTopLevel":{"type":"boolean","default":false},"showEmpty":{"type":"boolean","default":false},"containerElement":{"type":"boolean","default":true}},"supports":{"align":true,"html":false,"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"textdomain":"taxonomy-list","editorScript":"file:./index.js","render":"file:./render.php"}');

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************************!*\
  !*** ./src/taxonomy-list/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/taxonomy-list/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/taxonomy-list/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/taxonomy-list/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
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
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map