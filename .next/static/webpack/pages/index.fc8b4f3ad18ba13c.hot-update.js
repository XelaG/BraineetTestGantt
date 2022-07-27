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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-layout */ \"./node_modules/react-grid-layout/index.js\");\n/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _context_sizeUnits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/sizeUnits */ \"./context/sizeUnits.js\");\n/* harmony import */ var _month_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./month.json */ \"./components/month.json\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task */ \"./components/task.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    width: 70vw;\\n    background-color: blue;\\n    overflow: auto;\\n    ::-webkit-scrollbar{\\n        display: none;\\n    }\\n    ::-webkit-scrollbar-button{\\n        height: \",\n        \"px\\n    };\\n    ::-webkit-scrollbar-track{\\n        display: none;\\n    };\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    width: fit-content;\\n    background-color: yellow;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    color: white;\\n    background-color: grey;\\n    text-align: center;\\n    align-items: center;\\n    justify-content: center;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"ganttGrid__GridContainer\",\n    componentId: \"sc-174c71a5-0\"\n})(_templateObject(), function(props) {\n    return props.height || 10;\n});\n_c = GridContainer;\nvar TimelineHeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"ganttGrid__TimelineHeaderContainer\",\n    componentId: \"sc-174c71a5-1\"\n})(_templateObject1());\nvar TimelineHeaderText = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"ganttGrid__TimelineHeaderText\",\n    componentId: \"sc-174c71a5-2\"\n})(_templateObject2());\n_c1 = TimelineHeaderText;\nfunction GanttGrid(param) {\n    var tasks = param.tasks;\n    var _this = this;\n    var generateDates = function generateDates() {\n        var tmpDates = [];\n        var todayMonth = new Date().getMonth();\n        var todayDay = new Date().getDate();\n        var actualDay = todayDay - 1;\n        var actualMonth = todayMonth;\n        if (actualDay < 1) {\n            actualMonth--;\n            actualDay = _month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].length;\n        }\n        for(var i = 0; i < 15; i++){\n            tmpDates.push(\"\".concat(actualDay, \" \").concat(_month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].name));\n            if (actualDay > 0) {\n                actualDay--;\n            } else {\n                actualMonth--;\n                if (actualMonth < 0) {\n                    actualMonth = 12;\n                }\n                actualDay = _month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].length;\n            }\n        }\n        tmpDates = tmpDates.reverse();\n        actualDay = todayDay;\n        actualMonth = todayMonth;\n        for(var i = 0; i < 15; i++){\n            tmpDates.push(\"\".concat(actualDay, \" \").concat(_month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].name));\n            if (actualDay <= _month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].length) {\n                actualDay++;\n            } else {\n                actualMonth++;\n                if (actualMonth > 11) {\n                    actualMonth = 0;\n                }\n                actualDay = 1;\n            }\n        }\n        setDates(tmpDates);\n        return tmpDates;\n    };\n    var generateHeaderLayout = function generateHeaderLayout(dates) {\n        var tmpLayout = [];\n        dates.forEach(function(date, idx) {\n            tmpLayout.push({\n                i: date.replace(\" \", \"\"),\n                x: idx,\n                y: 0,\n                w: 1,\n                h: 1,\n                static: true\n            });\n        });\n        return tmpLayout;\n    };\n    var generateTaskLayout = function generateTaskLayout(tmpLayout) {\n        tasks.forEach(function(task, idx) {\n            tmpLayout.push({\n                i: task.name.replace(\" \", \"\"),\n                x: 0,\n                y: idx,\n                w: 1,\n                h: 1,\n                isResizable: true,\n                isBounded: true,\n                resizeHandles: [\n                    \"e\",\n                    \"w\"\n                ]\n            });\n        });\n        setLayout(tmpLayout);\n    };\n    _s();\n    var heightUnit = (0,_context_sizeUnits__WEBPACK_IMPORTED_MODULE_4__.useSizeUnitsContext)().heightUnit;\n    console.log(\"\\uD83D\\uDE80 ~ file: ganttGrid.js ~ line 34 ~ GanttGrid ~ heightUnit\", heightUnit);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), dates = ref[0], setDates = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), layout = ref1[0], setLayout = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref2[0], setIsLoading = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        generateTaskLayout(generateHeaderLayout(generateDates()));\n        setIsLoading(false);\n    }, []);\n    if (isLoading || heightUnit === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GridContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n                lineNumber: 112,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n            lineNumber: 111,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GridContainer, {\n        height: heightUnit,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default()), {\n            className: \"layout\",\n            layout: layout,\n            cols: 30,\n            rowHeight: 3 * heightUnit,\n            width: 30 * 150,\n            margin: [\n                0,\n                0\n            ],\n            children: [\n                dates.map(function(date) {\n                    console.log(date);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TimelineHeaderText, {\n                        children: date\n                    }, date.replace(\" \", \"\"), false, {\n                        fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n                        lineNumber: 128,\n                        columnNumber: 28\n                    }, _this);\n                }),\n                tasks.map(function(task) {\n                    console.log(\"\\uD83D\\uDE80 ~ file: ganttGrid.js ~ line 123 ~ GanttGrid ~ task\", task);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: task.name\n                    }, task.name.replace(\" \", \"\"), false, {\n                        fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n                        lineNumber: 132,\n                        columnNumber: 29\n                    }, _this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n            lineNumber: 118,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n        lineNumber: 117,\n        columnNumber: 9\n    }, this);\n}\n_s(GanttGrid, \"JqpXgnpLoYX34e65+0BMpyVgDqg=\", false, function() {\n    return [\n        _context_sizeUnits__WEBPACK_IMPORTED_MODULE_4__.useSizeUnitsContext\n    ];\n});\n_c2 = GanttGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GanttGrid);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GridContainer\");\n$RefreshReg$(_c1, \"TimelineHeaderText\");\n$RefreshReg$(_c2, \"GanttGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBa0I7a0NBQThCc0IsSUFBSTt1QkFBNUJBLElBQUksQ0FBQ0UsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7Ozs7NkJBQTZCLENBQUM7aUJBQ3RGLENBQUM7Z0JBQ0R0QixLQUFLLENBQUM4QyxHQUFHLENBQUNqQixTQUFBQSxJQUFJLEVBQUk7b0JBQ2ZNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlFQUFzRCxFQUFFUCxJQUFJLENBQUM7b0JBQ3pFLHFCQUFRLDhEQUFDbkMsS0FBRztrQ0FBbUNtQyxJQUFJLENBQUNoQixJQUFJO3VCQUF0Q2dCLElBQUksQ0FBQ2hCLElBQUksQ0FBQ1MsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7Ozs7NkJBQW1CLENBQUM7aUJBQ25FLENBQUM7Ozs7OztnQkFDTzs7Ozs7WUFDRCxDQUNsQjtDQUNMO0dBaEdRdkIsU0FBUzs7UUFDS1QsbUVBQW1COzs7QUFEakNTLE1BQUFBLFNBQVM7QUFrR2xCLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW50dEdyaWQuanM/NWIwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgR3JpZExheW91dCBmcm9tIFwicmVhY3QtZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VTaXplVW5pdHNDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvc2l6ZVVuaXRzXCI7XG5pbXBvcnQgbW9udGhJbmZvIGZyb20gXCIuL21vbnRoLmpzb25cIlxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5jb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDcwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbntcbiAgICAgICAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodCB8fCAxMH1weFxuICAgIH07XG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFja3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9O1xuYFxuXG5jb25zdCBUaW1lbGluZUhlYWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG5gXG5cbmNvbnN0IFRpbWVsaW5lSGVhZGVyVGV4dCA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcblxuZnVuY3Rpb24gR2FudHRHcmlkKHt0YXNrc30pIHtcbiAgICBjb25zdCBoZWlnaHRVbml0ID0gdXNlU2l6ZVVuaXRzQ29udGV4dCgpLmhlaWdodFVuaXRcbiAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBnYW50dEdyaWQuanMgfiBsaW5lIDM0IH4gR2FudHRHcmlkIH4gaGVpZ2h0VW5pdFwiLCBoZWlnaHRVbml0KVxuICAgIGNvbnN0IFtkYXRlcywgc2V0RGF0ZXNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW2xheW91dCwgc2V0TGF5b3V0XSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVEYXRlcygpIHtcbiAgICAgICAgdmFyIHRtcERhdGVzID0gW107XG4gICAgICAgIHZhciB0b2RheU1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpO1xuICAgICAgICB2YXIgdG9kYXlEYXkgPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcbiAgICAgICAgdmFyIGFjdHVhbERheSA9IHRvZGF5RGF5IC0gMTtcbiAgICAgICAgdmFyIGFjdHVhbE1vbnRoID0gdG9kYXlNb250aDtcbiAgICAgICAgaWYgKGFjdHVhbERheSA8IDEpIHtcbiAgICAgICAgICAgIGFjdHVhbE1vbnRoLS07XG4gICAgICAgICAgICBhY3R1YWxEYXkgPSBtb250aEluZm9bYWN0dWFsTW9udGhdLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE1OyBpKyspIHtcbiAgICAgICAgICAgIHRtcERhdGVzLnB1c2goYCR7YWN0dWFsRGF5fSAke21vbnRoSW5mb1thY3R1YWxNb250aF0ubmFtZX1gKVxuICAgICAgICAgICAgaWYgKGFjdHVhbERheSA+IDApIHtcbiAgICAgICAgICAgICAgICBhY3R1YWxEYXktLVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3R1YWxNb250aC0tO1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWxNb250aCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsTW9udGggPSAxMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWN0dWFsRGF5ID0gbW9udGhJbmZvW2FjdHVhbE1vbnRoXS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG1wRGF0ZXMgPSB0bXBEYXRlcy5yZXZlcnNlKClcbiAgICAgICAgYWN0dWFsRGF5ID0gdG9kYXlEYXk7XG4gICAgICAgIGFjdHVhbE1vbnRoID0gdG9kYXlNb250aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XG4gICAgICAgICAgICB0bXBEYXRlcy5wdXNoKGAke2FjdHVhbERheX0gJHttb250aEluZm9bYWN0dWFsTW9udGhdLm5hbWV9YClcbiAgICAgICAgICAgIGlmIChhY3R1YWxEYXkgPD0gbW9udGhJbmZvW2FjdHVhbE1vbnRoXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhY3R1YWxEYXkrK1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3R1YWxNb250aCsrO1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWxNb250aCA+IDExKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbE1vbnRoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWN0dWFsRGF5ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXREYXRlcyh0bXBEYXRlcyk7XG4gICAgICAgIHJldHVybiB0bXBEYXRlc1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlSGVhZGVyTGF5b3V0KGRhdGVzKSB7XG4gICAgICAgIHZhciB0bXBMYXlvdXQgPSBbXVxuICAgICAgICBkYXRlcy5mb3JFYWNoKChkYXRlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHRtcExheW91dC5wdXNoKHtpOiBkYXRlLnJlcGxhY2UoXCIgXCIsIFwiXCIpLCB4OiBpZHgsIHk6IDAsIHc6IDEsIGg6IDEsIHN0YXRpYzogdHJ1ZX0pXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdG1wTGF5b3V0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrTGF5b3V0KHRtcExheW91dCkge1xuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHRtcExheW91dC5wdXNoKHtpOiB0YXNrLm5hbWUucmVwbGFjZShcIiBcIiwgXCJcIiksIHg6IDAsIHk6IGlkeCwgdzogMSwgaDogMSwgaXNSZXNpemFibGU6IHRydWUsIGlzQm91bmRlZDogdHJ1ZSwgcmVzaXplSGFuZGxlczogW1wiZVwiLCBcIndcIl19KVxuICAgICAgICB9KVxuICAgICAgICBzZXRMYXlvdXQodG1wTGF5b3V0KVxuICAgIH1cbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZW5lcmF0ZVRhc2tMYXlvdXQoZ2VuZXJhdGVIZWFkZXJMYXlvdXQoZ2VuZXJhdGVEYXRlcygpKSlcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9LCBbXSk7XG5cbiAgICBpZiAoaXNMb2FkaW5nIHx8IGhlaWdodFVuaXQgPT09IDApIMKge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxHcmlkQ29udGFpbmVyIGhlaWdodD17aGVpZ2h0VW5pdH0+XG4gICAgICAgICAgICA8R3JpZExheW91dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxheW91dFwiXG4gICAgICAgICAgICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICAgICAgICAgICAgY29scz17MzB9XG4gICAgICAgICAgICAgICAgcm93SGVpZ2h0PXszICogaGVpZ2h0VW5pdH1cbiAgICAgICAgICAgICAgICB3aWR0aD17MzAgKiAxNTB9XG4gICAgICAgICAgICAgICAgbWFyZ2luPXtbMCwgMF19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RhdGVzLm1hcChkYXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKDxUaW1lbGluZUhlYWRlclRleHQga2V5PXtkYXRlLnJlcGxhY2UoXCIgXCIsIFwiXCIpfT57ZGF0ZX08L1RpbWVsaW5lSGVhZGVyVGV4dD4pXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge3Rhc2tzLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogZ2FudHRHcmlkLmpzIH4gbGluZSAxMjMgfiBHYW50dEdyaWQgfiB0YXNrXCIsIHRhc2spXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBrZXk9e3Rhc2submFtZS5yZXBsYWNlKFwiIFwiLCBcIlwiKX0+e3Rhc2submFtZX08L2Rpdj4pXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW50dEdyaWQ7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiR3JpZExheW91dCIsInN0eWxlZCIsInVzZVNpemVVbml0c0NvbnRleHQiLCJtb250aEluZm8iLCJUYXNrIiwiR3JpZENvbnRhaW5lciIsImRpdiIsInByb3BzIiwiaGVpZ2h0IiwiVGltZWxpbmVIZWFkZXJDb250YWluZXIiLCJUaW1lbGluZUhlYWRlclRleHQiLCJHYW50dEdyaWQiLCJ0YXNrcyIsImdlbmVyYXRlRGF0ZXMiLCJ0bXBEYXRlcyIsInRvZGF5TW9udGgiLCJEYXRlIiwiZ2V0TW9udGgiLCJ0b2RheURheSIsImdldERhdGUiLCJhY3R1YWxEYXkiLCJhY3R1YWxNb250aCIsImxlbmd0aCIsImkiLCJwdXNoIiwibmFtZSIsInJldmVyc2UiLCJzZXREYXRlcyIsImdlbmVyYXRlSGVhZGVyTGF5b3V0IiwiZGF0ZXMiLCJ0bXBMYXlvdXQiLCJmb3JFYWNoIiwiZGF0ZSIsImlkeCIsInJlcGxhY2UiLCJ4IiwieSIsInciLCJoIiwic3RhdGljIiwiZ2VuZXJhdGVUYXNrTGF5b3V0IiwidGFzayIsImlzUmVzaXphYmxlIiwiaXNCb3VuZGVkIiwicmVzaXplSGFuZGxlcyIsInNldExheW91dCIsImhlaWdodFVuaXQiLCJjb25zb2xlIiwibG9nIiwibGF5b3V0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaDEiLCJjbGFzc05hbWUiLCJjb2xzIiwicm93SGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ganttGrid.js\n"));

/***/ })

});