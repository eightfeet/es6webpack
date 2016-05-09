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

	var sub = __webpack_require__(1);
	console.log('sub', sub());

	var _sub = sub();

	var name = _sub.name;
	var age = _sub.age;
	var address = _sub.address;

	console.log('name', name);
	var checkAB = function checkAB() {
	  var a = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	  var b = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

	  console.log('a ' + a, 'b ' + b);
	};
	var arr = [1, 2, 3];
	var obj = { nameb: 'nameb', sex: '0' };
	var x = arr[0];
	var y = arr[1];
	var other = arr.slice(2);
	var nameb = obj.nameb;
	var _obj$sex = obj.sex;
	var sex = _obj$sex === undefined ? 'sex' : _obj$sex;

	console.log(nameb);
	console.log(x);
	console.log(other);
	console.log(sex);

	checkAB(3, 7);
	checkAB();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _test = function test() {
	  return _test = {
	    name: 'name',
	    age: 'age',
	    address: 'address'
	  };
	};
	module.exports = _test;

/***/ }
/******/ ]);