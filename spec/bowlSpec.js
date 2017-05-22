describe('A bowl', function(){

  var bowl; 

  beforeEach(function(){

    bowl = new Bowl(10);
    spyOn(Math, 'random').and.returnValue(0.5);
    
  });

  it('can return a score from 1-10 for each bowl',function(){
    bowl.roll();
    expect(bowl.roll()).toEqual(5); 
  });

});

describe('A frame', function(){

  var frame;   
  beforeEach(function(){
  frame = new Frame();
  bowl = new Bowl(10);
  spyOn(Math, 'random').and.returnValue(0.5);
  });

  it('can be instatiated with 10 pins remaining',function(){
    expect(frame.pinsRemaining).toEqual(10); 
  });

  it('saves how many pins where hit each turn',function(){
    frame.takeTurn();
    expect(frame.rollResults.pop()).toEqual(5); 
  });

  it('tracks how many pins are remaning',function(){
    frame.takeTurn();
    expect(frame.pinsRemaining).toEqual(5); 
  });

  it('keeps track of remaining rolls',function(){
    frame.takeTurn();
    expect(frame.remainingRolls).toEqual(1); 
  });

});

