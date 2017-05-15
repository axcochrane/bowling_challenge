function BowlingGame() {
  this.runningScore = 0;
  this.bowls = [];
}

  BowlingGame.prototype.bowl = function() {
    var bowl = (Math.floor(Math.random()*10));
    this.bowls.push(bowl);
    return bowl;
  };

