"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ky-universal";
exports.ids = ["vendor-chunks/ky-universal"];
exports.modules = {

/***/ "(rsc)/./node_modules/ky-universal/index.js":
/*!********************************************!*\
  !*** ./node_modules/ky-universal/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst {URL, URLSearchParams} = __webpack_require__(/*! url */ \"url\");\nconst fetch = __webpack_require__(/*! node-fetch */ \"(rsc)/./node_modules/node-fetch/lib/index.mjs\");\nconst AbortController = __webpack_require__(/*! abort-controller */ \"(rsc)/./node_modules/abort-controller/dist/abort-controller.js\");\n\nif (!global.URL) {\n\tglobal.URL = URL;\n}\n\nif (!global.URLSearchParams) {\n\tglobal.URLSearchParams = URLSearchParams;\n}\n\nif (!global.fetch) {\n\tglobal.fetch = fetch;\n}\n\nif (!global.Headers) {\n\tglobal.Headers = fetch.Headers;\n}\n\nif (!global.Request) {\n\tglobal.Request = fetch.Request;\n}\n\nif (!global.Response) {\n\tglobal.Response = fetch.Response;\n}\n\nif (!global.AbortController) {\n\tglobal.AbortController = AbortController;\n}\n\nconst {\n\tdefault: ky,\n\tHTTPError,\n\tTimeoutError\n} = __webpack_require__(/*! ky/umd */ \"(rsc)/./node_modules/ky/umd.js\");\n\nmodule.exports = ky;\nmodule.exports[\"default\"] = ky;\nmodule.exports.HTTPError = HTTPError;\nmodule.exports.TimeoutError = TimeoutError;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMva3ktdW5pdmVyc2FsL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsT0FBTyxzQkFBc0IsRUFBRSxtQkFBTyxDQUFDLGdCQUFLO0FBQzVDLGNBQWMsbUJBQU8sQ0FBQyxpRUFBWTtBQUNsQyx3QkFBd0IsbUJBQU8sQ0FBQyx3RkFBa0I7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsRUFBRSxtQkFBTyxDQUFDLDhDQUFROztBQUVwQjtBQUNBLHlCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIsMkJBQTJCIiwic291cmNlcyI6WyIvaG9tZS9iZWxpc2FyaXVzL2RldmVsb3Blci9tZXJjdXJ5L25vZGVfbW9kdWxlcy9reS11bml2ZXJzYWwvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3Qge1VSTCwgVVJMU2VhcmNoUGFyYW1zfSA9IHJlcXVpcmUoJ3VybCcpO1xuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5jb25zdCBBYm9ydENvbnRyb2xsZXIgPSByZXF1aXJlKCdhYm9ydC1jb250cm9sbGVyJyk7XG5cbmlmICghZ2xvYmFsLlVSTCkge1xuXHRnbG9iYWwuVVJMID0gVVJMO1xufVxuXG5pZiAoIWdsb2JhbC5VUkxTZWFyY2hQYXJhbXMpIHtcblx0Z2xvYmFsLlVSTFNlYXJjaFBhcmFtcyA9IFVSTFNlYXJjaFBhcmFtcztcbn1cblxuaWYgKCFnbG9iYWwuZmV0Y2gpIHtcblx0Z2xvYmFsLmZldGNoID0gZmV0Y2g7XG59XG5cbmlmICghZ2xvYmFsLkhlYWRlcnMpIHtcblx0Z2xvYmFsLkhlYWRlcnMgPSBmZXRjaC5IZWFkZXJzO1xufVxuXG5pZiAoIWdsb2JhbC5SZXF1ZXN0KSB7XG5cdGdsb2JhbC5SZXF1ZXN0ID0gZmV0Y2guUmVxdWVzdDtcbn1cblxuaWYgKCFnbG9iYWwuUmVzcG9uc2UpIHtcblx0Z2xvYmFsLlJlc3BvbnNlID0gZmV0Y2guUmVzcG9uc2U7XG59XG5cbmlmICghZ2xvYmFsLkFib3J0Q29udHJvbGxlcikge1xuXHRnbG9iYWwuQWJvcnRDb250cm9sbGVyID0gQWJvcnRDb250cm9sbGVyO1xufVxuXG5jb25zdCB7XG5cdGRlZmF1bHQ6IGt5LFxuXHRIVFRQRXJyb3IsXG5cdFRpbWVvdXRFcnJvclxufSA9IHJlcXVpcmUoJ2t5L3VtZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGt5O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGt5O1xubW9kdWxlLmV4cG9ydHMuSFRUUEVycm9yID0gSFRUUEVycm9yO1xubW9kdWxlLmV4cG9ydHMuVGltZW91dEVycm9yID0gVGltZW91dEVycm9yO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/ky-universal/index.js\n");

/***/ })

};
;