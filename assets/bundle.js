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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game = __webpack_require__(3);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PuzzleView = function () {
  function PuzzleView() {
    var _this = this;

    _classCallCheck(this, PuzzleView);

    this.game = null;
    this.resize = this.resize.bind(this);
    this.newGame = this.newGame.bind(this);
    this.hint = this.hint.bind(this);
    this.gameFinished = this.gameFinished.bind(this);
    var $newGame = $("#random-circle");
    $newGame.on('click', function () {
      _this.newGame();
    });
    $(document).on('click', function () {
      return _this.gameFinished();
    });
    this.hint();
    window.addEventListener('resize', this.resize, false);
  }

  _createClass(PuzzleView, [{
    key: 'resize',
    value: function resize() {
      if (this.stage) {
        this.stage.canvas.width = window.innerWidth;
        this.stage.canvas.height = window.innerHeight;
        this.stage.update();
      }
    }
  }, {
    key: 'newGame',
    value: function newGame() {
      this.stage = new createjs.Stage("canvas");
      this.resize();
      this.container = new createjs.Container();
      this.stage.addChild(this.container);
      this.stage.enableMouseOver(10);
      this.stage.mouseMoveOutside = true;
      this.game = new _game2.default(this.stage, this.container);
    }
  }, {
    key: 'hint',
    value: function hint() {
      var _this2 = this;

      var that = this;
      var content = '<div class="modal-text">Match DNAs with their strands</div></br>';
      var bases = '<div class="modal-text bigger">Adenine <i class="fa fa-circle adenine" aria-hidden="true"></i> = <i class="fa fa-circle thymine" aria-hidden="true"></i> Thymine</div></br><div class="modal-text bigger">Guanine <i class="fa fa-circle guanine" aria-hidden="true"></i> = <i class="fa fa-circle cytosine" aria-hidden="true"></i> Cytosine</div></br>';
      var start = '<div class="modal-text start">Start</div>';
      this.modal = function () {
        var method = {};
        var $overlay = $('<div id="overlay"></div>');
        var $modal = $('<div id="modal"></div>');
        var $content = $('<div id="content" class="flex"></div>');
        var $gif = $('<img id="background-gif" src="http://res.cloudinary.com/datsbxfvs/image/upload/v1487015676/dnapuzzle_gif_zapdmc.gif"></img>');

        $modal.hide();
        $overlay.hide();
        $modal.append($content);

        method.center = function () {
          var top = void 0,
              left = void 0;
          var height = $modal.outerHeight() === 0 ? 392 : $modal.outerHeight();
          var width = $modal.outerWidth() === 0 ? 345 : $modal.outerWidth();
          top = Math.max($(window).height() - height, 0) / 2;
          left = Math.max($(window).width() - width, 0) / 2;
          $modal.css({
            top: top + $(window).scrollTop(),
            left: left + $(window).scrollLeft()
          });
        };
        method.open = function (settings) {
          $content.empty().append(settings.content);

          $modal.css({
            width: settings.width || 'auto',
            height: settings.height || 'auto'
          });
          method.center();
          $(window).bind('resize.modal', method.center);

          $modal.show();
          $overlay.show();
        };
        method.close = function () {
          $modal.hide();
          $overlay.hide();
          $content.empty();
          $(window).unbind('resize.modal');
        };
        $overlay.click(function (e) {
          e.preventDefault();
          method.close();
        });

        $modal.on('click', '.start', function (e) {
          e.preventDefault();
          method.close();
          $overlay.hide();
          that.newGame();
        });
        $(document).ready(function () {
          _this2.modal.open({ content: content + start });
          $overlay.append($gif);
          $('body').append($overlay, $modal);
        });
        var $base = void 0;
        $modal.on('mouseover', '.adenine', function () {
          $base = $content.children('#base');
          $base.text('Adenine');
        });

        $modal.on('mouseover', '.guanine', function () {
          $base = $content.children('#base');
          $base.text('Guanine');
        });
        $modal.on('mouseover', '.cytosine', function () {
          $base = $content.children('#base');
          $base.text('Cytosine');
        });
        $modal.on('mouseover', '.thymine', function () {
          $base = $content.children('#base');
          $base.text('Thymine');
        });

        return method;
      }();

      var $hint = $("#question-circle");
      $hint.on('click', function () {
        var $overlay = $('#overlay');
        $overlay.empty();
        _this2.modal.open({ content: content + bases });
      });
    }
  }, {
    key: 'gameFinished',
    value: function gameFinished() {
      var _this3 = this;

      var that = this;
      if (this.game && this.game.gameWon) {
        var content = '<div class="modal-text">You won! Total DNA\'s matched: ' + this.game.count + '</div>';
        var $overlay = $('#overlay');
        $overlay.empty();
        this.modal.open({ content: content });
        $overlay.click(function (e) {
          e.preventDefault();
          that.modal.close();
          _this3.game.gameWon = false;
        });
      }
    }
  }]);

  return PuzzleView;
}();

