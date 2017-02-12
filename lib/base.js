const BASE_PAIRS = {
  'A': 'T',
  'T': 'A',
  'G': 'C',
  'C': 'G'
};

const BASE_COLORS = {
  'A': '#ff4162',
  'T': '#62ff41',
  'G': '#4162ff',
  'C': '#ff7f41'
};

class Base {
  constructor(type) {
    this.type = type;
    this.color = BASE_COLORS[this.type];
    this.isPair = this.isPair.bind(this);
  }

  drawBase(graphics, x, y) {
    graphics.beginStroke(this.color).beginFill(this.color).drawCircle(x, y, 5);
  }

  isPair (otherType) {
    BASE_PAIRS[this.type] === otherType;
  }
}

export default Base;
