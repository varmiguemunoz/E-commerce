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

/***/ "./src/containers/ProductList.jsx":
/*!****************************************!*\
  !*** ./src/containers/ProductList.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductItem */ \"./src/components/ProductItem.jsx\");\n/* harmony import */ var _hooks_useGetProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useGetProducts */ \"./src/hooks/useGetProducts.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst API = \"http://api.escuelajs.co/api/v1/products\";\nconst ProductList = ()=>{\n    _s();\n    const products = (0,_hooks_useGetProducts__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(API);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: styles[\"main-container\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: styles.ProductList,\n            children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    product: product\n                }, product.id, false, {\n                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/containers/ProductList.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 6\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/containers/ProductList.jsx\",\n            lineNumber: 14,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/containers/ProductList.jsx\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, undefined);\n};\n_s(ProductList, \"zW2KnI+YbayCzNygatwbqVgd8WM=\", false, function() {\n    return [\n        _hooks_useGetProducts__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList); //desde aqui se llama a la api\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Qcm9kdWN0TGlzdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUEwQjtBQUMwQjtBQUNDO0FBRVY7QUFFM0MsTUFBTUcsTUFBTTtBQUVaLE1BQU1DLGNBQWMsSUFBTTs7SUFDekIsTUFBTUMsV0FBV0gsaUVBQWNBLENBQUNDO0lBRWhDLHFCQUNDLDhEQUFDRztRQUFRQyxXQUFXQyxNQUFNLENBQUMsaUJBQWlCO2tCQUMzQyw0RUFBQ0M7WUFBSUYsV0FBV0MsT0FBT0osV0FBVztzQkFDaENDLFNBQVNLLEdBQUcsQ0FBQ0MsQ0FBQUEsd0JBQ2IsOERBQUNWLCtEQUFXQTtvQkFBQ1UsU0FBU0E7bUJBQWNBLFFBQVFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQVFuRDtHQWZNUjs7UUFDWUYsNkRBQWNBOzs7S0FEMUJFO0FBaUJOLCtEQUFlQSxXQUFXQSxFQUFDLENBRTNCLDhCQUE4QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVycy9Qcm9kdWN0TGlzdC5qc3g/N2Q5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0nO1xuaW1wb3J0IHVzZUdldFByb2R1Y3RzIGZyb20gJy4uL2hvb2tzL3VzZUdldFByb2R1Y3RzJztcblxuaW1wb3J0ICcuLi9zdHlsZXMvUHJvZHVjdExpc3QubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBBUEkgPSAnaHR0cDovL2FwaS5lc2N1ZWxhanMuY28vYXBpL3YxL3Byb2R1Y3RzJztcblxuY29uc3QgUHJvZHVjdExpc3QgPSAoKSA9PiB7XG5cdGNvbnN0IHByb2R1Y3RzID0gdXNlR2V0UHJvZHVjdHMoQVBJKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzW1wibWFpbi1jb250YWluZXJcIl19PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Qcm9kdWN0TGlzdH0+XG5cdFx0XHRcdHtwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXG5cdFx0XHRcdFx0PFByb2R1Y3RJdGVtIHByb2R1Y3Q9e3Byb2R1Y3R9IGtleT17cHJvZHVjdC5pZH0gLz5cblx0XHRcdFx0XHRcblx0XHRcdFx0KSl9XG5cblx0XHRcdFx0XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xuXG4vL2Rlc2RlIGFxdWkgc2UgbGxhbWEgYSBsYSBhcGkiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9kdWN0SXRlbSIsInVzZUdldFByb2R1Y3RzIiwiQVBJIiwiUHJvZHVjdExpc3QiLCJwcm9kdWN0cyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJkaXYiLCJtYXAiLCJwcm9kdWN0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/ProductList.jsx\n"));

/***/ })

});