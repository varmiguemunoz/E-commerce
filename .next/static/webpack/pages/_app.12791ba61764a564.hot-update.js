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

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ \"./src/components/Menu.jsx\");\n/* harmony import */ var _containers_MyOrder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/MyOrder */ \"./src/containers/MyOrder.jsx\");\n/* harmony import */ var _asset_icons_icon_menu_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../asset/icons/icon_menu.svg */ \"./src/asset/icons/icon_menu.svg\");\n/* harmony import */ var _asset_logos_logo_yard_sale_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../asset/logos/logo_yard_sale.svg */ \"./src/asset/logos/logo_yard_sale.svg\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/AppContext */ \"./src/context/AppContext.js\");\n/* harmony import */ var _asset_icons_icon_shopping_cart_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../asset/icons/icon_shopping_cart.svg */ \"./src/asset/icons/icon_shopping_cart.svg\");\n/* harmony import */ var _components_MenuMobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MenuMobile */ \"./src/components/MenuMobile.jsx\");\n/* harmony import */ var _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/Header.module.scss */ \"./src/styles/Header.module.scss\");\n/* harmony import */ var _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [toggleOrders, setToggleOrders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [toggleMenuMobile, setToggleMenuMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { state  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();\n    const { pathname  } = router;\n    console.log(\"este es el:\" + pathname.slice(1, -1));\n    var path = pathname.slice(1, -1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (pathname == \"MyAccount\") {\n            console.log(\"funciona!\");\n        }\n    }, [\n        pathname\n    ]);\n    const handleToggle = ()=>{\n        setToggle(!toggle);\n    };\n    const handleToggleMenuMobile = ()=>{\n        setToggleMenuMobile(!toggleMenuMobile);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _asset_icons_icon_menu_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    alt: \"menu\",\n                    className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13___default().menu),\n                    onClick: ()=>setToggleMenuMobile(!toggleMenuMobile)\n                }, void 0, false, {\n                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13___default()[\"navbar-left\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _asset_logos_logo_yard_sale_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            alt: \"logo\",\n                            className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13___default()[\"nav-logo\"])\n                        }, void 0, false, {\n                            fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    href: \"/\",\n                                    children: \" All \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    href: \"/\",\n                                    children: \"Clothes\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    href: \"/\",\n                                    children: \"Electronics\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    href: \"/\",\n                                    children: \"Furnitures\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    href: \"/\",\n                                    children: \"Toys\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    href: \" \",\n                                    children: \"Others\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13___default()[\"navbar-right\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13___default()[\"navbar-email\"]),\n                                onClick: handleToggle,\n                                children: \"Thewintherdmc@gmail.com\"\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13___default()[\"navbar-shopping-cart\"]),\n                                onClick: ()=>setToggleOrders(!toggleOrders),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: _asset_icons_icon_shopping_cart_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                        alt: \"shopping cart\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    state.cart.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: state.cart.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 33\n                                    }, undefined) : null\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 6\n                    }, undefined),\n                    toggleOrders && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_MyOrder__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        toggleOrders: toggleOrders,\n                        setToggleOrders: setToggleOrders\n                    }, void 0, false, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 23\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                lineNumber: 89,\n                columnNumber: 5\n            }, undefined),\n            toggle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleToggle: handleToggle\n            }, void 0, false, {\n                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                lineNumber: 105,\n                columnNumber: 16\n            }, undefined),\n            toggleMenuMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MenuMobile__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                handleToggleMenuMobile: handleToggleMenuMobile\n            }, void 0, false, {\n                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                lineNumber: 106,\n                columnNumber: 26\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n        lineNumber: 41,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Header, \"DNDN8/w+SiSVfuAarFVZFCGGAxU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header); //aveces los estilos se rompen, porque no organizamos en la posicion que se debe los props\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSw4REFBQ0o7a0RBQUtmLE1BQU1rQixJQUFJLENBQUNDLE1BQU07Ozs7O29EQUFVLElBQUk7Ozs7Ozs7Ozs7Ozs7b0JBSS9EdkIsOEJBQWdCLDhEQUFDYiwyREFBT0E7d0JBQUNhLGNBQWNBO3dCQUFjQyxpQkFBaUJBOzs7Ozs7Ozs7Ozs7WUFFdkVILHdCQUFVLDhEQUFDWix3REFBSUE7Z0JBQUN5QixjQUFjQTs7Ozs7O1lBQzlCVCxrQ0FBb0IsOERBQUNWLDhEQUFVQTtnQkFBQ29CLHdCQUF3QkE7Ozs7Ozs7Ozs7OztBQUc3RDtHQTdGTWY7O1FBTVVELG1EQUFTQTs7O0tBTm5CQztBQStGTiwrREFBZUEsTUFBTUEsRUFBQyxDQUV0QiwwRkFBMEYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzeD8zY2I2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcbmltcG9ydCBNeU9yZGVyIGZyb20gJy4uL2NvbnRhaW5lcnMvTXlPcmRlcic7XG5pbXBvcnQgbWVudSBmcm9tICcuLi9hc3NldC9pY29ucy9pY29uX21lbnUuc3ZnJztcbmltcG9ydCBsb2dvIGZyb20gJy4uL2Fzc2V0L2xvZ29zL2xvZ29feWFyZF9zYWxlLnN2Zyc7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L0FwcENvbnRleHQnO1xuaW1wb3J0IHNob3BwaW5nQ2FydCBmcm9tICcuLi9hc3NldC9pY29ucy9pY29uX3Nob3BwaW5nX2NhcnQuc3ZnJztcbmltcG9ydCBNZW51TW9iaWxlIGZyb20gXCIuLi9jb21wb25lbnRzL01lbnVNb2JpbGVcIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG5cdGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFt0b2dnbGVPcmRlcnMsIHNldFRvZ2dsZU9yZGVyc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFt0b2dnbGVNZW51TW9iaWxlLCBzZXRUb2dnbGVNZW51TW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRjb25zdCB7IHN0YXRlIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRjb25zdCB7cGF0aG5hbWV9ID0gcm91dGVyO1xuXHRjb25zb2xlLmxvZyhcImVzdGUgZXMgZWw6XCIgKyBwYXRobmFtZS5zbGljZSgxLC0xKSkgXG5cdHZhciBwYXRoID0gcGF0aG5hbWUuc2xpY2UoMSwtMSlcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0ICBpZiAocGF0aG5hbWUgPT0gXCJNeUFjY291bnRcIikge1xuXHRcdGNvbnNvbGUubG9nKFwiZnVuY2lvbmEhXCIpXG5cdCAgfVxuXHR9LCBbcGF0aG5hbWVdKVxuXG5cdGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcblx0XHRzZXRUb2dnbGUoIXRvZ2dsZSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlVG9nZ2xlTWVudU1vYmlsZSA9ICgpID0+IHtcblx0XHRzZXRUb2dnbGVNZW51TW9iaWxlKCF0b2dnbGVNZW51TW9iaWxlKTtcblx0ICB9O1xuXG5cdHJldHVybiAoXG5cdFx0PG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxuXHRcdFx0XHQ8TGluayBocmVmPXtcIi9cIn0+XG5cdFx0XHRcdFx0PEltYWdlIHNyYz17bWVudX0gYWx0PVwibWVudVwiIGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9IG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZU1lbnVNb2JpbGUoIXRvZ2dsZU1lbnVNb2JpbGUpfSAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdmJhci1sZWZ0XCJdfT5cblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0PEltYWdlIHNyYz17bG9nb30gYWx0PVwibG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzW1wibmF2LWxvZ29cIl19IC8+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDx1bD5cblxuXHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPiBBbGwgPC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblxuXHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHRcdENsb3RoZXNcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHRcdEVsZWN0cm9uaWNzXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdFx0XHRGdXJuaXR1cmVzXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdFx0XHRUb3lzXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIiBcIj5cblx0XHRcdFx0XHRcdFx0XHRPdGhlcnNcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXG5cdFx0XHRcdFx0XHQ8L2xpPlxuXG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJuYXZiYXItcmlnaHRcIl19PlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdmJhci1lbWFpbFwiXX0gb25DbGljaz17aGFuZGxlVG9nZ2xlfT5cblx0XHRcdFx0XHRcdFx0VGhld2ludGhlcmRtY0BnbWFpbC5jb21cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXNbXCJuYXZiYXItc2hvcHBpbmctY2FydFwiXX1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0VG9nZ2xlT3JkZXJzKCF0b2dnbGVPcmRlcnMpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPXtzaG9wcGluZ0NhcnR9IGFsdD1cInNob3BwaW5nIGNhcnRcIiAvPlxuXHRcdFx0XHRcdFx0XHR7c3RhdGUuY2FydC5sZW5ndGggPiAwID8gPGRpdj57c3RhdGUuY2FydC5sZW5ndGh9PC9kaXY+IDogbnVsbH1cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblxuXHRcdFx0XHRcdHt0b2dnbGVPcmRlcnMgJiYgPE15T3JkZXIgdG9nZ2xlT3JkZXJzPXt0b2dnbGVPcmRlcnN9IHNldFRvZ2dsZU9yZGVycz17c2V0VG9nZ2xlT3JkZXJzfSAvPn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHt0b2dnbGUgJiYgPE1lbnUgaGFuZGxlVG9nZ2xlPXtoYW5kbGVUb2dnbGV9IC8+fVxuXHRcdFx0XHR7dG9nZ2xlTWVudU1vYmlsZSAmJiA8TWVudU1vYmlsZSBoYW5kbGVUb2dnbGVNZW51TW9iaWxlPXtoYW5kbGVUb2dnbGVNZW51TW9iaWxlfSAvPn1cblx0XHRcdDwvbmF2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cbi8vYXZlY2VzIGxvcyBlc3RpbG9zIHNlIHJvbXBlbiwgcG9ycXVlIG5vIG9yZ2FuaXphbW9zIGVuIGxhIHBvc2ljaW9uIHF1ZSBzZSBkZWJlIGxvcyBwcm9wcyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkltYWdlIiwiTWVudSIsIk15T3JkZXIiLCJtZW51IiwibG9nbyIsIkFwcENvbnRleHQiLCJzaG9wcGluZ0NhcnQiLCJNZW51TW9iaWxlIiwic3R5bGVzIiwiTGluayIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJ0b2dnbGVPcmRlcnMiLCJzZXRUb2dnbGVPcmRlcnMiLCJ0b2dnbGVNZW51TW9iaWxlIiwic2V0VG9nZ2xlTWVudU1vYmlsZSIsInN0YXRlIiwicm91dGVyIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwic2xpY2UiLCJwYXRoIiwiaGFuZGxlVG9nZ2xlIiwiaGFuZGxlVG9nZ2xlTWVudU1vYmlsZSIsIm5hdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwiZGl2IiwidWwiLCJsaSIsImNhcnQiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.jsx\n"));

/***/ })

});