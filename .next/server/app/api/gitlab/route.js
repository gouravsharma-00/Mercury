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
exports.id = "app/api/gitlab/route";
exports.ids = ["app/api/gitlab/route"];
exports.modules = {

/***/ "(rsc)/./_libs/gitlab/git.ts":
/*!*****************************!*\
  !*** ./_libs/gitlab/git.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var gitlab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gitlab */ \"(rsc)/./node_modules/gitlab/dist/index.es.js\");\n\nasync function connect(token, id) {\n    const api = new gitlab__WEBPACK_IMPORTED_MODULE_0__.Gitlab({\n        token\n    });\n    // retrive project\n    try {\n        const project = await api.Projects.show(id);\n        console.log('Project name:', project.name);\n        console.log('Visibility:', project.visibility);\n    } catch (err) {\n        console.error('Error fetching project:', err);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9fbGlicy9naXRsYWIvZ2l0LnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDO0FBRWpCLGVBQWVDLFFBQVFDLEtBQWMsRUFBRUMsRUFBVztJQUM3RCxNQUFNQyxNQUFNLElBQUlKLDBDQUFNQSxDQUFDO1FBQ25CRTtJQUNKO0lBRUEsa0JBQWtCO0lBQ2xCLElBQUk7UUFDQSxNQUFNRyxVQUFVLE1BQU1ELElBQUlFLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDSjtRQUN4Q0ssUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkosUUFBUUssSUFBSTtRQUN6Q0YsUUFBUUMsR0FBRyxDQUFDLGVBQWVKLFFBQVFNLFVBQVU7SUFFakQsRUFBRSxPQUFPQyxLQUFLO1FBRVZKLFFBQVFLLEtBQUssQ0FBQywyQkFBMkJEO0lBQzdDO0FBQ0oiLCJzb3VyY2VzIjpbIi9ob21lL2JlbGlzYXJpdXMvZGV2ZWxvcGVyL21lcmN1cnkvX2xpYnMvZ2l0bGFiL2dpdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHaXRsYWIgfSBmcm9tIFwiZ2l0bGFiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QodG9rZW4gOiBzdHJpbmcsIGlkIDogbnVtYmVyKSB7XG4gICAgY29uc3QgYXBpID0gbmV3IEdpdGxhYih7XG4gICAgICAgIHRva2VuXG4gICAgfSlcblxuICAgIC8vIHJldHJpdmUgcHJvamVjdFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBhd2FpdCBhcGkuUHJvamVjdHMuc2hvdyhpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0IG5hbWU6JywgcHJvamVjdC5uYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1Zpc2liaWxpdHk6JywgcHJvamVjdC52aXNpYmlsaXR5KTtcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvamVjdDonLCBlcnIpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiR2l0bGFiIiwiY29ubmVjdCIsInRva2VuIiwiaWQiLCJhcGkiLCJwcm9qZWN0IiwiUHJvamVjdHMiLCJzaG93IiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJ2aXNpYmlsaXR5IiwiZXJyIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./_libs/gitlab/git.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/gitlab/route.ts":
/*!*********************************!*\
  !*** ./app/api/gitlab/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _libs_gitlab_git__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_libs/gitlab/git */ \"(rsc)/./_libs/gitlab/git.ts\");\n\n\nasync function GET(req) {\n    const token = process.env.GIT_TOKEN;\n    const projectIdStr = process.env.PROJECT_ID;\n    if (!token || !projectIdStr) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Missing token or project ID\"\n        }, {\n            status: 500\n        });\n    }\n    const projectId = parseInt(projectIdStr, 10);\n    if (isNaN(projectId)) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Invalid project ID\"\n        }, {\n            status: 500\n        });\n    }\n    try {\n        const result = await (0,_libs_gitlab_git__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(token, 70444045);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            result\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Connection failed\",\n            details: String(error)\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dpdGxhYi9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFDUjtBQUV6QyxlQUFlRSxJQUFJQyxHQUFnQjtJQUV0QyxNQUFNQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7SUFDbkMsTUFBTUMsZUFBZUgsUUFBUUMsR0FBRyxDQUFDRyxVQUFVO0lBRTNDLElBQUksQ0FBQ0wsU0FBUyxDQUFDSSxjQUFjO1FBQ3pCLE9BQU9SLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUE4QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNyRjtJQUVBLE1BQU1DLFlBQVlDLFNBQVNOLGNBQWM7SUFDekMsSUFBSU8sTUFBTUYsWUFBWTtRQUNsQixPQUFPYixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBcUIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDNUU7SUFFQSxJQUFJO1FBQ0EsTUFBTUksU0FBUyxNQUFNZiw0REFBT0EsQ0FBQ0csT0FBTztRQUNwQyxPQUFPSixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVPLFNBQVM7WUFBTUQ7UUFBTztJQUVyRCxFQUFFLE9BQU9MLE9BQU87UUFDWixPQUFPWCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLE9BQU87WUFBcUJPLFNBQVNDLE9BQU9SO1FBQU8sR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDbkc7QUFDSiIsInNvdXJjZXMiOlsiL2hvbWUvYmVsaXNhcml1cy9kZXZlbG9wZXIvbWVyY3VyeS9hcHAvYXBpL2dpdGxhYi9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vX2xpYnMvZ2l0bGFiL2dpdFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogTmV4dFJlcXVlc3QpIHtcblxuICAgIGNvbnN0IHRva2VuID0gcHJvY2Vzcy5lbnYuR0lUX1RPS0VOO1xuICAgIGNvbnN0IHByb2plY3RJZFN0ciA9IHByb2Nlc3MuZW52LlBST0pFQ1RfSUQ7XG5cbiAgICBpZiAoIXRva2VuIHx8ICFwcm9qZWN0SWRTdHIpIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiTWlzc2luZyB0b2tlbiBvciBwcm9qZWN0IElEXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0SWQgPSBwYXJzZUludChwcm9qZWN0SWRTdHIsIDEwKTtcbiAgICBpZiAoaXNOYU4ocHJvamVjdElkKSkge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIHByb2plY3QgSURcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbm5lY3QodG9rZW4sIDcwNDQ0MDQ1KTtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgcmVzdWx0IH0pO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiQ29ubmVjdGlvbiBmYWlsZWRcIiwgZGV0YWlsczogU3RyaW5nKGVycm9yKSB9LCB7IHN0YXR1czogNTAwIH0pO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb25uZWN0IiwiR0VUIiwicmVxIiwidG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiR0lUX1RPS0VOIiwicHJvamVjdElkU3RyIiwiUFJPSkVDVF9JRCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInByb2plY3RJZCIsInBhcnNlSW50IiwiaXNOYU4iLCJyZXN1bHQiLCJzdWNjZXNzIiwiZGV0YWlscyIsIlN0cmluZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/gitlab/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgitlab%2Froute&page=%2Fapi%2Fgitlab%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgitlab%2Froute.ts&appDir=%2Fhome%2Fbelisarius%2Fdeveloper%2Fmercury%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fbelisarius%2Fdeveloper%2Fmercury&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgitlab%2Froute&page=%2Fapi%2Fgitlab%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgitlab%2Froute.ts&appDir=%2Fhome%2Fbelisarius%2Fdeveloper%2Fmercury%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fbelisarius%2Fdeveloper%2Fmercury&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_belisarius_developer_mercury_app_api_gitlab_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/gitlab/route.ts */ \"(rsc)/./app/api/gitlab/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/gitlab/route\",\n        pathname: \"/api/gitlab\",\n        filename: \"route\",\n        bundlePath: \"app/api/gitlab/route\"\n    },\n    resolvedPagePath: \"/home/belisarius/developer/mercury/app/api/gitlab/route.ts\",\n    nextConfigOutput,\n    userland: _home_belisarius_developer_mercury_app_api_gitlab_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnaXRsYWIlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdpdGxhYiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdpdGxhYiUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGYmVsaXNhcml1cyUyRmRldmVsb3BlciUyRm1lcmN1cnklMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZiZWxpc2FyaXVzJTJGZGV2ZWxvcGVyJTJGbWVyY3VyeSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDVTtBQUN2RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvYmVsaXNhcml1cy9kZXZlbG9wZXIvbWVyY3VyeS9hcHAvYXBpL2dpdGxhYi9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ2l0bGFiL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ2l0bGFiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9naXRsYWIvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9iZWxpc2FyaXVzL2RldmVsb3Blci9tZXJjdXJ5L2FwcC9hcGkvZ2l0bGFiL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgitlab%2Froute&page=%2Fapi%2Fgitlab%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgitlab%2Froute.ts&appDir=%2Fhome%2Fbelisarius%2Fdeveloper%2Fmercury%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fbelisarius%2Fdeveloper%2Fmercury&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/asynckit","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/whatwg-url","vendor-chunks/call-bind-apply-helpers","vendor-chunks/get-proto","vendor-chunks/tr46","vendor-chunks/mime-db","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/form-data","vendor-chunks/node-fetch","vendor-chunks/xcase","vendor-chunks/webidl-conversions","vendor-chunks/strict-uri-encode","vendor-chunks/split-on-first","vendor-chunks/query-string","vendor-chunks/mime-types","vendor-chunks/li","vendor-chunks/ky","vendor-chunks/ky-universal","vendor-chunks/hasown","vendor-chunks/has-tostringtag","vendor-chunks/gitlab","vendor-chunks/get-intrinsic","vendor-chunks/filter-obj","vendor-chunks/event-target-shim","vendor-chunks/es-set-tostringtag","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/delayed-stream","vendor-chunks/decode-uri-component","vendor-chunks/combined-stream","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgitlab%2Froute&page=%2Fapi%2Fgitlab%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgitlab%2Froute.ts&appDir=%2Fhome%2Fbelisarius%2Fdeveloper%2Fmercury%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fbelisarius%2Fdeveloper%2Fmercury&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();