$(document).ready(function(){

  var game = new BowlingGame();
  var bowlCount = 0;

  $('#bowl').click(function(clickEvent) {
    $('#BowlResult').text(game.bowl());
    $("#" + bowlCount).text(game.bowls[count]);
    count += 1;
  });



});