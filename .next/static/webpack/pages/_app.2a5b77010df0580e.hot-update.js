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

/***/ "./context/sizeUnits.js":
/*!******************************!*\
  !*** ./context/sizeUnits.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SizeUnitsWrapper\": function() { return /* binding */ SizeUnitsWrapper; },\n/* harmony export */   \"useSizeUnitsContext\": function() { return /* binding */ useSizeUnitsContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar sizeUnitsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction SizeUnitsWrapper(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.round(window.innerHeight / 100)), heightUnit = ref[0], setHeightUnit = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.round(window.innerWidth / 100)), widthUnit = ref1[0], setWidthUnit = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setHeightUnit(Math.round(window.innerHeight / 100));\n        setWidthUnit(Math.round(window.innerWidth / 100));\n    }, [\n        window\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sizeUnitsContext.Provider, {\n        value: {\n            heightUnit: heightUnit,\n            widthUnit: widthUnit\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/alex/Documents/BraineetTestGantt/context/sizeUnits.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(SizeUnitsWrapper, \"N96e3eULPh5oKjPimrYQKmlww1Q=\");\n_c = SizeUnitsWrapper;\nfunction useSizeUnitsContext() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(sizeUnitsContext);\n}\n_s1(useSizeUnitsContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"SizeUnitsWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3NpemVVbml0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF1RTs7QUFFdkUsSUFBTUksZ0JBQWdCLGlCQUFHSixvREFBYSxFQUFFO0FBRWpDLFNBQVNLLGdCQUFnQixDQUFDLEtBQVksRUFBRTtRQUFkLFFBQVUsR0FBVixLQUFZLENBQVZDLFFBQVE7O0lBQ3ZDLElBQWtDSCxHQUE4QyxHQUE5Q0EsK0NBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQTNFQyxVQUFVLEdBQW1CUixHQUE4QyxHQUFqRSxFQUFFUyxhQUFhLEdBQUlULEdBQThDLEdBQWxEO0lBQzlCLElBQWdDQSxJQUE2QyxHQUE3Q0EsK0NBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0ksVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQXhFQyxTQUFTLEdBQWtCWCxJQUE2QyxHQUEvRCxFQUFFWSxZQUFZLEdBQUlaLElBQTZDLEdBQWpEO0lBRTVCRCxnREFBUyxDQUFDLFdBQU07UUFDWlUsYUFBYSxDQUFDTCxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbkRLLFlBQVksQ0FBQ1IsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0ksVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQ3BELEVBQUU7UUFBQ0osTUFBTTtLQUFDLENBQUMsQ0FBQztJQUNiLHFCQUNBLDhEQUFDTCxnQkFBZ0IsQ0FBQ1ksUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBQ04sVUFBVSxFQUFWQSxVQUFVO1lBQUVHLFNBQVMsRUFBVEEsU0FBUztTQUFDO2tCQUNwRFIsUUFBUTs7Ozs7WUFDZSxDQUMxQjtDQUNMO0dBYmVELGdCQUFnQjtBQUFoQkEsS0FBQUEsZ0JBQWdCO0FBZXpCLFNBQVNhLG1CQUFtQixHQUFHOztJQUNsQyxPQUFPakIsaURBQVUsQ0FBQ0csZ0JBQWdCLENBQUMsQ0FBQztDQUN2QztJQUZlYyxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9zaXplVW5pdHMuanM/NmIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzaXplVW5pdHNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gU2l6ZVVuaXRzV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcbiAgICB2YXIgW2hlaWdodFVuaXQsIHNldEhlaWdodFVuaXRdID0gdXNlU3RhdGUoTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJIZWlnaHQgLyAxMDApKVxuICAgIHZhciBbd2lkdGhVbml0LCBzZXRXaWR0aFVuaXRdID0gdXNlU3RhdGUoTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAvIDEwMCkpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRIZWlnaHRVbml0KE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0IC8gMTAwKSlcbiAgICAgICAgc2V0V2lkdGhVbml0KE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggLyAxMDApKVxuICAgIH0sIFt3aW5kb3ddKTtcbiAgICByZXR1cm4gKFxuICAgIDxzaXplVW5pdHNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7aGVpZ2h0VW5pdCwgd2lkdGhVbml0fX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3NpemVVbml0c0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNpemVVbml0c0NvbnRleHQoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoc2l6ZVVuaXRzQ29udGV4dCk7XG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzaXplVW5pdHNDb250ZXh0IiwiU2l6ZVVuaXRzV3JhcHBlciIsImNoaWxkcmVuIiwiTWF0aCIsInJvdW5kIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJoZWlnaHRVbml0Iiwic2V0SGVpZ2h0VW5pdCIsImlubmVyV2lkdGgiLCJ3aWR0aFVuaXQiLCJzZXRXaWR0aFVuaXQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU2l6ZVVuaXRzQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/sizeUnits.js\n"));

/***/ })

});