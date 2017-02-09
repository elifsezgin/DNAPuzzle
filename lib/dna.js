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

  randomCut () {
    let idx1 = Math.floor(Math.random() * (this.sequence.length-2)) + 2
    let idx2 = Math.floor(Math.random() * (this.sequence.length-2)) + 2
    return [Math.min(idx1, idx2), Math.max(idx1, idx2)]
  }

  drawDNAsAndStrands () {
    let dna = new createjs.Shape();
    let strand = new createjs.Shape();
    let hitDna = new createjs.Shape();
    let hitStrand = new createjs.Shape();

    let xPos = 100 + Math.floor(Math.random() * 50) * 10
    let xPosStrand = 500 + Math.floor(Math.random() * 50) * 10


    let [stIdx, endIdx] = this.randomCut();
    let f = 1;
    let outerBase = true;
    let gapX = 0;
    let gapY = 0;
    let strandX = 0;
    let strandY = 0;
    let dnaX = 0;
    let dnaY = 0;
    for (let i = 0; i < this.sequence.length; i++) {
      outerBase = (i%8 === 0) ?  true : false;
      f *= (i%4 === 0) ?  -1 : 1;
      let a = (i%4)*f < 0 ? (4+(i%4)*f) :(i%4)*f;
      a = outerBase ? 40 : a*10 ;
      if (i > stIdx && i <= endIdx ) {
        dna.graphics.beginStroke("#b2b2ff").mt(xPos - a - 10 - (f*10), 60 + (20*(i+1))).lt(xPos - a - 10, 60 + (20*(i)));
        // this.basesF.push(this.fstrand[i]);
        this.fstrand[i].drawBase(dna.graphics, xPos - a - 10, 60 + (20*i));
        strand.graphics.beginStroke("#b2b2ff").mt(xPosStrand + a, 60 + (20*i)).lt(xPosStrand + a + (f*10), 60 + (20*(i+1)));
        this.compStrandInput.push([this.rstrand[i], dna.graphics, xPos + a + 10, 60 + (20*i)]);

        this.drawAllLinesInput.push([dna.graphics, xPos - a - 10 - (f*10), 60 + (20*(i+1)), xPos - a - 10, 60 + (20*(i))]);
        this.drawAllLinesInput.push([dna.graphics, xPos + a + 10, 60 + (20*i), xPos + a + 10 + (f*10), 60 + (20*(i+1))]);
        this.drawAllLinesInput.push([dna.graphics, xPos - a - 10, 60 + (20*i), xPos + a + 10, 60 + (20*i)]);

        this.rstrand[i].drawBase(strand.graphics, xPosStrand + a, 60 + (20*i));
        gapX +=  xPos + a + 10;
        gapY += 60 + (20*i)
        strandX +=  xPosStrand + a;
        strandY += 60 + (20*i)
        dnaX += ((xPos - a - 10) + (xPos + a + 10))/2;
        dnaY += 60 + (20*i)
      } else {
        dna.graphics.beginStroke("#b2b2ff").mt(xPos - a - 10 - (f*10) , 60 + (20*(i+1))).lt(xPos - a - 10 , 60 + (20*(i)));
        dna.graphics.beginStroke("#b2b2ff").mt(xPos + a + 10, 60 + (20*i)).lt(xPos + a + 10 + (f*10), 60 + (20*(i+1)));
        dna.graphics.beginStroke("#b2b2ff").mt(xPos - a - 10, 60 + (20*i)).lt(xPos + a + 10, 60 + (20*i));
        this.fstrand[i].drawBase(dna.graphics, xPos - a - 10, 60 + (20*i))
        this.rstrand[i].drawBase(dna.graphics, xPos + a + 10, 60 + (20*i))
        dnaX += ((xPos - a - 10) + (xPos - a - 10))/2;
        dnaY += 60 + (20*i);
      }
    }
    this.dnaX = dnaX / (this.sequence.length);
    this.dnaY = dnaY / (this.sequence.length);
    this.gapX = gapX / (endIdx - stIdx);
    this.gapY = gapY / (endIdx - stIdx);
    this.strandX = strandX / (endIdx - stIdx);
    this.strandY = strandY / (endIdx - stIdx);
    hitDna.graphics.beginFill("#000").drawRect(xPos-30, 50, 60, (20*this.sequence.length-1));
    dna.hitArea = hitDna;
    this.container.addChild(dna);
    this.dnaCanvas = dna;

    hitStrand.graphics.beginFill("#000").drawRect(xPosStrand, 50+(stIdx*20), 60, (20*(endIdx-stIdx + 1)));
    strand.hitArea = hitStrand;
    this.container.addChild(strand);
    this.strandCanvas = strand;
    this.stage.update();
  }

  isPair (strand) {
    return this.strandCanvas === strand;
  }

  pair (dna, strand) {
    for (var i = 0; i < this.compStrandInput.length; i++) {
      let [base, graphics, x, y] = this.compStrandInput[i];
      base.drawBase(graphics, x, y);
    }
    for (var i = 0; i < this.drawAllLinesInput.length; i++) {
      let [graphics, x1, y1, x2, y2] = this.drawAllLinesInput[i];
      graphics.beginStroke("#b2b2ff").mt(x1, y1).lt(x2, y2);
    }
    this.stage.update();
  }
}

export default DNA;
