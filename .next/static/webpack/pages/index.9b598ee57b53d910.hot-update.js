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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-layout */ \"./node_modules/react-grid-layout/index.js\");\n/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _context_sizeUnits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/sizeUnits */ \"./context/sizeUnits.js\");\n/* harmony import */ var _month_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./month.json */ \"./components/month.json\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task */ \"./components/task.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    width: 70vw;\\n    background-color: blue;\\n    overflow: overlay;\\n    overflow-y: hidden;\\n    ::-webkit-scrollbar-track\\n    {\\n        display: none;\\n    };\\n    ::-webkit-scrollbar\\n    {\\n        width: 12px;\\n        background-color: #F5F5F5;\\n        position: absolute;\\n        bottom: 0;\\n        z-index: 1;\\n    };\\n    ::-webkit-scrollbar-thumb\\n    {\\n        border-radius: 10px;\\n        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\\n        box-shadow: inset 0 0 6px rgba(0,0,0,.3);\\n        background-color: rgba(0,0,0,.3);\\n    };\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    width: fit-content;\\n    background-color: yellow;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    color: white;\\n    background-color: grey;\\n    text-align: center;\\n    align-items: center;\\n    justify-content: center;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"ganttGrid__GridContainer\",\n    componentId: \"sc-bd817e3-0\"\n})(_templateObject());\n_c = GridContainer;\nvar TimelineHeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"ganttGrid__TimelineHeaderContainer\",\n    componentId: \"sc-bd817e3-1\"\n})(_templateObject1());\nvar TimelineHeaderText = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"ganttGrid__TimelineHeaderText\",\n    componentId: \"sc-bd817e3-2\"\n})(_templateObject2());\n_c1 = TimelineHeaderText;\nfunction GanttGrid(param) {\n    var tasks = param.tasks;\n    var _this = this;\n    var generateDates = function generateDates() {\n        var tmpDates = [];\n        var todayMonth = new Date().getMonth();\n        var todayDay = new Date().getDate();\n        var actualDay = todayDay - 1;\n        var actualMonth = todayMonth;\n        if (actualDay < 1) {\n            actualMonth--;\n            actualDay = _month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].length;\n        }\n        for(var i = 0; i < 15; i++){\n            tmpDates.push(\"\".concat(actualDay, \" \").concat(_month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].name));\n            if (actualDay > 0) {\n                actualDay--;\n            } else {\n                actualMonth--;\n                if (actualMonth < 0) {\n                    actualMonth = 12;\n                }\n                actualDay = _month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].length;\n            }\n        }\n        tmpDates = tmpDates.reverse();\n        actualDay = todayDay;\n        actualMonth = todayMonth;\n        for(var i = 0; i < 15; i++){\n            tmpDates.push(\"\".concat(actualDay, \" \").concat(_month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].name));\n            if (actualDay <= _month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].length) {\n                actualDay++;\n            } else {\n                actualMonth++;\n                if (actualMonth > 11) {\n                    actualMonth = 0;\n                }\n                actualDay = 1;\n            }\n        }\n        setDates(tmpDates);\n        return tmpDates;\n    };\n    var generateHeaderLayout = function generateHeaderLayout(dates) {\n        var tmpLayout = [];\n        dates.forEach(function(date, idx) {\n            tmpLayout.push({\n                i: date.replace(\" \", \"\"),\n                x: idx,\n                y: 0,\n                w: 1,\n                h: 1,\n                static: true\n            });\n        });\n        return tmpLayout;\n    };\n    var generateTaskLayout = function generateTaskLayout(tmpLayout) {\n        tasks.forEach(function(task, idx) {\n            tmpLayout.push({\n                i: task.name.replace(\" \", \"\"),\n                x: 0,\n                y: idx + 1,\n                w: 1,\n                h: 1,\n                isResizable: true,\n                isBounded: true,\n                resizeHandles: [\n                    \"e\",\n                    \"w\"\n                ]\n            });\n        });\n        setLayout(tmpLayout);\n    };\n    var checkLayoutChangeCorrectness = function checkLayoutChangeCorrectness(newLayout) {\n        console.log(\"\\uD83D\\uDE80 ~ file: ganttGrid.js ~ line 118 ~ checkLayoutChangeCorrectness ~ layout\", layout);\n        if (!layout.length || !newLayout) return;\n        if (newLayout !== layout) {\n            newLayout.forEach(function(item, idx) {\n                if (item.y !== layout[idx].y) {\n                    alert(\"You cannot change the line of a task\");\n                    setRerenderTrigger(Math.random);\n                    return;\n                }\n            });\n        } else {\n            setLayout(newLayout);\n        }\n    };\n    _s();\n    var heightUnit = (0,_context_sizeUnits__WEBPACK_IMPORTED_MODULE_4__.useSizeUnitsContext)().heightUnit;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), dates = ref[0], setDates = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), layout = ref1[0], setLayout = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref2[0], setIsLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), rerenderTrigger = ref3[0], setRerenderTrigger = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        generateTaskLayout(generateHeaderLayout(generateDates()));\n        setIsLoading(false);\n    }, []);\n    if (isLoading || heightUnit === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GridContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n                lineNumber: 123,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n            lineNumber: 122,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GridContainer, {\n        height: heightUnit,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default()), {\n            className: \"layout\",\n            layout: layout,\n            cols: 30,\n            rowHeight: 3 * heightUnit,\n            width: 30 * 150,\n            margin: [\n                0,\n                0\n            ],\n            onLayoutChange: checkLayoutChangeCorrectness,\n            children: [\n                dates.map(function(date) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TimelineHeaderText, {\n                        children: date\n                    }, date.replace(\" \", \"\"), false, {\n                        fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n                        lineNumber: 156,\n                        columnNumber: 28\n                    }, _this);\n                }),\n                tasks.map(function(task) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: task.name\n                    }, task.name.replace(\" \", \"\"), false, {\n                        fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n                        lineNumber: 159,\n                        columnNumber: 29\n                    }, _this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n            lineNumber: 146,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n        lineNumber: 145,\n        columnNumber: 9\n    }, this);\n}\n_s(GanttGrid, \"HgS4pzCc2MF9kN8AV4izctS2oBY=\", false, function() {\n    return [\n        _context_sizeUnits__WEBPACK_IMPORTED_MODULE_4__.useSizeUnitsContext\n    ];\n});\n_c2 = GanttGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GanttGrid);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GridContainer\");\n$RefreshReg$(_c1, \"TimelineHeaderText\");\n$RefreshReg$(_c2, \"GanttGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRzL2dhbnR0R3JpZC5qcz81YjAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHcmlkTGF5b3V0IGZyb20gXCJyZWFjdC1ncmlkLWxheW91dFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZVNpemVVbml0c0NvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9zaXplVW5pdHNcIjtcbmltcG9ydCBtb250aEluZm8gZnJvbSBcIi4vbW9udGguanNvblwiXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbmNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNzB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIG92ZXJmbG93OiBvdmVybGF5O1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXG4gICAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH07XG4gICAgOjotd2Via2l0LXNjcm9sbGJhclxuICAgIHtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH07XG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlxuICAgIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4zKTtcbiAgICB9O1xuYFxuXG5jb25zdCBUaW1lbGluZUhlYWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG5gXG5cbmNvbnN0IFRpbWVsaW5lSGVhZGVyVGV4dCA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcblxuZnVuY3Rpb24gR2FudHRHcmlkKHt0YXNrc30pIHtcbiAgICBjb25zdCBoZWlnaHRVbml0ID0gdXNlU2l6ZVVuaXRzQ29udGV4dCgpLmhlaWdodFVuaXRcbiAgICBjb25zdCBbZGF0ZXMsIHNldERhdGVzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtsYXlvdXQsIHNldExheW91dF0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbcmVyZW5kZXJUcmlnZ2VyLCBzZXRSZXJlbmRlclRyaWdnZXJdID0gdXNlU3RhdGUoMClcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlRGF0ZXMoKSB7XG4gICAgICAgIHZhciB0bXBEYXRlcyA9IFtdO1xuICAgICAgICB2YXIgdG9kYXlNb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKTtcbiAgICAgICAgdmFyIHRvZGF5RGF5ID0gbmV3IERhdGUoKS5nZXREYXRlKCk7XG4gICAgICAgIHZhciBhY3R1YWxEYXkgPSB0b2RheURheSAtIDE7XG4gICAgICAgIHZhciBhY3R1YWxNb250aCA9IHRvZGF5TW9udGg7XG4gICAgICAgIGlmIChhY3R1YWxEYXkgPCAxKSB7XG4gICAgICAgICAgICBhY3R1YWxNb250aC0tO1xuICAgICAgICAgICAgYWN0dWFsRGF5ID0gbW9udGhJbmZvW2FjdHVhbE1vbnRoXS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XG4gICAgICAgICAgICB0bXBEYXRlcy5wdXNoKGAke2FjdHVhbERheX0gJHttb250aEluZm9bYWN0dWFsTW9udGhdLm5hbWV9YClcbiAgICAgICAgICAgIGlmIChhY3R1YWxEYXkgPiAwKSB7XG4gICAgICAgICAgICAgICAgYWN0dWFsRGF5LS1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0dWFsTW9udGgtLTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsTW9udGggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbE1vbnRoID0gMTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFjdHVhbERheSA9IG1vbnRoSW5mb1thY3R1YWxNb250aF0ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRtcERhdGVzID0gdG1wRGF0ZXMucmV2ZXJzZSgpXG4gICAgICAgIGFjdHVhbERheSA9IHRvZGF5RGF5O1xuICAgICAgICBhY3R1YWxNb250aCA9IHRvZGF5TW9udGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTU7IGkrKykge1xuICAgICAgICAgICAgdG1wRGF0ZXMucHVzaChgJHthY3R1YWxEYXl9ICR7bW9udGhJbmZvW2FjdHVhbE1vbnRoXS5uYW1lfWApXG4gICAgICAgICAgICBpZiAoYWN0dWFsRGF5IDw9IG1vbnRoSW5mb1thY3R1YWxNb250aF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYWN0dWFsRGF5KytcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0dWFsTW9udGgrKztcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsTW9udGggPiAxMSkge1xuICAgICAgICAgICAgICAgICAgICBhY3R1YWxNb250aCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFjdHVhbERheSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0RGF0ZXModG1wRGF0ZXMpO1xuICAgICAgICByZXR1cm4gdG1wRGF0ZXNcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUhlYWRlckxheW91dChkYXRlcykge1xuICAgICAgICB2YXIgdG1wTGF5b3V0ID0gW11cbiAgICAgICAgZGF0ZXMuZm9yRWFjaCgoZGF0ZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICB0bXBMYXlvdXQucHVzaCh7aTogZGF0ZS5yZXBsYWNlKFwiIFwiLCBcIlwiKSwgeDogaWR4LCB5OiAwLCB3OiAxLCBoOiAxLCBzdGF0aWM6IHRydWV9KVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRtcExheW91dFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFza0xheW91dCh0bXBMYXlvdXQpIHtcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaywgaWR4KSA9PiB7XG4gICAgICAgICAgICB0bXBMYXlvdXQucHVzaCh7aTogdGFzay5uYW1lLnJlcGxhY2UoXCIgXCIsIFwiXCIpLCB4OiAwLCB5OiBpZHggKyAxLCB3OiAxLCBoOiAxLCBpc1Jlc2l6YWJsZTogdHJ1ZSwgaXNCb3VuZGVkOiB0cnVlLCByZXNpemVIYW5kbGVzOiBbXCJlXCIsIFwid1wiXX0pXG4gICAgICAgIH0pXG4gICAgICAgIHNldExheW91dCh0bXBMYXlvdXQpXG4gICAgfVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdlbmVyYXRlVGFza0xheW91dChnZW5lcmF0ZUhlYWRlckxheW91dChnZW5lcmF0ZURhdGVzKCkpKVxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0sIFtdKTtcblxuICAgIGlmIChpc0xvYWRpbmcgfHwgaGVpZ2h0VW5pdCA9PT0gMCkgwqB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0xheW91dENoYW5nZUNvcnJlY3RuZXNzKG5ld0xheW91dCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBnYW50dEdyaWQuanMgfiBsaW5lIDExOCB+IGNoZWNrTGF5b3V0Q2hhbmdlQ29ycmVjdG5lc3MgfiBsYXlvdXRcIiwgbGF5b3V0KVxuICAgICAgICBpZiAoIWxheW91dC5sZW5ndGggfHwgIW5ld0xheW91dCkgcmV0dXJuO1xuICAgICAgICBpZiAobmV3TGF5b3V0ICE9PSBsYXlvdXQpIHtcbiAgICAgICAgICAgIG5ld0xheW91dC5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS55ICE9PSBsYXlvdXRbaWR4XS55KSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91IGNhbm5vdCBjaGFuZ2UgdGhlIGxpbmUgb2YgYSB0YXNrXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRSZXJlbmRlclRyaWdnZXIoTWF0aC5yYW5kb20pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0TGF5b3V0KG5ld0xheW91dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8R3JpZENvbnRhaW5lciBoZWlnaHQ9e2hlaWdodFVuaXR9PlxuICAgICAgICAgICAgPEdyaWRMYXlvdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXlvdXRcIlxuICAgICAgICAgICAgICAgIGxheW91dD17bGF5b3V0fVxuICAgICAgICAgICAgICAgIGNvbHM9ezMwfVxuICAgICAgICAgICAgICAgIHJvd0hlaWdodD17MyAqIGhlaWdodFVuaXR9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezMwICogMTUwfVxuICAgICAgICAgICAgICAgIG1hcmdpbj17WzAsIDBdfVxuICAgICAgICAgICAgICAgIG9uTGF5b3V0Q2hhbmdlPXtjaGVja0xheW91dENoYW5nZUNvcnJlY3RuZXNzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkYXRlcy5tYXAoZGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybig8VGltZWxpbmVIZWFkZXJUZXh0IGtleT17ZGF0ZS5yZXBsYWNlKFwiIFwiLCBcIlwiKX0+e2RhdGV9PC9UaW1lbGluZUhlYWRlclRleHQ+KVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHt0YXNrcy5tYXAodGFzayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBrZXk9e3Rhc2submFtZS5yZXBsYWNlKFwiIFwiLCBcIlwiKX0+e3Rhc2submFtZX08L2Rpdj4pXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW50dEdyaWQ7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiR3JpZExheW91dCIsInN0eWxlZCIsInVzZVNpemVVbml0c0NvbnRleHQiLCJtb250aEluZm8iLCJUYXNrIiwiR3JpZENvbnRhaW5lciIsImRpdiIsIlRpbWVsaW5lSGVhZGVyQ29udGFpbmVyIiwiVGltZWxpbmVIZWFkZXJUZXh0IiwiR2FudHRHcmlkIiwidGFza3MiLCJnZW5lcmF0ZURhdGVzIiwidG1wRGF0ZXMiLCJ0b2RheU1vbnRoIiwiRGF0ZSIsImdldE1vbnRoIiwidG9kYXlEYXkiLCJnZXREYXRlIiwiYWN0dWFsRGF5IiwiYWN0dWFsTW9udGgiLCJsZW5ndGgiLCJpIiwicHVzaCIsIm5hbWUiLCJyZXZlcnNlIiwic2V0RGF0ZXMiLCJnZW5lcmF0ZUhlYWRlckxheW91dCIsImRhdGVzIiwidG1wTGF5b3V0IiwiZm9yRWFjaCIsImRhdGUiLCJpZHgiLCJyZXBsYWNlIiwieCIsInkiLCJ3IiwiaCIsInN0YXRpYyIsImdlbmVyYXRlVGFza0xheW91dCIsInRhc2siLCJpc1Jlc2l6YWJsZSIsImlzQm91bmRlZCIsInJlc2l6ZUhhbmRsZXMiLCJzZXRMYXlvdXQiLCJjaGVja0xheW91dENoYW5nZUNvcnJlY3RuZXNzIiwibmV3TGF5b3V0IiwiY29uc29sZSIsImxvZyIsImxheW91dCIsIml0ZW0iLCJhbGVydCIsInNldFJlcmVuZGVyVHJpZ2dlciIsIk1hdGgiLCJyYW5kb20iLCJoZWlnaHRVbml0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicmVyZW5kZXJUcmlnZ2VyIiwiaDEiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJjb2xzIiwicm93SGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJvbkxheW91dENoYW5nZSIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ganttGrid.js\n"));

/***/ })

});