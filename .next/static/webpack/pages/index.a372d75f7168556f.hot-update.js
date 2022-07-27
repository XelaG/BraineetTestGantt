"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ganttGrid.js":
/*!*********************************!*\
  !*** ./components/ganttGrid.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-layout */ \"./node_modules/react-grid-layout/index.js\");\n/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _month_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./month.json */ \"./components/month.json\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    width: 70vw;\\n    background-color: blue;\\n    overflow: auto;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    width: fit-content;\\n    background-color: yellow;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    color: white;\\n    background-color: grey;\\n    text-align: center;\\n    align-items: center;\\n    justify-content: center;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"ganttGrid__GridContainer\",\n    componentId: \"sc-d1dd8fe0-0\"\n})(_templateObject());\n_c = GridContainer;\nvar TimelineHeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"ganttGrid__TimelineHeaderContainer\",\n    componentId: \"sc-d1dd8fe0-1\"\n})(_templateObject1());\nvar TimelineHeaderText = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"ganttGrid__TimelineHeaderText\",\n    componentId: \"sc-d1dd8fe0-2\"\n})(_templateObject2());\n_c1 = TimelineHeaderText;\nfunction GanttGrid(param) {\n    var tasks = param.tasks;\n    var _this = this;\n    var generateDates = function generateDates() {\n        var tmpDates = [];\n        var todayMonth = new Date().getMonth();\n        var todayDay = new Date().getDate();\n        var actualDay = todayDay - 1;\n        var actualMonth = todayMonth;\n        if (actualDay < 1) {\n            actualMonth--;\n            actualDay = _month_json__WEBPACK_IMPORTED_MODULE_4__[actualMonth].length;\n        }\n        for(var i = 0; i < 15; i++){\n            tmpDates.push(\"\".concat(actualDay, \" \").concat(_month_json__WEBPACK_IMPORTED_MODULE_4__[actualMonth].name));\n            if (actualDay > 0) {\n                actualDay--;\n            } else {\n                actualMonth--;\n                if (actualMonth < 0) {\n                    actualMonth = 12;\n                }\n                actualDay = _month_json__WEBPACK_IMPORTED_MODULE_4__[actualMonth].length;\n            }\n        }\n        tmpDates = tmpDates.reverse();\n        actualDay = todayDay;\n        actualMonth = todayMonth;\n        for(var i = 0; i < 15; i++){\n            tmpDates.push(\"\".concat(actualDay, \" \").concat(_month_json__WEBPACK_IMPORTED_MODULE_4__[actualMonth].name));\n            if (actualDay <= _month_json__WEBPACK_IMPORTED_MODULE_4__[actualMonth].length) {\n                actualDay++;\n            } else {\n                actualMonth++;\n                if (actualMonth > 11) {\n                    actualMonth = 0;\n                }\n                actualDay = 1;\n            }\n        }\n        setDates(tmpDates);\n        return tmpDates;\n    };\n    var generateHeaderLayout = function generateHeaderLayout(dates) {\n        var tmpLayout = [];\n        dates.forEach(function(date, idx) {\n            tmpLayout.push({\n                i: date.replace(\" \", \"\"),\n                x: idx,\n                y: 0,\n                w: 1,\n                h: 1,\n                static: true\n            });\n        });\n        setLayout(tmpLayout);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), dates = ref[0], setDates = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), layout = ref1[0], setLayout = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref2[0], setIsLoading = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        generateHeaderLayout(generateDates());\n        setIsLoading(false);\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GridContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n                lineNumber: 93,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n            lineNumber: 92,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GridContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default()), {\n            className: \"layout\",\n            layout: layout,\n            cols: 30,\n            rowHeight: \"2vw\",\n            width: 30 * 150,\n            margin: [\n                0,\n                0\n            ],\n            children: dates.map(function(date) {\n                console.log(date);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TimelineHeaderText, {\n                    children: date\n                }, date.replace(\" \", \"\"), false, {\n                    fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n                    lineNumber: 109,\n                    columnNumber: 28\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n            lineNumber: 99,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n        lineNumber: 98,\n        columnNumber: 9\n    }, this);\n}\n_s(GanttGrid, \"1S892CFUG7v9/hxrKtw9UvtKOVA=\");\n_c2 = GanttGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GanttGrid);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GridContainer\");\n$RefreshReg$(_c1, \"TimelineHeaderText\");\n$RefreshReg$(_c2, \"GanttGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEVBQUU7WUFDUkMsU0FBUyxFQUFFLEtBQUs7WUFDaEJDLEtBQUssRUFBRSxFQUFFLEdBQUcsR0FBRztZQUNmQyxNQUFNLEVBQUU7QUFBQyxpQkFBQztBQUFFLGlCQUFDO2FBQUM7c0JBRWJwQixLQUFLLENBQUNxQixHQUFHLENBQUNsQixTQUFBQSxJQUFJLEVBQUk7Z0JBQ2ZtQixPQUFPLENBQUNDLEdBQUcsQ0FBQ3BCLElBQUksQ0FBQztnQkFDakIscUJBQU8sOERBQUN0QixrQkFBa0I7OEJBQThCc0IsSUFBSTttQkFBNUJBLElBQUksQ0FBQ0UsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7Ozs7eUJBQTZCLENBQUM7YUFDdEYsQ0FBQzs7Ozs7Z0JBQ087Ozs7O1lBQ0QsQ0FDbEI7Q0FDTDtHQXBGUXZCLFNBQVM7QUFBVEEsTUFBQUEsU0FBUztBQXNGbEIsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbnR0R3JpZC5qcz81YjAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHcmlkTGF5b3V0IGZyb20gXCJyZWFjdC1ncmlkLWxheW91dFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBtb250aEluZm8gZnJvbSBcIi4vbW9udGguanNvblwiXG5cbmNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNzB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuYFxuXG5jb25zdCBUaW1lbGluZUhlYWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG5gXG5cbmNvbnN0IFRpbWVsaW5lSGVhZGVyVGV4dCA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcblxuZnVuY3Rpb24gR2FudHRHcmlkKHt0YXNrc30pIHtcbiAgICBcbiAgICBjb25zdCBbZGF0ZXMsIHNldERhdGVzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtsYXlvdXQsIHNldExheW91dF0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlRGF0ZXMoKSB7XG4gICAgICAgIHZhciB0bXBEYXRlcyA9IFtdO1xuICAgICAgICB2YXIgdG9kYXlNb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKTtcbiAgICAgICAgdmFyIHRvZGF5RGF5ID0gbmV3IERhdGUoKS5nZXREYXRlKCk7XG4gICAgICAgIHZhciBhY3R1YWxEYXkgPSB0b2RheURheSAtIDE7XG4gICAgICAgIHZhciBhY3R1YWxNb250aCA9IHRvZGF5TW9udGg7XG4gICAgICAgIGlmIChhY3R1YWxEYXkgPCAxKSB7XG4gICAgICAgICAgICBhY3R1YWxNb250aC0tO1xuICAgICAgICAgICAgYWN0dWFsRGF5ID0gbW9udGhJbmZvW2FjdHVhbE1vbnRoXS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XG4gICAgICAgICAgICB0bXBEYXRlcy5wdXNoKGAke2FjdHVhbERheX0gJHttb250aEluZm9bYWN0dWFsTW9udGhdLm5hbWV9YClcbiAgICAgICAgICAgIGlmIChhY3R1YWxEYXkgPiAwKSB7XG4gICAgICAgICAgICAgICAgYWN0dWFsRGF5LS1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0dWFsTW9udGgtLTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsTW9udGggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbE1vbnRoID0gMTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFjdHVhbERheSA9IG1vbnRoSW5mb1thY3R1YWxNb250aF0ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRtcERhdGVzID0gdG1wRGF0ZXMucmV2ZXJzZSgpXG4gICAgICAgIGFjdHVhbERheSA9IHRvZGF5RGF5O1xuICAgICAgICBhY3R1YWxNb250aCA9IHRvZGF5TW9udGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTU7IGkrKykge1xuICAgICAgICAgICAgdG1wRGF0ZXMucHVzaChgJHthY3R1YWxEYXl9ICR7bW9udGhJbmZvW2FjdHVhbE1vbnRoXS5uYW1lfWApXG4gICAgICAgICAgICBpZiAoYWN0dWFsRGF5IDw9IG1vbnRoSW5mb1thY3R1YWxNb250aF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYWN0dWFsRGF5KytcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0dWFsTW9udGgrKztcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsTW9udGggPiAxMSkge1xuICAgICAgICAgICAgICAgICAgICBhY3R1YWxNb250aCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFjdHVhbERheSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0RGF0ZXModG1wRGF0ZXMpO1xuICAgICAgICByZXR1cm4gdG1wRGF0ZXNcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUhlYWRlckxheW91dChkYXRlcykge1xuICAgICAgICB2YXIgdG1wTGF5b3V0ID0gW11cbiAgICAgICAgZGF0ZXMuZm9yRWFjaCgoZGF0ZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICB0bXBMYXlvdXQucHVzaCh7aTogZGF0ZS5yZXBsYWNlKFwiIFwiLCBcIlwiKSwgeDogaWR4LCB5OiAwLCB3OiAxLCBoOiAxLCBzdGF0aWM6IHRydWV9KVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0TGF5b3V0KHRtcExheW91dCkgICAgIFxuICAgIH1cbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZW5lcmF0ZUhlYWRlckxheW91dChnZW5lcmF0ZURhdGVzKCkpXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSwgW10pO1xuXG4gICAgaWYgKGlzTG9hZGluZykgwqB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdyaWRDb250YWluZXI+XG4gICAgICAgICAgICA8R3JpZExheW91dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxheW91dFwiXG4gICAgICAgICAgICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICAgICAgICAgICAgY29scz17MzB9XG4gICAgICAgICAgICAgICAgcm93SGVpZ2h0PXtcIjJ2d1wifVxuICAgICAgICAgICAgICAgIHdpZHRoPXszMCAqIDE1MH1cbiAgICAgICAgICAgICAgICBtYXJnaW49e1swLCAwXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGF0ZXMubWFwKGRhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oPFRpbWVsaW5lSGVhZGVyVGV4dCBrZXk9e2RhdGUucmVwbGFjZShcIiBcIiwgXCJcIil9PntkYXRlfTwvVGltZWxpbmVIZWFkZXJUZXh0PilcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbnR0R3JpZDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHcmlkTGF5b3V0Iiwic3R5bGVkIiwibW9udGhJbmZvIiwiR3JpZENvbnRhaW5lciIsImRpdiIsIlRpbWVsaW5lSGVhZGVyQ29udGFpbmVyIiwiVGltZWxpbmVIZWFkZXJUZXh0IiwiR2FudHRHcmlkIiwidGFza3MiLCJnZW5lcmF0ZURhdGVzIiwidG1wRGF0ZXMiLCJ0b2RheU1vbnRoIiwiRGF0ZSIsImdldE1vbnRoIiwidG9kYXlEYXkiLCJnZXREYXRlIiwiYWN0dWFsRGF5IiwiYWN0dWFsTW9udGgiLCJsZW5ndGgiLCJpIiwicHVzaCIsIm5hbWUiLCJyZXZlcnNlIiwic2V0RGF0ZXMiLCJnZW5lcmF0ZUhlYWRlckxheW91dCIsImRhdGVzIiwidG1wTGF5b3V0IiwiZm9yRWFjaCIsImRhdGUiLCJpZHgiLCJyZXBsYWNlIiwieCIsInkiLCJ3IiwiaCIsInN0YXRpYyIsInNldExheW91dCIsImxheW91dCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImgxIiwiY2xhc3NOYW1lIiwiY29scyIsInJvd0hlaWdodCIsIndpZHRoIiwibWFyZ2luIiwibWFwIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ganttGrid.js\n"));

/***/ })

});