!function(){"use strict";var e,t={443:function(e,t,n){var r=window.wp.blocks,o=(window.wp.i18n,window.wp.data),a=window.wp.components,i=window.wp.blockEditor,s=window.wp.serverSideRender,l=n.n(s),c=JSON.parse('{"UU":"flashblocks/content"}'),d=window.ReactJSXRuntime;(0,r.registerBlockType)(c.UU,{edit:({attributes:e,setAttributes:t})=>{const{atts:n,displayMetaData:r,displayHidden:s}=e,u=(0,o.useSelect)((e=>e("core/editor").getCurrentPostId()),[]);return(0,o.useSelect)((e=>u?e("core/editor").getEditedPostAttribute("meta"):{}),[u]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.InspectorControls,{children:(0,d.jsxs)(a.PanelBody,{title:"Content",children:[(0,d.jsx)(a.PanelRow,{children:(0,d.jsx)(a.TextareaControl,{label:"Attributes",help:'Shortcode style e.g. prop="some value" prop2=value',value:n,onChange:e=>t({atts:e})})}),(0,d.jsx)(a.PanelRow,{children:(0,d.jsx)(a.ToggleControl,{label:"Display Metadata",checked:r,onChange:e=>t({displayMetaData:e})})}),e.displayMetaData&&(0,d.jsx)(a.ToggleControl,{label:"Display hidden fields",checked:s,onChange:e=>t({displayHidden:e})})]})}),(0,d.jsxs)("div",{...(0,i.useBlockProps)(),children:[(0,d.jsx)(i.InnerBlocks,{}),!e.displayMetaData&&(0,d.jsx)(a.Disabled,{children:(0,d.jsx)(l(),{block:c.UU,attributes:e})}),e.displayMetaData&&(0,d.jsx)(l(),{block:c.UU,attributes:e})]})]})},save:function(){return(0,d.jsx)(i.InnerBlocks.Content,{})}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,o,a){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],a=e[d][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={583:0,935:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],s=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var d=l(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},n=self.webpackChunkflashblocks=self.webpackChunkflashblocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[935],(function(){return r(443)}));o=r.O(o)}();