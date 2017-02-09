import DNA from './dna';
const BASES = ['A', 'T', 'C', 'G'];

class Game {
  constructor() {
    this.stage = new createjs.Stage("canvas");
    this.container = new createjs.Container();
    this.stage.addChild(this.container);
    this.stage.enableMouseOver(10);
    this.stage.mouseMoveOutside = true;
    this.createDNAs = this.createDNAs.bind(this);
    this.createDNAs();
  }

  createDNAs() {
    let count = 3 + Math.floor(Math.random() * 4);
    let that = this;
    for (let k = 0; k < count; k++) {
      let length = 10 + Math.floor(Math.random() * 10);
      let sequence = [];
      for (let i = 0; i < length; i++) {
        sequence.push(BASES[Math.floor(Math.random() * 4)]);
      }
      let dna = new DNA(sequence, that.stage, that.container);
      let gapX = dna.gapX;
      let gapY = dna.gapY;
      let dnaX = dna.dnaX;
      let dnaY = dna.dnaY;
      let strandX = dna.strandX;
      let strandY = dna.strandY;
      let paired = false;
      // debugger;

      dna.dnaCanvas.addEventListener("mousedown", (evt) => {
        dna.dnaCanvas.localX = evt.localX;
        dna.dnaCanvas.localY = evt.localY;
        if (paired) {

          dna.strandCanvas.localX = evt.localX;
          dna.strandCanvas.localY = evt.localY;
        }
  		});
      dna.strandCanvas.addEventListener("mousedown", (evt) => {
        if (!paired) {
          dna.strandCanvas.localX = evt.localX;
          dna.strandCanvas.localY = evt.localY;
        }
  		});
      dna.strandCanvas.addEventListener("pressup", (evt) => {
        dna.strandCanvas.localX = evt.localX;
        dna.strandCanvas.localY = evt.localY;
        let distance = (dna.strandX - dna.gapX)*(dna.strandX - dna.gapX) + (dna.strandY - dna.gapY)*(dna.strandY - dna.gapY) ;
        if (distance < 100) {
          console.log('on the DNA');
          paired = true;
          dna.pair(dna.dnaCanvas, dna.strandCanvas);
          that.container.removeChild(dna.strandCanvas);
          that.stage.update();
          // for (let i = 0; i < length; i++) {
          //   sequence.push(BASES[Math.floor(Math.random() * 4)]);
          // }

        }
      });
      dna.dnaCanvas.on("pressmove", (evt) => {
        dna.dnaCanvas.x = evt.stageX - dna.dnaCanvas.localX;
        dna.dnaCanvas.y = evt.stageY - dna.dnaCanvas.localY;
        dna.gapX = gapX + dna.dnaCanvas.x;
        dna.gapY = gapY + dna.dnaCanvas.y;
        dna.dnaX = dnaX + dna.dnaCanvas.x;
        dna.dnaY = dnaY + dna.dnaCanvas.y;
        // dna.dnaCanvas.graphics.beginStroke('#ff7f41').beginFill('#ff7f41').drawCircle(dna.gapX, dna.gapY, 5)
        // dna.dnaCanvas.graphics.beginStroke('#4162ff').beginFill('#4162ff').drawCircle(dna.dnaX, dna.dnaY, 5)
        if (paired) {
          dna.strandCanvas.x = dna.dnaCanvas.x;
          dna.strandCanvas.y = dna.dnaCanvas.x;
          dna.strandX = strandX + dna.strandCanvas.x;
          dna.strandY = strandY + dna.strandCanvas.y;
        }

        that.stage.update();
  		});
      dna.strandCanvas.on("pressmove", (evt) => {
        if (!paired) {
          dna.strandCanvas.x = evt.stageX - dna.strandCanvas.localX;
          dna.strandCanvas.y = evt.stageY - dna.strandCanvas.localY;
          dna.strandX = strandX + dna.strandCanvas.x;
          dna.strandY = strandY + dna.strandCanvas.y;
          // dna.strandCanvas.graphics.beginStroke('#4162ff').beginFill('#4162ff').drawCircle(dna.strandX, dna.strandY, 5)
          // Game logic here
          let distance = (dna.strandX - dna.gapX)*(dna.strandX - dna.gapX) + (dna.strandY - dna.gapY)*(dna.strandY - dna.gapY) ;
          if (distance < 100) {
            console.log('close to the DNA');
          }
        }
        that.stage.update();
  		});
      that.stage.update();
    }
  }

}

export default Game;
