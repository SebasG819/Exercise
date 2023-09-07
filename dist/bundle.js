/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Profile/profile.ts":
/*!*******************************************!*\
  !*** ./src/components/Profile/profile.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribute\": () => (/* binding */ Attribute),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Attribute;\n(function (Attribute) {\n    Attribute[\"name\"] = \"name\";\n    Attribute[\"age\"] = \"age\";\n    Attribute[\"gender\"] = \"gender\";\n    Attribute[\"country\"] = \"country\";\n    Attribute[\"images\"] = \"images\";\n})(Attribute || (Attribute = {}));\nclass Profile extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            country: null,\n            age: null,\n            gender: null,\n            name: null,\n            images: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            case Attribute.age:\n                this.age = newValue ? Number(newValue) : undefined;\n                break;\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n            <section>\r\n            <link rel=\"stylesheet\" href=\"../src/components/Profile/profile.css\">\r\n            <h1>${this.name}</h1>\r\n            <p>Age: ${this.age}</p>\r\n            <p>Gender: ${this.gender}</p>\r\n            <p>From: ${this.country}</p>\r\n            <img src=${this.images}></img>\r\n            <button>Like</button>\r\n\r\n            </section>\r\n            `;\n        }\n    }\n}\ncustomElements.define(\"my-profile\", Profile);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Profile/profile.ts?");

/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data)\n/* harmony export */ });\nconst data = [\n    {\n        name: \"Pepito Perez\",\n        age: \"15\",\n        gender: \"male\",\n        country: \"Spain\",\n        images: \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png\"\n    },\n    {\n        name: \"Jp Marin\",\n        age: \"2\",\n        gender: \"male\",\n        country: \"Africa\",\n        images: \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/2560px-Flag_of_South_Africa.svg.png\"\n    },\n    {\n        name: \"JJJHayco\",\n        age: \"32\",\n        gender: \"male\",\n        country: \"Italy\",\n        images: \"https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png\"\n    },\n    {\n        name: \"S180an\",\n        age: \"15\",\n        gender: \"male\",\n        country: \"Irland\",\n        images: \"https://cdn.britannica.com/33/1733-004-5BA407D6/FLAG-Ireland.jpg\"\n    },\n    {\n        name: \"AvilaT\",\n        age: \"20\",\n        gender: \"male\",\n        country: \"Moldavia\",\n        images: \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Moldova_%283-2%29.svg/2560px-Flag_of_Moldova_%283-2%29.svg.png\"\n    },\n];\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/data.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Profile_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Profile/profile */ \"./src/components/Profile/profile.ts\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.ts\");\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.profiles = [];\n        this.attachShadow({ mode: \"open\" });\n        _data__WEBPACK_IMPORTED_MODULE_1__.data.forEach((user) => {\n            const Cardfutbol = this.ownerDocument.createElement(\"my-profile\");\n            Cardfutbol.setAttribute(_components_Profile_profile__WEBPACK_IMPORTED_MODULE_0__.Attribute.name, user.name);\n            Cardfutbol.setAttribute(_components_Profile_profile__WEBPACK_IMPORTED_MODULE_0__.Attribute.images, user.images);\n            Cardfutbol.setAttribute(_components_Profile_profile__WEBPACK_IMPORTED_MODULE_0__.Attribute.age, user.age);\n            Cardfutbol.setAttribute(_components_Profile_profile__WEBPACK_IMPORTED_MODULE_0__.Attribute.gender, user.gender);\n            Cardfutbol.setAttribute(_components_Profile_profile__WEBPACK_IMPORTED_MODULE_0__.Attribute.country, user.country);\n            this.profiles.push(Cardfutbol);\n        });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n        `;\n            this.profiles.forEach((profile) => {\n                var _a;\n                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);\n            });\n        }\n    }\n}\ncustomElements.define(\"app-container\", AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ })

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;