!function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.blocks;function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:String(t)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=window.React,a=(window.wp.i18n,window.wp.data),i=window.wp.components,u=window.wp.blockEditor,c=window.wp.serverSideRender,s=e.n(c),f=JSON.parse('{"u2":"flashblocks/dynamic"}');function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(0,t.registerBlockType)(f.u2,{edit:function(e){var t=e.attributes,c=e.setAttributes,b=t.val,y=t.atts,d=(t.displayMetaData,t.displayHidden,(0,a.useSelect)((function(e){return e("core/editor").getCurrentPostId()}),[])),m=(0,a.useSelect)((function(e){return d?e("core/editor").getEditedPostAttribute("meta"):{}}),[d]);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(u.InspectorControls,null,(0,l.createElement)(i.PanelBody,{title:"Content"},(0,l.createElement)(i.TextControl,{label:"Value",help:"Like a shortcode",value:b,onChange:function(e){return c({val:e})}}),(0,l.createElement)(i.TextareaControl,{label:"Attributes",help:'Shortcode style e.g. prop="some value" prop2=value',value:y,onChange:function(e){return c({atts:e})}})),(0,l.createElement)(i.PanelBody,{title:"Metadata",initialOpen:!1},(0,l.createElement)(i.PanelRow,null,(0,l.createElement)("ul",null,Object.entries(null!=m?m:[]).map((function(e,t){var n,a,i=(a=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l,a,i=[],u=!0,c=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return i}}(n,a)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(n,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=i[0],c=i[1];return(0,l.createElement)("li",{key:u},(0,l.createElement)("strong",null,u),": ","object"===r(c)?JSON.stringify(c,null,2):c.toString())})))))),(0,l.createElement)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){var o,l,a;o=e,l=t,a=r[t],(l=n(l))in o?Object.defineProperty(o,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[l]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},(0,u.useBlockProps)()),!b&&(0,l.createElement)("div",null,"Enter a value"),!t.displayMetaData&&(0,l.createElement)(i.Disabled,null,(0,l.createElement)(s(),{block:f.u2,attributes:t})),t.displayMetaData&&(0,l.createElement)(s(),{block:f.u2,attributes:t})))}})}();