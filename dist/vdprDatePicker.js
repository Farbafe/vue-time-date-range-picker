(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["moment"], factory);
	else if(typeof exports === 'object')
		exports["vdprDatePicker"] = factory(require("moment"));
	else
		root["vdprDatePicker"] = factory(root["moment"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2).default
var update = add("13209006", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "\n.vdpr-datepicker{position:relative\n}\n", "",{"version":3,"sources":["/home/deeb/scripts/repo/Vue/DoWhatWhen/node_modules/vue-time-date-range-picker/src/Styles/DatePicker.scss","DatePicker.vue"],"names":[],"mappings":";AAAA,iBACE;ACCF","file":"DatePicker.vue","sourcesContent":[".vdpr-datepicker {\n  position: relative;\n}","\n.vdpr-datepicker{position:relative\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2).default
var update = add("61669a9a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "\n.vdpr-datepicker__calendar{box-sizing:border-box;background-color:white\n}\n.vdpr-datepicker__calendar-month-year{font-size:24px;text-transform:uppercase;text-align:center;flex-basis:70%\n}\n.vdpr-datepicker__calendar-control{display:flex;justify-content:space-between;align-items:center;padding:10px\n}\n.vdpr-datepicker__calendar-control-prev,.vdpr-datepicker__calendar-control-next{cursor:pointer;position:relative;border-radius:50%;border:1px solid #333;color:#333;padding:12px\n}\n.vdpr-datepicker__calendar-control-prev:before,.vdpr-datepicker__calendar-control-next:before{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)\n}\n.vdpr-datepicker__calendar-control-prev:before{content:\"\\003c\"\n}\n.vdpr-datepicker__calendar-control-next:before{content:\"\\003e\"\n}\n.vdpr-datepicker__calendar-control-disabled{cursor:not-allowed;background-color:#ccc\n}\n.vdpr-datepicker__calendar-table{width:100%;table-layout:fixed;border-collapse:separate;border-spacing:1px\n}\n.vdpr-datepicker__calendar-table>*{margin:0;padding:0\n}\n.vdpr-datepicker__calendar-table thead{text-transform:uppercase;text-align:center;font-size:12px\n}\n.vdpr-datepicker__calendar-table th{white-space:nowrap;overflow:hidden;padding:4px;line-height:28px;color:#333\n}\n.vdpr-datepicker__calendar-table td{white-space:nowrap;overflow:hidden;line-height:35px;text-align:center !important;background-color:#eee;color:#333;font-size:14px\n}\n.vdpr-datepicker__calendar-table td:hover{cursor:pointer;background-color:#e1e1e1\n}\n.vdpr-datepicker__calendar-table .faded{color:#ccc\n}\n.vdpr-datepicker__calendar-table .highlighted{background-color:#48c774;color:#333\n}\n.vdpr-datepicker__calendar-table .highlighted:hover{background-color:#57ff92\n}\n.vdpr-datepicker__calendar-table .disabled{cursor:not-allowed;background-color:#454545;color:#ccc\n}\n.vdpr-datepicker__calendar-table .disabled:hover{cursor:not-allowed;background-color:#454545\n}\n.vdpr-datepicker__button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:14px;font-weight:400;text-align:center;padding:6px 12px;line-height:1.5;white-space:nowrap;border:1px solid transparent;border-radius:4px\n}\n.vdpr-datepicker__button--block{width:100%;display:block\n}\n.vdpr-datepicker__button-default{color:#333;background-color:#fff;border-color:#333333;font-size:0.8rem!important\n}\n.vdpr-datepicker__button-default:hover{background-color:#c7ffdb\n}\n.vdpr-datepicker__button-submit{color:#fff;background-color:#3a86ff;border-color:#0767ff\n}\n.vdpr-datepicker__button-submit:hover{background-color:#0767ff\n}\n.vdpr-datepicker__calendar-input-date{height:30px\n}\n.vdpr-datepicker__calendar-input-date-elem{box-sizing:border-box;border:none;width:100%;height:100%;padding-left:5px;background-color:#eee\n}\n.vdpr-datepicker__calendar-input-time{position:relative;height:30px;background-color:#eee\n}\n.vdpr-datepicker__calendar-input-time-elem{border:none;height:100%;width:100%;background-color:transparent;box-sizing:border-box;padding-left:5px\n}\n.vdpr-datepicker__calendar-input-time-control{position:absolute;top:0;right:0;height:100%;width:20%;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;justify-content:center;align-items:center\n}\n.vdpr-datepicker__calendar-input-time-control-up,.vdpr-datepicker__calendar-input-time-control-down{cursor:pointer;color:#999;display:flex;justify-content:center;align-items:center\n}\n.vdpr-datepicker__calendar-input-time-control-up:hover,.vdpr-datepicker__calendar-input-time-control-down:hover{color:black\n}\n.vdpr-datepicker__calendar-input-time-control-up{margin-bottom:-5px;margin-top:2px\n}\n.vdpr-datepicker__switch{position:relative;display:inline-block;width:60px;height:30px\n}\n.vdpr-datepicker__switch>input{display:none\n}\n.vdpr-datepicker__switch>input:checked+.vdpr-datepicker__switch-slider{background-color:#3a86ff\n}\n.vdpr-datepicker__switch>input:checked+.vdpr-datepicker__switch-slider::before{transform:translateX(26px)\n}\n.vdpr-datepicker__switch>input:checked+.vdpr-datepicker__switch-slider::after{content:\"ON\";left:25%\n}\n.vdpr-datepicker__switch-slider{cursor:pointer;position:absolute;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:0.4s;border-radius:34px\n}\n.vdpr-datepicker__switch-slider:before{content:\"\";height:24px;width:24px;position:absolute;left:5px;bottom:3px;background-color:#fff;transition:0.4s;border-radius:50%\n}\n.vdpr-datepicker__switch-slider:after{content:\"OFF\";position:absolute;top:50%;left:75%;transform:translate(-50%, -50%);color:#fff;font-size:11px\n}\n.vdpr-datepicker__calendar-dialog{box-shadow:0 6px 12px rgba(0,0,0,0.175);position:absolute;margin-top:2px;padding:5px;display:flex;flex-direction:row;z-index:1000;background-color:white\n}\n.vdpr-datepicker__calendar-dialog--inline{display:inline-flex;position:unset;z-index:0;box-shadow:none;border:1px solid rgba(0,0,0,0.175)\n}\n.vdpr-datepicker__calendar{width:300px\n}\n.vdpr-datepicker__calendar-button-helper{width:140px;padding:5px 10px\n}\n.vdpr-datepicker__calendar-button-helper>:not(:first-child){margin-top:5px\n}\n.vdpr-datepicker__calendar-actions{width:160px;padding:5px 10px;font-size:13px;display:flex;flex-direction:column;justify-content:center\n}\n.vdpr-datepicker__calendar-actions>:not(:first-child){margin-top:5px\n}\n.vdpr-datepicker__calendar-input-wrapper{display:flex;justify-content:space-between;align-items:center;width:100%\n}\n.vdpr-datepicker__calendar-input-wrapper--end{justify-content:flex-end\n}\n.vdpr-datepicker__calendar-input-wrapper:not(:first-child){margin-top:10px\n}\n.vdpr-datepicker__calendar-input-wrapper>span{flex-basis:35%\n}\n.vdpr-datepicker__calendar-input-wrapper>.vdpr-datepicker__calendar-input-date,.vdpr-datepicker__calendar-input-wrapper .vdpr-datepicker__calendar-input-time{flex-basis:65%\n}\n", "",{"version":3,"sources":["/home/deeb/scripts/repo/Vue/DoWhatWhen/node_modules/vue-time-date-range-picker/src/Styles/Calendar.scss","CalendarDialog.vue","/home/deeb/scripts/repo/Vue/DoWhatWhen/node_modules/vue-time-date-range-picker/src/Styles/_mixins.scss","/home/deeb/scripts/repo/Vue/DoWhatWhen/node_modules/vue-time-date-range-picker/src/Styles/Button.scss","/home/deeb/scripts/repo/Vue/DoWhatWhen/node_modules/vue-time-date-range-picker/src/Styles/InputDate.scss","/home/deeb/scripts/repo/Vue/DoWhatWhen/node_modules/vue-time-date-range-picker/src/Styles/InputTime.scss","/home/deeb/scripts/repo/Vue/DoWhatWhen/node_modules/vue-time-date-range-picker/src/Styles/Switch.scss","/home/deeb/scripts/repo/Vue/DoWhatWhen/node_modules/vue-time-date-range-picker/src/Styles/CalendarDialog.scss"],"names":[],"mappings":";AASA,2BACE,qBAAA,CACA;ACTF;ADWE,sCACE,cAAA,CACA,wBAAA,CACA,iBAAA,CACA;ACbJ;ADcG,mCEXD,YAAA,CACA,6BAAA,CACA,kBAAA,CFaE;AChBJ;ADkBI,gFAEE,cAAA,CACA,iBAAA,CACA,iBAAA,CACA,qBAAA,CACA,UAAA,CACA;ACvBN;ADgBK,8FAUG,iBAAA,CACA,OAAA,CACA,QAAA,CACA;AC3BR;AD4BO,+CAID;AC9BN;AD+BK,+CAGC;AChCN;ADiCK,4CAGC,kBAAA,CACA;ACnCN;ADoCK,iCAID,UAAA,CACA,kBAAA,CACA,wBAAA,CACA;ACzCJ;ADqCG,mCAOG,QAAA,CACA;AC3CN;ADmCG,uCAYG,wBAAA,CACA,iBAAA,CACA;AC/CN;ADiCG,oCAkBG,kBAAA,CACA,eAAA,CACA,WAAA,CACA,gBAAA,CACA;ACrDN;AD+BG,oCA0BG,kBAAA,CACA,eAAA,CACA,gBAAA,CACA,4BAAA,CACA,qBAAA,CACA,UAAA,CACA;AC7DN;AD6BG,0CAmCK,cAAA,CACA;AC/DR;AD2BG,wCAyCG;AClEN;ADyBG,8CA6CG,wBAAA,CACA;ACrEN;ADuBG,oDAiDK;ACtER;ADqBG,2CAsDG,kBAAA,CACA,wBAAA,CACA;AC3EN;ADmBG,iDA2DK,kBAAA,CACA;AC7ER;AD8EO,yBG9GL,cAAA,CACA,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CACA,cAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA,CACA,eAAA,CACA,kBAAA,CACA,4BAAA,CACA;AFyBF;AEvBE,gCACE,UAAA,CACA;AFuBJ;AEtBG,iCAGC,UAAA,CACA,qBAAA,CACA;AFmBJ;AEtBG,uCAMG;AFkBN;AEjBK,gCAID,UAAA,CACA,wBAAA,CACA;AFaJ;AEhBG,sCAMG;AFYN;AEXK,sCCtCH;AHmDF;AGjDE,2CACE,qBAAA,CACA,WAAA,CACA,UAAA,CACA,WAAA,CACA,gBAAA,CACA;AH6CJ;AG5CG,sCCPD,iBAAA,CACA,WAAA,CACA;AJmDF;AIjDE,2CACE,WAAA,CACA,WAAA,CACA,UAAA,CACA,4BAAA,CACA,qBAAA,CACA;AJ6CJ;AI5CG,8CAGC,iBAAA,CACA,KAAA,CACA,OAAA,CACA,WAAA,CACA,SAAA,CACA,qBAAA,CACA,wBAAA,CHtBF,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CAAA,YAAA,CACA,sBAAA,CACA;ADyDF;AIlCI,oGAEE,cAAA,CACA,UAAA,CH5BJ,YAAA,CACA,sBAAA,CACA;AD2DF;AIpCK,gHAOG;AJ+BR;AI9BO,iDAID,kBAAA,CACA;AJ2BN;AI1BK,yBClCH,iBAAA,CACA,oBAAA,CACA,UAAA,CACA;AL2DF;AK/DA,+BAOI;AL0DJ;AKjEA,uEAWQ;ALwDR;AKnEA,+EAeQ;ALsDR;AKrEA,8EAmBQ,YAAA,CACA;ALmDR;AKlDO,gCAKH,cAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,qBAAA,CACA,eAAA,CACA;ALuCJ;AKhDG,uCAYG,UAAA,CACA,WAAA,CACA,UAAA,CACA,iBAAA,CACA,QAAA,CACA,UAAA,CACA,qBAAA,CACA,eAAA,CACA;AL8BN;AKlDG,sCAwBG,aAAA,CACA,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CACA,UAAA,CACA;ALsBN;AM1EE,kCACE,uCAAA,CACA,iBAAA,CACA,cAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,YAAA,CACA;ANoEJ;AMlEI,0CACE,mBAAA,CACA,cAAA,CACA,SAAA,CACA,eAAA,CACA;AN+DN;AM9DK,2BAID;AN4DJ;AM3DG,yCAGC,WAAA,CACA;ANyDJ;AM3DG,4DAKG;ANwDN;AMvDK,mCAID,WAAA,CACA,gBAAA,CACA,cAAA,CACA,YAAA,CACA,qBAAA,CACA;ANgDJ;AMtDG,sDASG;AN+CN;AM9CK,yCL3CH,YAAA,CACA,6BAAA,CACA,kBAAA,CK8CE;AN2CJ;AMzCI,8CACE;AN0CN;AM/CG,2DASG;ANwCN;AMjDG,8CAaG;ANsCN;AMnDG,8JAkBG;ANmCN","file":"CalendarDialog.vue","sourcesContent":["$bg-calendar-highlighted:  hsl(141, 100%, 72%);\n$bg-calendar-not-selected: #eee;\n$bg-calendar-disabled: hsl(0, 0%, 27%);\n$color-calendar-highligted:#333;\n$color-calendar-not-selected: #333;\n$color-calendar-disabled: #ccc;\n$color-calendar-faded: #ccc;\n$color-calendar-header: #333;\n\n.vdpr-datepicker__calendar {\n  box-sizing: border-box;\n  background-color: white;\n\n  &-month-year {\n    font-size: 24px;\n    text-transform: uppercase;\n    text-align: center;\n    flex-basis: 70%;\n  }\n\n  &-control {\n    @include flex-sb-c;\n    padding: 10px;\n\n    &-prev,\n    &-next {\n      cursor: pointer;\n      position: relative;\n      border-radius: 50%;\n      border: 1px solid #333;\n      color: #333;\n      padding: 12px;\n\n      &:before {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n      }\n    }\n\n    &-prev:before {\n      content: \"\\003c\";\n    }\n\n    &-next:before {\n      content: \"\\003e\";\n    }\n\n    &-disabled {\n      cursor: not-allowed;\n      background-color: #ccc;\n    }\n  }\n\n  &-table {\n    width: 100%;\n    table-layout: fixed;\n    border-collapse: separate;\n    border-spacing: 1px;\n\n    > * {\n      margin: 0;\n      padding: 0;\n    }\n\n    thead {\n      text-transform: uppercase;\n      text-align: center;\n      font-size: 12px;\n    }\n\n    th {\n      white-space: nowrap;\n      overflow: hidden;\n      padding: 4px;\n      line-height: 28px;\n      color: $color-calendar-header;\n    }\n\n    td {\n      white-space: nowrap;\n      overflow: hidden;\n      line-height: 35px;\n      text-align: center !important;\n      background-color: $bg-calendar-not-selected;\n      color: $color-calendar-not-selected;\n      font-size: 14px;\n\n      &:hover {\n        cursor: pointer;\n        background-color: darken($bg-calendar-not-selected, 10%);\n      }\n    }\n\n    .faded {\n      color: $color-calendar-faded;\n    }\n\n    .highlighted {\n      background-color: $bg-calendar-highlighted;\n      color: $color-calendar-highligted;\n\n      &:hover {\n        background-color: darken($bg-calendar-highlighted, 10%);\n      }\n    }\n\n    .disabled {\n      cursor: not-allowed;\n      background-color: $bg-calendar-disabled;\n      color: $color-calendar-disabled;\n\n      &:hover {\n        cursor: not-allowed;\n        background-color: $bg-calendar-disabled;\n      }\n    }\n  }\n}\n","\n.vdpr-datepicker__calendar{box-sizing:border-box;background-color:white\n}\n.vdpr-datepicker__calendar-month-year{font-size:24px;text-transform:uppercase;text-align:center;flex-basis:70%\n}\n.vdpr-datepicker__calendar-control{display:flex;justify-content:space-between;align-items:center;padding:10px\n}\n.vdpr-datepicker__calendar-control-prev,.vdpr-datepicker__calendar-control-next{cursor:pointer;position:relative;border-radius:50%;border:1px solid #333;color:#333;padding:12px\n}\n.vdpr-datepicker__calendar-control-prev:before,.vdpr-datepicker__calendar-control-next:before{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)\n}\n.vdpr-datepicker__calendar-control-prev:before{content:\"\\003c\"\n}\n.vdpr-datepicker__calendar-control-next:before{content:\"\\003e\"\n}\n.vdpr-datepicker__calendar-control-disabled{cursor:not-allowed;background-color:#ccc\n}\n.vdpr-datepicker__calendar-table{width:100%;table-layout:fixed;border-collapse:separate;border-spacing:1px\n}\n.vdpr-datepicker__calendar-table>*{margin:0;padding:0\n}\n.vdpr-datepicker__calendar-table thead{text-transform:uppercase;text-align:center;font-size:12px\n}\n.vdpr-datepicker__calendar-table th{white-space:nowrap;overflow:hidden;padding:4px;line-height:28px;color:#333\n}\n.vdpr-datepicker__calendar-table td{white-space:nowrap;overflow:hidden;line-height:35px;text-align:center !important;background-color:#eee;color:#333;font-size:14px\n}\n.vdpr-datepicker__calendar-table td:hover{cursor:pointer;background-color:#e1e1e1\n}\n.vdpr-datepicker__calendar-table .faded{color:#ccc\n}\n.vdpr-datepicker__calendar-table .highlighted{background-color:#48c774;color:#333\n}\n.vdpr-datepicker__calendar-table .highlighted:hover{background-color:#57ff92\n}\n.vdpr-datepicker__calendar-table .disabled{cursor:not-allowed;background-color:#454545;color:#ccc\n}\n.vdpr-datepicker__calendar-table .disabled:hover{cursor:not-allowed;background-color:#454545\n}\n.vdpr-datepicker__button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:14px;font-weight:400;text-align:center;padding:6px 12px;line-height:1.5;white-space:nowrap;border:1px solid transparent;border-radius:4px\n}\n.vdpr-datepicker__button--block{width:100%;display:block\n}\n.vdpr-datepicker__button-default{color:#333;background-color:#fff;border-color:#333333\n}\n.vdpr-datepicker__button-default:hover{background-color:#c7ffdb\n}\n.vdpr-datepicker__button-submit{color:#fff;background-color:#3a86ff;border-color:#0767ff\n}\n.vdpr-datepicker__button-submit:hover{background-color:#0767ff\n}\n.vdpr-datepicker__calendar-input-date{height:30px\n}\n.vdpr-datepicker__calendar-input-date-elem{box-sizing:border-box;border:none;width:100%;height:100%;padding-left:5px;background-color:#eee\n}\n.vdpr-datepicker__calendar-input-time{position:relative;height:30px;background-color:#eee\n}\n.vdpr-datepicker__calendar-input-time-elem{border:none;height:100%;width:100%;background-color:transparent;box-sizing:border-box;padding-left:5px\n}\n.vdpr-datepicker__calendar-input-time-control{position:absolute;top:0;right:0;height:100%;width:20%;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;justify-content:center;align-items:center\n}\n.vdpr-datepicker__calendar-input-time-control-up,.vdpr-datepicker__calendar-input-time-control-down{cursor:pointer;color:#999;display:flex;justify-content:center;align-items:center\n}\n.vdpr-datepicker__calendar-input-time-control-up:hover,.vdpr-datepicker__calendar-input-time-control-down:hover{color:black\n}\n.vdpr-datepicker__calendar-input-time-control-up{margin-bottom:-5px;margin-top:2px\n}\n.vdpr-datepicker__switch{position:relative;display:inline-block;width:60px;height:30px\n}\n.vdpr-datepicker__switch>input{display:none\n}\n.vdpr-datepicker__switch>input:checked+.vdpr-datepicker__switch-slider{background-color:#3a86ff\n}\n.vdpr-datepicker__switch>input:checked+.vdpr-datepicker__switch-slider::before{transform:translateX(26px)\n}\n.vdpr-datepicker__switch>input:checked+.vdpr-datepicker__switch-slider::after{content:\"ON\";left:25%\n}\n.vdpr-datepicker__switch-slider{cursor:pointer;position:absolute;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:0.4s;border-radius:34px\n}\n.vdpr-datepicker__switch-slider:before{content:\"\";height:24px;width:24px;position:absolute;left:5px;bottom:3px;background-color:#fff;transition:0.4s;border-radius:50%\n}\n.vdpr-datepicker__switch-slider:after{content:\"OFF\";position:absolute;top:50%;left:75%;transform:translate(-50%, -50%);color:#fff;font-size:11px\n}\n.vdpr-datepicker__calendar-dialog{box-shadow:0 6px 12px rgba(0,0,0,0.175);position:absolute;margin-top:2px;padding:5px;display:flex;flex-direction:row;z-index:1000;background-color:white\n}\n.vdpr-datepicker__calendar-dialog--inline{display:inline-flex;position:unset;z-index:0;box-shadow:none;border:1px solid rgba(0,0,0,0.175)\n}\n.vdpr-datepicker__calendar{width:300px\n}\n.vdpr-datepicker__calendar-button-helper{width:140px;padding:5px 10px\n}\n.vdpr-datepicker__calendar-button-helper>:not(:first-child){margin-top:5px\n}\n.vdpr-datepicker__calendar-actions{width:160px;padding:5px 10px;font-size:13px;display:flex;flex-direction:column;justify-content:center\n}\n.vdpr-datepicker__calendar-actions>:not(:first-child){margin-top:5px\n}\n.vdpr-datepicker__calendar-input-wrapper{display:flex;justify-content:space-between;align-items:center;width:100%\n}\n.vdpr-datepicker__calendar-input-wrapper--end{justify-content:flex-end\n}\n.vdpr-datepicker__calendar-input-wrapper:not(:first-child){margin-top:10px\n}\n.vdpr-datepicker__calendar-input-wrapper>span{flex-basis:35%\n}\n.vdpr-datepicker__calendar-input-wrapper>.vdpr-datepicker__calendar-input-date,.vdpr-datepicker__calendar-input-wrapper .vdpr-datepicker__calendar-input-time{flex-basis:65%\n}\n","@mixin flex-c-c {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin flex-sb-c {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n","$bg-button-default: white;\n$color-button-default: #333;\n$bg-button-submit: #3a86ff;\n$color-button-submit: white;\n\n.vdpr-datepicker__button {\n  cursor: pointer;\n  user-select: none;\n  font-size: 14px;\n  font-weight: 400;\n  text-align: center;\n  padding: 6px 12px;\n  line-height: 1.5;\n  white-space: nowrap;\n  border: 1px solid transparent;\n  border-radius: 4px;\n\n  &--block {\n    width: 100%;\n    display: block;\n  }\n\n  &-default {\n    color: $color-button-default;\n    background-color: $bg-button-default;\n    border-color: #333333;\n\n    &:hover {\n      background-color:  hsl(141, 100%, 89%);\n    }\n  }\n\n  &-submit {\n    color: $color-button-submit;\n    background-color: $bg-button-submit;\n    border-color: darken($bg-button-submit, 10%);\n\n    &:hover {\n      background-color: darken($bg-button-submit, 10%);\n    }\n  }\n}\n",".vdpr-datepicker__calendar-input-date {\n  height: 30px;\n\n  &-elem {\n    box-sizing: border-box;\n    border: none;\n    width: 100%;\n    height: 100%;\n    padding-left: 5px;\n    background-color: #eee;\n  }\n}\n","@import \"mixins\";\n\n.vdpr-datepicker__calendar-input-time {\n  position: relative;\n  height: 30px;\n  background-color: #eee;\n\n  &-elem {\n    border: none;\n    height: 100%;\n    width: 100%;\n    background-color: transparent;\n    box-sizing: border-box;\n    padding-left: 5px;\n  }\n\n  &-control {\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 100%;\n    width: 20%;\n    flex-direction: column;\n    user-select: none;\n    @include flex-c-c;\n\n    &-up,\n    &-down {\n      cursor: pointer;\n      color: #999;\n      @include flex-c-c;\n\n      &:hover {\n        color: black;\n      }\n    }\n\n    &-up {\n      margin-bottom: -5px;\n      margin-top: 2px;\n    }\n  }\n}\n","$bg-switch-check: #3a86ff;\n$bg-switch-uncheck: #ccc;\n$color-switch-button: white;\n$color-switch-text: white;\n\n.vdpr-datepicker__switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n\n  > input {\n    display: none;\n\n    &:checked {\n      + .vdpr-datepicker__switch-slider {\n        background-color: $bg-switch-check;\n      }\n\n      + .vdpr-datepicker__switch-slider::before {\n        transform: translateX(26px);\n      }\n\n      + .vdpr-datepicker__switch-slider::after {\n        content: \"ON\";\n        left: 25%;\n      }\n    }\n  }\n\n  &-slider {\n    cursor: pointer;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: $bg-switch-uncheck;\n    transition: 0.4s;\n    border-radius: 34px;\n\n    &:before {\n      content: \"\";\n      height: 24px;\n      width: 24px;\n      position: absolute;\n      left: 5px;\n      bottom: 3px;\n      background-color: $color-switch-button;\n      transition: 0.4s;\n      border-radius: 50%;\n    }\n\n    &:after {\n      content: \"OFF\";\n      position: absolute;\n      top: 50%;\n      left: 75%;\n      transform: translate(-50%, -50%);\n      color: $color-switch-text;\n      font-size: 11px;\n    }\n  }\n}\n","@import \"./mixins\";\n@import \"./Calendar.scss\";\n@import \"./Button.scss\";\n@import \"./InputDate.scss\";\n@import \"./InputTime.scss\";\n@import \"./Switch.scss\";\n\n.vdpr-datepicker {\n  &__calendar-dialog {\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n    position: absolute;\n    margin-top: 2px;\n    padding: 5px;\n    display: flex;\n    flex-direction: row;\n    z-index: 1000;\n    background-color: white;\n\n    &--inline {\n      display: inline-flex;\n      position: unset;\n      z-index: 0;\n      box-shadow: none;\n      border: 1px solid rgba(0, 0, 0, 0.175);\n    }\n  }\n\n  &__calendar {\n    width: 300px;\n  }\n\n  &__calendar-button-helper {\n    width: 140px;\n    padding: 5px 10px;\n\n    > :not(:first-child) {\n      margin-top: 5px;\n    }\n  }\n\n  &__calendar-actions {\n    width: 160px;\n    padding: 5px 10px;\n    font-size: 13px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    > :not(:first-child) {\n      margin-top: 5px;\n    }\n  }\n\n  &__calendar-input-wrapper {\n    @include flex-sb-c;\n    width: 100%;\n\n    &--end {\n      justify-content: flex-end;\n    }\n\n    &:not(:first-child) {\n      margin-top: 10px;\n    }\n\n    > span {\n      flex-basis: 35%;\n    }\n\n    > .vdpr-datepicker__calendar-input-date,\n    .vdpr-datepicker__calendar-input-time {\n      flex-basis: 65%;\n    }\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CalendarDialog", function() { return /* reexport */ Components_CalendarDialog; });

// CONCATENATED MODULE: ./src/Utils/Util.js
/* harmony default export */ var Util = ({
  /**
   * Check if value is Date Object
   *
   * @param {*} value
   * @returns {Boolean}
   */
  isObjectDate: (value) => Object.prototype.toString.call(value) === '[object Date]',

  /**
   * Get Object Length
   *
   * @param {Object} value
   * @returns {Number}
   */
  getObjectLength: (value) => Object.keys(value).length,
});

// CONCATENATED MODULE: ./src/Utils/PropsValidator.js


/* harmony default export */ var PropsValidator = ({
  /**
   * @param {Array} value
   * @returns {Boolean}
   */
  isValidInitialDate(value) {
    if (!value || value.length === 0) return true;

    const [from, to] = value;

    return (
      Util.isObjectDate(from)
      && Util.isObjectDate(to)
      && to.getTime() >= from.getTime()
    );
  },

  /**
   * @param {Array} value
   * @returns {Boolean}
   */
  isValidHelperButtons(value) {
    if (!value || value.length === 0) return true;

    const filtered = value.filter((button) => {
      const isButtonNameValid = typeof button.name === 'string' && button.name !== '';
      const isButtonFromDateValid = Util.isObjectDate(button.from);
      const isButtonToDateValid = Util.isObjectDate(button.to);

      return isButtonNameValid && isButtonFromDateValid && isButtonToDateValid;
    });

    return value.length === filtered.length;
  },

  /**
   * @param {Object} value
   * @returns {Boolean}
   */
  isValidDisabledDates(value) {
    if (!value || Util.getObjectLength(value) === 0) return true;

    const {
      dates, from, to, ranges, custom,
    } = value;

    if (Array.isArray(dates)) {
      const filteredValidDates = dates.filter((date) => Util.isObjectDate(date));

      if (filteredValidDates.length !== dates.length) {
        return false;
      }
    }

    if (typeof from !== 'undefined' && !Util.isObjectDate(from)) {
      return false;
    }

    if (typeof to !== 'undefined' && !Util.isObjectDate(to)) {
      return false;
    }

    if (Array.isArray(ranges)) {
      const filterValidRanges = ranges.filter(
        (range) => Util.isObjectDate(range.from) && Util.isObjectDate(range.to),
      );

      if (filterValidRanges.length !== ranges.length) {
        return false;
      }
    }

    if (typeof custom !== 'undefined' && typeof custom !== 'function') {
      return false;
    }

    return true;
  },

  /**
   * @param {Object} value
   * @returns {Boolean}
   */
  isValidSameDateFormat(value) {
    if (!value || Util.getObjectLength(value) === 0) return true;

    const { from, to } = value;

    if (typeof from !== 'string' || typeof to !== 'string') {
      return false;
    }

    return true;
  },
});

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(0);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./src/Utils/DateUtil.js
// eslint-disable-next-line import/no-unresolved



/* harmony default export */ var DateUtil = (class {
  /**
   * @param {String} lang
   */
  constructor(lang = '') {
    this.lang = lang;
    this.localMoment = external_moment_default()().locale(lang);
  }

  /**
   * Create Date
   * @returns {Date}
   */
  createDate(...param) {
    return external_moment_default()(...param)
      .locale(this.lang)
      .toDate();
  }

  /**
   * Get Day Names
   *
   * @returns {Array}
   */
  getDayNames() {
    return this.localMoment.localeData().weekdays();
  }

  /**
   * Get Abbreviated Day Names
   *
   * @returns {Array}
   */
  getAbbrDayNames() {
    return this.localMoment.localeData().weekdaysShort();
  }

  /**
   * Get Month Names
   * @returns {Array}
   */
  getMonthNames() {
    return this.localMoment.localeData().months();
  }

  /**
   * Get Abbreviated Month Names
   *
   * @returns {Array}
   */
  getAbbrMonthNames() {
    return this.localMoment.localeData().monthsShort();
  }

  /**
   * format a date
   *
   * @param {Date} date
   * @param {String} format
   * @returns {String}
   */
  // eslint-disable-next-line class-methods-use-this
  formatDate(date, format) {
    return external_moment_default()(date)
      .locale(this.lang)
      .format(format);
  }

  /**
   * check for same date only
   *
   * @param {Date} date1
   * @param {Date} date2
   * @return {Boolean}
   */
  // eslint-disable-next-line class-methods-use-this
  isSameDate(date1, date2) {
    return (
      external_moment_default()(date1).format('DD MM YYYY') === external_moment_default()(date2).format('DD MM YYYY')
    );
  }

  /**
   * Check for is All Day.
   *
   * @param {Date} fromDate
   * @param {Date} toDate
   * @returns {Boolean}
   */
  // eslint-disable-next-line class-methods-use-this
  isAllDay(fromDate, toDate) {
    const startFromDate = external_moment_default()(fromDate).startOf('day');
    const endToDate = external_moment_default()(toDate).endOf('day');

    return (
      external_moment_default()(fromDate).format('DD MM YYYY HH:mm')
      === startFromDate.format('DD MM YYYY HH:mm')
      && external_moment_default()(toDate).format('DD MM YYYY HH:mm')
      === endToDate.format('DD MM YYYY HH:mm')
    );
  }

  /**
   * check if date is valid
   *
   * @param {Date} date
   * @returns {Boolean}
   */
  // eslint-disable-next-line class-methods-use-this
  isValidDate(date) {
    return Util.isObjectDate(date) && external_moment_default()(date).isValid();
  }

  /**
   * convert date to unix timestamp
   *
   * @param {Date} date
   * @returns {Number}
   */
  // eslint-disable-next-line class-methods-use-this
  toUnix(date) {
    return external_moment_default()(date).unix();
  }

  /**
   * convert unix to date
   *
   * @param {Number} unixTimestamp
   * @returns {Date}
   */
  // eslint-disable-next-line class-methods-use-this
  fromUnix(unixTimestamp) {
    return external_moment_default.a.unix(unixTimestamp).toDate();
  }

  /**
   * Get Start Of A Date. refer to moment documentation
   *
   * @param {Date} date
   * @param {String} of
   * @returns {Date}
   */
  // eslint-disable-next-line class-methods-use-this
  startOf(date, of) {
    return external_moment_default()(date)
      .startOf(of)
      .toDate();
  }

  /**
   * Get End Of A Date. refer to moment documentation
   *
   * @param {Date} date
   * @param {String} of
   * @returns {Date}
   */
  // eslint-disable-next-line class-methods-use-this
  endOf(date, of) {
    return external_moment_default()(date)
      .endOf(of)
      .toDate();
  }

  /**
   * Check if date is before a beforeDate
   *
   * @param {Date} date
   * @param {Date} beforeDate
   * @returns {Boolean}
   */
  // eslint-disable-next-line class-methods-use-this
  isBefore(date, beforeDate) {
    return external_moment_default()(date).isBefore(beforeDate);
  }

  /**
   * Check if date is same or before a beforeDate
   * @param {Date} date
   * @param {Date} beforeDate
   * @returns {Boolean}
   */
  // eslint-disable-next-line class-methods-use-this
  isSameOrBefore(date, beforeDate) {
    return external_moment_default()(date).isSameOrBefore(beforeDate);
  }

  /**
   * Check if date is after a afterDate
   *
   * @param {Date} date
   * @param {Date} beforeDate
   * @returns {Boolean}
   */
  // eslint-disable-next-line class-methods-use-this
  isAfter(date, afterDate) {
    return external_moment_default()(date).isAfter(afterDate);
  }

  /**
   * Check if date is same or after a afterDate
   * @param {Date} date
   * @param {Date} afterDate
   * @returns {Boolean}
   */
  // eslint-disable-next-line class-methods-use-this
  isSameOrAfter(date, afterDate) {
    return external_moment_default()(date).isSameOrAfter(afterDate);
  }

  /**
   * Check if a date is between fromDate and toDate
   * @param {Date} date
   * @param {Date} fromDate
   * @param {Date} toDate
   */
  // eslint-disable-next-line class-methods-use-this
  isBetween(date, fromDate, toDate) {
    return external_moment_default()(date).isBetween(fromDate, toDate);
  }

  /**
   * Check if a date is same or between as fromDate and toDate
   *
   * @param {Date} date
   * @param {Date} fromDate
   * @param {Date} toDate
   * @returns {Boolean}
   */
  // eslint-disable-next-line class-methods-use-this
  isSameOrBetween(date, fromDate, toDate) {
    const theDate = external_moment_default()(date);

    return theDate.isSameOrAfter(fromDate) && theDate.isSameOrBefore(toDate);
  }

  /**
   * Add Number of timeKey to A Date. refer to moment documentation
   *
   * @param {Date} date
   * @param {Number} number
   * @param {String} timeKey
   * @returns {Date}
   */
  // eslint-disable-next-line class-methods-use-this
  add(date, number, timeKey) {
    return external_moment_default()(date)
      .add(number, timeKey)
      .toDate();
  }

  /**
   * Subtract Number of timeKey to A Date. refer to moment documentation
   *
   * @param {Date} date
   * @param {Number} number
   * @param {String} timeKey
   * @returns {Date}
   */
  // eslint-disable-next-line class-methods-use-this
  subtract(date, number, timeKey) {
    return external_moment_default()(date)
      .subtract(number, timeKey)
      .toDate();
  }

  /**
   * Get Number of Day in A month from A Date
   *
   * @param {Date} date
   * @returns {Number}
   */
  // eslint-disable-next-line class-methods-use-this
  daysInMonth(date) {
    return external_moment_default()(date).daysInMonth();
  }

  /**
   * Get Day 0 - 6 from A Date
   *
   * @param {Date} date
   * @returns {Number}
   */
  // eslint-disable-next-line class-methods-use-this
  day(date) {
    return external_moment_default()(date).day();
  }

  /**
   * Get Month 0 - 11 from A Date
   *
   * @param {Date} date
   * @returns {Number}
   */
  // eslint-disable-next-line class-methods-use-this
  month(date) {
    return external_moment_default()(date).month();
  }

  /**
   * Get Year from A Date
   * @param {Date} date
   * @returns {Number}
   */
  // eslint-disable-next-line class-methods-use-this
  year(date) {
    return external_moment_default()(date).year();
  }
});

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Components/DateInput.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var DateInput = ({
  props: {
    inputClass: [String, Object, Array],
    refName: String,
    name: String,
    type: String,
    placeholder: String,
    id: String,
    required: Boolean,
    format: String,
    sameDateFormat: Object,
    language: String,
    selectedStartDate: Date,
    selectedEndDate: Date
  },
  computed: {
    dateUtil: function dateUtil() {
      return new DateUtil(this.language);
    },
    formattedValue: function formattedValue() {
      if (!this.selectedStartDate || !this.selectedEndDate) return '';

      if (this.dateUtil.isSameDate(this.selectedStartDate, this.selectedEndDate)) {
        var _date = this.dateUtil.formatDate(this.selectedStartDate, this.sameDateFormat.from);

        var _date2 = this.dateUtil.formatDate(this.selectedEndDate, this.sameDateFormat.to);

        return "".concat(_date, " - ").concat(_date2);
      }

      var date1 = this.dateUtil.formatDate(this.selectedStartDate, this.format);
      var date2 = this.dateUtil.formatDate(this.selectedEndDate, this.format);
      return "".concat(date1, " - ").concat(date2);
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('on-click', true);
    }
  },
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1f5272dc","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Components/DateInput.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("input", {
      ref: _vm.refName,
      class: _vm.inputClass,
      attrs: {
        id: _vm.id,
        type: _vm.type,
        name: _vm.name,
        placeholder: _vm.placeholder,
        required: _vm.required,
        readonly: "",
        style: "width: 35ch;"
      },
      domProps: { value: _vm.formattedValue },
      on: { click: _vm.onClick }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {}
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/Components/DateInput.vue
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = normalizeComponent(
  DateInput,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Components/DateInput.vue"

/* hot reload */
if (false) {}

/* harmony default export */ var Components_DateInput = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Components/Calendar.vue
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var Day = function Day(date, isBetween, isStartDate, isEndDate, isDisabled, isFaded) {
  _classCallCheck(this, Day);

  this.date = date;
  this.timestamp = date.getTime();
  this.dateNumber = date.getDate();
  this.isBetween = isBetween;
  this.isStartDate = isStartDate;
  this.isEndDate = isEndDate;
  this.isDisabled = isDisabled;
  this.isFaded = isFaded;
};

/* harmony default export */ var Calendar = ({
  props: {
    selectedStartDate: Date,
    selectedEndDate: Date,
    language: String,
    disabledDates: Object,
    isMondayFirst: Boolean
  },
  data: function data() {
    var _ref, _this$selectedStartDa;

    var dateUtil = new DateUtil(this.language);
    var startDate = (_ref = (_this$selectedStartDa = this.selectedStartDate) !== null && _this$selectedStartDa !== void 0 ? _this$selectedStartDa : this.selectedEndDate) !== null && _ref !== void 0 ? _ref : new Date();
    var pageTimestamp = dateUtil.toUnix(dateUtil.startOf(startDate, 'month'));
    return {
      // stored page time stamp start of a month
      pageTimestamp: pageTimestamp
    };
  },
  computed: {
    dateUtil: function dateUtil() {
      return new DateUtil(this.language);
    },
    dayNames: function dayNames() {
      var dayNames = this.dateUtil.getAbbrDayNames();

      if (this.isMondayFirst) {
        var _dayNames = _toArray(dayNames),
            sunday = _dayNames[0],
            restOfDays = _dayNames.slice(1);

        return [].concat(_toConsumableArray(restOfDays), [sunday]);
      }

      return dayNames;
    },
    monthYear: function monthYear() {
      var pageDate = this.dateUtil.fromUnix(this.pageTimestamp);
      return this.dateUtil.formatDate(pageDate, 'MMM YYYY');
    },
    days: function days() {
      var pageDate = this.dateUtil.fromUnix(this.pageTimestamp);
      var daysInMonth = this.dateUtil.daysInMonth(pageDate);
      var days = [];
      var preDays = [];
      var postDays = [];

      for (var i = 0; i < daysInMonth; i += 1) {
        days.push(this.constructDay(pageDate, false));
        pageDate = this.dateUtil.add(pageDate, 1, 'd');
      }

      var firstDay = days[0].date;
      var SUNDAY = 0;
      var MONDAY = 1;

      for (var j = firstDay.getDay(); j > this.isMondayFirst ? MONDAY : SUNDAY; j -= 1) {
        firstDay = this.dateUtil.subtract(firstDay, 1, 'd');
        preDays.unshift(this.constructDay(firstDay, true));
      }

      var lastDay = days[days.length - 1].date;

      for (var k = preDays.length + days.length; k < 42; k += 1) {
        lastDay = this.dateUtil.add(lastDay, 1, 'd');
        postDays.push(this.constructDay(lastDay, true));
      }

      return [].concat(preDays, days, postDays);
    },
    isNextDisabled: function isNextDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) return false;
      var pageDate = this.dateUtil.fromUnix(this.pageTimestamp);
      return this.dateUtil.month(this.disabledDates.from) <= this.dateUtil.month(pageDate) && this.dateUtil.year(this.disabledDates.from) <= this.dateUtil.year(pageDate);
    },
    isPrevDisabled: function isPrevDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) return false;
      var pageDate = this.dateUtil.fromUnix(this.pageTimestamp);
      return this.dateUtil.month(this.disabledDates.to) >= this.dateUtil.month(pageDate) && this.dateUtil.year(this.disabledDates.to) >= this.dateUtil.year(pageDate);
    }
  },
  methods: {
    getRowDays: function getRowDays(row) {
      var endIndex = row * 7;
      var startIndex = endIndex - 7;
      return this.days.slice(startIndex, endIndex);
    },
    constructDay: function constructDay(date, isFaded) {
      return new Day(date, this.dateUtil.isBetween(date, this.selectedStartDate, this.selectedEndDate), this.dateUtil.isSameDate(date, this.selectedStartDate), this.dateUtil.isSameDate(date, this.selectedEndDate), this.isDisabledDate(date), isFaded);
    },
    isDisabledDate: function isDisabledDate(date) {
      var _this = this;

      if (!this.disabledDates) {
        return false;
      }

      var disabled = false;
      var _this$disabledDates = this.disabledDates,
          dates = _this$disabledDates.dates,
          from = _this$disabledDates.from,
          to = _this$disabledDates.to,
          ranges = _this$disabledDates.ranges,
          custom = _this$disabledDates.custom;

      if (typeof dates !== 'undefined' && Array.isArray(dates)) {
        dates.forEach(function (d) {
          if (_this.dateUtil.isSameDate(d, date)) {
            disabled = true;
          }
        });
        if (disabled) return true;
      }

      if (ranges !== 'undefined' && Array.isArray(ranges)) {
        ranges.forEach(function (range) {
          if (_this.dateUtil.isValidDate(range.from) && _this.dateUtil.isValidDate(range.to)) {
            if (_this.dateUtil.isSameOrBetween(date, range.from, range.to)) {
              disabled = true;
            }
          }
        });
        if (disabled) return true;
      }

      if (this.dateUtil.isValidDate(to) && this.dateUtil.isSameOrBefore(date, to)) {
        disabled = true;
      }

      if (this.dateUtil.isValidDate(from) && this.dateUtil.isSameOrAfter(date, from)) {
        disabled = true;
      }

      if (typeof custom === 'function' && custom(date)) {
        disabled = true;
      }

      return disabled;
    },
    selectDate: function selectDate(day) {
      if (day.isDisabled) {
        return this.$emit('select-disabled-date', day.date);
      }

      return this.$emit('select-date', day.date);
    },
    onPrevClick: function onPrevClick() {
      if (this.isPrevDisabled) return;
      var pageDate = this.dateUtil.subtract(this.dateUtil.fromUnix(this.pageTimestamp), 1, 'month');
      this.pageTimestamp = this.dateUtil.toUnix(pageDate);
      this.$emit('on-prev-calendar');
    },
    onNextClick: function onNextClick() {
      if (this.isNextDisabled) return;
      var pageDate = this.dateUtil.add(this.dateUtil.fromUnix(this.pageTimestamp), 1, 'month');
      this.pageTimestamp = this.dateUtil.toUnix(pageDate);
      this.$emit('on-next-calendar');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-66cfb764","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Components/Calendar.vue
var Calendar_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "vdpr-datepicker__calendar" }, [
    _c("div", { staticClass: "vdpr-datepicker__calendar-control" }, [
      _c(
        "span",
        {
          staticClass: "icon has-text-primary is-clickable pagination-previous",
          on: { click: _vm.onPrevClick }
        },
        [
          _c("i", {
            staticClass: "mdi mdi-chevron-left mdi-24px"
          })
        ]
      ),
      _vm._v(" "),
      _c("span", { staticClass: "vdpr-datepicker__calendar-month-year" }, [
        _vm._v(_vm._s(_vm.monthYear))
      ]),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "icon has-text-primary is-clickable pagination-next",
        on: { click: _vm.onNextClick } },
        [
          _c("i", {
            staticClass: "mdi mdi-chevron-right mdi-24px"
          })
        ]
      )
    ]),
    _vm._v(" "),
    _c("table", { staticClass: "vdpr-datepicker__calendar-table" }, [
      _c("thead", [
        _c(
          "tr",
          _vm._l(_vm.dayNames, function(dayName) {
            return _c("th", { key: dayName }, [_vm._v(_vm._s(dayName))])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(6, function(row) {
          return _c(
            "tr",
            { key: row },
            _vm._l(_vm.getRowDays(row), function(day) {
              return _c(
                "td",
                {
                  key: day.timestamp,
                  class: {
                    highlighted:
                      day.isBetween || day.isStartDate || day.isEndDate,
                    faded: day.isFaded,
                    disabled: day.isDisabled
                  },
                  on: {
                    click: function($event) {
                      return _vm.selectDate(day)
                    }
                  }
                },
                [_vm._v("\n          " + _vm._s(day.dateNumber) + "\n        ")]
              )
            }),
            0
          )
        }),
        0
      )
    ])
  ])
}
var Calendar_staticRenderFns = []
Calendar_render._withStripped = true

if (false) {}
// CONCATENATED MODULE: ./src/Components/Calendar.vue
var Calendar_disposed = false
/* script */


/* template */

/* template functional */
var Calendar_vue_template_functional_ = false
/* styles */
var Calendar_vue_styles_ = null
/* scopeId */
var Calendar_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var Calendar_vue_module_identifier_ = null

var Calendar_Component = normalizeComponent(
  Calendar,
  Calendar_render,
  Calendar_staticRenderFns,
  Calendar_vue_template_functional_,
  Calendar_vue_styles_,
  Calendar_vue_scopeId_,
  Calendar_vue_module_identifier_
)
Calendar_Component.options.__file = "src/Components/Calendar.vue"

/* hot reload */
if (false) {}

/* harmony default export */ var Components_Calendar = (Calendar_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Components/SwitchButton.vue
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SwitchButton = ({
  props: {
    checked: Boolean
  },
  methods: {
    onClick: function onClick() {
      this.$emit('on-check-change', !this.checked);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0135dc96","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Components/SwitchButton.vue
var SwitchButton_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("label", { staticClass: "vdpr-datepicker__switch" }, [
    _c("input", {
      attrs: { type: "checkbox" },
      domProps: { checked: _vm.checked },
      on: { click: _vm.onClick }
    }),
    _vm._v(" "),
    _c("span", { staticClass: "vdpr-datepicker__switch-slider" })
  ])
}
var SwitchButton_staticRenderFns = []
SwitchButton_render._withStripped = true

if (false) {}
// CONCATENATED MODULE: ./src/Components/SwitchButton.vue
var SwitchButton_disposed = false
/* script */


/* template */

/* template functional */
var SwitchButton_vue_template_functional_ = false
/* styles */
var SwitchButton_vue_styles_ = null
/* scopeId */
var SwitchButton_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var SwitchButton_vue_module_identifier_ = null

var SwitchButton_Component = normalizeComponent(
  SwitchButton,
  SwitchButton_render,
  SwitchButton_staticRenderFns,
  SwitchButton_vue_template_functional_,
  SwitchButton_vue_styles_,
  SwitchButton_vue_scopeId_,
  SwitchButton_vue_module_identifier_
)
SwitchButton_Component.options.__file = "src/Components/SwitchButton.vue"

/* hot reload */
if (false) {}

/* harmony default export */ var Components_SwitchButton = (SwitchButton_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Components/CalendarInputDate.vue
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CalendarInputDate = ({
  props: {
    inputClass: [String, Object, Array],
    timestamp: Number,
    format: String,
    language: String
  },
  data: function data() {
    return {
      copyTimestamp: this.timestamp
    };
  },
  watch: {
    timestamp: function timestamp(value) {
      this.copyTimestamp = value;
    }
  },
  computed: {
    dateUtil: function dateUtil() {
      return new DateUtil(this.language);
    },
    formattedValue: function formattedValue() {
      if (this.copyTimestamp === 0) return '';
      var date = this.dateUtil.fromUnix(this.copyTimestamp);
      return this.dateUtil.formatDate(date, this.format);
    }
  },
  methods: {
    onChange: function onChange(e) {
      var lastDate = this.dateUtil.fromUnix(this.copyTimestamp);
      var lastTime = this.dateUtil.formatDate(lastDate, 'HH:mm:ss');
      var date = this.dateUtil.createDate("".concat(e.target.value, " ").concat(lastTime), "".concat(this.format, " HH:mm:ss"));

      if (!this.dateUtil.isValidDate(date)) {
        return false;
      }

      return this.$emit('on-change', date);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f6888fcc","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Components/CalendarInputDate.vue
var CalendarInputDate_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "vdpr-datepicker__calendar-input-date" }, [
    _c("input", {
      staticClass: "vdpr-datepicker__calendar-input-date-elem",
      class: _vm.inputClass,
      attrs: { type: "text" },
      domProps: { value: _vm.formattedValue },
      on: { change: _vm.onChange }
    })
  ])
}
var CalendarInputDate_staticRenderFns = []
CalendarInputDate_render._withStripped = true

if (false) {}
// CONCATENATED MODULE: ./src/Components/CalendarInputDate.vue
var CalendarInputDate_disposed = false
/* script */


/* template */

/* template functional */
var CalendarInputDate_vue_template_functional_ = false
/* styles */
var CalendarInputDate_vue_styles_ = null
/* scopeId */
var CalendarInputDate_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var CalendarInputDate_vue_module_identifier_ = null

var CalendarInputDate_Component = normalizeComponent(
  CalendarInputDate,
  CalendarInputDate_render,
  CalendarInputDate_staticRenderFns,
  CalendarInputDate_vue_template_functional_,
  CalendarInputDate_vue_styles_,
  CalendarInputDate_vue_scopeId_,
  CalendarInputDate_vue_module_identifier_
)
CalendarInputDate_Component.options.__file = "src/Components/CalendarInputDate.vue"

/* hot reload */
if (false) {}

/* harmony default export */ var Components_CalendarInputDate = (CalendarInputDate_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Components/CalendarInputTime.vue
function _slicedToArray(arr, i) { return CalendarInputTime_arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || CalendarInputTime_unsupportedIterableToArray(arr, i) || CalendarInputTime_nonIterableRest(); }

function CalendarInputTime_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function CalendarInputTime_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CalendarInputTime_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CalendarInputTime_arrayLikeToArray(o, minLen); }

function CalendarInputTime_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function CalendarInputTime_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CalendarInputTime = ({
  props: {
    inputClass: [String, Object, Array],
    readonly: Boolean,
    timestamp: Number,
    language: String,
    step: Number
  },
  data: function data() {
    return {
      copyTimestamp: this.timestamp,
      format: 'HH:mm'
    };
  },
  computed: {
    dateUtil: function dateUtil() {
      return new DateUtil(this.language);
    },
    formattedValue: function formattedValue() {
      if (this.copyTimestamp === 0) return '';
      return this.dateUtil.formatDate(this.dateUtil.fromUnix(this.copyTimestamp), this.format);
    }
  },
  watch: {
    timestamp: function timestamp(value) {
      this.copyTimestamp = value;
    }
  },
  methods: {
    onClickUp: function onClickUp() {
      if (this.copyTimestamp === 0) return false;
      this.copyTimestamp += this.step * 60;
      return this.$emit('on-change', this.dateUtil.fromUnix(this.copyTimestamp));
    },
    onClickDown: function onClickDown() {
      if (this.copyTimestamp === 0) return false;
      this.copyTimestamp -= this.step * 60;
      return this.$emit('on-change', this.dateUtil.fromUnix(this.copyTimestamp));
    },
    onChange: function onChange(e) {
      var _e$target$value$trim$ = e.target.value.trim().split(':'),
          _e$target$value$trim$2 = _slicedToArray(_e$target$value$trim$, 2),
          hours = _e$target$value$trim$2[0],
          minutes = _e$target$value$trim$2[1];

      hours = parseInt(hours, 10);
      minutes = parseInt(minutes, 10); // eslint-disable-next-line no-restricted-globals

      if (isNaN(hours) || isNaN(minutes)) {
        return false;
      }

      var totalMinutes = hours * 60 + minutes;
      var startOfDate = this.dateUtil.startOf(this.dateUtil.fromUnix(this.copyTimestamp), 'd');
      var date = this.dateUtil.add(startOfDate, totalMinutes, 'm');
      return this.$emit('on-change', date);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c3e3188e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Components/CalendarInputTime.vue
var CalendarInputTime_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "vdpr-datepicker__calendar-input-time" }, [
    _c("input", {
      staticClass: "vdpr-datepicker__calendar-input-time-elem",
      class: _vm.inputClass,
      attrs: { type: "text", readonly: _vm.readonly },
      domProps: { value: _vm.formattedValue },
      on: { change: _vm.onChange }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "vdpr-datepicker__calendar-input-time-control" }, [
      _c(
        "span",
        {
          staticClass: "vdpr-datepicker__calendar-input-time-control-up",
          on: { click: _vm.onClickUp }
        },
        [_vm._v("\n    ▲\n    ")]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "vdpr-datepicker__calendar-input-time-control-down",
          on: { click: _vm.onClickDown }
        },
        [_vm._v("\n      ▼\n    ")]
      )
    ])
  ])
}
var CalendarInputTime_staticRenderFns = []
CalendarInputTime_render._withStripped = true

if (false) {}
// CONCATENATED MODULE: ./src/Components/CalendarInputTime.vue
var CalendarInputTime_disposed = false
/* script */


/* template */

/* template functional */
var CalendarInputTime_vue_template_functional_ = false
/* styles */
var CalendarInputTime_vue_styles_ = null
/* scopeId */
var CalendarInputTime_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var CalendarInputTime_vue_module_identifier_ = null

var CalendarInputTime_Component = normalizeComponent(
  CalendarInputTime,
  CalendarInputTime_render,
  CalendarInputTime_staticRenderFns,
  CalendarInputTime_vue_template_functional_,
  CalendarInputTime_vue_styles_,
  CalendarInputTime_vue_scopeId_,
  CalendarInputTime_vue_module_identifier_
)
CalendarInputTime_Component.options.__file = "src/Components/CalendarInputTime.vue"

/* hot reload */
if (false) {}

/* harmony default export */ var Components_CalendarInputTime = (CalendarInputTime_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Components/CalendarDialog.vue
function CalendarDialog_slicedToArray(arr, i) { return CalendarDialog_arrayWithHoles(arr) || CalendarDialog_iterableToArrayLimit(arr, i) || CalendarDialog_unsupportedIterableToArray(arr, i) || CalendarDialog_nonIterableRest(); }

function CalendarDialog_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function CalendarDialog_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CalendarDialog_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CalendarDialog_arrayLikeToArray(o, minLen); }

function CalendarDialog_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CalendarDialog_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function CalendarDialog_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var CalendarDialog = ({
  components: {
    Calendar: Components_Calendar,
    CalendarInputDate: Components_CalendarInputDate,
    CalendarInputTime: Components_CalendarInputTime,
    SwitchButton: Components_SwitchButton
  },
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    initialDates: {
      type: Array,
      validator: PropsValidator.isValidInitialDate,
      default: function _default() {
        return [];
      }
    },
    language: {
      type: String,
      default: 'en'
    },
    disabledDates: {
      type: Object,
      validator: PropsValidator.isValidDisabledDates,
      default: function _default() {
        return {};
      }
    },
    showHelperButtons: {
      type: Boolean,
      default: true
    },
    helperButtons: {
      type: Array,
      validator: PropsValidator.isValidHelperButtons,
      default: function _default() {
        return [];
      }
    },
    timeInput: {
      type: Object,
      default: function _default() {
        return {
          inputClass: null,
          readonly: false,
          step: 60 // in minutes

        };
      }
    },
    dateInput: {
      type: Object,
      default: function _default() {
        return {
          labelStarts: 'Starts',
          labelEnds: 'Ends',
          inputClass: null,
          format: 'DD/MM/YYYY',
          readonly: false
        };
      }
    },
    switchButtonLabel: {
      type: String,
      default: 'All Days'
    },
    switchButtonInitial: {
      type: Boolean,
      default: false
    },
    isMondayFirst: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var dateUtil = new DateUtil(this.language);

    var _this$initialDates = CalendarDialog_slicedToArray(this.initialDates, 2),
        from = _this$initialDates[0],
        to = _this$initialDates[1];

    var isAllDay = this.switchButtonInitial;

    if (from && to) {
      if (dateUtil.isAllDay(from, to)) {
        isAllDay = true;
      } else {
        isAllDay = false;
      }
    }

    return {
      selectedStartDate: from !== null && from !== void 0 ? from : null,
      selectedEndDate: to !== null && to !== void 0 ? to : null,
      isAllDay: isAllDay
    };
  },
  computed: {
    dateUtil: function dateUtil() {
      return new DateUtil(this.language);
    },
    helpers: function helpers() {
      if (!this.showHelperButtons) return [];
      if (this.helperButtons.length) return this.helperButtons;
      return this.getDefaultHelpers();
    },
    unixSelectedStartDate: function unixSelectedStartDate() {
      if (!this.selectedStartDate) {
        return 0;
      }

      return this.dateUtil.toUnix(this.selectedStartDate);
    },
    unixSelectedEndDate: function unixSelectedEndDate() {
      if (!this.selectedEndDate) {
        return 0;
      }

      return this.dateUtil.toUnix(this.selectedEndDate);
    },
    isVisibleTimeInput: function isVisibleTimeInput() {
      return !this.isAllDay;
    },
    isVisibleButtonApply: function isVisibleButtonApply() {
      return !this.inline;
    }
  },
  methods: {
    onCheckChange: function onCheckChange(check) {
      this.isAllDay = check;
      if (!this.selectedStartDate || !this.selectedEndDate) return;
      this.selectedStartDate = this.dateUtil.startOf(this.selectedStartDate, 'd');

      if (check) {
        this.selectedEndDate = this.dateUtil.endOf(this.selectedEndDate, 'd');
      } else {
        this.selectedEndDate = this.dateUtil.startOf(this.selectedEndDate, 'd');
      }
    },
    onStartInputDateChange: function onStartInputDateChange(value) {
      this.applyOrSwapApply(value, this.selectedEndDate);
      this.emitOnApplyIfInline();
    },
    onEndDateInputDateChange: function onEndDateInputDateChange(value) {
      this.applyOrSwapApply(this.selectedStartDate, value);
      this.emitOnApplyIfInline();
    },
    onTimeStartInputChange: function onTimeStartInputChange(value) {
      this.applyOrSwapApply(value, this.selectedEndDate);
      this.emitOnApplyIfInline();
    },
    onTimeEndInputChange: function onTimeEndInputChange(value) {
      this.applyOrSwapApply(this.selectedStartDate, value);
      this.emitOnApplyIfInline();
    },
    onHelperClick: function onHelperClick(fromDate, toDate) {
      if (this.dateUtil.isAllDay(fromDate, toDate)) {
        this.isAllDay = true;
      } else {
        this.isAllDay = false;
      }

      this.applyOrSwapApply(fromDate, toDate);
      this.$emit('select-date', this.selectedStartDate, this.selectedEndDate);
      this.emitOnApplyIfInline();
    },
    onClickButtonApply: function onClickButtonApply() {
      this.$emit('on-apply', this.selectedStartDate, this.selectedEndDate);
    },
    selectDate: function selectDate(date) {
      var startDate = this.selectedStartDate;
      var endDate = this.selectedEndDate;

      if (this.dateUtil.isValidDate(startDate) && this.dateUtil.isValidDate(endDate) && this.dateUtil.isSameDate(startDate, endDate)) {
        endDate = date;
      } else {
        startDate = date;
        endDate = date;
      }

      this.applyOrSwapApply(startDate, endDate);

      if (this.isAllDay) {
        this.selectedStartDate = this.dateUtil.startOf(this.selectedStartDate, 'd');
        this.selectedEndDate = this.dateUtil.endOf(this.selectedEndDate, 'd');
      }

      this.$emit('select-date', this.selectedStartDate, this.selectedEndDate);
      this.emitOnApplyIfInline();
    },
    selectDisabledDate: function selectDisabledDate(date) {
      this.$emit('select-disabled-date', date);
    },
    applyOrSwapApply: function applyOrSwapApply(startDate, endDate) {
      if (this.dateUtil.isAfter(startDate, endDate)) {
        var _ref = [endDate, startDate];
        this.selectedStartDate = _ref[0];
        this.selectedEndDate = _ref[1];
      } else {
        this.selectedStartDate = startDate;
        this.selectedEndDate = endDate;
      }
    },
    emitOnApplyIfInline: function emitOnApplyIfInline() {
      if (this.inline) {
        this.$emit('on-apply', this.selectedStartDate, this.selectedEndDate);
      }
    },
    getDefaultHelpers: function getDefaultHelpers() {
      var now = new Date();
      var todayFrom = this.dateUtil.startOf(now, 'd');
      var todayTo = this.dateUtil.endOf(now, 'd');
      var yesterdayFrom = this.dateUtil.subtract(todayFrom, 1, 'd');
      var yesterdayTo = this.dateUtil.subtract(todayTo, 1, 'd');
      var thisWeekFrom = this.dateUtil.startOf(now, 'week');
      var thisWeekTo = this.dateUtil.endOf(now, 'week');
      var lastWeekFrom = this.dateUtil.subtract(thisWeekFrom, 7, 'd');
      var lastWeekTo = this.dateUtil.subtract(thisWeekTo, 7, 'd');
      var thisMonthFrom = this.dateUtil.startOf(now, 'month');
      var thisMonthTo = this.dateUtil.endOf(now, 'month');
      var lastMonthFrom = this.dateUtil.subtract(thisMonthFrom, 1, 'M');
      var lastMonthTo = this.dateUtil.subtract(thisMonthTo, 1, 'M');
      var thisYearFrom = this.dateUtil.startOf(now, 'year');
      var thisYearTo = this.dateUtil.endOf(now, 'year');
      var lastYearFrom = this.dateUtil.subtract(thisYearFrom, 1, 'y');
      var lastYearTo = this.dateUtil.subtract(thisYearTo, 1, 'y');
      return [{
        name: 'Today',
        from: todayFrom,
        to: todayTo
      }, {
        name: 'Yesterday',
        from: yesterdayFrom,
        to: yesterdayTo
      }, {
        name: 'This Week',
        from: thisWeekFrom,
        to: thisWeekTo
      }, {
        name: 'Last Week',
        from: lastWeekFrom,
        to: lastWeekTo
      }, {
        name: 'This Month',
        from: thisMonthFrom,
        to: thisMonthTo
      }, {
        name: 'Last Month',
        from: lastMonthFrom,
        to: lastMonthTo
      }, {
        name: 'This Year',
        from: thisYearFrom,
        to: thisYearTo
      }, {
        name: 'Last Year',
        from: lastYearFrom,
        to: lastYearTo
      }];
    },
    onPrevCalendar: function onPrevCalendar() {
      this.$emit('on-prev-calendar');
    },
    onNextCalendar: function onNextCalendar() {
      this.$emit('on-next-calendar');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-07c97936","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Components/CalendarDialog.vue
var CalendarDialog_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "vdpr-datepicker__calendar-dialog",
      class: {
        "vdpr-datepicker__calendar-dialog--inline": this.inline
      }
    },
    [
      _vm.helpers.length
        ? _c(
            "div",
            { staticClass: "vdpr-datepicker__calendar-button-helper" },
            _vm._l(_vm.helpers, function(btn) {
              return _c(
                "button",
                {
                  key: "btn" + btn.name,
                  class: [
                    "vdpr-datepicker__button",
                    "vdpr-datepicker__button--block",
                    "vdpr-datepicker__button-default"
                  ],
                  on: {
                    click: function() {
                      _vm.onHelperClick(btn.from, btn.to)
                    }
                  }
                },
                [_vm._v(_vm._s(btn.name))]
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c("calendar", {
        attrs: {
          language: _vm.language,
          selectedStartDate: _vm.selectedStartDate,
          selectedEndDate: _vm.selectedEndDate,
          disabledDates: _vm.disabledDates,
          isMondayFirst: _vm.isMondayFirst
        },
        on: {
          "select-date": _vm.selectDate,
          "select-disabled-date": _vm.selectDisabledDate,
          "on-prev-calendar": _vm.onPrevCalendar,
          "on-next-calendar": _vm.onNextCalendar
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "vdpr-datepicker__calendar-actions" }, [
        _c(
          "div",
          { staticClass: "vdpr-datepicker__calendar-input-wrapper" },
          [
            _c("span", [_vm._v(_vm._s(_vm.dateInput.labelStarts))]),
            _vm._v(" "),
            _c("calendar-input-date", {
              attrs: {
                format: _vm.dateInput.format,
                inputClass: _vm.dateInput.inputClass,
                timestamp: _vm.unixSelectedStartDate,
                language: _vm.language
              },
              on: { "on-change": _vm.onStartInputDateChange }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "vdpr-datepicker__calendar-input-wrapper vdpr-datepicker__calendar-input-wrapper--end"
          },
          [
            _c("calendar-input-time", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isVisibleTimeInput,
                  expression: "isVisibleTimeInput"
                }
              ],
              attrs: {
                step: _vm.timeInput.step,
                readonly: _vm.timeInput.readonly,
                inputClass: _vm.timeInput.inputClass,
                timestamp: _vm.unixSelectedStartDate
              },
              on: { "on-change": _vm.onTimeStartInputChange }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vdpr-datepicker__calendar-input-wrapper" },
          [
            _c("span", [_vm._v(_vm._s(_vm.dateInput.labelEnds))]),
            _vm._v(" "),
            _c("calendar-input-date", {
              attrs: {
                format: _vm.dateInput.format,
                inputClass: _vm.dateInput.inputClass,
                timestamp: _vm.unixSelectedEndDate,
                language: _vm.language
              },
              on: { "on-change": _vm.onEndDateInputDateChange }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "vdpr-datepicker__calendar-input-wrapper vdpr-datepicker__calendar-input-wrapper--end"
          },
          [
            _c("calendar-input-time", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isVisibleTimeInput,
                  expression: "isVisibleTimeInput"
                }
              ],
              attrs: {
                step: _vm.timeInput.step,
                readonly: _vm.timeInput.readonly,
                inputClass: _vm.timeInput.inputClass,
                timestamp: _vm.unixSelectedEndDate
              },
              on: { "on-change": _vm.onTimeEndInputChange }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isVisibleButtonApply,
                expression: "isVisibleButtonApply"
              }
            ],
            class: [
              "vdpr-datepicker__button",
              "vdpr-datepicker__button--block",
              "button is-primary"
            ],
            on: { click: _vm.onClickButtonApply }
          },
          [_vm._v("Apply")]
        )
      ])
    ],
    1
  )
}
var CalendarDialog_staticRenderFns = []
CalendarDialog_render._withStripped = true

if (false) {}
// CONCATENATED MODULE: ./src/Components/CalendarDialog.vue
var CalendarDialog_disposed = false
function injectStyle (context) {
  if (CalendarDialog_disposed) return
  __webpack_require__(5)
}
/* script */


/* template */

/* template functional */
var CalendarDialog_vue_template_functional_ = false
/* styles */
var CalendarDialog_vue_styles_ = injectStyle
/* scopeId */
var CalendarDialog_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var CalendarDialog_vue_module_identifier_ = null

var CalendarDialog_Component = normalizeComponent(
  CalendarDialog,
  CalendarDialog_render,
  CalendarDialog_staticRenderFns,
  CalendarDialog_vue_template_functional_,
  CalendarDialog_vue_styles_,
  CalendarDialog_vue_scopeId_,
  CalendarDialog_vue_module_identifier_
)
CalendarDialog_Component.options.__file = "src/Components/CalendarDialog.vue"

/* hot reload */
if (false) {}

/* harmony default export */ var Components_CalendarDialog = (CalendarDialog_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Components/DatePicker.vue
function DatePicker_slicedToArray(arr, i) { return DatePicker_arrayWithHoles(arr) || DatePicker_iterableToArrayLimit(arr, i) || DatePicker_unsupportedIterableToArray(arr, i) || DatePicker_nonIterableRest(); }

function DatePicker_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function DatePicker_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return DatePicker_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DatePicker_arrayLikeToArray(o, minLen); }

function DatePicker_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function DatePicker_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function DatePicker_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var DatePicker = ({
  components: {
    DateInput: Components_DateInput,
    CalendarDialog: Components_CalendarDialog
  },
  props: {
    initialDates: {
      type: Array,
      validator: PropsValidator.isValidInitialDate,
      default: function _default() {
        return [];
      }
    },
    inline: {
      type: Boolean,
      default: false
    },
    language: {
      type: String,
      default: 'en'
    },
    format: {
      type: String,
      default: 'DD/MM/YYYY HH:mm'
    },
    sameDateFormat: {
      type: Object,
      validator: PropsValidator.isValidSameDateFormat,
      default: function _default() {
        return {
          from: 'DD/MM/YYYY, HH:mm',
          to: 'HH:mm'
        };
      }
    },
    dateInput: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    disabledDates: Object,
    showHelperButtons: Boolean,
    helperButtons: Array,
    calendarDateInput: Object,
    calendarTimeInput: Object,
    switchButtonLabel: String,
    switchButtonInitial: Boolean,
    isMondayFirst: Boolean
  },
  data: function data() {
    var _this$initialDates = DatePicker_slicedToArray(this.initialDates, 2),
        fromDate = _this$initialDates[0],
        toDate = _this$initialDates[1];

    var showCalendarDialog = this.inline;
    return {
      selectedStartDate: fromDate !== null && fromDate !== void 0 ? fromDate : null,
      selectedEndDate: toDate !== null && toDate !== void 0 ? toDate : null,
      showCalendarDialog: showCalendarDialog
    };
  },
  computed: {
    dateUtil: function dateUtil() {
      return new DateUtil(this.language);
    },
    showingDateInput: function showingDateInput() {
      return !this.inline;
    },
    showingCalendarDialog: function showingCalendarDialog() {
      return this.showCalendarDialog || this.inline;
    }
  },
  methods: {
    onApply: function onApply(date1, date2) {
      if (!date1 || !date2) return false;
      this.selectedStartDate = date1;
      this.selectedEndDate = date2;

      if (!this.inline) {
        this.showCalendarDialog = false;
      }

      return this.$emit('date-applied', date1, date2);
    },
    onClickDateInput: function onClickDateInput() {
      if (this.inline) return;
      this.showCalendarDialog = !this.showCalendarDialog;

      if (this.showCalendarDialog) {
        this.$emit('datepicker-opened');
      } else {
        this.$emit('datepicker-closed');
      }
    },
    onPrevCalendar: function onPrevCalendar() {
      this.$emit('on-prev-calendar');
    },
    onNextCalendar: function onNextCalendar() {
      this.$emit('on-next-calendar');
    },
    selectDate: function selectDate(date1, date2) {
      this.$emit('select-date', date1, date2);
    },
    selectDisabledDate: function selectDisabledDate(date) {
      this.$emit('select-disabled-date', date);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-263f15ec","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Components/DatePicker.vue
var DatePicker_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vdpr-datepicker" },
    [
      _c("date-input", {
        attrs: {
          type: _vm.showingDateInput ? "text" : "hidden",
          language: _vm.language,
          selectedStartDate: _vm.selectedStartDate,
          selectedEndDate: _vm.selectedEndDate,
          format: _vm.format,
          sameDateFormat: _vm.sameDateFormat,
          refName: _vm.dateInput.refName,
          inputClass: _vm.dateInput.inputClass,
          name: _vm.dateInput.name,
          id: _vm.dateInput.id,
          placeholder: _vm.dateInput.placeholder,
          required: _vm.dateInput.required
        },
        on: { "on-click": _vm.onClickDateInput }
      }),
      _vm._v(" "),
      _c("calendar-dialog", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showingCalendarDialog,
            expression: "showingCalendarDialog"
          }
        ],
        attrs: {
          language: _vm.language,
          inline: _vm.inline,
          initialDates: _vm.initialDates,
          disabledDates: _vm.disabledDates,
          showHelperButtons: _vm.showHelperButtons,
          helperButtons: _vm.helperButtons,
          dateInput: _vm.calendarDateInput,
          timeInput: _vm.calendarTimeInput,
          switchButtonLabel: _vm.switchButtonLabel,
          switchButtonInitial: _vm.switchButtonInitial,
          isMondayFirst: _vm.isMondayFirst
        },
        on: {
          "on-apply": _vm.onApply,
          "select-date": _vm.selectDate,
          "select-disabled-date": _vm.selectDisabledDate,
          "on-prev-calendar": _vm.onPrevCalendar,
          "on-next-calendar": _vm.onNextCalendar
        }
      })
    ],
    1
  )
}
var DatePicker_staticRenderFns = []
DatePicker_render._withStripped = true

if (false) {}
// CONCATENATED MODULE: ./src/Components/DatePicker.vue
var DatePicker_disposed = false
function DatePicker_injectStyle (context) {
  if (DatePicker_disposed) return
  __webpack_require__(3)
}
/* script */


/* template */

/* template functional */
var DatePicker_vue_template_functional_ = false
/* styles */
var DatePicker_vue_styles_ = DatePicker_injectStyle
/* scopeId */
var DatePicker_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var DatePicker_vue_module_identifier_ = null

var DatePicker_Component = normalizeComponent(
  DatePicker,
  DatePicker_render,
  DatePicker_staticRenderFns,
  DatePicker_vue_template_functional_,
  DatePicker_vue_styles_,
  DatePicker_vue_scopeId_,
  DatePicker_vue_module_identifier_
)
DatePicker_Component.options.__file = "src/Components/DatePicker.vue"

/* hot reload */
if (false) {}

/* harmony default export */ var Components_DatePicker = __webpack_exports__["default"] = (DatePicker_Component.exports);


/***/ })
/******/ ]);
});
//# sourceMappingURL=vdprDatePicker.js.map