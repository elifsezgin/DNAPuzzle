import Game from './game';

class PuzzleView {
  constructor() {
    this.game = null;
    this.newGame = this.newGame.bind(this);
    this.hint = this.hint.bind(this);
    this.gameFinished = this.gameFinished.bind(this);
    let $newGame = $("#random-circle");
    $newGame.on('click', () => {
      this.newGame();
    });
    $(document).on('click', () => this.gameFinished());
    this.hint();
  }

  newGame () {
    this.game = new Game();
  }

  hint () {
    let that = this;
    let content = '<div class="modal-text">Match DNAs with their strands</div></br><div class="modal-text bigger"><i class="fa fa-circle adenine" aria-hidden="true"></i> = <i class="fa fa-circle thymine" aria-hidden="true"></i></div></br><div class="modal-text bigger"><i class="fa fa-circle guanine" aria-hidden="true"></i> = <i class="fa fa-circle cytosine" aria-hidden="true"></i></div></br><div id="base" class="modal-text"><i class="fa fa-circle empty" aria-hidden="true"></div></br>';
    let start = '<div class="modal-text start">Start</div>';
    this.modal = (() => {
      let method = {};
      let $overlay = $('<div id="overlay"></div>');
      let $modal = $('<div id="modal"></div>');
      let $content = $('<div id="content" class="flex"></div>');

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
      that.newGame();
    });
    $(document).ready(() => {
      this.modal.open({content: content + start});
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
      this.modal.open({content: content});
    });
  }

  gameFinished () {
    let that = this;
    if (this.game && this.game.gameWon) {
      let content = `<div class="modal-text">You won! Total DNA's matched: ${this.game.count}</div>`;
      this.modal.open({content: content});
      let $overlay = $('#overlay');
      $overlay.click((e) => {
        e.preventDefault();
        that.modal.close();
        this.game.gameWon = false;
      });
    }
  }
}

export default PuzzleView;
