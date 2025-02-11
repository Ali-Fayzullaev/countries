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

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://countries/./src/css/main.css?");

/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ubdateUl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ubdateUl */ \"./src/js/ubdateUl.js\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\nconst searchEl = document.getElementById(\"search\");\r\n\r\n// import { countCards } from \"./main\";\r\n\r\nif (!searchEl) {\r\n    console.log(\"SearchEl not Found\");\r\n} else {\r\n    searchEl.addEventListener(\"input\", () => {\r\n        // countCards.innerHTML = \"\"; \r\n    \r\n        const search = searchEl.value.toLowerCase();\r\n        const cardsTitle = document.querySelectorAll(\".cards-title\");\r\n    \r\n        cardsTitle.forEach(title => {\r\n            const card = title.closest(\".cards\"); \r\n            \r\n            if (title.textContent.toLowerCase().includes(search)) {\r\n                card.classList.remove(\"d-none\"); \r\n            } else {\r\n                card.classList.add(\"d-none\"); \r\n            }\r\n        });\r\n    });\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst searchSelect = document.querySelector(\".form-select\"); // Faqat bitta select element\r\n\r\nsearchSelect.addEventListener(\"change\", () => { // change event\r\n    let filterApi;\r\n\r\n    if (searchSelect.value === \"all\") {\r\n        filterApi = \"https://restcountries.com/v3.1/all\";\r\n    } else {\r\n        filterApi = `https://restcountries.com/v3.1/region/${searchSelect.value}`;\r\n    }\r\n\r\n    console.log(filterApi); // Faqat tekshirish uchun\r\n\r\n    (0,_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(filterApi)\r\n        .then((data) => {\r\n            (0,_ubdateUl__WEBPACK_IMPORTED_MODULE_0__.createCountries)(data);\r\n        })\r\n        .catch((err) => {\r\n            alert( err);\r\n        });\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://countries/./src/js/filter.js?");

/***/ }),

/***/ "./src/js/loader.js":
/*!**************************!*\
  !*** ./src/js/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loderEl = document.querySelector(\".loader\");\r\nconst loaderContainer = document.querySelector(\".loader-container\");\r\n\r\nconst loaderToggle = (info) => {\r\n    if (info) {\r\n        loderEl.classList.remove(\"visually-hidden\");\r\n        loaderContainer.classList.remove(\"visually-hidden\");\r\n    } else {\r\n        loderEl.classList.add(\"visually-hidden\");\r\n        loaderContainer.classList.add(\"visually-hidden\");\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loaderToggle);\r\n\r\n\n\n//# sourceURL=webpack://countries/./src/js/loader.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countCards: () => (/* binding */ countCards)\n/* harmony export */ });\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ \"./src/js/filter.js\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mode */ \"./src/js/mode.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mode__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ubdateUl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ubdateUl */ \"./src/js/ubdateUl.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst countCards = document.querySelector(\".count-cards\");\r\n\r\nconst API = \"https://restcountries.com/v3.1/all\";\r\n\r\n(0,_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(API)\r\n    .then((data) => {\r\n        (0,_ubdateUl__WEBPACK_IMPORTED_MODULE_4__.createCountries)(data);\r\n    })\r\n    .catch((err) => {\r\n        console.log(err.message);\r\n    });\r\n\n\n//# sourceURL=webpack://countries/./src/js/main.js?");

/***/ }),

/***/ "./src/js/mode.js":
/*!************************!*\
  !*** ./src/js/mode.js ***!
  \************************/
