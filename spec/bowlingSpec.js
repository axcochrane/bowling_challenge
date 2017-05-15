describe('A Bowling Game', function(){

  var game; 

  beforeEach(function(){
    game = new BowlingGame();
    spyOn(Math, 'random').and.returnValue(0.5);
  });

    it('can return a score from 1-10 for each bowl',function(){
      game.bowl();
      expect(game.bowl()).toEqual(5); 
    });

});