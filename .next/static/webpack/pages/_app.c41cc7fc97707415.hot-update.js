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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wagmi/core */ \"./node_modules/@wagmi/core/dist/index.js\");\n/* harmony import */ var _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wagmi/core/chains */ \"./node_modules/@wagmi/core/dist/chains.js\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/public */ \"./node_modules/wagmi/dist/providers/public.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\n\n\n\nconst { provider , webSocketProvider  } = (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_2__.configureChains)([\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.arbitrum,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.arbitrumGoerli,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.avalanche,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.avalancheFuji,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.bsc,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.bscTestnet,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.fantom,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.fantomTestnet,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.foundry,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.goerli,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.mainnet,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.optimism,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.optimismGoerli,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.polygon,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.polygonMumbai,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.sepolia\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__.publicProvider)()\n]);\nconst client = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createClient)({\n    provider,\n    webSocketProvider,\n    autoConnect: true\n});\nconst config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: false\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.extendTheme)({\n    config\n});\nconst MyApp = (param)=>{\n    let { Component , pageProps  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ChakraProvider, {\n        resetCSS: true,\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n            client: client,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n                session: pageProps.session,\n                refetchInterval: 0,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ahthesham Ali\\\\Documents\\\\GitHub\\\\WaveWallet\\\\pages\\\\_app.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ahthesham Ali\\\\Documents\\\\GitHub\\\\WaveWallet\\\\pages\\\\_app.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ahthesham Ali\\\\Documents\\\\GitHub\\\\WaveWallet\\\\pages\\\\_app.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ahthesham Ali\\\\Documents\\\\GitHub\\\\WaveWallet\\\\pages\\\\_app.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrRDtBQUNBO0FBQ0o7QUFrQmxCO0FBQ21CO0FBQ1M7QUFDTjtBQUdsRCxNQUFNLEVBQUV1QixTQUFRLEVBQUVDLGtCQUFpQixFQUFFLEdBQUdyQiw0REFBZUEsQ0FDckQ7SUFDRUMsd0RBQVFBO0lBQ1JDLDhEQUFjQTtJQUNkQyx5REFBU0E7SUFDVEMsNkRBQWFBO0lBQ2JDLG1EQUFHQTtJQUNIQywwREFBVUE7SUFDVkMsc0RBQU1BO0lBQ05DLDZEQUFhQTtJQUNiQyx1REFBT0E7SUFDUEMsc0RBQU1BO0lBQ05DLHVEQUFPQTtJQUNQQyx3REFBUUE7SUFDUkMsOERBQWNBO0lBQ2RDLHVEQUFPQTtJQUNQQyw2REFBYUE7SUFDYkMsdURBQU9BO0NBQ1IsRUFDRDtJQUFDRSxzRUFBY0E7Q0FBRztBQUdwQixNQUFNSSxTQUFTeEIsbURBQVlBLENBQUM7SUFDMUJzQjtJQUNBQztJQUNBRSxhQUFhLElBQUk7QUFDbkI7QUFFQSxNQUFNQyxTQUFTO0lBQ2JDLGtCQUFrQjtJQUNsQkMsb0JBQW9CLEtBQUs7QUFDM0I7QUFFQSxNQUFNQyxRQUFRViw2REFBV0EsQ0FBQztJQUFFTztBQUFPO0FBRW5DLE1BQU1JLFFBQVEsU0FBd0M7UUFBdkMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVk7SUFDL0MscUJBQ0UsOERBQUNqQyw0REFBY0E7UUFBQ2tDLFFBQVE7UUFBQ0osT0FBT0E7a0JBQzlCLDRFQUFDNUIsOENBQVdBO1lBQUN1QixRQUFRQTtzQkFDbkIsNEVBQUNILDREQUFlQTtnQkFBQ2EsU0FBU0YsVUFBVUUsT0FBTztnQkFBRUMsaUJBQWlCOzBCQUM1RCw0RUFBQ0o7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0tBVk1GO0FBWU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSAnd2FnbWknO1xyXG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMgfSBmcm9tICdAd2FnbWkvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgYXJiaXRydW0sXHJcbiAgYXJiaXRydW1Hb2VybGksXHJcbiAgYXZhbGFuY2hlLFxyXG4gIGF2YWxhbmNoZUZ1amksXHJcbiAgYnNjLFxyXG4gIGJzY1Rlc3RuZXQsXHJcbiAgZmFudG9tLFxyXG4gIGZhbnRvbVRlc3RuZXQsXHJcbiAgZm91bmRyeSxcclxuICBnb2VybGksXHJcbiAgbWFpbm5ldCxcclxuICBvcHRpbWlzbSxcclxuICBvcHRpbWlzbUdvZXJsaSxcclxuICBwb2x5Z29uLFxyXG4gIHBvbHlnb25NdW1iYWksXHJcbiAgc2Vwb2xpYSxcclxufSBmcm9tICdAd2FnbWkvY29yZS9jaGFpbnMnO1xyXG5pbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9wdWJsaWMnO1xyXG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5cclxuY29uc3QgeyBwcm92aWRlciwgd2ViU29ja2V0UHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcclxuICBbXHJcbiAgICBhcmJpdHJ1bSxcclxuICAgIGFyYml0cnVtR29lcmxpLFxyXG4gICAgYXZhbGFuY2hlLFxyXG4gICAgYXZhbGFuY2hlRnVqaSxcclxuICAgIGJzYyxcclxuICAgIGJzY1Rlc3RuZXQsXHJcbiAgICBmYW50b20sXHJcbiAgICBmYW50b21UZXN0bmV0LFxyXG4gICAgZm91bmRyeSxcclxuICAgIGdvZXJsaSxcclxuICAgIG1haW5uZXQsXHJcbiAgICBvcHRpbWlzbSxcclxuICAgIG9wdGltaXNtR29lcmxpLFxyXG4gICAgcG9seWdvbixcclxuICAgIHBvbHlnb25NdW1iYWksXHJcbiAgICBzZXBvbGlhLFxyXG4gIF0sXHJcbiAgW3B1YmxpY1Byb3ZpZGVyKCldLFxyXG4pO1xyXG5cclxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcclxuICBwcm92aWRlcixcclxuICB3ZWJTb2NrZXRQcm92aWRlcixcclxuICBhdXRvQ29ubmVjdDogdHJ1ZSxcclxufSk7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgaW5pdGlhbENvbG9yTW9kZTogJ2RhcmsnLFxyXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHsgY29uZmlnIH0pO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hha3JhUHJvdmlkZXIgcmVzZXRDU1MgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPFdhZ21pQ29uZmlnIGNsaWVudD17Y2xpZW50fT5cclxuICAgICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufSByZWZldGNoSW50ZXJ2YWw9ezB9PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxyXG4gICAgICA8L1dhZ21pQ29uZmlnPlxyXG4gICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJDaGFrcmFQcm92aWRlciIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiY29uZmlndXJlQ2hhaW5zIiwiYXJiaXRydW0iLCJhcmJpdHJ1bUdvZXJsaSIsImF2YWxhbmNoZSIsImF2YWxhbmNoZUZ1amkiLCJic2MiLCJic2NUZXN0bmV0IiwiZmFudG9tIiwiZmFudG9tVGVzdG5ldCIsImZvdW5kcnkiLCJnb2VybGkiLCJtYWlubmV0Iiwib3B0aW1pc20iLCJvcHRpbWlzbUdvZXJsaSIsInBvbHlnb24iLCJwb2x5Z29uTXVtYmFpIiwic2Vwb2xpYSIsImV4dGVuZFRoZW1lIiwicHVibGljUHJvdmlkZXIiLCJTZXNzaW9uUHJvdmlkZXIiLCJwcm92aWRlciIsIndlYlNvY2tldFByb3ZpZGVyIiwiY2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJjb25maWciLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwidGhlbWUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlc2V0Q1NTIiwic2Vzc2lvbiIsInJlZmV0Y2hJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});