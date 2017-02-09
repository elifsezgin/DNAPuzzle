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
    let idx1 = Math.floor(Math.random() * (this.sequence.length-2)) + 2
    let idx2 = Math.floor(Math.random() * (this.sequence.length-2)) + 2
    return [Math.min(idx1, idx2), Math.max(idx1, idx2)]
  }

  drawDNA () {
    let dna = new createjs.Shape();
    let strand = new createjs.Shape();
    let hitDna = new createjs.Shape();
    let hitStrand = new createjs.Shape();

    let xPos = 100 + Math.floor(Math.random() * 1000)
    let xPosStrand = 100 + Math.floor(Math.random() * 1000)


    let [stIdx, enIdx] = this.randomCut();
    let f = 1;
    let outerBase = true;

    for (let i = 0; i < this.sequence.length; i++) {
      outerBase = (i%8 === 0) ?  true : false;
      f *= (i%4 === 0) ?  -1 : 1;
      let a = (i%4)*f < 0 ? (4+(i%4)*f) :(i%4)*f;
      a = outerBase ? 40 : a*10 ;
      if (i >= stIdx && i <= enIdx ) {
        dna.graphics.beginStroke("#b2b2ff").mt(xPos - a - 10 - (f*10), 60 + (20*(i+1))).lt(xPos - a - 10, 60 + (20*(i)));
        this.fstrand[i].drawBase(dna.graphics, xPos - a - 10, 60 + (20*i))
        strand.graphics.beginStroke("#b2b2ff").mt(xPosStrand + a, 60 + (20*i)).lt(xPosStrand + a + (f*10), 60 + (20*(i+1)));
        this.rstrand[i].drawBase(strand.graphics, xPosStrand + a, 60 + (20*i))
      } else {
        dna.graphics.beginStroke("#b2b2ff").mt(xPos - a - 10 - (f*10) , 60 + (20*(i+1))).lt(xPos - a - 10 , 60 + (20*(i)));
        dna.graphics.beginStroke("#b2b2ff").mt(xPos + a + 10, 60 + (20*i)).lt(xPos + a + 10 + (f*10), 60 + (20*(i+1)));
        dna.graphics.beginStroke("#b2b2ff").mt(xPos - a - 10, 60 + (20*i)).lt(xPos + a + 10, 60 + (20*i));
        this.fstrand[i].drawBase(dna.graphics, xPos - a - 10, 60 + (20*i))
        this.rstrand[i].drawBase(dna.graphics, xPos + a + 10, 60 + (20*i))
      }
    }
    console.log('done');

    hitDna.graphics.beginFill("#000").drawRect(xPos-30, 50, 60, (20*this.sequence.length-1));
    dna.hitArea = hitDna;
    this.container.addChild(dna);

    hitStrand.graphics.beginFill("#000").drawRect(xPosStrand, 50+(stIdx*20), 60, (20*(enIdx-stIdx + 1)));
    strand.hitArea = hitStrand;
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
