import DNA from './dna';
const BASES = ['A', 'T', 'C', 'G'];

class Game {
  constructor() {
    this.createDNAs = this.createDNAs.bind(this);
    this.pairedCount = 0;
    this.gameWon = false;
    this.resize = this.resize.bind(this);
    this.stage = new createjs.Stage("canvas");
    this.resize();
    this.container = new createjs.Container();
    this.stage.addChild(this.container);
    this.stage.enableMouseOver(10);
    this.stage.mouseMoveOutside = true;
    window.addEventListener('resize', this.resize, false);
    this.createDNAs();
  }

  resize() {
    this.stage.canvas.width = window.innerWidth;
    this.stage.canvas.height = window.innerHeight;
    this.stage.update();
  }

  createDNAs() {
    this.count = 3 + Math.floor(Math.random() * 3);

    let that = this;
    for (let k = 0; k < this.count; k++) {
      let xPos = window.innerWidth/10 + 120 * k;
      let xPosStrand = window.innerWidth*3/4 + Math.floor(Math.random() * this.count * 40);
      let length = 10 + Math.floor(Math.random() * 10);
      let sequence = [];
      for (let i = 0; i < length; i++) {
        sequence.push(BASES[Math.floor(Math.random() * 4)]);
      }
      let dna = new DNA(sequence, that.stage, that.container, xPos, xPosStrand);
      let gapX = dna.gapX;
      let gapY = dna.gapY;
      let dnaX = dna.dnaX;
      let dnaY = dna.dnaY;
      let strandX = dna.strandX;
      let strandY = dna.strandY;

      dna.dnaCanvas.addEventListener("mousedown", (evt) => {
        dna.dnaCanvas.localX = evt.localX;
        dna.dnaCanvas.localY = evt.localY;
  		});
      dna.strandCanvas.addEventListener("mousedown", (evt) => {
        dna.strandCanvas.localX = evt.localX;
        dna.strandCanvas.localY = evt.localY;
  		});
      dna.strandCanvas.addEventListener("pressup", (evt) => {
        dna.strandCanvas.localX = evt.localX;
        dna.strandCanvas.localY = evt.localY;
        dna.strandX = strandX + dna.strandCanvas.x;
        dna.strandY = strandY + dna.strandCanvas.y;
        let distance = (dna.strandX - dna.gapX)*(dna.strandX - dna.gapX) + (dna.strandY - dna.gapY)*(dna.strandY - dna.gapY) ;
        if (distance < 100) {
          dna.pair(dna.dnaCanvas, dna.strandCanvas);
          that.pairedCount += 1;
          that.container.removeChild(dna.strandCanvas);
          this.stage.update();
          // debugger

          if (that.pairedCount === that.count) {
            that.gameWon = true;
          }
        }
      });
      dna.dnaCanvas.on("pressmove", (evt) => {
        dna.dnaCanvas.x = evt.stageX - dna.dnaCanvas.localX;
        dna.dnaCanvas.y = evt.stageY - dna.dnaCanvas.localY;
        dna.gapX = gapX + dna.dnaCanvas.x;
        dna.gapY = gapY + dna.dnaCanvas.y;
        dna.dnaX = dnaX + dna.dnaCanvas.x;
        dna.dnaY = dnaY + dna.dnaCanvas.y;
        that.stage.update();
  		});
      dna.strandCanvas.on("pressmove", (evt) => {
        dna.strandCanvas.x = evt.stageX - dna.strandCanvas.localX;
        dna.strandCanvas.y = evt.stageY - dna.strandCanvas.localY;
        that.stage.update();
  		});
      that.stage.update();
    }
  }

}

export default Game;
