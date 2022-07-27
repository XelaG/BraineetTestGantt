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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-layout */ \"./node_modules/react-grid-layout/index.js\");\n/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _context_sizeUnits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/sizeUnits */ \"./context/sizeUnits.js\");\n/* harmony import */ var _month_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./month.json */ \"./components/month.json\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task */ \"./components/task.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    width: 70vw;\\n    background-color: blue;\\n    overflow: auto;\\n    overflow-y: hidden;\\n    ::-webkit-scrollbar-track\\n    {\\n        display: none;\\n    };\\n    ::-webkit-scrollbar\\n    {\\n        width: 12px;\\n        background-color: #F5F5F5;\\n    };\\n    ::-webkit-scrollbar-thumb\\n    {\\n        border-radius: 10px;\\n        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\\n        box-shadow: inset 0 0 6px rgba(0,0,0,.3);\\n        background-color: rgba(0,0,0,.3);\\n    };\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    width: fit-content;\\n    background-color: yellow;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    color: white;\\n    background-color: grey;\\n    text-align: center;\\n    align-items: center;\\n    justify-content: center;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"ganttGrid__GridContainer\",\n    componentId: \"sc-c2f9cb2-0\"\n})(_templateObject());\n_c = GridContainer;\nvar TimelineHeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"ganttGrid__TimelineHeaderContainer\",\n    componentId: \"sc-c2f9cb2-1\"\n})(_templateObject1());\nvar TimelineHeaderText = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"ganttGrid__TimelineHeaderText\",\n    componentId: \"sc-c2f9cb2-2\"\n})(_templateObject2());\n_c1 = TimelineHeaderText;\nfunction GanttGrid(param) {\n    var tasks = param.tasks;\n    var _this = this;\n    var generateDates = function generateDates() {\n        var tmpDates = [];\n        var todayMonth = new Date().getMonth();\n        var todayDay = new Date().getDate();\n        var actualDay = todayDay - 1;\n        var actualMonth = todayMonth;\n        if (actualDay < 1) {\n            actualMonth--;\n            actualDay = _month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].length;\n        }\n        for(var i = 0; i < 15; i++){\n            tmpDates.push(\"\".concat(actualDay, \" \").concat(_month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].name));\n            if (actualDay > 0) {\n                actualDay--;\n            } else {\n                actualMonth--;\n                if (actualMonth < 0) {\n                    actualMonth = 12;\n                }\n                actualDay = _month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].length;\n            }\n        }\n        tmpDates = tmpDates.reverse();\n        actualDay = todayDay;\n        actualMonth = todayMonth;\n        for(var i = 0; i < 15; i++){\n            tmpDates.push(\"\".concat(actualDay, \" \").concat(_month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].name));\n            if (actualDay <= _month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].length) {\n                actualDay++;\n            } else {\n                actualMonth++;\n                if (actualMonth > 11) {\n                    actualMonth = 0;\n                }\n                actualDay = 1;\n            }\n        }\n        setDates(tmpDates);\n        return tmpDates;\n    };\n    var generateHeaderLayout = function generateHeaderLayout(dates) {\n        var tmpLayout = [];\n        dates.forEach(function(date, idx) {\n            tmpLayout.push({\n                i: date.replace(\" \", \"\"),\n                x: idx,\n                y: 0,\n                w: 1,\n                h: 1,\n                static: true\n            });\n        });\n        return tmpLayout;\n    };\n    var generateTaskLayout = function generateTaskLayout(tmpLayout) {\n        tasks.forEach(function(task, idx) {\n            tmpLayout.push({\n                i: task.name.replace(\" \", \"\"),\n                x: 0,\n                y: idx + 1,\n                w: 1,\n                h: 1,\n                isResizable: true,\n                isBounded: true,\n                resizeHandles: [\n                    \"e\",\n                    \"w\"\n                ]\n            });\n        });\n        setLayout(tmpLayout);\n    };\n    var checkLayoutChangeCorrectness = function checkLayoutChangeCorrectness(newLayout) {\n        console.log(\"\\uD83D\\uDE80 ~ file: ganttGrid.js ~ line 118 ~ checkLayoutChangeCorrectness ~ layout\", layout);\n        if (!layout.length || !newLayout) return;\n        if (newLayout !== layout) {\n            newLayout.forEach(function(item, idx) {\n                if (item.y !== layout[idx].y) {\n                    alert(\"You cannot change the line of a task\");\n                    setRerenderTrigger(Math.random);\n                    return;\n                }\n            });\n        } else {\n            setLayout(newLayout);\n        }\n    };\n    _s();\n    var heightUnit = (0,_context_sizeUnits__WEBPACK_IMPORTED_MODULE_4__.useSizeUnitsContext)().heightUnit;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), dates = ref[0], setDates = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), layout = ref1[0], setLayout = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref2[0], setIsLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), rerenderTrigger = ref3[0], setRerenderTrigger = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        generateTaskLayout(generateHeaderLayout(generateDates()));\n        setIsLoading(false);\n    }, []);\n    if (isLoading || heightUnit === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GridContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n                lineNumber: 120,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n            lineNumber: 119,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GridContainer, {\n        height: heightUnit,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default()), {\n            className: \"layout\",\n            layout: layout,\n            cols: 30,\n            rowHeight: 3 * heightUnit,\n            width: 30 * 150,\n            margin: [\n                0,\n                0\n            ],\n            onLayoutChange: checkLayoutChangeCorrectness,\n            children: [\n                dates.map(function(date) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TimelineHeaderText, {\n                        children: date\n                    }, date.replace(\" \", \"\"), false, {\n                        fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n                        lineNumber: 153,\n                        columnNumber: 28\n                    }, _this);\n                }),\n                tasks.map(function(task) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: task.name\n                    }, task.name.replace(\" \", \"\"), false, {\n                        fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n                        lineNumber: 156,\n                        columnNumber: 29\n                    }, _this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n            lineNumber: 143,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n        lineNumber: 142,\n        columnNumber: 9\n    }, this);\n}\n_s(GanttGrid, \"HgS4pzCc2MF9kN8AV4izctS2oBY=\", false, function() {\n    return [\n        _context_sizeUnits__WEBPACK_IMPORTED_MODULE_4__.useSizeUnitsContext\n    ];\n});\n_c2 = GanttGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GanttGrid);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GridContainer\");\n$RefreshReg$(_c1, \"TimelineHeaderText\");\n$RefreshReg$(_c2, \"GanttGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRzL2dhbnR0R3JpZC5qcz81YjAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHcmlkTGF5b3V0IGZyb20gXCJyZWFjdC1ncmlkLWxheW91dFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZVNpemVVbml0c0NvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9zaXplVW5pdHNcIjtcbmltcG9ydCBtb250aEluZm8gZnJvbSBcIi4vbW9udGguanNvblwiXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbmNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNzB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXG4gICAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH07XG4gICAgOjotd2Via2l0LXNjcm9sbGJhclxuICAgIHtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgfTtcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXG4gICAge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjMpO1xuICAgIH07XG5gXG5cbmNvbnN0IFRpbWVsaW5lSGVhZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbmBcblxuY29uc3QgVGltZWxpbmVIZWFkZXJUZXh0ID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuXG5mdW5jdGlvbiBHYW50dEdyaWQoe3Rhc2tzfSkge1xuICAgIGNvbnN0IGhlaWdodFVuaXQgPSB1c2VTaXplVW5pdHNDb250ZXh0KCkuaGVpZ2h0VW5pdFxuICAgIGNvbnN0IFtkYXRlcywgc2V0RGF0ZXNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW2xheW91dCwgc2V0TGF5b3V0XSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtyZXJlbmRlclRyaWdnZXIsIHNldFJlcmVuZGVyVHJpZ2dlcl0gPSB1c2VTdGF0ZSgwKVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVEYXRlcygpIHtcbiAgICAgICAgdmFyIHRtcERhdGVzID0gW107XG4gICAgICAgIHZhciB0b2RheU1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpO1xuICAgICAgICB2YXIgdG9kYXlEYXkgPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcbiAgICAgICAgdmFyIGFjdHVhbERheSA9IHRvZGF5RGF5IC0gMTtcbiAgICAgICAgdmFyIGFjdHVhbE1vbnRoID0gdG9kYXlNb250aDtcbiAgICAgICAgaWYgKGFjdHVhbERheSA8IDEpIHtcbiAgICAgICAgICAgIGFjdHVhbE1vbnRoLS07XG4gICAgICAgICAgICBhY3R1YWxEYXkgPSBtb250aEluZm9bYWN0dWFsTW9udGhdLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE1OyBpKyspIHtcbiAgICAgICAgICAgIHRtcERhdGVzLnB1c2goYCR7YWN0dWFsRGF5fSAke21vbnRoSW5mb1thY3R1YWxNb250aF0ubmFtZX1gKVxuICAgICAgICAgICAgaWYgKGFjdHVhbERheSA+IDApIHtcbiAgICAgICAgICAgICAgICBhY3R1YWxEYXktLVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3R1YWxNb250aC0tO1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWxNb250aCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsTW9udGggPSAxMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWN0dWFsRGF5ID0gbW9udGhJbmZvW2FjdHVhbE1vbnRoXS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG1wRGF0ZXMgPSB0bXBEYXRlcy5yZXZlcnNlKClcbiAgICAgICAgYWN0dWFsRGF5ID0gdG9kYXlEYXk7XG4gICAgICAgIGFjdHVhbE1vbnRoID0gdG9kYXlNb250aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XG4gICAgICAgICAgICB0bXBEYXRlcy5wdXNoKGAke2FjdHVhbERheX0gJHttb250aEluZm9bYWN0dWFsTW9udGhdLm5hbWV9YClcbiAgICAgICAgICAgIGlmIChhY3R1YWxEYXkgPD0gbW9udGhJbmZvW2FjdHVhbE1vbnRoXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhY3R1YWxEYXkrK1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3R1YWxNb250aCsrO1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWxNb250aCA+IDExKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbE1vbnRoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWN0dWFsRGF5ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXREYXRlcyh0bXBEYXRlcyk7XG4gICAgICAgIHJldHVybiB0bXBEYXRlc1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlSGVhZGVyTGF5b3V0KGRhdGVzKSB7XG4gICAgICAgIHZhciB0bXBMYXlvdXQgPSBbXVxuICAgICAgICBkYXRlcy5mb3JFYWNoKChkYXRlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHRtcExheW91dC5wdXNoKHtpOiBkYXRlLnJlcGxhY2UoXCIgXCIsIFwiXCIpLCB4OiBpZHgsIHk6IDAsIHc6IDEsIGg6IDEsIHN0YXRpYzogdHJ1ZX0pXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdG1wTGF5b3V0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrTGF5b3V0KHRtcExheW91dCkge1xuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHRtcExheW91dC5wdXNoKHtpOiB0YXNrLm5hbWUucmVwbGFjZShcIiBcIiwgXCJcIiksIHg6IDAsIHk6IGlkeCArIDEsIHc6IDEsIGg6IDEsIGlzUmVzaXphYmxlOiB0cnVlLCBpc0JvdW5kZWQ6IHRydWUsIHJlc2l6ZUhhbmRsZXM6IFtcImVcIiwgXCJ3XCJdfSlcbiAgICAgICAgfSlcbiAgICAgICAgc2V0TGF5b3V0KHRtcExheW91dClcbiAgICB9XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2VuZXJhdGVUYXNrTGF5b3V0KGdlbmVyYXRlSGVhZGVyTGF5b3V0KGdlbmVyYXRlRGF0ZXMoKSkpXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSwgW10pO1xuXG4gICAgaWYgKGlzTG9hZGluZyB8fCBoZWlnaHRVbml0ID09PSAwKSDCoHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrTGF5b3V0Q2hhbmdlQ29ycmVjdG5lc3MobmV3TGF5b3V0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IGdhbnR0R3JpZC5qcyB+IGxpbmUgMTE4IH4gY2hlY2tMYXlvdXRDaGFuZ2VDb3JyZWN0bmVzcyB+IGxheW91dFwiLCBsYXlvdXQpXG4gICAgICAgIGlmICghbGF5b3V0Lmxlbmd0aCB8fCAhbmV3TGF5b3V0KSByZXR1cm47XG4gICAgICAgIGlmIChuZXdMYXlvdXQgIT09IGxheW91dCkge1xuICAgICAgICAgICAgbmV3TGF5b3V0LmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnkgIT09IGxheW91dFtpZHhdLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZb3UgY2Fubm90IGNoYW5nZSB0aGUgbGluZSBvZiBhIHRhc2tcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFJlcmVuZGVyVHJpZ2dlcihNYXRoLnJhbmRvbSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRMYXlvdXQobmV3TGF5b3V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxHcmlkQ29udGFpbmVyIGhlaWdodD17aGVpZ2h0VW5pdH0+XG4gICAgICAgICAgICA8R3JpZExheW91dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxheW91dFwiXG4gICAgICAgICAgICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICAgICAgICAgICAgY29scz17MzB9XG4gICAgICAgICAgICAgICAgcm93SGVpZ2h0PXszICogaGVpZ2h0VW5pdH1cbiAgICAgICAgICAgICAgICB3aWR0aD17MzAgKiAxNTB9XG4gICAgICAgICAgICAgICAgbWFyZ2luPXtbMCwgMF19XG4gICAgICAgICAgICAgICAgb25MYXlvdXRDaGFuZ2U9e2NoZWNrTGF5b3V0Q2hhbmdlQ29ycmVjdG5lc3N9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RhdGVzLm1hcChkYXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKDxUaW1lbGluZUhlYWRlclRleHQga2V5PXtkYXRlLnJlcGxhY2UoXCIgXCIsIFwiXCIpfT57ZGF0ZX08L1RpbWVsaW5lSGVhZGVyVGV4dD4pXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge3Rhc2tzLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGtleT17dGFzay5uYW1lLnJlcGxhY2UoXCIgXCIsIFwiXCIpfT57dGFzay5uYW1lfTwvZGl2PilcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbnR0R3JpZDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHcmlkTGF5b3V0Iiwic3R5bGVkIiwidXNlU2l6ZVVuaXRzQ29udGV4dCIsIm1vbnRoSW5mbyIsIlRhc2siLCJHcmlkQ29udGFpbmVyIiwiZGl2IiwiVGltZWxpbmVIZWFkZXJDb250YWluZXIiLCJUaW1lbGluZUhlYWRlclRleHQiLCJHYW50dEdyaWQiLCJ0YXNrcyIsImdlbmVyYXRlRGF0ZXMiLCJ0bXBEYXRlcyIsInRvZGF5TW9udGgiLCJEYXRlIiwiZ2V0TW9udGgiLCJ0b2RheURheSIsImdldERhdGUiLCJhY3R1YWxEYXkiLCJhY3R1YWxNb250aCIsImxlbmd0aCIsImkiLCJwdXNoIiwibmFtZSIsInJldmVyc2UiLCJzZXREYXRlcyIsImdlbmVyYXRlSGVhZGVyTGF5b3V0IiwiZGF0ZXMiLCJ0bXBMYXlvdXQiLCJmb3JFYWNoIiwiZGF0ZSIsImlkeCIsInJlcGxhY2UiLCJ4IiwieSIsInciLCJoIiwic3RhdGljIiwiZ2VuZXJhdGVUYXNrTGF5b3V0IiwidGFzayIsImlzUmVzaXphYmxlIiwiaXNCb3VuZGVkIiwicmVzaXplSGFuZGxlcyIsInNldExheW91dCIsImNoZWNrTGF5b3V0Q2hhbmdlQ29ycmVjdG5lc3MiLCJuZXdMYXlvdXQiLCJjb25zb2xlIiwibG9nIiwibGF5b3V0IiwiaXRlbSIsImFsZXJ0Iiwic2V0UmVyZW5kZXJUcmlnZ2VyIiwiTWF0aCIsInJhbmRvbSIsImhlaWdodFVuaXQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyZXJlbmRlclRyaWdnZXIiLCJoMSIsImhlaWdodCIsImNsYXNzTmFtZSIsImNvbHMiLCJyb3dIZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsIm9uTGF5b3V0Q2hhbmdlIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ganttGrid.js\n"));

/***/ })

});