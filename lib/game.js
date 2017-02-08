import DNA from './dna';
const BASES = ['A', 'T', 'C', 'G'];

class Game {
  constructor() {
    this.createDNAs = this.createDNAs.bind(this);
    this.createDNAs();
  }

  createDNAs() {
    let length = 10 + Math.floor(Math.random() * 10);
    let sequence = [];
    for (let i = 0; i < length; i++) {
      sequence.push(BASES[Math.floor(Math.random() * 4)]);
    }
    new DNA(sequence);
  }

}

export default Game;
