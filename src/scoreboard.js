$(document).ready(function(){

  var game = new BowlingGame();
  var count = 0;

  $('#bowl').click(function(clickEvent) {
    $('#BowlResult').text(game.bowl());
    $("#" + count).text(game.bowls[count]);
    count += 1;
  });



});