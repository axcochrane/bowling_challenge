describe('A Bowling Game', function(){

  var game; 

  beforeEach(function(){

    game = new BowlingGame();
    spyOn(Math, 'random').and.returnValue(0.5);
    
  });

  xit('should start with score at 0',function(){
    game.bowl();
    expect(game.bowl()).toEqual(5); 
  });

  it('can return a score from 1-10 for each bowl',function(){
    game.bowl();
    expect(game.bowl()).toEqual(5); 
  });

  xit('score should accumulate',function(){
    game.bowl();
    expect(game.bowl()).toEqual(5); 
  });

  xit('it can score a spare',function(){
    game.bowl();
    expect(game.bowl()).toEqual(5); 
  });

  xit('it can score a strike',function(){
    game.bowl();
    expect(game.bowl()).toEqual(5); 
  });

  xit('it can return a perfect game',function(){
    game.bowl();
    expect(game.bowl()).toEqual(5); 
  });

});