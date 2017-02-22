import Game from './game';

class PuzzleView {
  constructor() {
    this.game = null;
    this.resize = this.resize.bind(this);
    this.newGame = this.newGame.bind(this);
    this.hint = this.hint.bind(this);
    this.gameFinished = this.gameFinished.bind(this);
    let $newGame = $("#random-circle");
    $newGame.on('click', () => {
      this.newGame();
    });
    $(document).on('click', () => this.gameFinished());
    this.hint();
    window.addEventListener('resize', this.resize, false);
  }

  resize() {
    if (this.stage) {
      this.stage.canvas.width = window.innerWidth;
      this.stage.canvas.height = window.innerHeight;
      this.stage.update();
    }
  }

  newGame () {
    this.stage = new createjs.Stage("canvas");
    this.resize();
    this.container = new createjs.Container();
    this.stage.addChild(this.container);
    this.stage.enableMouseOver(10);
    this.stage.mouseMoveOutside = true;
    this.game = new Game(this.stage, this.container);
  }

  hint () {
    let that = this;
    let content = '<div class="modal-text">Match DNAs with their strands</div></br>';
    let bases = '<div class="modal-text bigger">Adenine <i class="fa fa-circle adenine" aria-hidden="true"></i> = <i class="fa fa-circle thymine" aria-hidden="true"></i> Thymine</div></br><div class="modal-text bigger">Guanine <i class="fa fa-circle guanine" aria-hidden="true"></i> = <i class="fa fa-circle cytosine" aria-hidden="true"></i> Cytosine</div></br>'
    let start = '<div class="modal-text start">Start</div>';
    this.modal = (() => {
      let method = {};
      let $overlay = $('<div id="overlay"></div>');
      let $modal = $('<div id="modal"></div>');
      let $content = $('<div id="content" class="flex"></div>');
      let $gif = $('<img id="background-gif" src="http://res.cloudinary.com/datsbxfvs/image/upload/v1487015676/dnapuzzle_gif_zapdmc.gif"></img>');

      $modal.hide();
      $overlay.hide();
      $modal.append($content);

    method.center = () => {
      let top, left;
      let height = $modal.outerHeight() === 0 ? 392 : $modal.outerHeight();
      let width = $modal.outerWidth() === 0 ? 345 : $modal.outerWidth();
      top = Math.max($(window).height() - height, 0) / 2;
      left = Math.max($(window).width() - width, 0) / 2;
      $modal.css({
        top:top + $(window).scrollTop(),
        left:left + $(window).scrollLeft()
      });
    };
    method.open = (settings) => {
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
    method.close = () => {
      $modal.hide();
      $overlay.hide();
      $content.empty();
      $(window).unbind('resize.modal');
    };
    $overlay.click((e) => {
      e.preventDefault();
      method.close();
    });

    $modal.on('click', '.start', (e) => {
      e.preventDefault();
      method.close();
      $overlay.hide();
      that.newGame();
    });
    $(document).ready(() => {
      this.modal.open({content: content + start});
      $overlay.append($gif);
      $('body').append($overlay, $modal);
    });
    let $base;
    $modal.on('mouseover', '.adenine', () => {
      $base = $content.children('#base');
      $base.text('Adenine');
    });

    $modal.on('mouseover', '.guanine', () => {
      $base = $content.children('#base');
      $base.text('Guanine');
    });
    $modal.on('mouseover', '.cytosine', () => {
      $base = $content.children('#base');
      $base.text('Cytosine');
    });
    $modal.on('mouseover', '.thymine', () => {
      $base = $content.children('#base');
      $base.text('Thymine');
    });

    return method;
    })();

    let $hint = $("#question-circle");
    $hint.on('click', () => {
      let $overlay = $('#overlay');
      $overlay.empty();
      this.modal.open({content: content + bases});
    });
  }

  gameFinished () {
    let that = this;
    if (this.game && this.game.gameWon) {
      let content = `<div class="modal-text">You won! Total DNA's matched: ${this.game.count}</div>`;
      let $overlay = $('#overlay');
      $overlay.empty();
      this.modal.open({content: content});
      $overlay.click((e) => {
        e.preventDefault();
        that.modal.close();
        this.game.gameWon = false;
      });
    }
  }
}

export default PuzzleView;
