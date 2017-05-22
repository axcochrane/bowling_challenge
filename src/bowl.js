function Bowl(pinsRemaining = 10) {
  this.pinsStanding = pinsRemaining;
  this.pinsHit = 0;
}

  Bowl.prototype.roll = function() {
    pinsHit = Math.floor(Math.random() * this.pinsStanding)
    return pinsHit;
  };