/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    padding: 0;\\n    margin: 0;\\n    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Helvetica, Arial, sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\";\\n    color: rgb(212, 212, 212);\\n}\\n\\n.container {\\n    display: grid;\\n    grid-template-columns: 1fr auto 3fr 1fr;\\n    height: 100vh;\\n}\\n\\n.left {\\n    display: grid;\\n    grid-template-rows: auto auto auto auto;\\n    background-color: #261C2C;\\n    align-content: space-between;\\n    min-width: 240px;\\n    text-align: center;\\n    padding: 8px 0;\\n}\\n\\n/* .left, .tasks {\\n    box-shadow: 0 0 0 15px rgb(0 0 0 / 10%);\\n    clip-path: inset(0px -15px 0px 0px);\\n} */\\n\\n.projects, .by-date {\\n    display: grid;\\n    grid-template-rows: repeat( auto-fit, minmax(32px, 32px) );\\n    max-height: 226px;\\n    overflow: auto;    \\n}\\n\\n.left > div > button {\\n    text-align: left;\\n    padding: 8px;\\n    letter-spacing: 2px;\\n    background-color: #3E2C41;\\n    border: none;\\n    overflow: hidden;\\n}\\n\\n.left > div > button:hover {\\n    background-color: #2c1e2b;\\n}\\n\\n.left > div > button:active {\\n    background-color: #513955;\\n}\\n\\nbutton:focus-visible {\\n    outline: none;\\n    box-shadow: none;\\n}\\n\\n\\n.selected {\\n    background-color: #2c1e2b !important;\\n}\\n\\nh1, h6 {\\n    letter-spacing: 1px;\\n}\\n\\n.middle{\\n    display: grid;\\n    align-items: center;\\n    background-color: #5C527F;\\n}\\n\\n.card {\\n    height: 100%;\\n    width: 100%;\\n    background-color: #271a23;\\n    display: grid;\\n    grid-template-rows: 1fr 96px;\\n    border-radius: 2px;\\n}\\n\\n.content {\\n    display: grid;\\n    height: 100%;\\n    grid-template-rows: auto 1fr;\\n    padding: 16px;\\n    margin-right: 4px;\\n}\\n\\n.card-header{\\n    display: grid;\\n    grid-template-columns: 1fr 4fr;\\n    align-items: center;\\n    padding: 8px;\\n    row-gap: 4px;\\n}\\n\\n.card-info {\\n    padding: 8px;\\n    display: grid;\\n    grid-auto-rows: 1fr;\\n}\\n\\n.description {\\n    font-size: 14px;\\n    letter-spacing: 1px;\\n}\\n\\n.finished {\\n    display: grid;\\n    align-items: center;\\n    justify-content: center;\\n    border-top: 2px solid #aa8daa;\\n}\\n\\n.finished-task {\\n    border: none;\\n    background-color: #553942;\\n    border-radius: 24px;\\n    height: 64px;\\n    width: 64px;\\n}\\n\\n.finished-task:hover {\\n    background-color: #37263a;\\n}\\n\\n.finished-task:active {\\n    background-color: #6b4d70;\\n}\\n\\n.finished-task > img {\\n    margin-bottom: -2px;\\n}\\n\\n.tasks {\\n    background-color: #2c1e2b;\\n    width: 256px;\\n}\\n\\n.checked {\\n    text-decoration: line-through;\\n}\\n\\n\\n.right {\\n    background-color: #261C2C;\\n}\\n\\nlabel {\\n    color: #aa8daa;\\n    font-size: 12px;\\n    letter-spacing: 2px;\\n}\\n\\nul {\\n    display: grid;\\n    gap: 4px;\\n}\\n\\nli {\\n    list-style: none;\\n    display: grid;\\n    grid-template-columns: auto 1fr;\\n    gap: 12px;\\n}\\n\\nli > button {\\n    width: 27px;\\n    height: 27px;\\n    border: none;\\n    background-color: #37283a;\\n    border-radius: 2px;\\n}\\n\\n.card-info > div {\\n    display: grid;\\n    height: fit-content;\\n    gap: 8px;\\n}\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n.input {\\n    word-wrap: break-word;\\n    width: 100%;\\n    padding: 4px;\\n    font-size: 16px;\\n    background-color: #1a1116;\\n    color: rgb(212, 212, 212);\\n    border: none;\\n}\\n.input:focus {\\n    outline:none;\\n}\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n.css-input {\\n    width: 96%;\\n    padding: 4px;\\n    font-size: 12px;\\n    border-width: 0px;\\n    border-color: #CCCCCC;\\n    background-color: #513955;\\n    color: rgb(212, 212, 212);\\n    border-style: solid;\\n    border-radius: 2px;\\n    box-shadow: 0px 0px 5px rgba(66,66,66,.50);\\n    text-shadow: 0px 0px 5px rgba(66,66,66,.75);\\n    margin-top: -3px;\\n}\\n.css-input:focus {\\n    outline:none;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo_list/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo_list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo_list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo_list/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo_list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo_list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo_list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo_list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo_list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo_list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/createProject.js":
/*!*********************************!*\
  !*** ./src/js/createProject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _newProjectButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProjectButton */ \"./src/js/newProjectButton.js\");\n\n\nclass Project {\n    constructor(name){\n        this.name = name.toUpperCase();\n    }\n\n    createButton(appendWhere){\n        appendWhere.appendChild((0,_newProjectButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.name, this.name.toLowerCase()));\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://odin-todo_list/./src/js/createProject.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ \"./src/js/newProject.js\");\n/* harmony import */ var _selected__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selected */ \"./src/js/selected.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProject */ \"./src/js/createProject.js\");\n/* harmony import */ var _newProjectButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newProjectButton */ \"./src/js/newProjectButton.js\");\n/* harmony import */ var _informationInOnePlace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./informationInOnePlace */ \"./src/js/informationInOnePlace.js\");\n/* harmony import */ var _populateNote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./populateNote */ \"./src/js/populateNote.js\");\n/* harmony import */ var _markChecked__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./markChecked */ \"./src/js/markChecked.js\");\n\n\n\n\n\n\n\n\n\nconst projectsSelector = document.querySelector('.projects');\nconst byDateSelector = document.querySelector('.by-date');\n\nlet personalProject = new _createProject__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('personal');\nlet workProject = new _createProject__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('work');\n\npersonalProject.createButton(projectsSelector);\nworkProject.createButton(projectsSelector);\nprojectsSelector.appendChild((0,_newProjectButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('+', 'create-new-project'));\n\n\nlet info = new _informationInOnePlace__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n\n// creates ToDo item in 'personal' project\ninfo.addToDoItem('Test', 'personal');\n// displays projects and what todo items they are holding\nconsole.table(info.informationHandler);\n// displays ToDo item with id of 0\nconsole.table(info.toDoItemArray[0]);\n\n// populates card with ToDo item of id 0\n// populate(info.toDoItemArray[0]);\n\ndocument.querySelector('.checkList').onclick = function(event){\n    (0,_markChecked__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(event);\n}\n\nprojectsSelector.addEventListener('click', (event)=>{\n    ;(0,_newProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event, '+');\n    (0,_selected__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event, projectsSelector, byDateSelector);\n});\n\nbyDateSelector.addEventListener('click', (event)=>{\n    (0,_selected__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event, projectsSelector, byDateSelector);\n});\n\n//# sourceURL=webpack://odin-todo_list/./src/js/index.js?");

