import Base from './base';

const BASE_PAIRS = {
  'A': 'T',
  'T': 'A',
  'G': 'C',
  'C': 'G'
};

class DNA {
  constructor(sequence) {
    this.sequence = sequence;
    this.fstrand = this.sequence.map(base => new Base(base));
    this.rstrand = this.sequence.map(base => new Base(BASE_PAIRS[base]));
    this.stage = new createjs.Stage("canvas");
    this.container = new createjs.Container();
    this.stage.addChild(this.container);
    this.update = false;

    this.drawDNA = this.drawDNA.bind(this);
    this.randomCut = this.randomCut.bind(this);
    this.drawDNA();
  }

  randomCut () {
    let idx1 = Math.floor(Math.random() * this.sequence.length)
    let idx2 = Math.floor(Math.random() * this.sequence.length)
    return [Math.min(idx1, idx2), Math.max(idx1, idx2)]
  }

  drawDNA () {
    let dna = new createjs.Shape();
    let strand = new createjs.Shape();
    this.stage.enableMouseOver(10);
  	this.stage.mouseMoveOutside = true;
    dna.graphics.beginStroke("#b2b2ff").mt(50, 50).lt(50, 60 + (this.sequence.length * 20));
    dna.graphics.beginStroke("#b2b2ff").mt(70, 50).lt(70, 60 + (this.sequence.length * 20));
    let stIdx, enIdx = this.randomCut();
    for (let i = 0; i < this.sequence.length; i++) {
      if (i >= stIdx && i <= enIdx ) {
        this.fstrand[i].drawBase(dna.graphics, 50, 60 + (20*i))

        this.rstrand[i].drawBase(strand.graphics, 10, 60 + (20*i))

      } else {
        dna.graphics.beginStroke("#b2b2ff").mt(50, 60 + (20*i)).lt(70, 60 + (20*i));
        this.fstrand[i].drawBase(dna.graphics, 50, 60 + (20*i))
        this.rstrand[i].drawBase(dna.graphics, 70, 60 + (20*i))
      }
    }

    this.container.addChild(dna);
    let that = this;
    dna.addEventListener("mousedown", (evt) => {
      debugger;
      that.localX = evt.localX;
      that.localY = evt.localY;
		});

    dna.on("pressmove", (evt) => {
      dna.x = evt.stageX - that.localX;
      dna.y = evt.stageY - that.localY;
      that.stage.update();
		});
    this.stage.update();
  }
}

export default DNA;