/***/ (() => {

eval("const btnDarkLight = document.getElementById(\"btn-dark-light\");\r\nconst textMode = document.getElementById(\"text-mode\");\r\nconst modeLight = document.getElementById(\"mode-light\");\r\nconst modeDark = document.getElementById(\"mode-dark\");\r\nconst mode = document.querySelectorAll(\".mode\");\r\n\r\n\r\nmodeDark.addEventListener(\"click\", () => {\r\n    mode.forEach((bg) => {\r\n    bg.classList.add(\"bg-dark\");\r\n    bg.classList.remove(\"bg-light\");\r\n    bg.classList.add(\"text-white\");\r\n    bg.classList.remove(\"text-dark\");\r\n    bg.querySelectorAll(\"span\").forEach((span) => {\r\n        span.classList.add(\"text-white\");\r\n        span.classList.remove(\"text-dark\");\r\n    });\r\n    \r\n    })\r\n    textMode.textContent = \"Mode Light\"\r\n    modeDark.classList.add(\"visually-hidden\");\r\n    modeLight.classList.toggle(\"visually-hidden\");\r\n})\r\n\r\n\r\nmodeLight.addEventListener(\"click\", () => {\r\n    mode.forEach((bg) => {\r\n        bg.classList.remove(\"bg-dark\");\r\n        bg.classList.add(\"bg-light\");\r\n        bg.classList.remove(\"text-white\");\r\n        bg.classList.add(\"text-dark\");\r\n        bg.querySelectorAll(\"span\").forEach((span) => {\r\n            span.classList.remove(\"text-white\");\r\n            span.classList.add(\"text-dark\");\r\n        });\r\n        \r\n        })\r\n        textMode.textContent = \"Mode Dark\"\r\n        modeDark.classList.remove(\"visually-hidden\");\r\n        modeLight.classList.toggle(\"visually-hidden\");\r\n        \r\n})\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://countries/./src/js/mode.js?");

/***/ }),

/***/ "./src/js/request.js":
/*!***************************!*\
  !*** ./src/js/request.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ \"./src/js/loader.js\");\n\r\n\r\nconst request = async (resource) => {\r\n    (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true);\r\n    const req = await fetch(resource);\r\n    if (!req.ok) {\r\n        throw new Error(\"Somthing went wrong :(\");\r\n    }\r\n    const data = await req.json();\r\n    (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false);\r\n    return data;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\r\n\n\n//# sourceURL=webpack://countries/./src/js/request.js?");

/***/ }),

