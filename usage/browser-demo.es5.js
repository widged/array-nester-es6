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
				var nested = nester.entries(dataMap);
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
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext: true */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Nester = __webpack_require__(3);

	/*
	  FluentNester provides a fluent interface to Nester.
	  The interface is similar to d3.collection.nest.
	*/

	var FluentNester = (function () {
	  function FluentNester() {
	    _classCallCheck(this, FluentNester);

	    this.state = {
	      nest: {},
	      keys: [],
	      sortValues: undefined,
	      rollup: undefined
	    };
	  }

	  _createClass(FluentNester, [{
	    key: 'key',
	    value: function key(d) {
	      if (typeof d === 'function') {
	        d = { label: d };
	      }
	      this.state.keys = this.state.keys.slice().concat([d]);
	      return this;
	    }
	  }, {
	    key: 'rollup',
	    value: function rollup(_) {
	      this.state.rollup = _;
	      return this;
	    }
	  }, {
	    key: 'sortKeys',
	    value: function sortKeys(fn) {
	      this.state.keys[length - 1].sort = order;
	      return this;
	    }
	  }, {
	    key: 'sortValues',
	    value: function sortValues(_) {
	      this.state.sortValues = _;
	      return this;
	    }
	  }, {
	    key: 'entries',
	    value: function entries(list, depth) {
	      var _state = this.state;
	      var keys = _state.keys;
	      var rollup = _state.rollup;
	      var sortValues = _state.sortValues;

	      var wrapup = function wrapup(arr) {
	        if (typeof rollup === 'function') {
	          arr = rollup(arr);
	        } else if (typeof sortValues === 'function') {
	          arr.sort(sortValues);
	        }
	        return arr;
	      };
	      var packer = function packer(_ref) {
	        var k = _ref.k;
	        var v = _ref.v;
	        return { key: k, values: v };
	      };
	      var nester = new Nester(keys, wrapup, packer);
	      return nester.run(list, depth);
	    }
	  }]);

	  return FluentNester;
	})();

	exports['default'] = FluentNester;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext: true */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Grouper = __webpack_require__(4);

	// the `pack` function can be used to reformat the {k,v} value for compatibility with other libraries. For instance, d3 uses {key,values}.

	var Nester = (function () {
	  function Nester(keys, rollup, pack) {
	    _classCallCheck(this, Nester);

	    var identity = function identity(d) {
	      return d;
	    };
	    if (typeof rollup !== 'function') {
	      rollup = identity;
	    }
	    if (typeof pack !== 'function') {
	      pack = identity;
	    }
	    this.state = { keys: keys, rollup: rollup, pack: pack };
	  }

	  _createClass(Nester, [{
	    key: 'run',
	    value: function run(lines, maxDepth) {
	      var _state = this.state;
	      var keys = _state.keys;
	      var rollup = _state.rollup;
	      var pack = _state.pack;

	      var keyQty = keys ? keys.length : 0;
	      if (!maxDepth || maxDepth >= keyQty) {
	        maxDepth = keyQty;
	      }
	      var recurse = function recurse(arr, depth) {
	        if (depth >= maxDepth) {
	          return rollup(arr);
	        }
	        var _keys$depth = keys[depth];
	        var label = _keys$depth.label;
	        var sort = _keys$depth.sort;

	        var group = new Grouper(label, sort);
	        var gps = group.run(arr);
	        for (var i = 0, ni = gps.length; i < ni; i++) {
	          var _gps$i = gps[i];
	          var k = _gps$i.k;
	          var v = _gps$i.v;

	          gps[i] = pack({ k: k, v: recurse(v, depth + 1) });
	        }
	        return gps;
	      };
	      return recurse(lines, 0);
	    }
	  }]);

	  return Nester;
	})();

	exports['default'] = Nester;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	/* jshint esnext: true */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Grouper = (function () {
	  function Grouper(kFn, sort) {
	    _classCallCheck(this, Grouper);

	    this.state = { kFn: kFn, sort: sort };
	  }

	  _createClass(Grouper, [{
	    key: 'run',
	    value: function run(lines) {
	      var _state = this.state;
	      var kFn = _state.kFn;
	      var sort = _state.sort;

	      var ks = [],
	          vs = [];
	      // lightweight dictionary implementation with keys and values on the same index.
	      // Benchmarking indicates that it is slightly more efficient than using
	      // var gps = {}; if(!gps.hasOwnProperty(k))
	      for (var l = 0, nl = lines.length; l < nl; l++) {
	        var line = lines[l];
	        var k = typeof kFn === 'function' ? kFn(line) : kFn;
	        var idx = ks.indexOf(k);if (idx === -1) {
	          idx = ks.length;ks.push(k);
	        }
	        if (vs[idx] === undefined) {
	          vs[idx] = [];
	        }
	        vs[idx].push(line);
	      }
	      var sortK = typeof sort === 'function' ? function (a, b) {
	        return sort(a.k, b.k);
	      } : undefined;
	      return ks.map(function (k, i) {
	        return { k: k, v: vs[i] };
	      }).sort(sortK);
	    }
	  }]);

	  return Grouper;
	})();

	exports['default'] = Grouper;
	module.exports = exports['default'];

/***/ }
/******/ ]);