exports.default = PuzzleView;

/***/ }),
/* 1 */
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
  }

  _createClass(Base, [{
    key: 'drawBase',
    value: function drawBase(graphics, x, y) {
      graphics.beginStroke(this.color).beginFill(this.color).drawCircle(x, y, 5);
    }
  }]);

  return Base;
}();

exports.default = Base;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(1);

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
  function DNA(sequence, stage, container, xPos, xPosStrand) {
    _classCallCheck(this, DNA);

    this.sequence = sequence;
    this.stage = stage;
    this.container = container;
    this.xPos = xPos;
    this.xPosStrand = xPosStrand;
    this.fstrand = this.sequence.map(function (base) {
      return new _base2.default(base);
    });
    this.rstrand = this.sequence.map(function (base) {
      return new _base2.default(BASE_PAIRS[base]);
    });
    this.update = false;
    this.dnaCanvas = null;
    this.strandCanvas = null;
    this.gapX = 0;
    this.gapY = 0;
    this.strandX = 0;
    this.strandY = 0;
    this.dnaX = 0;
    this.dnaY = 0;
    this.compStrandInput = [];
    this.drawAllLinesInput = [];

    this.drawDNAsAndStrands = this.drawDNAsAndStrands.bind(this);
    this.randomCut = this.randomCut.bind(this);
    this.drawDNAsAndStrands();
  }

  _createClass(DNA, [{
    key: 'randomCut',
    value: function randomCut() {
      var idx1 = 0;
      var idx2 = 0;
      while (idx1 === idx2) {
        idx1 = Math.floor(Math.random() * (this.sequence.length - 2)) + 2;
        idx2 = Math.floor(Math.random() * (this.sequence.length - 2)) + 2;
      }
      return [Math.min(idx1, idx2), Math.max(idx1, idx2)];
    }
  }, {
    key: 'drawDNAsAndStrands',
    value: function drawDNAsAndStrands() {
      var dna = new createjs.Shape();
      var strand = new createjs.Shape();
      var hitDna = new createjs.Shape();
      var hitStrand = new createjs.Shape();

      // let xPos = 100 + Math.floor(Math.random() * 50) * 10
      // let xPosStrand = 500 + Math.floor(Math.random() * 50) * 10
      var xPos = this.xPos;
      var xPosStrand = this.xPosStrand;

      var _randomCut = this.randomCut(),
          _randomCut2 = _slicedToArray(_randomCut, 2),
          stIdx = _randomCut2[0],
          endIdx = _randomCut2[1];

      var f = 1;
      var outerBase = true;
      var gapX = 0;
      var gapY = 0;
      var strandX = 0;
      var strandY = 0;
      var dnaX = 0;
      var dnaY = 0;
      for (var i = 0; i < this.sequence.length; i++) {
        outerBase = i % 8 === 0 ? true : false;
        f *= i % 4 === 0 ? -1 : 1;
        var a = i % 4 * f < 0 ? 4 + i % 4 * f : i % 4 * f;
        a = outerBase ? 40 : a * 10;
        if (i > stIdx && i <= endIdx) {
          dna.graphics.beginStroke("#b2b2ff").mt(xPos - a - 10 - f * 10, 60 + 20 * (i + 1)).lt(xPos - a - 10, 60 + 20 * i);
          // this.basesF.push(this.fstrand[i]);
          this.fstrand[i].drawBase(dna.graphics, xPos - a - 10, 60 + 20 * i);
          strand.graphics.beginStroke("#b2b2ff").mt(xPosStrand + a, 60 + 20 * i).lt(xPosStrand + a + f * 10, 60 + 20 * (i + 1));
          this.compStrandInput.push([this.rstrand[i], dna.graphics, xPos + a + 10, 60 + 20 * i]);

          this.drawAllLinesInput.push([dna.graphics, xPos - a - 10 - f * 10, 60 + 20 * (i + 1), xPos - a - 10, 60 + 20 * i]);
          this.drawAllLinesInput.push([dna.graphics, xPos + a + 10, 60 + 20 * i, xPos + a + 10 + f * 10, 60 + 20 * (i + 1)]);
          this.drawAllLinesInput.push([dna.graphics, xPos - a - 10, 60 + 20 * i, xPos + a + 10, 60 + 20 * i]);

          this.rstrand[i].drawBase(strand.graphics, xPosStrand + a, 60 + 20 * i);
          gapX += xPos + a + 10;
          gapY += 60 + 20 * i;
          strandX += xPosStrand + a;
          strandY += 60 + 20 * i;
          dnaX += (xPos - a - 10 + (xPos + a + 10)) / 2;
          dnaY += 60 + 20 * i;
        } else {
          dna.graphics.beginStroke("#b2b2ff").mt(xPos - a - 10 - f * 10, 60 + 20 * (i + 1)).lt(xPos - a - 10, 60 + 20 * i);
          dna.graphics.beginStroke("#b2b2ff").mt(xPos + a + 10, 60 + 20 * i).lt(xPos + a + 10 + f * 10, 60 + 20 * (i + 1));
          dna.graphics.beginStroke("#b2b2ff").mt(xPos - a - 10, 60 + 20 * i).lt(xPos + a + 10, 60 + 20 * i);
          this.fstrand[i].drawBase(dna.graphics, xPos - a - 10, 60 + 20 * i);
          this.rstrand[i].drawBase(dna.graphics, xPos + a + 10, 60 + 20 * i);
          dnaX += (xPos - a - 10 + (xPos - a - 10)) / 2;
          dnaY += 60 + 20 * i;
        }
      }
      this.dnaX = dnaX / this.sequence.length;
      this.dnaY = dnaY / this.sequence.length;
      this.gapX = gapX / (endIdx - stIdx);
      this.gapY = gapY / (endIdx - stIdx);
      this.strandX = strandX / (endIdx - stIdx);
      this.strandY = strandY / (endIdx - stIdx);
      hitDna.graphics.beginFill("#000").drawRect(xPos - 30, 50, 60, 20 * this.sequence.length - 1);
      dna.hitArea = hitDna;
      this.container.addChild(dna);
      this.dnaCanvas = dna;

      hitStrand.graphics.beginFill("#000").drawRect(xPosStrand, 50 + stIdx * 20, 60, 20 * (endIdx - stIdx + 1));
      strand.hitArea = hitStrand;
      this.container.addChild(strand);
      this.strandCanvas = strand;
      this.stage.update();
    }
  }, {
    key: 'isPair',
    value: function isPair(strand) {
      return this.strandCanvas === strand;
    }
  }, {
    key: 'pair',
    value: function pair(dna, strand) {
      for (var i = 0; i < this.compStrandInput.length; i++) {
        var _compStrandInput$i = _slicedToArray(this.compStrandInput[i], 4),
            base = _compStrandInput$i[0],
            graphics = _compStrandInput$i[1],
            x = _compStrandInput$i[2],
            y = _compStrandInput$i[3];

        base.drawBase(graphics, x, y);
      }
      for (var i = 0; i < this.drawAllLinesInput.length; i++) {
        var _drawAllLinesInput$i = _slicedToArray(this.drawAllLinesInput[i], 5),
            graphics = _drawAllLinesInput$i[0],
            x1 = _drawAllLinesInput$i[1],
            y1 = _drawAllLinesInput$i[2],
            x2 = _drawAllLinesInput$i[3],
            y2 = _drawAllLinesInput$i[4];

        graphics.beginStroke("#b2b2ff").mt(x1, y1).lt(x2, y2);
      }
      this.stage.update();
    }
  }]);

  return DNA;
}();

