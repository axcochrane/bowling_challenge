describe('A frame', function(){

  var frame; 

  beforeEach(function(){

    frame = new Frame();
    
  });

  it('can be instatiated with 10 pins remaining',function(){
    expect(frame.pinsRemaining.toEqual(10); 
  });

});