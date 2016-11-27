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

	var _map = __webpack_require__(2);

	var _map2 = _interopRequireDefault(_map);

	var _modal_form = __webpack_require__(3);

	var _modal = __webpack_require__(4);

	var _modal2 = _interopRequireDefault(_modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _menu2.default)();
	(0, _map2.default)();
	(0, _modal_form.modalInit)();
	(0, _modal2.default)();

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

	  $(document).on('click', '.anchor', function () {
	    $('html, body').animate({
	      scrollTop: $('a[name="' + this.hash.slice(1) + '"]').offset().top - 85
	    }, 1000);

	    if (menuHasOpen()) {
	      menuClose();
	    }

	    return false;
	  });
	}

	function menuOpen() {
	  document.querySelector('#menu footer').classList.add('open');
	}

	function menuClose() {
	  document.querySelector('#menu footer').classList.remove('open');
	}

	function menuHasOpen() {
	  return document.querySelector('#menu footer').classList.contains('open');
	}

	// @event : bool -> Если нужно так же закрыть меню сразу, передать true
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var myLatlng = new google.maps.LatLng(51.154388, 71.441285);
	  var myCenterMarker = new google.maps.LatLng(51.154310, 71.450293);
	  var myOptions = {
	    scrollwheel: false,
	    zoom: 15,
	    center: myLatlng,
	    disableDefaultUI: true,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	  };

	  var map = new google.maps.Map(document.getElementById("map_block"), myOptions);

	  var marker = new google.maps.Marker({
	    position: myCenterMarker,
	    map: map,
	    icon: 'images/geo_icon.png',
	    title: "Catering service"
	  });
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modalInit = modalInit;
	exports.openModalForm = openModalForm;
	exports.closeModalForm = closeModalForm;
	function modalInit() {
	  document.querySelector('#menu .form_open').addEventListener('click', function (e) {
	    return openModalForm(e);
	  });

	  document.querySelector('#about .row a.button').addEventListener('click', function (e) {
	    return openModalForm(e);
	  });

	  document.querySelector('#services .sert_text a.button').addEventListener('click', function (e) {
	    return openModalForm(e);
	  });

	  document.querySelector('#modal_form form .closer').addEventListener('click', function (e) {
	    return closeModalForm(e);
	  });

	  document.querySelector('#modal_form button.close_modal_form').addEventListener('click', function (e) {
	    return closeModalForm(e);
	  });
	}

	function openModalForm(e) {
	  e.preventDefault();
	  var _elem = document.querySelector('#modal_form');

	  _elem.style.display = 'block';
	  setTimeout(function () {
	    return _elem.classList.add('open');
	  }, 10);
	}

	function closeModalForm(e) {
	  e.preventDefault();
	  var _elem = document.querySelector('#modal_form');

	  _elem.classList.remove('open');
	  setTimeout(function () {
	    return _elem.style.display = 'none';
	  }, 300);
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = initModal;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function initModal() {
	  document.querySelector('#modal .wrap .closer').addEventListener('click', function () {
	    modalClose();
	  });

	  // Услуги
	  [].concat(_toConsumableArray(document.querySelectorAll('#services ul li'))).forEach(function (elem) {
	    elem.addEventListener('click', function () {
	      modalOpen();
	    });
	  });

	  // бренд партнеры
	  [].concat(_toConsumableArray(document.querySelectorAll('#brand ul li img'))).forEach(function (elem) {
	    elem.addEventListener('click', function () {
	      modalOpen();
	    });
	  });
	}

	function modalOpen() {
	  var _modal = document.querySelector('#modal');
	  var _modal_wrap = document.querySelector('#modal .wrap');

	  _modal.style.display = 'block';
	  setTimeout(function () {
	    _modal.classList.add('open');
	    _modal_wrap.classList.add('open');
	  }, 10);
	}

	function modalClose() {
	  var _modal = document.querySelector('#modal');
	  var _modal_wrap = document.querySelector('#modal .wrap');

	  _modal.classList.remove('open');
	  _modal_wrap.classList.remove('open');

	  setTimeout(function () {
	    _modal.style.display = 'none';
	  }, 300);
	}

/***/ }
/******/ ]);