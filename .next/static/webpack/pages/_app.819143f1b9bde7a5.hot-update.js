"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/react-grid-layout/css/styles.css */ \"./node_modules/react-grid-layout/css/styles.css\");\n/* harmony import */ var _node_modules_react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/react-resizable/css/styles.css */ \"./node_modules/react-resizable/css/styles.css\");\n/* harmony import */ var _node_modules_react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n// import App from 'next/app'\n\n\n\nvar heightUnit = window.innerHeight / 100;\nconsole.log(\"\\uD83D\\uDE80 ~ file: _app.js ~ line 7 ~ heightUnit\", heightUnit);\nvar widthUnit = window.innerWidth / 100;\nconsole.log(\"\\uD83D\\uDE80 ~ file: _app.js ~ line 9 ~ widthUnit\", widthUnit);\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, pageProps), void 0, false, {\n        fileName: \"/home/alex/Documents/BraineetTestGantt/pages/_app.js\",\n        lineNumber: 12,\n        columnNumber: 12\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTs7QUFEQSw2QkFBNkI7QUFDQztBQUN5QjtBQUNGO0FBRXJELElBQU1BLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxXQUFXLEdBQUcsR0FBRztBQUMzQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0RBQXlDLEVBQUVKLFVBQVUsQ0FBQztBQUNsRSxJQUFNSyxTQUFTLEdBQUdKLE1BQU0sQ0FBQ0ssVUFBVSxHQUFHLEdBQUc7QUFDekNILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1EQUF3QyxFQUFFQyxTQUFTLENBQUM7QUFFaEUsU0FBU0UsS0FBSyxDQUFDLEtBQXdCLEVBQUU7UUFBeEJDLFNBQVMsR0FBWCxLQUF3QixDQUF0QkEsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQXdCLENBQVhBLFNBQVM7SUFDakMscUJBQU8sOERBQUNELFNBQVMscUZBQUtDLFNBQVM7Ozs7WUFBSTtDQUNwQztBQUZNRixLQUFBQSxLQUFLO0FBSVosK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIlxuaW1wb3J0IFwiL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9jc3Mvc3R5bGVzLmNzc1wiXG5pbXBvcnQgXCIvbm9kZV9tb2R1bGVzL3JlYWN0LXJlc2l6YWJsZS9jc3Mvc3R5bGVzLmNzc1wiXG5cbmNvbnN0IGhlaWdodFVuaXQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAxMDA7XG5jb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBfYXBwLmpzIH4gbGluZSA3IH4gaGVpZ2h0VW5pdFwiLCBoZWlnaHRVbml0KVxuY29uc3Qgd2lkdGhVbml0ID0gd2luZG93LmlubmVyV2lkdGggLyAxMDA7XG5jb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBfYXBwLmpzIH4gbGluZSA5IH4gd2lkdGhVbml0XCIsIHdpZHRoVW5pdClcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsiaGVpZ2h0VW5pdCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY29uc29sZSIsImxvZyIsIndpZHRoVW5pdCIsImlubmVyV2lkdGgiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});