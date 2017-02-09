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
      new DNA(sequence, that.stage, that.container);
    }
  }

}

export default Game;
