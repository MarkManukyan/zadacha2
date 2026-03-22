/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/extractSpecialAttacks.js"
/*!**************************************!*\
  !*** ./src/extractSpecialAttacks.js ***!
  \**************************************/
(module) {

eval("{function extractSpecialAttacks(character) {\n  if (!character.special || !Array.isArray(character.special)) {\n    return [];\n  }\n  return character.special.map(function (attack) {\n    var id = attack.id,\n      name = attack.name,\n      icon = attack.icon,\n      _attack$description = attack.description,\n      description = _attack$description === void 0 ? 'Описание недоступно' : _attack$description;\n    return {\n      id: id,\n      name: name,\n      icon: icon,\n      description: description\n    };\n  });\n}\nmodule.exports = extractSpecialAttacks;\n\n//# sourceURL=webpack://extract-special-attacks/./src/extractSpecialAttacks.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var extractSpecialAttacks = __webpack_require__(/*! ./extractSpecialAttacks */ \"./src/extractSpecialAttacks.js\");\nmodule.exports = extractSpecialAttacks;\n\n//# sourceURL=webpack://extract-special-attacks/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;