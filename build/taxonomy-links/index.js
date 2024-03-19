!function(){"use strict";var e,t={690:function(e,t,n){var r=window.wp.blocks;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function l(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:String(t)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=window.React,a=window.wp.i18n,u=window.wp.data,s=window.wp.components,f=window.wp.blockEditor,m=window.wp.serverSideRender,b=n.n(m),p=JSON.parse('{"u2":"flashblocks/taxonomy-links"}');function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var y=(0,u.withSelect)((function(e){return{taxonomies:e("core").getTaxonomies()||[]}}))((function(e){var t=e.taxonomies,n=e.attributes,r=e.setAttributes,o=n.textAlign,m=n.assigned,y=n.taxonomy,d=n.terms,h=n.showEmpty,g=n.orderby,w=(0,u.useSelect)((function(e){return y&&e("core").getEntityRecords("taxonomy",y,{per_page:-1})||[]}),[y]);return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(f.BlockControls,null,(0,i.createElement)(f.AlignmentToolbar,{value:o,onChange:function(e){r({textAlign:e})}})),(0,i.createElement)(f.InspectorControls,null,(0,i.createElement)(s.PanelBody,{title:"Taxonomy Settings"},(0,i.createElement)(s.SelectControl,{label:"Select Taxonomy",value:y,options:t.map((function(e){return{label:e.name,value:e.slug}})),onChange:function(e){r({taxonomy:e,terms:[]})},help:"taxonomy: ".concat(y)}),(0,i.createElement)(s.SelectControl,{label:(0,a.__)("Sort Terms By","flashblocks"),value:g,options:[{label:"Default",value:""},{label:"Name",value:"name"},{label:"Count",value:"count"},{label:"Ascending",value:"ASC"},{label:"Descending",value:"DESC"}],onChange:function(e){return r({orderby:e})}}),(0,i.createElement)(s.ToggleControl,{label:"Show empty categories",checked:h,onChange:function(e){return r({showEmpty:e})}}),(0,i.createElement)(s.ToggleControl,{label:"Display only assigned terms from the post",help:m?"Optionally, limit term results to those selected below":"",checked:m,onChange:function(){r({assigned:!m})}}),(0,i.createElement)(s.Button,{isSmall:!0,isSecondary:!0,onClick:function(){return r({terms:w.map((function(e){return e.id}))})}},(0,a.__)("Select All","flashblocks"))," ",(0,i.createElement)(s.Button,{isSmall:!0,isSecondary:!0,onClick:function(){return r({terms:[]})}},(0,a.__)("Clear All","flashblocks")),(0,i.createElement)("br",null)," ",(0,i.createElement)("br",null),w&&w.map((function(e){return(0,i.createElement)("div",null,(0,i.createElement)(s.CheckboxControl,{key:e.id,label:"".concat(e.name," (").concat(e.count,")"),checked:d.includes(e.id),onChange:function(t){return function(e,t){var n,o=t?[].concat(function(e){if(Array.isArray(e))return c(e)}(n=d)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e]):d.filter((function(t){return t!==e}));r({terms:o})}(e.id,t)}}))})))),(0,i.createElement)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){var r,o,c;r=e,o=t,c=n[t],(o=l(o))in r?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},(0,f.useBlockProps)()),(0,i.createElement)(s.Disabled,null,(0,i.createElement)(b(),{block:p.u2,attributes:n}))))})),d=y,h=window.wp.primitives,g=(0,i.createElement)(h.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)(h.Path,{d:"M20 4H4v1.5h16V4zm-2 9h-3c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm.5 5c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3zM4 9.5h9V8H4v1.5zM9 13H6c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm.5 5c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3z",fillRule:"evenodd",clipRule:"evenodd"}));(0,r.registerBlockType)(p.u2,{edit:d,icon:g})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=function(t,n,o,l){if(!n){var c=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],l=e[s][2];for(var i=!0,a=0;a<n.length;a++)(!1&l||c>=l)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(i=!1,l<c&&(c=l));if(i){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[n,o,l]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={386:0,679:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,c=n[0],i=n[1],a=n[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(a)var s=a(r)}for(t&&t(n);u<c.length;u++)l=c[u],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(s)},n=self.webpackChunkflashblocks=self.webpackChunkflashblocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[679],(function(){return r(690)}));o=r.O(o)}();