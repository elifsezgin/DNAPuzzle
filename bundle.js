/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _puzzle_view = __webpack_require__(1);

var _puzzle_view2 = _interopRequireDefault(_puzzle_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  var root = $('.dna-puzzle');
  var view = new _puzzle_view2.default(root);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _game = __webpack_require__(4);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PuzzleView = function PuzzleView() {
  _classCallCheck(this, PuzzleView);

  this.game = new _game2.default();
};

exports.default = PuzzleView;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BASE_PAIRS = {
  'A': 'T',
  'T': 'A',
  'G': 'C',
  'C': 'G'
};

var BASE_COLORS = {
  'A': '#ff4162',
  'T': '#62ff41',
  'G': '#4162ff',
  'C': '#ff7f41'
};

var Base = function () {
  function Base(type) {
    _classCallCheck(this, Base);

    this.type = type;
    this.color = BASE_COLORS[this.type];

    this.isPair = this.isPair.bind(this);
  }

  _createClass(Base, [{
    key: 'drawBase',
    value: function drawBase(dna, x, y) {
      dna.beginStroke(this.color).beginFill(this.color).drawCircle(x, y, 5);
    }
  }, {
    key: 'isPair',
    value: function isPair(otherType) {
      BASE_PAIRS[this.type] === otherType;
    }
  }]);

  return Base;
}();

exports.default = Base;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BASE_PAIRS = {
  'A': 'T',
  'T': 'A',
  'G': 'C',
  'C': 'G'
};

var DNA = function () {
  function DNA(sequence, stage, container) {
    _classCallCheck(this, DNA);

    this.sequence = sequence;
    this.fstrand = this.sequence.map(function (base) {
      return new _base2.default(base);
    });
    this.rstrand = this.sequence.map(function (base) {
      return new _base2.default(BASE_PAIRS[base]);
    });
    this.stage = stage;
    this.container = container;
    this.update = false;

    this.drawDNA = this.drawDNA.bind(this);
    this.randomCut = this.randomCut.bind(this);
    this.drawDNA();
  }

  _createClass(DNA, [{
    key: 'randomCut',
    value: function randomCut() {
      var idx1 = Math.floor(Math.random() * (this.sequence.length - 2));
      var idx2 = Math.floor(Math.random() * (this.sequence.length - 2));
      return [Math.min(idx1, idx2), Math.max(idx1, idx2)];
    }
  }, {
    key: 'drawDNA',
    value: function drawDNA() {
      var dna = new createjs.Shape();
      var strand = new createjs.Shape();
      var hitDna = new createjs.Shape();
      var hitStrand = new createjs.Shape();

      var xPos = 100 + Math.floor(Math.random() * 1000);
      var xPosStrand = 100 + Math.floor(Math.random() * 1000);

      var _randomCut = this.randomCut(),
          _randomCut2 = _slicedToArray(_randomCut, 2),
          stIdx = _randomCut2[0],
          enIdx = _randomCut2[1];
      // dna.graphics.beginStroke("#b2b2ff").mt(xPos, 50).lt(xPos, 50 + (this.sequence.length * 20));
      // dna.graphics.beginStroke("#b2b2ff").mt(xPos + 20, 50).lt(xPos + 20, 50 + ((stIdx*20)));
      // dna.graphics.beginStroke("#b2b2ff").mt(xPos + 20, 70 + ((enIdx*20))).lt(xPos + 20, 50 + (this.sequence.length * 20));

      // strand.graphics.beginStroke("#b2b2ff").mt(xPosStrand, 50+(stIdx*20)).lt(xPosStrand, 50 + ((enIdx) * 20));

      var f = 1;
      var outerBase = true;

      for (var i = 0; i < this.sequence.length; i++) {
        outerBase = i % 8 === 0 ? true : false;
        f *= i % 4 === 0 ? -1 : 1;
        var a = i % 4 * f < 0 ? 4 + i % 4 * f : i % 4 * f;
        a = outerBase ? 40 : a * 10;
        if (i >= stIdx && i <= enIdx) {
          dna.graphics.beginStroke("#b2b2ff").mt(xPos - a - 10, 60 + 20 * i).lt(xPos - a - 10 + f * 10, 60 + 20 * i);
          this.fstrand[i].drawBase(dna.graphics, xPos - a - 10, 60 + 20 * i);
          strand.graphics.beginStroke("#b2b2ff").mt(xPosStrand + a, 60 + 20 * i).lt(xPosStrand + a + f * 10, 60 + 20 * i);
          this.rstrand[i].drawBase(strand.graphics, xPosStrand + a, 60 + 20 * i);
        } else {
          dna.graphics.beginStroke("#b2b2ff").mt(xPos - a - 10, 60 + 20 * i).lt(xPos - a - 10 + f * 10, 60 + 20 * (i + 1));
          dna.graphics.beginStroke("#b2b2ff").mt(xPos + a + 10, 60 + 20 * i).lt(xPos + a + 10 + f * 10, 60 + 20 * (i + 1));
          dna.graphics.beginStroke("#b2b2ff").mt(xPos - a - 10, 60 + 20 * i).lt(xPos + a + 10, 60 + 20 * i);
          this.fstrand[i].drawBase(dna.graphics, xPos - a - 10, 60 + 20 * i);
          this.rstrand[i].drawBase(dna.graphics, xPos + a + 10, 60 + 20 * i);
        }
      }
      console.log('done');

      hitDna.graphics.beginFill("#000").drawRect(xPos - 30, 50, 60, 20 * this.sequence.length - 1);
      dna.hitArea = hitDna;
      this.container.addChild(dna);

      hitStrand.graphics.beginFill("#000").drawRect(xPosStrand, 50 + stIdx * 20, 60, 20 * (enIdx - stIdx + 1));
      strand.hitArea = hitStrand;
      this.container.addChild(strand);

      var that = this;
      dna.addEventListener("mousedown", function (evt) {
        that.localX = evt.localX;
        that.localY = evt.localY;
      });
      strand.addEventListener("mousedown", function (evt) {
        that.localX = evt.localX;
        that.localY = evt.localY;
      });

      dna.on("pressmove", function (evt) {
        dna.x = evt.stageX - that.localX;
        dna.y = evt.stageY - that.localY;
        that.stage.update();
      });
      strand.on("pressmove", function (evt) {
        strand.x = evt.stageX - that.localX;
        strand.y = evt.stageY - that.localY;
        that.stage.update();
      });
      this.stage.update();
    }
  }]);

  return DNA;
}();

exports.default = DNA;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dna = __webpack_require__(3);

var _dna2 = _interopRequireDefault(_dna);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BASES = ['A', 'T', 'C', 'G'];

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.stage = new createjs.Stage("canvas");
    this.container = new createjs.Container();
    this.stage.addChild(this.container);
    this.stage.enableMouseOver(10);
    this.stage.mouseMoveOutside = true;
    this.createDNAs = this.createDNAs.bind(this);
    this.createDNAs();
  }

  _createClass(Game, [{
    key: 'createDNAs',
    value: function createDNAs() {
      var count = 3 + Math.floor(Math.random() * 4);
      var that = this;
      for (var k = 0; k < count; k++) {
        var length = 10 + Math.floor(Math.random() * 10);
        var sequence = [];
        for (var i = 0; i < length; i++) {
          sequence.push(BASES[Math.floor(Math.random() * 4)]);
        }
        new _dna2.default(sequence, that.stage, that.container);
      }
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map