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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AppContext */ \"./src/context/AppContext.js\");\n/* harmony import */ var _asset_icons_bt_add_to_cart_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset/icons/bt_add_to_cart.svg */ \"./src/asset/icons/bt_add_to_cart.svg\");\n/* harmony import */ var _styles_ProductInfo_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/ProductInfo.module.scss */ \"./src/styles/ProductInfo.module.scss\");\n/* harmony import */ var _styles_ProductInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ProductInfo_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProductInfo = (param)=>{\n    let { product  } = param;\n    _s();\n    const { state , addToCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                className: (_styles_ProductInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"figure-product-image\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    className: (_styles_ProductInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"img-detail-principal\"]),\n                    src: product.images[0],\n                    alt: product.title,\n                    width: 400,\n                    height: 400,\n                    priority: true\n                }, void 0, false, {\n                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProductInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"ProductInfo-details\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"$\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.title\n                    }, void 0, false, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>addToCart(product),\n                        className: (_styles_ProductInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"primary-button-details\"]) + \" \" + (_styles_ProductInfo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"add-to-cart-button-details\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: _asset_icons_bt_add_to_cart_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"icono carro de compras\"\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Add to cart\"\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductInfo.jsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ProductInfo, \"sJr3z43+QNc7+hQj7FIX7EQr9JU=\");\n_c = ProductInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductInfo);\nvar _c;\n$RefreshReg$(_c, \"ProductInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0SW5mby5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDTztBQUNXO0FBQ0Y7QUFDeEI7QUFFL0IsTUFBTU0sY0FBYyxTQUFlO1FBQWQsRUFBQ0MsUUFBTyxFQUFDOztJQUMxQixNQUFNLEVBQUNDLE1BQUssRUFBRUMsVUFBUyxFQUFFLEdBQUdSLGlEQUFVQSxDQUFDQywyREFBVUE7SUFFakQscUJBQ0k7OzBCQUNJLDhEQUFDUTtnQkFBT0MsV0FBV1AsZ0dBQThCOzBCQUM3Qyw0RUFBQ0MsbURBQUtBO29CQUNOTSxXQUFXUCxnR0FBOEI7b0JBQ3pDUSxLQUFLTCxRQUFRTSxNQUFNLENBQUMsRUFBRTtvQkFDdEJDLEtBQUtQLFFBQVFRLEtBQUs7b0JBQ2xCQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxVQUFVLElBQUk7Ozs7Ozs7Ozs7OzBCQUtsQiw4REFBQ0M7Z0JBQUlSLFdBQVdQLCtGQUE2Qjs7a0NBQ3pDLDhEQUFDZ0I7OzRCQUFFOzRCQUFFYixRQUFRYyxLQUFLOzs7Ozs7O2tDQUNsQiw4REFBQ0Q7a0NBQUdiLFFBQVFRLEtBQUs7Ozs7OztrQ0FDakIsOERBQUNLO2tDQUFHYixRQUFRZSxXQUFXOzs7Ozs7a0NBQ3ZCLDhEQUFDQzt3QkFBT0MsU0FBUyxJQUFJZixVQUFVRjt3QkFBVUksV0FBV1Asa0dBQWdDLEdBQUcsTUFBTUEsc0dBQW9DOzswQ0FDN0gsOERBQUNDLG1EQUFLQTtnQ0FBQ08sS0FBS1QsdUVBQVFBO2dDQUFFVyxLQUFJOzs7Ozs7MENBQzFCLDhEQUFDVzswQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUI7R0E1Qk1uQjtLQUFBQTtBQThCTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0SW5mby5qc3g/NTE1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvQXBwQ29udGV4dCdcbmltcG9ydCBsb2dvY2FydCBmcm9tICcuLi9hc3NldC9pY29ucy9idF9hZGRfdG9fY2FydC5zdmcnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUHJvZHVjdEluZm8ubW9kdWxlLnNjc3MnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBQcm9kdWN0SW5mbyA9ICh7cHJvZHVjdH0pID0+IHtcbiAgICBjb25zdCB7c3RhdGUsIGFkZFRvQ2FydCx9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17c3R5bGVzW1wiZmlndXJlLXByb2R1Y3QtaW1hZ2VcIl19PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImltZy1kZXRhaWwtcHJpbmNpcGFsXCJdfVxuICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZXNbMF19IFxuICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICB3aWR0aD17NDAwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICAgICAgICAgIHByaW9yaXR5PXt0cnVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2ZpZ3VyZT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIlByb2R1Y3RJbmZvLWRldGFpbHNcIl19PlxuICAgICAgICAgICAgICAgIDxwPiR7cHJvZHVjdC5wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5hZGRUb0NhcnQocHJvZHVjdCl9IGNsYXNzTmFtZT17c3R5bGVzW1wicHJpbWFyeS1idXR0b24tZGV0YWlsc1wiXSArIFwiIFwiICsgc3R5bGVzW1wiYWRkLXRvLWNhcnQtYnV0dG9uLWRldGFpbHNcIl19PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvY2FydH0gYWx0PVwiaWNvbm8gY2Fycm8gZGUgY29tcHJhc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkFkZCB0byBjYXJ0PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEluZm87Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJsb2dvY2FydCIsInN0eWxlcyIsIkltYWdlIiwiUHJvZHVjdEluZm8iLCJwcm9kdWN0Iiwic3RhdGUiLCJhZGRUb0NhcnQiLCJmaWd1cmUiLCJjbGFzc05hbWUiLCJzcmMiLCJpbWFnZXMiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwicHJpb3JpdHkiLCJkaXYiLCJwIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductInfo.jsx\n"));

/***/ })

});