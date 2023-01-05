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

/***/ "./src/components/ProductInfo.jsx":
/*!****************************************!*\
  !*** ./src/components/ProductInfo.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AppContext */ \"./src/context/AppContext.js\");\n/* harmony import */ var _asset_icons_bt_add_to_cart_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset/icons/bt_add_to_cart.svg */ \"./src/asset/icons/bt_add_to_cart.svg\");\n/* harmony import */ var _styles_ProductInfo_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/ProductInfo.module.scss */ \"./src/styles/ProductInfo.module.scss\");\n/* harmony import */ var _styles_ProductInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ProductInfo_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProductInfo = (param)=>{\n    let { product  } = param;\n    _s();\n    const { state , addToCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProductInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"figure-product-image\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    className: (_styles_ProductInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"img-detail-principal\"]),\n                    src: product.images[0],\n                    alt: product.title,\n                    width: 240,\n                    height: 240,\n                    priority: true\n                }, void 0, false, {\n                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProductInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"ProductInfo-details\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"$\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.title\n                    }, void 0, false, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>addToCart(product),\n                        className: (_styles_ProductInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"primary-button-details\"]) + \" \" + (_styles_ProductInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"add-to-cart-button-details\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: _asset_icons_bt_add_to_cart_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"icono carro de compras\"\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Add to cart\"\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ProductInfo, \"sJr3z43+QNc7+hQj7FIX7EQr9JU=\");\n_c = ProductInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductInfo);\nvar _c;\n$RefreshReg$(_c, \"ProductInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0SW5mby5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDTztBQUNXO0FBQ0Y7QUFDeEI7QUFFL0IsTUFBTU0sY0FBYyxTQUFlO1FBQWQsRUFBQ0MsUUFBTyxFQUFDOztJQUMxQixNQUFNLEVBQUNDLE1BQUssRUFBRUMsVUFBUyxFQUFFLEdBQUdSLGlEQUFVQSxDQUFDQywyREFBVUE7SUFFakQscUJBQ0k7OzBCQUNJLDhEQUFDUTtnQkFBSUMsV0FBV1AsZ0dBQThCOzBCQUMxQyw0RUFBQ0MsbURBQUtBO29CQUNOTSxXQUFXUCxnR0FBOEI7b0JBQ3pDUSxLQUFLTCxRQUFRTSxNQUFNLENBQUMsRUFBRTtvQkFDdEJDLEtBQUtQLFFBQVFRLEtBQUs7b0JBQ2xCQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxVQUFVLElBQUk7Ozs7Ozs7Ozs7OzBCQUtsQiw4REFBQ1I7Z0JBQUlDLFdBQVdQLCtGQUE2Qjs7a0NBQ3pDLDhEQUFDZTs7NEJBQUU7NEJBQUVaLFFBQVFhLEtBQUs7Ozs7Ozs7a0NBQ2xCLDhEQUFDRDtrQ0FBR1osUUFBUVEsS0FBSzs7Ozs7O2tDQUNqQiw4REFBQ0k7a0NBQUdaLFFBQVFjLFdBQVc7Ozs7OztrQ0FDdkIsOERBQUNDO3dCQUFPQyxTQUFTLElBQUlkLFVBQVVGO3dCQUFVSSxXQUFXUCxrR0FBZ0MsR0FBRyxNQUFNQSxzR0FBb0M7OzBDQUM3SCw4REFBQ0MsbURBQUtBO2dDQUFDTyxLQUFLVCx1RUFBUUE7Z0NBQUVXLEtBQUk7Ozs7OzswQ0FDMUIsOERBQUNVOzBDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQjtHQTVCTWxCO0tBQUFBO0FBOEJOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RJbmZvLmpzeD81MTViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9BcHBDb250ZXh0J1xuaW1wb3J0IGxvZ29jYXJ0IGZyb20gJy4uL2Fzc2V0L2ljb25zL2J0X2FkZF90b19jYXJ0LnN2Zyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Qcm9kdWN0SW5mby5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IFByb2R1Y3RJbmZvID0gKHtwcm9kdWN0fSkgPT4ge1xuICAgIGNvbnN0IHtzdGF0ZSwgYWRkVG9DYXJ0LH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmaWd1cmUtcHJvZHVjdC1pbWFnZVwiXX0+XG4gICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wiaW1nLWRldGFpbC1wcmluY2lwYWxcIl19XG4gICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlc1swXX0gXG4gICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgIHdpZHRoPXsyNDB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNDB9XG4gICAgICAgICAgICAgICAgcHJpb3JpdHk9e3RydWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiUHJvZHVjdEluZm8tZGV0YWlsc1wiXX0+XG4gICAgICAgICAgICAgICAgPHA+JHtwcm9kdWN0LnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICA8cD57cHJvZHVjdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PmFkZFRvQ2FydChwcm9kdWN0KX0gY2xhc3NOYW1lPXtzdHlsZXNbXCJwcmltYXJ5LWJ1dHRvbi1kZXRhaWxzXCJdICsgXCIgXCIgKyBzdHlsZXNbXCJhZGQtdG8tY2FydC1idXR0b24tZGV0YWlsc1wiXX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ29jYXJ0fSBhbHQ9XCJpY29ubyBjYXJybyBkZSBjb21wcmFzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWRkIHRvIGNhcnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SW5mbzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImxvZ29jYXJ0Iiwic3R5bGVzIiwiSW1hZ2UiLCJQcm9kdWN0SW5mbyIsInByb2R1Y3QiLCJzdGF0ZSIsImFkZFRvQ2FydCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImltYWdlcyIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJwcmlvcml0eSIsInAiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProductInfo.jsx\n"));

/***/ })

});