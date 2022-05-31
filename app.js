const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      do {
        this.prevGuesses.push(this.getGuess());
        this.render();
      } 
      while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum); 
  },
  
  getGuess: function() {
    let numGuess = 0
    do {
      numGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));

    }
    while ((numGuess !== NaN) ||
    (numGuess < this.smallestNum) ||
    (numGuess > this.biggestNum));

    return numGuess

  }
}



game.play();