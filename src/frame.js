function Frame(frameNumber) {
  this.frameNumber = frameNumber;
  this.pinsRemaining = 10;
  this.remainingRolls = 2;
  this.rollsResult= []; // 10, 10, 10 = 30 | 10, 1, 10 = 21 | 1, 9, 1 = 11 | 1, 9, 10 = 20| 1, 1 = 2
  this.finalScore = 0;
  this.isActive = true;
}

  Frame.prototype.takeTurn = function() {
    var bowl = new Bowl(pinsRemaining);
    var pinsHit = bowl.roll;
    this.rollsResult.push(pinsHit);
    this.pinsRemaining -= pinsHit; 
      this.pinsRemaining === 0;
      this.remainingRolls -= 1;
  };


  Frame.prototype.updateFrameCount = function() {
    this.remainingRolls -= 1;
    // if pinsRemaining === 0 

  }

  Frame.prototype.updateFinalScore = function() {
    // if remainingRolls === 0;
    finalScore = rollsResult.sum; 
      
  }

  Frame.prototype.updateFrameStatus = function() {
    // if pinsRemaining === 0;
      this.remainingRolls =+ 1
      
  }