exports.default = DNA;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dna = __webpack_require__(2);

var _dna2 = _interopRequireDefault(_dna);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BASES = ['A', 'T', 'C', 'G'];

var Game = function () {
  function Game(stage, container) {
    _classCallCheck(this, Game);

    this.createDNAs = this.createDNAs.bind(this);
    this.pairedCount = 0;
    this.gameWon = false;
    this.stage = stage;
    this.container = container;
    this.createDNAs();
  }

  _createClass(Game, [{
    key: 'createDNAs',
    value: function createDNAs() {
      var _this = this;

      this.count = 3 + Math.floor(Math.random() * 3);

      var that = this;

      var _loop = function _loop(k) {
        var xPos = window.innerWidth / 10 + 120 * k;
        var xPosStrand = window.innerWidth * 3 / 4 + Math.floor(Math.random() * _this.count * 40);
        var length = 10 + Math.floor(Math.random() * 10);
        var sequence = [];
        for (var i = 0; i < length; i++) {
          sequence.push(BASES[Math.floor(Math.random() * 4)]);
        }
        var dna = new _dna2.default(sequence, that.stage, that.container, xPos, xPosStrand);
        var gapX = dna.gapX;
        var gapY = dna.gapY;
        var dnaX = dna.dnaX;
        var dnaY = dna.dnaY;
        var strandX = dna.strandX;
        var strandY = dna.strandY;

        dna.dnaCanvas.addEventListener("mousedown", function (evt) {
          dna.dnaCanvas.localX = evt.localX;
          dna.dnaCanvas.localY = evt.localY;
        });
        dna.strandCanvas.addEventListener("mousedown", function (evt) {
          dna.strandCanvas.localX = evt.localX;
          dna.strandCanvas.localY = evt.localY;
        });
        dna.strandCanvas.addEventListener("pressup", function (evt) {
          dna.strandCanvas.localX = evt.localX;
          dna.strandCanvas.localY = evt.localY;
          dna.strandX = strandX + dna.strandCanvas.x;
          dna.strandY = strandY + dna.strandCanvas.y;
          var distance = (dna.strandX - dna.gapX) * (dna.strandX - dna.gapX) + (dna.strandY - dna.gapY) * (dna.strandY - dna.gapY);
          if (distance < 100) {
            dna.pair(dna.dnaCanvas, dna.strandCanvas);
            that.pairedCount += 1;
            that.container.removeChild(dna.strandCanvas);
            dna.strandCanvas.uncache();
            _this.stage.update();
            if (that.pairedCount === that.count) {
              that.gameWon = true;
            }
          }
        });
        dna.dnaCanvas.on("pressmove", function (evt) {
          dna.dnaCanvas.x = evt.stageX - dna.dnaCanvas.localX;
          dna.dnaCanvas.y = evt.stageY - dna.dnaCanvas.localY;
          dna.gapX = gapX + dna.dnaCanvas.x;
          dna.gapY = gapY + dna.dnaCanvas.y;
          dna.dnaX = dnaX + dna.dnaCanvas.x;
          dna.dnaY = dnaY + dna.dnaCanvas.y;
          that.stage.update();
        });
        dna.strandCanvas.on("pressmove", function (evt) {
          dna.strandCanvas.x = evt.stageX - dna.strandCanvas.localX;
          dna.strandCanvas.y = evt.stageY - dna.strandCanvas.localY;
          that.stage.update();
        });
        that.stage.update();
      };

      for (var k = 0; k < this.count; k++) {
        _loop(k);
      }
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _puzzle_view = __webpack_require__(0);

var _puzzle_view2 = _interopRequireDefault(_puzzle_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  var root = $('.dna-puzzle');
  var view = new _puzzle_view2.default(root);
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map