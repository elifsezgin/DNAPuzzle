import Base from './base';

const BASE_PAIRS = {
  'A': 'T',
  'T': 'A',
  'G': 'C',
  'C': 'G'
};

class DNA {
  constructor(sequence, stage, container) {
    this.sequence = sequence;
    this.fstrand = this.sequence.map(base => new Base(base));
    this.rstrand = this.sequence.map(base => new Base(BASE_PAIRS[base]));
    this.stage = stage;
    this.container = container;
    this.update = false;

    this.drawDNA = this.drawDNA.bind(this);
    this.randomCut = this.randomCut.bind(this);
    this.drawDNA();
  }

  randomCut () {
    let idx1 = Math.floor(Math.random() * this.sequence.length-2)
    let idx2 = Math.floor(Math.random() * this.sequence.length-2)
    return [Math.min(idx1, idx2), Math.max(idx1, idx2)]
  }

  drawDNA () {
    let dna = new createjs.Shape();
    let strand = new createjs.Shape();

    let xPos = Math.floor(Math.random() * 1000)
    let xPosStrand = Math.floor(Math.random() * 1000)


    let [stIdx, enIdx] = this.randomCut();
    dna.graphics.beginStroke("#b2b2ff").mt(xPos, 50).lt(xPos, 60 + (this.sequence.length * 20));
    dna.graphics.beginStroke("#b2b2ff").mt(xPos + 20, 50).lt(xPos + 20, 60 + ((stIdx*20)));
    dna.graphics.beginStroke("#b2b2ff").mt(xPos + 20, 60 + ((enIdx*20))).lt(xPos + 20, 60 + (this.sequence.length * 20));

    strand.graphics.beginStroke("#b2b2ff").mt(xPosStrand, 50+(stIdx*20)).lt(xPosStrand, 60 + ((enIdx) * 20));
    for (let i = 0; i < this.sequence.length; i++) {
      if (i >= stIdx && i <= enIdx ) {
        this.fstrand[i].drawBase(dna.graphics, xPos, 60 + (20*i))
        this.rstrand[i].drawBase(strand.graphics, xPosStrand, 60 + (20*i))
      } else {
        dna.graphics.beginStroke("#b2b2ff").mt(xPos, 60 + (20*i)).lt(xPos + 20, 60 + (20*i));
        this.fstrand[i].drawBase(dna.graphics, xPos, 60 + (20*i))
        this.rstrand[i].drawBase(dna.graphics, xPos + 20, 60 + (20*i))
      }
    }

    this.container.addChild(dna);
    this.container.addChild(strand);
    let that = this;
    dna.addEventListener("mousedown", (evt) => {
      that.localX = evt.localX;
      that.localY = evt.localY;
		});
    strand.addEventListener("mousedown", (evt) => {
      that.localX = evt.localX;
      that.localY = evt.localY;
		});

    dna.on("pressmove", (evt) => {
      dna.x = evt.stageX - that.localX;
      dna.y = evt.stageY - that.localY;
      that.stage.update();
		});
    strand.on("pressmove", (evt) => {
      strand.x = evt.stageX - that.localX;
      strand.y = evt.stageY - that.localY;
      that.stage.update();
		});
    this.stage.update();
  }
}

export default DNA;