/***/ }),

/***/ "./src/js/informationInOnePlace.js":
/*!*****************************************!*\
  !*** ./src/js/informationInOnePlace.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoItem */ \"./src/js/toDoItem.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ \"./src/js/createProject.js\");\n\n\n\nclass Information {\n    constructor(){\n        this.projectsArray = [];\n        this.toDoItemArray = [];\n        this.informationHandler = {};\n    }\n\n    addToDoItem(title, project){\n        let item = new _toDoItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.toDoItemArray.length, title);\n        this.toDoItemArray.push(item);\n        this.addItemToProjectList(item, project.toLowerCase());\n    }\n    \n    addItemToProjectList(item, project){\n        this.informationHandler[project] = [];\n        this.informationHandler[project].push(item.id);\n\n    }\n    // id = 0, title = \"\", description = \"\", dueDate, priority = 0, checkList = [], note = \"\"\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Information);\n\n// project : [id, id, id...]\n\n//# sourceURL=webpack://odin-todo_list/./src/js/informationInOnePlace.js?");

/***/ }),

/***/ "./src/js/markChecked.js":
/*!*******************************!*\
  !*** ./src/js/markChecked.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction checked(event){\n    let listItem = event.target;\n    if (!listItem || listItem == null || listItem.nodeName != 'BUTTON') return\n    listItem.nextSibling.classList.toggle('checked');\n    if (!listItem.textContent){\n        listItem.textContent = 'X'\n    } else {\n        listItem.textContent = '';\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checked);\n\n//# sourceURL=webpack://odin-todo_list/./src/js/markChecked.js?");

/***/ }),

/***/ "./src/js/newElement.js":
/*!******************************!*\
  !*** ./src/js/newElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction quickMakeNewElement(type = 'div', elementClass = ''){\n    let element = document.createElement(type);\n    element.classList.add(elementClass);\n    return element\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quickMakeNewElement);\n\n//# sourceURL=webpack://odin-todo_list/./src/js/newElement.js?");

/***/ }),

