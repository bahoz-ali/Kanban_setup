(()=>{"use strict";var n={24:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput {\r\n  /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type='button']::-moz-focus-inner,\r\n[type='reset']::-moz-focus-inner,\r\n[type='submit']::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type='button']:-moz-focusring,\r\n[type='reset']:-moz-focusring,\r\n[type='submit']:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type='checkbox'],\r\n[type='radio'] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type='number']::-webkit-inner-spin-button,\r\n[type='number']::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type='search'] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type='search']::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n",""]);const s=a},426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]),a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Uchen&display=swap);"]),a.push([n.id,"/* eslint-disable no-descending-specificity */\r\n\r\n:root {\r\n  --font-primary: poppins, cochin, georgia, times, 'Times New Roman', serif;\r\n  --font-nav: uchen, 'Segoe UI', tahoma, geneva, verdana, sans-serif;\r\n  --clr-primary: #fec453;\r\n  --clr-secondary: #fefbe9;\r\n  --clr-tertiary: #f0a04b;\r\n  --clr-green: #183a1d;\r\n  --clr-footer: #e1eedd;\r\n}\r\n\r\n/* ---------- general style ---------- */\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: var(--font-primary);\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  color: black;\r\n  font-style: normal;\r\n  text-decoration: none;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n}\r\n\r\nbutton {\r\n  margin: 0;\r\n}\r\n\r\n/* ---------- Components ---------- */\r\n.btn {\r\n  font-size: 1rem;\r\n  outline: none;\r\n  border: none;\r\n  padding: 0.8rem 0.7rem;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  color: var(--clr-green);\r\n}\r\n\r\n.btn.btn--primary {\r\n  background-color: var(--clr-primary);\r\n  font-weight: 700;\r\n  box-shadow: 0 0 8px 0 rgba(0, 255, 35, 0.5);\r\n}\r\n\r\n.btn.btn--secondary {\r\n  color: var(--clr-secondary);\r\n  background-color: var(--clr-tertiary);\r\n}\r\n\r\n.btn.btn--small {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 0.7rem;\r\n  background-color: transparent;\r\n  text-decoration: underline;\r\n  color: var(--clr-secondary);\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.fa-heart {\r\n  font-size: 1.4rem;\r\n  cursor: pointer;\r\n}\r\n\r\n/* ---------- Header Section ---------- */\r\n.header_section {\r\n  padding: 0 1rem;\r\n  background-color: var(--clr-secondary);\r\n}\r\n\r\n.nav_list {\r\n margin-top:0; display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 60%;\r\n}\r\n\r\n.nav_list .item:nth-child(2) {\r\n  text-decoration: underline;\r\n}\r\n\r\n.nav_list img {\r\n  width: 50px;\r\n}\r\n\r\n.nav_list .item a {\r\n  color: var(--clr-primary);\r\n  font-size: 1rem;\r\n  font-family: var(--font-nav);\r\n  font-weight: 600;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.nav_list .item a:hover {\r\n  color: var(--clr-tertiary);\r\n}\r\n\r\n/* ---------- home main section ---------- */\r\n.main_section {\r\n  margin: 0 auto;\r\n  padding: 3rem 3rem 4rem;\r\n  width: 100%;\r\n  background-color: var(--clr-tertiary);\r\n}\r\n\r\n.meal_list {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 2rem 2rem;\r\n}\r\n\r\n.meal {\r\n  width: 100%;\r\n}\r\n\r\n.meal .meal__img {\r\n  height: 250px;\r\n}\r\n\r\n.meal img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.meal .meal__info {\r\n  background-color: var(--clr-footer);\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  padding: 1rem 1rem 0;\r\n  font-size: 1rem;\r\n  color: var(--clr-green);\r\n  font-weight: 700;\r\n}\r\n\r\n.meal__info .heart_count {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.meal .meal__body {\r\n  background-color: var(--clr-footer);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding: 1rem 0;\r\n}\r\n\r\n.popup-container {\r\n  display: grid;\r\n  border: 2px solid var(--clr-green);\r\n  padding: 20px;\r\n  grid-template-columns: auto auto auto;\r\n}\r\n\r\nimg.food-list {\r\n  display: grid;\r\n  margin: 20px;\r\n}\r\n\r\n/* ---------- Popup section ---------- */\r\n.popup-section {\r\n  background: var(--clr-primary);\r\n  display: none;\r\n}\r\n\r\n.popup-section.popup--open {\r\n  display: block;\r\n}\r\n\r\ni.fas.fa-times {\r\n  padding-left: 100%;\r\n}\r\n\r\n.popup {\r\n  width: 60vw;\r\n  height: 90vh;\r\n  padding: 30px 50px;\r\n  background-color: var(--clr-green);\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  border-radius: 20px;\r\n  overflow-y: scroll;\r\n  color: #d2d1d3;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .display .description {\r\n  width: 90%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .display .description img {\r\n  width: 300px;\r\n  height: 300px;\r\n  object-fit: cover;\r\n  border-radius: 8px;\r\n}\r\n\r\n.popup .display .description .food-title {\r\n  font-size: 2.8rem;\r\n}\r\n\r\n.popup .display .display-details {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#meal_name {\r\n  margin: 0.5rem 0 0 0;\r\n}\r\n\r\n#meal_desc {\r\n  font-size: 0.7rem;\r\n  line-height: 1.1;\r\n  text-align: justify;\r\n}\r\n\r\n#more {\r\n  display: none;\r\n}\r\n\r\n.display .display-details li {\r\n  list-style: none;\r\n  font-size: 0.8rem;\r\n  padding-bottom: 0.2rem;\r\n  line-height: 1;\r\n}\r\n\r\n.popup .comment-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.comment-section .comment-show {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.comment-section .comment-show h3 {\r\n  font-size: 1rem;\r\n  font-weight: 900;\r\n  padding: 0;\r\n  margin: 0.5rem 0 0 0;\r\n  color: #d2d1d3;\r\n}\r\n\r\n.popup .comment-section .comment-show ul {\r\n  list-style: none;\r\n  font-style: italic;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.popup .comment-section .comment {\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.comment-section .comment h3 {\r\n  font-size: 1.5rem;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.comment-section .comment form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 100%;\r\n}\r\n\r\n#comment_form input {\r\n  width: 100%;\r\n  font-size: 0.8rem;\r\n  padding: 5px 5px 5px 10px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  font-family: var(--font-primary);\r\n}\r\n\r\n#description {\r\n  font-family: var(--font-primary);\r\n  width: 100%;\r\n  font-size: 0.8rem;\r\n  border: none;\r\n  border-radius: 3px;\r\n  padding: 5px 5px 5px 10px;\r\n  height: 5rem;\r\n  text-align: start;\r\n}\r\n\r\n.meal_detail {\r\n  font-size: 0.7rem;\r\n  color: var(--clr-primary);\r\n}\r\n\r\n/* ---------- footer ---------- */\r\n.footer {\r\n  font-size: 1rem;\r\n  background-color: var(--clr-footer);\r\n  color: var(--clr-green);\r\n  padding: 2rem 1rem 2rem 2rem;\r\n  border-top: 2px solid var(--clr-green);\r\n  border-bottom: 2px solid var(--clr-green);\r\n}\r\n",""]);const s=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],d=i[l]||0,m="".concat(l," ").concat(d);i[l]=d+1;var p=e(m),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(u);else{var f=o(u,t);t.byIndex=s,r.splice(s,0,{identifier:m,updater:f,references:1})}a.push(m)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);r[s].references--}for(var c=t(n,o),l=0;l<i.length;l++){var d=e(i[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}i=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),s=e(565),c=e.n(s),l=e(216),d=e.n(l),m=e(589),p=e.n(m),u=e(24),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),r()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;var h=e(426),y={};y.styleTagTransform=p(),y.setAttributes=c(),y.insert=a().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=d(),r()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals;const g="CSZHIxGQlLcCAJ4jGdoG",b="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi",v={searchMeals:"https://www.themealdb.com/api/json/v1/1/search.php?f=k",baseMealUrl:"https://www.themealdb.com/api/json/v1/1",endPointLikes:`${b}/apps/${g}/likes`,endPointComments:`${b}/apps/${g}/comments`},x=async()=>{try{const n=await fetch(v.searchMeals);return(await n.json()).meals}catch(n){return[]}},w=document.querySelector(".meal_list"),_=document.querySelector(".comments"),S=document.querySelector(".total-comments"),k=async()=>{const n=await x();n&&n.forEach((async n=>{const r=await(async n=>{const r=(await(async()=>{try{const n=await fetch(v.endPointLikes);return await n.json()}catch(n){return[]}})()).find((r=>+r.item_id==+n));return r&&r&&"number"==typeof r.likes?r.likes:0})(n.idMeal);n.likes=r;const e=(n=>{if(!n)return null;const{strMeal:r,strMealThumb:e,idMeal:t,likes:o}=n,i=document.createElement("div");return i.setAttribute("data-idmeal",t),i.classList.add("meal"),i.innerHTML=`\n  <div class="meal__header">\n            <div class="meal__img">\n              <img\n                src="${e}"\n                alt="${r}"\n              />\n            </div>\n\n            <div class="meal__info">\n              <p>${r}</p>\n              <div class="heart_count">\n                <i id="heart_btn" data-idmeal=${t} class="fa-solid fa-heart"></i>\n                <p id="count_likes">${o}</p>\n              </div>\n            </div>\n          </div>\n\n          <div class="meal__body">\n            <div class="btn_container">\n              <button id="comment_btn" data-idmeal=${t} class="btn btn--primary" type="button">Comments</button>\n            </div>\n          </div>\n  \n  `,i})(n);w.appendChild(e)}))},z=async n=>{_.innerHTML="";const r=await(async n=>{if(n)try{const r=await fetch(`${v.endPointComments}?item_id=${n}`);return await r.json()}catch(n){return[]}})(n);r&&r.error?S.innerHTML=0:(S.innerHTML=r.length,r.forEach((n=>{const r=(n=>{const r=document.createElement("li");return r.classList.add("comments-list"),r.innerHTML=`\n      ${n.creation_date}  <span>${n.username}:</span> ${n.comment}`,r})(n);_.appendChild(r)})))};function C(){const n=document.getElementById("dots"),r=document.getElementById("more"),e=document.getElementById("show_more");"none"===n.style.display?(n.style.display="inline",e.innerHTML="Read more",r.style.display="none"):(n.style.display="none",e.innerHTML="Read less",r.style.display="inline")}const E=document.querySelector(".popup-section"),M=document.querySelector(".meal_list"),T=document.querySelector("#close_popup"),I=document.querySelector("#comment_form"),L=document.querySelector("#name"),A=document.querySelector("#description");document.addEventListener("DOMContentLoaded",(()=>{(async()=>{const n=document.querySelector(".meal_count"),r=await x();n.innerHTML=r?r.length:0})(),k()})),M.addEventListener("click",(async n=>{const{target:r}=n;if("comment_btn"===r.id){const n=r.dataset.idmeal;I.setAttribute("data-idmeal",n),(async n=>{const r=document.querySelector("#popup_img"),e=document.querySelector("#meal_country"),t=document.querySelector("#meal_cat"),o=document.querySelector("#meal_ing"),i=document.querySelector("#meal_name"),a=document.querySelector("#meal_desc"),s=document.getElementById("show_more"),c=await(async n=>{const r=`${v.baseMealUrl}/lookup.php?i=${n}`;try{const n=await fetch(r);return(await n.json()).meals[0]}catch(n){return null}})(n);if(!c)return;const{strMealThumb:l,strInstructions:d,strArea:m,strCategory:p,strMeal:u,strIngredient1:f,strIngredient2:h,strIngredient3:y,strIngredient4:g}=c;r.setAttribute("src",l),i.innerHTML=u,e.innerHTML=m,t.innerHTML=p,a.innerHTML=(n=>`\n    ${n.substring(0,100)}<span id="dots">....</span>\n    <span id="more">${n.substring(100)}</span> \n    `)(d),o.innerHTML=`${f}, ${h}, ${y}, ${g}`,s.addEventListener("click",C),z(n)})(n),E.classList.add("popup--open")}else"heart_btn"===r.id&&((n=>{const r=n.parentElement.querySelector("#count_likes");r.innerHTML=Number(r.innerHTML)+1})(r),(async n=>{if(!n)return;const r={item_id:n},e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};await fetch(v.endPointLikes,e)})(r.dataset.idmeal))})),T.addEventListener("click",(()=>{E.classList.remove("popup--open")})),I.addEventListener("submit",(async n=>{n.preventDefault();const r=n.target.dataset.idmeal,e=L.value,t=A.value;await(async n=>{if(n)try{const r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};await fetch(v.endPointComments,r)}catch(n){throw new Error(n)}})({item_id:r,username:e,comment:t}),z(r),I.reset()}))})()})();