/***/ "./src/js/ubdateUl.js":
/*!****************************!*\
  !*** ./src/js/ubdateUl.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCountries: () => (/* binding */ createCountries),\n/* harmony export */   createCountryInfo: () => (/* binding */ createCountryInfo)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/js/main.js\");\n\r\n\r\nconst createCountries = (countries) => {\r\n    if (!_main__WEBPACK_IMPORTED_MODULE_0__.countCards) {\r\n        console.error(\"Элемент .count-cards не найден\");\r\n        return;\r\n    };\r\n\r\n    _main__WEBPACK_IMPORTED_MODULE_0__.countCards.innerHTML = \"\"; \r\n\r\n    countries.forEach((country) => {\r\n        const countryName = country.name.common;\r\n        // console.log(countryName);\r\n        const population = country.population;\r\n        const region = country.region;\r\n        const flag = country.flags.svg;\r\n        const capital = country.capital?.[0] || \"No capital\";\r\n\r\n        const divEl = document.createElement(\"div\");\r\n        divEl.className = \" col-5 col-md-3 col-lg-3 col-xl-2 border border-1 rounded  border-secondary  m-3 cards py-4 ps-3  mode\";\r\n        divEl.innerHTML = `\r\n            <a href=\"./about.html?country=name/${countryName}\" class=\"link-dark link-offset-2 link-underline-opacity-0 mode\">\r\n                        <div class=\"row text-dark mode\">\r\n                            <div class=\"col-12 d-flex flex-column align-items-center\">\r\n                                <img src=\"${flag}\" class=\"img-fluid border border-2 border-black rounded \" style=\"width: 200px; height: 150px; object-fit: cover;\" alt=\"image\">\r\n                                <span class=\"fw-bold text-start mt-2 text-truncate cards-title\">${countryName}</span>\r\n                            </div>\r\n                        \r\n                            <div class=\"col-12 my-3 d-flex flex-column\">\r\n                                <span class=\"fw-medium\">Population: <span class=\"fw-light\">${population}</span></span>\r\n                                <span class=\"fw-medium\">Region: <span class=\"fw-light\">${region}</span></span>\r\n                                <span class=\"fw-medium\">Capital: <span class=\"fw-light\">${capital}</span></span>\r\n                            </div>\r\n                        </div>\r\n                        \r\n            </a>\r\n        `;\r\n        _main__WEBPACK_IMPORTED_MODULE_0__.countCards.appendChild(divEl);\r\n    });\r\n};\r\n\r\n// About UI\r\n\r\nconst countryInfoEl = document.querySelector(\".country-info\");\r\n\r\n\r\nconst createCountryInfo = (country) => {\r\n    const {population, flags, borders, tld, region, capital, name, languages, currencies, subregion, maps } = country;\r\n    const map = maps.openStreetMaps\r\n    console.log(\"Map URL:\", map);\r\n    const nativeName = (Object.values(name.nativeName)[0].official)\r\n    const symbolMoney = (Object.values(currencies)[0].symbol)\r\n    const nameMoney = (Object.values(currencies)[0].name);\r\n    const language = (Object.values(languages));\r\n    const countryNameForAbout = name.common\r\n    console.log(country)\r\n    \r\n\r\n    countryInfoEl.innerHTML = `\r\n         <div class=\"col-12 col-md-6 mb-5 my-md-0 d-flex justify-content-center align-content-center \">\r\n                    <img src=\"${flags.svg}\" class=\"img-fluid border border-black rounded-2\" alt=\"Img Flag\">\r\n                 </div>\r\n                 <div class=\"col-12 col-md-6\">\r\n                     <div class=\"row\">\r\n                         <div class=\"col-12\">\r\n                             <span class=\"fs-3 fw-medium\">${countryNameForAbout}</span>\r\n                         </div>\r\n                         <div class=\"col-12 my-3\">\r\n                             <div class=\"row \">\r\n                                 <div class=\"col-12 col-sm-6  fs-12\">\r\n                                     <span class=\"fw-medium d-block\">Native Name: <span class=\"fw-light\">${nativeName}</span></span>\r\n                                     <span class=\"fw-medium d-block\">Population: <span class=\"fw-light\">${population}</span></span>\r\n                                     <span class=\"fw-medium d-block\">Region: <span class=\"fw-light\">${region}</span></span>\r\n                                     <span class=\"fw-medium d-block\">Sub Region: <span class=\"fw-light\">${subregion}</span></span>\r\n                                     <span class=\"fw-medium d-block\">Capital: <span class=\"fw-light\">${capital}</span></span>\r\n                                    \r\n                                 </div>\r\n                                 <div class=\"col-12 col-sm-6  fs-12\">\r\n                                     <span class=\"fw-medium d-block\">Top Level Domain: <span class=\"fw-light\">${tld}</span></span>\r\n                                     <span class=\"fw-medium d-block\">Currencies: <span class=\"fw-light\">${nameMoney}</span></span>\r\n                                     <span class=\"fw-medium d-block\">Symbol: <span class=\"fw-light\">${symbolMoney}</span></span>\r\n                                     <span class=\"fw-medium d-block\">Languages: <span class=\"fw-light\">${language}</span></span>\r\n                                   \r\n                                 </div>\r\n                             </div>\r\n                         </div>\r\n                         <div class=\"col-12 my-5\">\r\n                             <span class=\"fs-6 fw-medium \">Border Counties: </span>\r\n                             ${borders ? borders.map((border) => {\r\n                                return `\r\n                                  <a href=\"./about.html?country=alpha/${border}\">\r\n                                    <span class=\"badge rounded-0 p-2 px-4 my-1 border-1 border mode  fw-lighter\">${border}</span>\r\n                                  </a>  \r\n                                `\r\n                            }) : \"No border\"}\r\n                            \r\n                            </div>\r\n                    </div>\r\n                </div>\r\n    \r\n    `;\r\n\r\n}\r\n\n\n//# sourceURL=webpack://countries/./src/js/ubdateUl.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;