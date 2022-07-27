/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/sizeUnits.js":
/*!******************************!*\
  !*** ./context/sizeUnits.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SizeUnitsWrapper\": () => (/* binding */ SizeUnitsWrapper),\n/* harmony export */   \"useSizeUnitsContext\": () => (/* binding */ useSizeUnitsContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst sizeUnitsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction SizeUnitsWrapper({ children  }) {\n    var { 0: heightUnit , 1: setHeightUnit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    var { 0: widthUnit , 1: setWidthUnit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setHeightUnit(Math.round(window.innerHeight / 100));\n        setWidthUnit(Math.round(window.innerWidth / 100));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sizeUnitsContext.Provider, {\n        value: {\n            heightUnit,\n            widthUnit\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/alex/Documents/BraineetTestGantt/context/sizeUnits.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\nfunction useSizeUnitsContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(sizeUnitsContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3NpemVVbml0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF1RTtBQUV2RSxNQUFNSSxnQkFBZ0IsaUJBQUdKLG9EQUFhLEVBQUU7QUFFakMsU0FBU0ssZ0JBQWdCLENBQUMsRUFBRUMsUUFBUSxHQUFFLEVBQUU7SUFDM0MsSUFBSSxLQUFDQyxVQUFVLE1BQUVDLGFBQWEsTUFBSUwsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFDN0MsSUFBSSxLQUFDTSxTQUFTLE1BQUVDLFlBQVksTUFBSVAsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFFM0NELGdEQUFTLENBQUMsSUFBTTtRQUNaTSxhQUFhLENBQUNHLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNuREosWUFBWSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRSxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDcEQsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUdQLHFCQUNBLDhEQUFDWCxnQkFBZ0IsQ0FBQ1ksUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBQ1YsVUFBVTtZQUFFRSxTQUFTO1NBQUM7a0JBQ3BESCxRQUFROzs7OztZQUNlLENBQzFCO0NBQ0w7QUFFTSxTQUFTWSxtQkFBbUIsR0FBRztJQUNsQyxPQUFPakIsaURBQVUsQ0FBQ0csZ0JBQWdCLENBQUMsQ0FBQztDQUN2QyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2NvbnRleHQvc2l6ZVVuaXRzLmpzPzZiMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3Qgc2l6ZVVuaXRzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpemVVbml0c1dyYXBwZXIoeyBjaGlsZHJlbiB9KSB7XG4gICAgdmFyIFtoZWlnaHRVbml0LCBzZXRIZWlnaHRVbml0XSA9IHVzZVN0YXRlKDApXG4gICAgdmFyIFt3aWR0aFVuaXQsIHNldFdpZHRoVW5pdF0gPSB1c2VTdGF0ZSgwKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0SGVpZ2h0VW5pdChNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCAvIDEwMCkpXG4gICAgICAgIHNldFdpZHRoVW5pdChNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoIC8gMTAwKSlcbiAgICB9LCBbXSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgPHNpemVVbml0c0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3toZWlnaHRVbml0LCB3aWR0aFVuaXR9fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgIDwvc2l6ZVVuaXRzQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlU2l6ZVVuaXRzQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChzaXplVW5pdHNDb250ZXh0KTtcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNpemVVbml0c0NvbnRleHQiLCJTaXplVW5pdHNXcmFwcGVyIiwiY2hpbGRyZW4iLCJoZWlnaHRVbml0Iiwic2V0SGVpZ2h0VW5pdCIsIndpZHRoVW5pdCIsInNldFdpZHRoVW5pdCIsIk1hdGgiLCJyb3VuZCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VTaXplVW5pdHNDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/sizeUnits.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/react-grid-layout/css/styles.css */ \"./node_modules/react-grid-layout/css/styles.css\");\n/* harmony import */ var _node_modules_react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/react-resizable/css/styles.css */ \"./node_modules/react-resizable/css/styles.css\");\n/* harmony import */ var _node_modules_react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_sizeUnits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/sizeUnits */ \"./context/sizeUnits.js\");\n\n// import App from 'next/app'\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_sizeUnits__WEBPACK_IMPORTED_MODULE_4__.SizeUnitsWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/alex/Documents/BraineetTestGantt/pages/_app.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/alex/Documents/BraineetTestGantt/pages/_app.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQURBLDZCQUE2QjtBQUNDO0FBQ3lCO0FBQ0Y7QUFDRztBQUd4RCxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUNyQyxxQkFDQSw4REFBQ0gsZ0VBQWdCO2tCQUNmLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ1gsQ0FDcEI7Q0FBQztBQUVGLGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIlxuaW1wb3J0IFwiL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9jc3Mvc3R5bGVzLmNzc1wiXG5pbXBvcnQgXCIvbm9kZV9tb2R1bGVzL3JlYWN0LXJlc2l6YWJsZS9jc3Mvc3R5bGVzLmNzc1wiXG5pbXBvcnQgeyBTaXplVW5pdHNXcmFwcGVyIH0gZnJvbSAnLi4vY29udGV4dC9zaXplVW5pdHMnO1xuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgPFNpemVVbml0c1dyYXBwZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9TaXplVW5pdHNXcmFwcGVyPlxuICApfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsiU2l6ZVVuaXRzV3JhcHBlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/react-grid-layout/css/styles.css":
/*!*******************************************************!*\
  !*** ./node_modules/react-grid-layout/css/styles.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-resizable/css/styles.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-resizable/css/styles.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();