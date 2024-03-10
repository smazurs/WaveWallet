"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wagmi/core */ \"@wagmi/core\");\n/* harmony import */ var _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wagmi/core/chains */ \"@wagmi/core/chains\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_2__, _wagmi_core__WEBPACK_IMPORTED_MODULE_3__, _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_2__, _wagmi_core__WEBPACK_IMPORTED_MODULE_3__, _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst { provider , webSocketProvider  } = (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_3__.configureChains)([\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__.arbitrum,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__.arbitrumGoerli,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__.avalanche,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__.avalancheFuji,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__.bsc,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__.bscTestnet,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__.fantom,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__.fantomTestnet,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__.foundry,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__.goerli,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__.mainnet,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__.optimism,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__.optimismGoerli,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__.polygon,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__.polygonMumbai,\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_4__.sepolia\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()\n]);\nconst client = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.createClient)({\n    provider,\n    webSocketProvider,\n    autoConnect: true\n});\nconst customTheme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: {\n        initialColorMode: \"dark\",\n        useSystemColorMode: false\n    },\n    styles: {\n        global: (props)=>({\n                body: {\n                    bg: props.colorMode === \"dark\" ? _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.colors.black : _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.colors.blackAlpha[50]\n                }\n            })\n    }\n});\nconst MyApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        resetCSS: true,\n        theme: customTheme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ColorModeScript, {\n                initialColorMode: customTheme.config.initialColorMode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ahthesham Ali\\\\Documents\\\\GitHub\\\\WaveWallet\\\\pages\\\\_app.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_2__.WagmiConfig, {\n                client: client,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_6__.SessionProvider, {\n                    session: pageProps.session,\n                    refetchInterval: 0,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ahthesham Ali\\\\Documents\\\\GitHub\\\\WaveWallet\\\\pages\\\\_app.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ahthesham Ali\\\\Documents\\\\GitHub\\\\WaveWallet\\\\pages\\\\_app.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ahthesham Ali\\\\Documents\\\\GitHub\\\\WaveWallet\\\\pages\\\\_app.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ahthesham Ali\\\\Documents\\\\GitHub\\\\WaveWallet\\\\pages\\\\_app.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUNwRDtBQUNKO0FBa0JsQjtBQUM0QjtBQUNOO0FBR2xELE1BQU0sRUFBRTBCLFNBQVEsRUFBRUMsa0JBQWlCLEVBQUUsR0FBR3BCLDREQUFlQSxDQUNyRDtJQUNFQyx3REFBUUE7SUFDUkMsOERBQWNBO0lBQ2RDLHlEQUFTQTtJQUNUQyw2REFBYUE7SUFDYkMsbURBQUdBO0lBQ0hDLDBEQUFVQTtJQUNWQyxzREFBTUE7SUFDTkMsNkRBQWFBO0lBQ2JDLHVEQUFPQTtJQUNQQyxzREFBTUE7SUFDTkMsdURBQU9BO0lBQ1BDLHdEQUFRQTtJQUNSQyw4REFBY0E7SUFDZEMsdURBQU9BO0lBQ1BDLDZEQUFhQTtJQUNiQyx1REFBT0E7Q0FDUixFQUNEO0lBQUNDLHNFQUFjQTtDQUFHO0FBR3BCLE1BQU1JLFNBQVN2QixtREFBWUEsQ0FBQztJQUMxQnFCO0lBQ0FDO0lBQ0FFLGFBQWEsSUFBSTtBQUNuQjtBQUVBLE1BQU1DLGNBQWM3Qiw2REFBV0EsQ0FBQztJQUM5QjhCLFFBQVE7UUFDTkMsa0JBQWtCO1FBQ2xCQyxvQkFBb0IsS0FBSztJQUMzQjtJQUNBQyxRQUFRO1FBQ05DLFFBQVEsQ0FBQ0MsUUFBZ0I7Z0JBQ3ZCQyxNQUFNO29CQUNKQyxJQUFJRixNQUFNRyxTQUFTLEtBQUssU0FBU25DLGdFQUF3QixHQUFHQSx5RUFBaUM7Z0JBQy9GO1lBQ0Y7SUFDRjtBQUNGO0FBRUEsTUFBTXVDLFFBQVEsQ0FBQyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxHQUFLO0lBQ3BELHFCQUNFLDhEQUFDN0MsNERBQWNBO1FBQUM4QyxRQUFRO1FBQUMzQyxPQUFPMkI7OzBCQUM5Qiw4REFBQzVCLDZEQUFlQTtnQkFBQzhCLGtCQUFrQkYsWUFBWUMsTUFBTSxDQUFDQyxnQkFBZ0I7Ozs7OzswQkFDdEUsOERBQUMxQiw4Q0FBV0E7Z0JBQUNzQixRQUFRQTswQkFDbkIsNEVBQUNILDREQUFlQTtvQkFBQ3NCLFNBQVNGLFVBQVVFLE9BQU87b0JBQUVDLGlCQUFpQjs4QkFDNUQsNEVBQUNKO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhdmV3YWxsZXQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWtyYVByb3ZpZGVyLCBleHRlbmRUaGVtZSwgQ29sb3JNb2RlU2NyaXB0LCB0aGVtZSBhcyBjaGFrcmFUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSAnd2FnbWknO1xyXG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMgfSBmcm9tICdAd2FnbWkvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgYXJiaXRydW0sXHJcbiAgYXJiaXRydW1Hb2VybGksXHJcbiAgYXZhbGFuY2hlLFxyXG4gIGF2YWxhbmNoZUZ1amksXHJcbiAgYnNjLFxyXG4gIGJzY1Rlc3RuZXQsXHJcbiAgZmFudG9tLFxyXG4gIGZhbnRvbVRlc3RuZXQsXHJcbiAgZm91bmRyeSxcclxuICBnb2VybGksXHJcbiAgbWFpbm5ldCxcclxuICBvcHRpbWlzbSxcclxuICBvcHRpbWlzbUdvZXJsaSxcclxuICBwb2x5Z29uLFxyXG4gIHBvbHlnb25NdW1iYWksXHJcbiAgc2Vwb2xpYSxcclxufSBmcm9tICdAd2FnbWkvY29yZS9jaGFpbnMnO1xyXG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9wdWJsaWMnO1xyXG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5cclxuY29uc3QgeyBwcm92aWRlciwgd2ViU29ja2V0UHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcclxuICBbXHJcbiAgICBhcmJpdHJ1bSxcclxuICAgIGFyYml0cnVtR29lcmxpLFxyXG4gICAgYXZhbGFuY2hlLFxyXG4gICAgYXZhbGFuY2hlRnVqaSxcclxuICAgIGJzYyxcclxuICAgIGJzY1Rlc3RuZXQsXHJcbiAgICBmYW50b20sXHJcbiAgICBmYW50b21UZXN0bmV0LFxyXG4gICAgZm91bmRyeSxcclxuICAgIGdvZXJsaSxcclxuICAgIG1haW5uZXQsXHJcbiAgICBvcHRpbWlzbSxcclxuICAgIG9wdGltaXNtR29lcmxpLFxyXG4gICAgcG9seWdvbixcclxuICAgIHBvbHlnb25NdW1iYWksXHJcbiAgICBzZXBvbGlhLFxyXG4gIF0sXHJcbiAgW3B1YmxpY1Byb3ZpZGVyKCldLFxyXG4pO1xyXG5cclxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcclxuICBwcm92aWRlcixcclxuICB3ZWJTb2NrZXRQcm92aWRlcixcclxuICBhdXRvQ29ubmVjdDogdHJ1ZSxcclxufSk7XHJcblxyXG5jb25zdCBjdXN0b21UaGVtZSA9IGV4dGVuZFRoZW1lKHtcclxuICBjb25maWc6IHtcclxuICAgIGluaXRpYWxDb2xvck1vZGU6ICdkYXJrJyxcclxuICAgIHVzZVN5c3RlbUNvbG9yTW9kZTogZmFsc2UsXHJcbiAgfSxcclxuICBzdHlsZXM6IHtcclxuICAgIGdsb2JhbDogKHByb3BzOiBhbnkpID0+ICh7XHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICBiZzogcHJvcHMuY29sb3JNb2RlID09PSAnZGFyaycgPyBjaGFrcmFUaGVtZS5jb2xvcnMuYmxhY2sgOiBjaGFrcmFUaGVtZS5jb2xvcnMuYmxhY2tBbHBoYVs1MF0sIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIGJhc2VkIG9uIGNvbG9yIG1vZGVcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hha3JhUHJvdmlkZXIgcmVzZXRDU1MgdGhlbWU9e2N1c3RvbVRoZW1lfT5cclxuICAgICAgPENvbG9yTW9kZVNjcmlwdCBpbml0aWFsQ29sb3JNb2RlPXtjdXN0b21UaGVtZS5jb25maWcuaW5pdGlhbENvbG9yTW9kZX0gLz5cclxuICAgICAgPFdhZ21pQ29uZmlnIGNsaWVudD17Y2xpZW50fT5cclxuICAgICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufSByZWZldGNoSW50ZXJ2YWw9ezB9PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxyXG4gICAgICA8L1dhZ21pQ29uZmlnPlxyXG4gICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJDaGFrcmFQcm92aWRlciIsImV4dGVuZFRoZW1lIiwiQ29sb3JNb2RlU2NyaXB0IiwidGhlbWUiLCJjaGFrcmFUaGVtZSIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiY29uZmlndXJlQ2hhaW5zIiwiYXJiaXRydW0iLCJhcmJpdHJ1bUdvZXJsaSIsImF2YWxhbmNoZSIsImF2YWxhbmNoZUZ1amkiLCJic2MiLCJic2NUZXN0bmV0IiwiZmFudG9tIiwiZmFudG9tVGVzdG5ldCIsImZvdW5kcnkiLCJnb2VybGkiLCJtYWlubmV0Iiwib3B0aW1pc20iLCJvcHRpbWlzbUdvZXJsaSIsInBvbHlnb24iLCJwb2x5Z29uTXVtYmFpIiwic2Vwb2xpYSIsInB1YmxpY1Byb3ZpZGVyIiwiU2Vzc2lvblByb3ZpZGVyIiwicHJvdmlkZXIiLCJ3ZWJTb2NrZXRQcm92aWRlciIsImNsaWVudCIsImF1dG9Db25uZWN0IiwiY3VzdG9tVGhlbWUiLCJjb25maWciLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwic3R5bGVzIiwiZ2xvYmFsIiwicHJvcHMiLCJib2R5IiwiYmciLCJjb2xvck1vZGUiLCJjb2xvcnMiLCJibGFjayIsImJsYWNrQWxwaGEiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlc2V0Q1NTIiwic2Vzc2lvbiIsInJlZmV0Y2hJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "@wagmi/core":
/*!******************************!*\
  !*** external "@wagmi/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("@wagmi/core");;

/***/ }),

/***/ "@wagmi/core/chains":
/*!*************************************!*\
  !*** external "@wagmi/core/chains" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("@wagmi/core/chains");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();