/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _menu = __webpack_require__(1);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _menu2.default)();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = menuInit;
	function menuInit() {

	  document.querySelector('#menu .menu_opener').addEventListener('click', function () {
	    menuOpen();
	    mobileOpener();
	  });

	  document.querySelector('#menu .menu_closer').addEventListener('click', function () {
	    menuClose();
	    mobileOpener();
	  });

	  document.querySelector('#menu .mobile_menu_opener .burger').addEventListener('click', function () {
	    mobileOpener(true);
	  });
	}

	function menuOpen() {
	  document.querySelector('#menu footer').classList.add('open');
	}

	function menuClose() {
	  document.querySelector('#menu footer').classList.remove('open');
	}

	// @event : bool -> Если функция самостоятельная передать true
	function mobileOpener(event) {
	  var _elem = document.querySelector('#menu .mobile_menu_opener .burger');

	  if (_elem.classList.contains('closer')) {
	    _elem.classList.remove('closer');
	    event ? menuClose() : null;
	  } else {
	    _elem.classList.add('closer');
	    event ? menuOpen() : null;
	  }
	}

/***/ }
/******/ ]);