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

	/* jshint esnext: true */

	'use strict';

	var app = document.getElementById('app');
	var out = __webpack_require__(1).run();
	app.innerHTML = '<pre>' + out + '</pre>';

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext: true */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var NesterDemo = (function () {
		function NesterDemo() {
			_classCallCheck(this, NesterDemo);
		}

		_createClass(NesterDemo, null, [{
			key: 'run',
			value: function run() {
				var Nester = __webpack_require__(2);

				var dataMap = getData();

				var nester = new Nester().key({ label: function label(d) {
						return d.status;
					}, sort: function sort(a, b) {
						if (a === 'In Progress') {
							return -1;
						} else {
							return +1;
						}
					} }).key({ label: function label(d) {
						return d.priority;
					}, sort: undefined }).rollup(function (leaves) {
					return leaves.length;
				});
				var nested = nester.nest(dataMap);
				return JSON.stringify(nested, null, 2);
			}
		}]);

		return NesterDemo;
	})();

	exports['default'] = NesterDemo;

	function getData() {

		return [{
			"id": "T-024",
			"name": "Organisation list in directory",
			"priority": "MUST",
			"who": "Joe",
			"time": "5",
			"status": "Complete"
		}, {
			"id": "T-015",
			"name": "Make term Commissions customisable",
			"priority": "MUST",
			"who": "Natasha",
			"time": "6",
			"status": "Complete"
		}, {
			"id": "T-016",
			"name": "Comments popup on select rates",
			"priority": "MUST",
			"who": "Mike",
			"time": "3",
			"status": "In Progress"
		}, {
			"id": "T-0169",
			"name": "Upgrade Centos Box",
			"priority": "MUST",
			"who": "Joe",
			"time": "2",
			"status": "In Progress"
		}, {
			"id": "T-013",
			"name": "Search in Documents on selected folder",
			"priority": "MUST",
			"who": "Natasha",
			"time": "6",
			"status": "In Progress"
		}, {
			"id": "T-014",
			"name": "Separate Document system for LA and Legals",
			"priority": "MUST",
			"who": "Joe",
			"time": "9",
			"status": "In Progress"
		}, {
			"id": "T-017",
			"name": "Demo of Look and Feel of Documents front end",
			"priority": "MUST",
			"who": "Natasha",
			"time": "5",
			"status": "In Progress"
		}, {
			"id": "T-021",
			"name": "Fix error where forum filename is greater than 100chars",
			"priority": "MUST",
			"who": "Mike",
			"time": "4",
			"status": "Not Started"
		}, {
			"id": "T-025",
			"name": "Fix admin so structure of categories displayed",
			"priority": "MUST",
			"who": "Mike",
			"time": "2.5",
			"status": "Complete"
		}, {
			"id": "T-027",
			"name": "Reorganise git repos in Assembla",
			"priority": "MUST",
			"who": "Joe",
			"time": "3",
			"status": "Not Started"
		}, {
			"id": "T-033",
			"name": "Tree not showing correctly in documents",
			"priority": "MUST",
			"who": "Natasha",
			"time": "1",
			"status": "In Progress"
		}, {
			"id": "T-052",
			"name": "Add Cacheing",
			"priority": "MUST",
			"who": "Mike",
			"time": "1.5",
			"status": "Complete"
		}, {
			"id": "T-055",
			"name": "Allow custom ordering of document categories",
			"priority": "MUST",
			"who": "Joe",
			"time": "0.5",
			"status": "Not Started"
		}, {
			"id": "T-056",
			"name": "Pressing enter on date button triggers cancel",
			"priority": "MUST",
			"who": "Joe",
			"time": "1",
			"status": "Not Started"
		}, {
			"id": "T-057",
			"name": "Ajax not working on IE when selecting org",
			"priority": "MUST",
			"who": "Natasha",
			"time": "6",
			"status": "Not Started"
		}, {
			"id": "T-060",
			"name": "Send Reminder Email as required",
			"priority": "SHOULD",
			"who": "Mike",
			"time": "3",
			"status": "Complete"
		}, {
			"id": "T-061",
			"name": "Attach Document to response in Forum",
			"priority": "SHOULD",
			"who": "Joe",
			"time": "4",
			"status": "Not Started"
		}, {
			"id": "T-062",
			"name": "Forum thread notifications",
			"priority": "SHOULD",
			"who": "Natasha",
			"time": "9",
			"status": "Complete"
		}, {
			"id": "T-063",
			"name": "Group email notification",
			"priority": "SHOULD",
			"who": "Mike",
			"time": "8",
			"status": "In Progress"
		}, {
			"id": "T-064",
			"name": "Admin can see Who is logged in ",
			"priority": "SHOULD",
			"who": "Joe",
			"time": "9",
			"status": "Not Started"
		}, {
			"id": "T-067",
			"name": "Extend Audit Trail",
			"priority": "SHOULD",
			"who": "Natasha",
			"time": "12",
			"status": "Complete"
		}, {
			"id": "T-068",
			"name": "Maintenance Links",
			"priority": "SHOULD",
			"who": "Mike",
			"time": "4",
			"status": "Complete"
		}, {
			"id": "T-094",
			"name": "Browse prices button",
			"priority": "SHOULD",
			"who": "Joe",
			"time": "6",
			"status": "Not Started"
		}, {
			"id": "T-095",
			"name": "Group email to be only available to the administrator",
			"priority": "SHOULD",
			"who": "Natasha",
			"time": "5",
			"status": "Complete"
		}, {
			"id": "T-096",
			"name": "Update cribsheet",
			"priority": "COULD",
			"who": "Mike",
			"time": "2",
			"status": "Not Started"
		}, {
			"id": "T-0103",
			"name": "Awarded missing from Estimated Tab",
			"priority": "COULD",
			"who": "Joe",
			"time": "7",
			"status": "Complete"
		}, {
			"id": "T-0105",
			"name": "New cribsheet",
			"priority": "COULD",
			"who": "Natasha",
			"time": "7",
			"status": "Not Started"
		}, {
			"id": "T-0111",
			"name": "Document not being added on forum response",
			"priority": "COULD",
			"who": "Mike",
			"time": "6",
			"status": "Not Started"
		}, {
			"id": "T-0114",
			"name": "Can't delete users once active",
			"priority": "WISH",
			"who": "Joe",
			"time": "3",
			"status": "Not Started"
		}, {
			"id": "T-0125",
			"name": "Add course organiser on notification",
			"priority": "WISH",
			"who": "Natasha",
			"time": "2.5",
			"status": "In Progress"
		}, {
			"id": "T-0126",
			"name": "Setup demonstration system for Demo",
			"priority": "MUST",
			"who": "Joe",
			"time": "3",
			"status": "Not Started"
		}, {
			"id": "T-0133",
			"name": "Fix forum pagination problem properly",
			"priority": "MUST",
			"who": "Natasha",
			"time": "3",
			"status": "Not Started"
		}, {
			"id": "T-0145",
			"name": "In Directory  tickbox to select all filtered users",
			"priority": "MUST",
			"who": "Joe",
			"time": "3",
			"status": "Complete"
		}, {
			"id": "T-0146",
			"name": "Merge user and user profile in admin",
			"priority": "MUST",
			"who": "Natasha",
			"time": "2",
			"status": "Not Started"
		}, {
			"id": "T-0147",
			"name": "Have multiple documents on an estimate",
			"priority": "MUST",
			"who": "Mike",
			"time": "2",
			"status": "Not Started"
		}];
	}
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* jshint esnext: true */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Dict = (function () {
	  function Dict() {
	    _classCallCheck(this, Dict);

	    this.state = { keys: [] };
	  }

	  _createClass(Dict, [{
	    key: 'indexOf',
	    value: function indexOf(key) {
	      var keys = this.state.keys;

	      var idx = keys.indexOf(key);
	      if (idx === -1) {
	        idx = keys.length;
	        keys.push(key);
	      }
	      return idx;
	    }
	  }, {
	    key: 'keyAt',
	    value: function keyAt(idx) {
	      var keys = this.state.keys;

	      return keys[idx];
	    }
	  }, {
	    key: 'listKeys',
	    value: function listKeys() {
	      return this.state.keys;
	    }
	  }]);

	  return Dict;
	})();

	var FN = (function () {
	  function FN() {
	    _classCallCheck(this, FN);
	  }

	  _createClass(FN, null, [{
	    key: 'identity',
	    value: function identity(d) {
	      return d;
	    }
	  }, {
	    key: 'nestLines',
	    value: function nestLines(lines, keys, rollup) {
	      if (typeof rollup !== 'function') {
	        rollup = FN.identity;
	      }
	      if (!keys.length) return rollup(lines);
	      var keyValues = [];
	      var key = keys.shift();
	      var dict = new Dict();
	      lines.forEach(function (line) {
	        if (typeof key.label !== 'function') {
	          key.label = FN.identity;
	        }
	        var keyStr = key.label(line);
	        var idx = dict.indexOf(keyStr);
	        if (keyValues[idx] === undefined) {
	          keyValues[idx] = { key: keyStr, data: [] };
	        }
	        keyValues[idx].data.push(line);
	      });

	      keyValues.forEach(function (kv) {
	        kv.values = FN.nestLines([].concat(kv.data), [].concat(keys), rollup);
	        delete kv.data;
	      });

	      if (typeof key.sort === 'function') {
	        keyValues.sort(function (a, b) {
	          return key.sort(a.key, b.key);
	        });
	      }
	      if (typeof key.sortValues === 'function') {
	        keyValues.sort(function (a, b) {
	          return key.sortValues(a.values, b.values);
	        });
	      }
	      return keyValues;
	    }
	  }]);

	  return FN;
	})();

	var Nester = (function () {
	  function Nester() {
	    _classCallCheck(this, Nester);

	    this.state = {
	      nest: {},
	      keys: [],
	      sortValues: undefined,
	      rollup: undefined
	    };
	  }

	  _createClass(Nester, [{
	    key: 'key',
	    value: function key(d) {
	      var keys = this.state.keys;

	      keys.push(d);
	      return this;
	    }
	  }, {
	    key: 'rollup',
	    value: function rollup(f) {
	      this.state.rollup = f;
	      return this;
	    }
	  }, {
	    key: 'nest',
	    value: function nest(list, depth) {
	      var _state = this.state;
	      var keys = _state.keys;
	      var rollup = _state.rollup;

	      return FN.nestLines(list, keys, rollup);
	    }
	  }]);

	  return Nester;
	})();

	exports['default'] = Nester;
	module.exports = exports['default'];

/***/ }
/******/ ]);