function Bowl() {
  this.pinsHit = 0;
}

  Bowl.prototype.roll = function() {
    pinsHit = (Math.floor(Math.random()*10));
    return pinsHit;
  };