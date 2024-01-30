!function(){"use strict";var e,t={690:function(e,t,n){var r=window.wp.blocks;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:String(t)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=window.React,a=(window.wp.i18n,window.wp.data),u=window.wp.components,f=window.wp.blockEditor,s=window.wp.serverSideRender,m=n.n(s),p=JSON.parse('{"u2":"flashblocks/taxonomy-links"}');function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var b=(0,a.withSelect)((function(e){return{taxonomies:e("core").getTaxonomies()||[]}}))((function(e){var t=e.taxonomies,n=e.attributes,r=e.setAttributes,o=n.textAlign,s=n.assigned,b=n.taxonomy,y=n.terms,d=(0,a.useSelect)((function(e){return b&&e("core").getEntityRecords("taxonomy",b,{per_page:-1})||[]}),[b]);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(f.BlockControls,null,(0,l.createElement)(f.AlignmentToolbar,{value:o,onChange:function(e){r({textAlign:e})}})),(0,l.createElement)(f.InspectorControls,null,(0,l.createElement)(u.PanelBody,{title:"Taxonomy Settings"},(0,l.createElement)(u.SelectControl,{label:"Select Taxonomy",value:b,options:t.map((function(e){return{label:e.name,value:e.slug}})),onChange:function(e){r({taxonomy:e,terms:[]})},help:"taxonomy: ".concat(b)}),(0,l.createElement)(u.ToggleControl,{label:"Display only assigned terms from the post",help:s?"Optionally, limit term results to those selected below":"",checked:s,onChange:function(){r({assigned:!s})}}),d&&d.map((function(e){return(0,l.createElement)("div",null,(0,l.createElement)(u.CheckboxControl,{key:e.id,label:e.name,checked:y.includes(e.id),onChange:function(t){return function(e,t){var n,o=t?[].concat(function(e){if(Array.isArray(e))return c(e)}(n=y)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e]):y.filter((function(t){return t!==e}));r({terms:o})}(e.id,t)}}))})))),(0,l.createElement)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){var r,o,c;r=e,o=t,c=n[t],(o=i(o))in r?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},(0,f.useBlockProps)()),(0,l.createElement)(u.Disabled,null,(0,l.createElement)(m(),{block:p.u2,attributes:n}))))})),y=b,d=window.wp.primitives,g=(0,l.createElement)(d.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(d.Path,{d:"M20 4H4v1.5h16V4zm-2 9h-3c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm.5 5c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3zM4 9.5h9V8H4v1.5zM9 13H6c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm.5 5c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3z",fillRule:"evenodd",clipRule:"evenodd"}));(0,r.registerBlockType)(p.u2,{edit:y,icon:g})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=function(t,n,o,i){if(!n){var c=1/0;for(f=0;f<e.length;f++){n=e[f][0],o=e[f][1],i=e[f][2];for(var l=!0,a=0;a<n.length;a++)(!1&i||c>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(l=!1,i<c&&(c=i));if(l){e.splice(f--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[n,o,i]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={386:0,679:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,c=n[0],l=n[1],a=n[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(a)var f=a(r)}for(t&&t(n);u<c.length;u++)i=c[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(f)},n=self.webpackChunknavigation_mega=self.webpackChunknavigation_mega||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[679],(function(){return r(690)}));o=r.O(o)}();