/***/ "./src/js/newProject.js":
/*!******************************!*\
  !*** ./src/js/newProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _submitOnEnter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submitOnEnter */ \"./src/js/submitOnEnter.js\");\n/* harmony import */ var _newElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newElement */ \"./src/js/newElement.js\");\n\n\n\nfunction newProjectTab(event, lookingFor = '+'){\n\n    let newTab = event.target;\n\n    if (!newTab || newTab == null) return\n    \n    if (newTab.textContent == lookingFor){\n\n        // make new element that is input type\n        let textInput = (0,_newElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('input', 'css-input');\n        // set input type to text\n        textInput.setAttribute(\"type\", \"text\");\n\n        // empty new tab button, and then append input text area\n        newTab.textContent = '';\n        newTab.appendChild(textInput);\n\n        \n        (0,_submitOnEnter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newTab, textInput, lookingFor);\n        \n    }\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProjectTab);\n\n//# sourceURL=webpack://odin-todo_list/./src/js/newProject.js?");

/***/ }),

/***/ "./src/js/newProjectButton.js":
/*!************************************!*\
  !*** ./src/js/newProjectButton.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _newElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newElement */ \"./src/js/newElement.js\");\n\n\nfunction newButton(text, setClass){\n    let button = (0,_newElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', setClass);\n    button.textContent = text;\n    return button;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newButton);\n\n//# sourceURL=webpack://odin-todo_list/./src/js/newProjectButton.js?");

/***/ }),

/***/ "./src/js/populateNote.js":
/*!********************************!*\
  !*** ./src/js/populateNote.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction populate(information){\n    Object.keys(information).forEach(key => {\n        if (document.querySelector(`.${key}`)){\n            document.querySelector(`.${key}`).textContent = information[key];\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populate);\n\n//# sourceURL=webpack://odin-todo_list/./src/js/populateNote.js?");

/***/ }),

/***/ "./src/js/selected.js":
/*!****************************!*\
  !*** ./src/js/selected.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction select(event, ...check){\n    let button = event.target;\n    if (!button || button == null || button.textContent == '') return\n    check.forEach(node => {\n        node.childNodes.forEach(element => {\n            if (element.classList){\n                if (element.classList.contains(\"selected\")){\n                    element.classList.remove(\"selected\");\n                }\n            }\n        })\n    })\n    button.classList.add('selected');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (select);\n\n//# sourceURL=webpack://odin-todo_list/./src/js/selected.js?");

/***/ }),

/***/ "./src/js/submitOnEnter.js":
/*!*********************************!*\
  !*** ./src/js/submitOnEnter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _newProjectButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProjectButton */ \"./src/js/newProjectButton.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ \"./src/js/createProject.js\");\n\n\n\nfunction submit(toBeChanged, change, lookingFor=''){\n    document.onkeydown = function(event) {\n\n        // if users presses \"Enter\"\n        if(event.key == \"Enter\") {\n            // and if change value is not nothing\n            if (change.value!=''){\n                // set textContent of \"toBeChanged\"(node element) into \"change\" (text input);\n                toBeChanged.textContent = change.value.toUpperCase();\n                toBeChanged.classList = change.value.toLowerCase().replaceAll(\" \", \"\");\n\n                // if \"lookingFor\" is not empty/nothing, add a child button\n                if (lookingFor!=''){\n                    toBeChanged.parentElement.appendChild((0,_newProjectButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lookingFor, 'create-new-project'));\n                }\n                // disable on key down event\n                document.onkeydown = null;\n            }\n            // if change value is empty\n            if (change.value==''){\n                // and looking for is not empty, set \"toBeChanged\" to \"lookingFor\"\n                if (lookingFor!=''){\n                    toBeChanged.textContent = lookingFor.toUpperCase();\n                }\n                // disable on key down event\n                document.onkeydown = null;\n            }\n        }\n        // if user presses \"Escape\"\n        if(event.key == \"Escape\"){\n            // and \"lookingFor\" is not empty\n            if (lookingFor!=''){\n                toBeChanged.textContent = lookingFor.toUpperCase();\n            }\n            // disable on key down event\n            document.onkeydown = null;\n        }\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submit);\n\n//# sourceURL=webpack://odin-todo_list/./src/js/submitOnEnter.js?");

/***/ }),

/***/ "./src/js/toDoItem.js":
/*!****************************!*\
  !*** ./src/js/toDoItem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ToDoInformation {\n    constructor (id = 0, title = \"\", description = \"\", dueDate, priority = 0, checkList = [], note = \"\"){\n        this.id = id;\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.checkList = checkList;\n        this.note = note;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoInformation);\n\n//# sourceURL=webpack://odin-todo_list/./src/js/toDoItem.js?");

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;