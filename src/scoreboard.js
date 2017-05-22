$(document).ready(function(){

  var game = new BowlingGame();
  var bowlCount = 0;
  var frame = new Frame();

  $('#roll_button').click(function(clickEvent) {
    $('#roll_outcome').text(frame.takeTurn());
  });

  $(document).on("click", ".score-button", function() {
    var pinsKnockedOver = parseInt(this.id);
    game.roll(pinsKnockedOver);
    updateScorecard();
    reRenderButtons(pinsKnockedOver);
  });


});