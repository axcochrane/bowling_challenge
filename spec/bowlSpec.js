describe('A bowl', function(){

  var bowl; 

  beforeEach(function(){

    bowl = new Bowl();
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
  });

  it('can be instatiated with 10 pins remaining',function(){
    expect(frame.pinsRemaining).toEqual(10); 
  });

//   it('returns how many pins where each turn',function(){
//     frame.takeTurn
//     expect(frame.rollResult.last).toEqual(5); 
//   });

//   it('keeps track of remaining pins',function(){
//     spyOn(bowl, 'roll').and.returnValue(5);
//     frame.takeTurn
//     expect(frame.pinsRemaining).toEqual(10); 
//   });

});

