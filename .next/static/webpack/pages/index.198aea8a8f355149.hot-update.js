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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-layout */ \"./node_modules/react-grid-layout/index.js\");\n/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _context_sizeUnits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/sizeUnits */ \"./context/sizeUnits.js\");\n/* harmony import */ var _month_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./month.json */ \"./components/month.json\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task */ \"./components/task.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    width: 70vw;\\n    background-color: blue;\\n    overflow: auto;\\n    ::-webkit-scrollbar{\\n        display: none;\\n    }\\n    ::-webkit-scrollbar-button{\\n        height: \",\n        \"px\\n    };\\n    ::-webkit-scrollbar-track{\\n        display: none;\\n    };\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    width: fit-content;\\n    background-color: yellow;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    color: white;\\n    background-color: grey;\\n    text-align: center;\\n    align-items: center;\\n    justify-content: center;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"ganttGrid__GridContainer\",\n    componentId: \"sc-c27196f3-0\"\n})(_templateObject(), function(props) {\n    return props.height || 10;\n});\n_c = GridContainer;\nvar TimelineHeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"ganttGrid__TimelineHeaderContainer\",\n    componentId: \"sc-c27196f3-1\"\n})(_templateObject1());\nvar TimelineHeaderText = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"ganttGrid__TimelineHeaderText\",\n    componentId: \"sc-c27196f3-2\"\n})(_templateObject2());\n_c1 = TimelineHeaderText;\nfunction GanttGrid(param) {\n    var tasks = param.tasks;\n    var _this = this;\n    var generateDates = function generateDates() {\n        var tmpDates = [];\n        var todayMonth = new Date().getMonth();\n        var todayDay = new Date().getDate();\n        var actualDay = todayDay - 1;\n        var actualMonth = todayMonth;\n        if (actualDay < 1) {\n            actualMonth--;\n            actualDay = _month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].length;\n        }\n        for(var i = 0; i < 15; i++){\n            tmpDates.push(\"\".concat(actualDay, \" \").concat(_month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].name));\n            if (actualDay > 0) {\n                actualDay--;\n            } else {\n                actualMonth--;\n                if (actualMonth < 0) {\n                    actualMonth = 12;\n                }\n                actualDay = _month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].length;\n            }\n        }\n        tmpDates = tmpDates.reverse();\n        actualDay = todayDay;\n        actualMonth = todayMonth;\n        for(var i = 0; i < 15; i++){\n            tmpDates.push(\"\".concat(actualDay, \" \").concat(_month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].name));\n            if (actualDay <= _month_json__WEBPACK_IMPORTED_MODULE_5__[actualMonth].length) {\n                actualDay++;\n            } else {\n                actualMonth++;\n                if (actualMonth > 11) {\n                    actualMonth = 0;\n                }\n                actualDay = 1;\n            }\n        }\n        setDates(tmpDates);\n        return tmpDates;\n    };\n    var generateHeaderLayout = function generateHeaderLayout(dates) {\n        var tmpLayout = [];\n        dates.forEach(function(date, idx) {\n            tmpLayout.push({\n                i: date.replace(\" \", \"\"),\n                x: idx,\n                y: 0,\n                w: 1,\n                h: 1,\n                static: true\n            });\n        });\n        return tmpLayout;\n    };\n    var generateTaskLayout = function generateTaskLayout(tmpLayout) {\n        tasks.forEach(function(task, idx) {\n            tmpLayout.push({\n                i: task.name.replace(\" \", \"\"),\n                x: 0,\n                y: idx + 1,\n                w: 1,\n                h: 1,\n                isResizable: true,\n                isBounded: true,\n                resizeHandles: [\n                    \"e\",\n                    \"w\"\n                ]\n            });\n        });\n        setLayout(tmpLayout);\n    };\n    var checkLayoutChangeCorrectness = function checkLayoutChangeCorrectness(newLayout) {\n        if (newLayout !== layout) {\n            newLayout.forEach(function(item, idx) {\n                if (item.y !== layout[idx].y) {\n                    alert(\"You cannot change the line of a task\");\n                    setLayout([]);\n                    return;\n                }\n            });\n        } else {\n            setLayout(newLayout);\n        }\n    };\n    _s();\n    var heightUnit = (0,_context_sizeUnits__WEBPACK_IMPORTED_MODULE_4__.useSizeUnitsContext)().heightUnit;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), dates = ref[0], setDates = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), layout = ref1[0], setLayout = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref2[0], setIsLoading = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        generateTaskLayout(generateHeaderLayout(generateDates()));\n        setIsLoading(false);\n    }, []);\n    if (isLoading || heightUnit === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GridContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n                lineNumber: 111,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n            lineNumber: 110,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GridContainer, {\n        height: heightUnit,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default()), {\n            className: \"layout\",\n            layout: layout,\n            cols: 30,\n            rowHeight: 3 * heightUnit,\n            width: 30 * 150,\n            margin: [\n                0,\n                0\n            ],\n            onLayoutChange: checkLayoutChangeCorrectness,\n            children: [\n                dates.map(function(date) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TimelineHeaderText, {\n                        children: date\n                    }, date.replace(\" \", \"\"), false, {\n                        fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n                        lineNumber: 142,\n                        columnNumber: 28\n                    }, _this);\n                }),\n                tasks.map(function(task) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: task.name\n                    }, task.name.replace(\" \", \"\"), false, {\n                        fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n                        lineNumber: 145,\n                        columnNumber: 29\n                    }, _this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n            lineNumber: 132,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/alex/Documents/BraineetTestGantt/components/ganttGrid.js\",\n        lineNumber: 131,\n        columnNumber: 9\n    }, this);\n}\n_s(GanttGrid, \"JqpXgnpLoYX34e65+0BMpyVgDqg=\", false, function() {\n    return [\n        _context_sizeUnits__WEBPACK_IMPORTED_MODULE_4__.useSizeUnitsContext\n    ];\n});\n_c2 = GanttGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GanttGrid);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GridContainer\");\n$RefreshReg$(_c1, \"TimelineHeaderText\");\n$RefreshReg$(_c2, \"GanttGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUyQyxVQUFVO2tCQUM3Qiw0RUFBQ25ELDBEQUFVO1lBQ1B1RCxTQUFTLEVBQUMsUUFBUTtZQUNsQlAsTUFBTSxFQUFFQSxNQUFNO1lBQ2RRLElBQUksRUFBRSxFQUFFO1lBQ1JDLFNBQVMsRUFBRSxDQUFDLEdBQUdOLFVBQVU7WUFDekJPLEtBQUssRUFBRSxFQUFFLEdBQUcsR0FBRztZQUNmQyxNQUFNLEVBQUU7QUFBQyxpQkFBQztBQUFFLGlCQUFDO2FBQUM7WUFDZEMsY0FBYyxFQUFFZCw0QkFBNEI7O2dCQUUzQ2pCLEtBQUssQ0FBQ2dDLEdBQUcsQ0FBQzdCLFNBQUFBLElBQUksRUFBSTtvQkFDZixxQkFBTyw4REFBQ3RCLGtCQUFrQjtrQ0FBOEJzQixJQUFJO3VCQUE1QkEsSUFBSSxDQUFDRSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQzs7Ozs2QkFBNkIsQ0FBQztpQkFDdEYsQ0FBQztnQkFDRHRCLEtBQUssQ0FBQ2lELEdBQUcsQ0FBQ3BCLFNBQUFBLElBQUksRUFBSTtvQkFDZixxQkFBUSw4REFBQ25DLEtBQUc7a0NBQW1DbUMsSUFBSSxDQUFDaEIsSUFBSTt1QkFBdENnQixJQUFJLENBQUNoQixJQUFJLENBQUNTLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDOzs7OzZCQUFtQixDQUFDO2lCQUNuRSxDQUFDOzs7Ozs7Z0JBQ087Ozs7O1lBQ0QsQ0FDbEI7Q0FDTDtHQTdHUXZCLFNBQVM7O1FBQ0tULG1FQUFtQjs7O0FBRGpDUyxNQUFBQSxTQUFTO0FBK0dsQiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FudHRHcmlkLmpzPzViMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdyaWRMYXlvdXQgZnJvbSBcInJlYWN0LWdyaWQtbGF5b3V0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlU2l6ZVVuaXRzQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L3NpemVVbml0c1wiO1xuaW1wb3J0IG1vbnRoSW5mbyBmcm9tIFwiLi9tb250aC5qc29uXCJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgOjotd2Via2l0LXNjcm9sbGJhcntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgOjotd2Via2l0LXNjcm9sbGJhci1idXR0b257XG4gICAgICAgIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHQgfHwgMTB9cHhcbiAgICB9O1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfTtcbmBcblxuY29uc3QgVGltZWxpbmVIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuYFxuXG5jb25zdCBUaW1lbGluZUhlYWRlclRleHQgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmZ1bmN0aW9uIEdhbnR0R3JpZCh7dGFza3N9KSB7XG4gICAgY29uc3QgaGVpZ2h0VW5pdCA9IHVzZVNpemVVbml0c0NvbnRleHQoKS5oZWlnaHRVbml0XG4gICAgY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbbGF5b3V0LCBzZXRMYXlvdXRdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZURhdGVzKCkge1xuICAgICAgICB2YXIgdG1wRGF0ZXMgPSBbXTtcbiAgICAgICAgdmFyIHRvZGF5TW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XG4gICAgICAgIHZhciB0b2RheURheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgYWN0dWFsRGF5ID0gdG9kYXlEYXkgLSAxO1xuICAgICAgICB2YXIgYWN0dWFsTW9udGggPSB0b2RheU1vbnRoO1xuICAgICAgICBpZiAoYWN0dWFsRGF5IDwgMSkge1xuICAgICAgICAgICAgYWN0dWFsTW9udGgtLTtcbiAgICAgICAgICAgIGFjdHVhbERheSA9IG1vbnRoSW5mb1thY3R1YWxNb250aF0ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTU7IGkrKykge1xuICAgICAgICAgICAgdG1wRGF0ZXMucHVzaChgJHthY3R1YWxEYXl9ICR7bW9udGhJbmZvW2FjdHVhbE1vbnRoXS5uYW1lfWApXG4gICAgICAgICAgICBpZiAoYWN0dWFsRGF5ID4gMCkge1xuICAgICAgICAgICAgICAgIGFjdHVhbERheS0tXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdHVhbE1vbnRoLS07XG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbE1vbnRoIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBhY3R1YWxNb250aCA9IDEyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhY3R1YWxEYXkgPSBtb250aEluZm9bYWN0dWFsTW9udGhdLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0bXBEYXRlcyA9IHRtcERhdGVzLnJldmVyc2UoKVxuICAgICAgICBhY3R1YWxEYXkgPSB0b2RheURheTtcbiAgICAgICAgYWN0dWFsTW9udGggPSB0b2RheU1vbnRoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE1OyBpKyspIHtcbiAgICAgICAgICAgIHRtcERhdGVzLnB1c2goYCR7YWN0dWFsRGF5fSAke21vbnRoSW5mb1thY3R1YWxNb250aF0ubmFtZX1gKVxuICAgICAgICAgICAgaWYgKGFjdHVhbERheSA8PSBtb250aEluZm9bYWN0dWFsTW9udGhdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFjdHVhbERheSsrXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdHVhbE1vbnRoKys7XG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbE1vbnRoID4gMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsTW9udGggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhY3R1YWxEYXkgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldERhdGVzKHRtcERhdGVzKTtcbiAgICAgICAgcmV0dXJuIHRtcERhdGVzXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXJMYXlvdXQoZGF0ZXMpIHtcbiAgICAgICAgdmFyIHRtcExheW91dCA9IFtdXG4gICAgICAgIGRhdGVzLmZvckVhY2goKGRhdGUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgdG1wTGF5b3V0LnB1c2goe2k6IGRhdGUucmVwbGFjZShcIiBcIiwgXCJcIiksIHg6IGlkeCwgeTogMCwgdzogMSwgaDogMSwgc3RhdGljOiB0cnVlfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0bXBMYXlvdXRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVRhc2tMYXlvdXQodG1wTGF5b3V0KSB7XG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGlkeCkgPT4ge1xuICAgICAgICAgICAgdG1wTGF5b3V0LnB1c2goe2k6IHRhc2submFtZS5yZXBsYWNlKFwiIFwiLCBcIlwiKSwgeDogMCwgeTogaWR4ICsgMSwgdzogMSwgaDogMSwgaXNSZXNpemFibGU6IHRydWUsIGlzQm91bmRlZDogdHJ1ZSwgcmVzaXplSGFuZGxlczogW1wiZVwiLCBcIndcIl19KVxuICAgICAgICB9KVxuICAgICAgICBzZXRMYXlvdXQodG1wTGF5b3V0KVxuICAgIH1cbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZW5lcmF0ZVRhc2tMYXlvdXQoZ2VuZXJhdGVIZWFkZXJMYXlvdXQoZ2VuZXJhdGVEYXRlcygpKSlcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9LCBbXSk7XG5cbiAgICBpZiAoaXNMb2FkaW5nIHx8IGhlaWdodFVuaXQgPT09IDApIMKge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tMYXlvdXRDaGFuZ2VDb3JyZWN0bmVzcyhuZXdMYXlvdXQpIHtcbiAgICAgICAgaWYgKG5ld0xheW91dCAhPT0gbGF5b3V0KSB7XG4gICAgICAgICAgICBuZXdMYXlvdXQuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ueSAhPT0gbGF5b3V0W2lkeF0ueSkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdSBjYW5ub3QgY2hhbmdlIHRoZSBsaW5lIG9mIGEgdGFza1wiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TGF5b3V0KFtdKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldExheW91dChuZXdMYXlvdXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdyaWRDb250YWluZXIgaGVpZ2h0PXtoZWlnaHRVbml0fT5cbiAgICAgICAgICAgIDxHcmlkTGF5b3V0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5b3V0XCJcbiAgICAgICAgICAgICAgICBsYXlvdXQ9e2xheW91dH1cbiAgICAgICAgICAgICAgICBjb2xzPXszMH1cbiAgICAgICAgICAgICAgICByb3dIZWlnaHQ9ezMgKiBoZWlnaHRVbml0fVxuICAgICAgICAgICAgICAgIHdpZHRoPXszMCAqIDE1MH1cbiAgICAgICAgICAgICAgICBtYXJnaW49e1swLCAwXX1cbiAgICAgICAgICAgICAgICBvbkxheW91dENoYW5nZT17Y2hlY2tMYXlvdXRDaGFuZ2VDb3JyZWN0bmVzc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGF0ZXMubWFwKGRhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oPFRpbWVsaW5lSGVhZGVyVGV4dCBrZXk9e2RhdGUucmVwbGFjZShcIiBcIiwgXCJcIil9PntkYXRlfTwvVGltZWxpbmVIZWFkZXJUZXh0PilcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB7dGFza3MubWFwKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXYga2V5PXt0YXNrLm5hbWUucmVwbGFjZShcIiBcIiwgXCJcIil9Pnt0YXNrLm5hbWV9PC9kaXY+KVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FudHRHcmlkOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkdyaWRMYXlvdXQiLCJzdHlsZWQiLCJ1c2VTaXplVW5pdHNDb250ZXh0IiwibW9udGhJbmZvIiwiVGFzayIsIkdyaWRDb250YWluZXIiLCJkaXYiLCJwcm9wcyIsImhlaWdodCIsIlRpbWVsaW5lSGVhZGVyQ29udGFpbmVyIiwiVGltZWxpbmVIZWFkZXJUZXh0IiwiR2FudHRHcmlkIiwidGFza3MiLCJnZW5lcmF0ZURhdGVzIiwidG1wRGF0ZXMiLCJ0b2RheU1vbnRoIiwiRGF0ZSIsImdldE1vbnRoIiwidG9kYXlEYXkiLCJnZXREYXRlIiwiYWN0dWFsRGF5IiwiYWN0dWFsTW9udGgiLCJsZW5ndGgiLCJpIiwicHVzaCIsIm5hbWUiLCJyZXZlcnNlIiwic2V0RGF0ZXMiLCJnZW5lcmF0ZUhlYWRlckxheW91dCIsImRhdGVzIiwidG1wTGF5b3V0IiwiZm9yRWFjaCIsImRhdGUiLCJpZHgiLCJyZXBsYWNlIiwieCIsInkiLCJ3IiwiaCIsInN0YXRpYyIsImdlbmVyYXRlVGFza0xheW91dCIsInRhc2siLCJpc1Jlc2l6YWJsZSIsImlzQm91bmRlZCIsInJlc2l6ZUhhbmRsZXMiLCJzZXRMYXlvdXQiLCJjaGVja0xheW91dENoYW5nZUNvcnJlY3RuZXNzIiwibmV3TGF5b3V0IiwibGF5b3V0IiwiaXRlbSIsImFsZXJ0IiwiaGVpZ2h0VW5pdCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImgxIiwiY2xhc3NOYW1lIiwiY29scyIsInJvd0hlaWdodCIsIndpZHRoIiwibWFyZ2luIiwib25MYXlvdXRDaGFuZ2UiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ganttGrid.js\n"));

/***/ })

});