$(document).ready(function(){
  var $rock = $('.rock');
  var $paper = $('.paper');
  var $scissors = $('.scissors');

  var choices = ['rock', 'paper', 'scissors'];
  var playerChoice;
  var computerChoice;
  var output;
  var result;
  var gamesPlayed;
  var gamesWon;

  function computerChooses(){
    computerChoice = choices[( Math.floor(Math.random() * 3) )];
    output = '<p>The computer chose ' + computerChoice + '.</p>'
  }

  function result() {
    var rockWin = (playerChoice === 'rock' && computerChoice === 'scissors');
    var paperWin = (playerChoice === 'paper' && computerChoice === 'rock');
    var scissorsWin = (playerChoice === 'scissors' && computerChoice === 'paper');

    var rockLose = (playerChoice === 'rock' && computerChoice === 'paper');
    var paperLose = (playerChoice === 'paper' && computerChoice === 'scissors');
    var scissorsLose = (playerChoice === 'scissors' && computerChoice === 'rock');

    if ( rockWin || paperWin || scissorsWin ){
      win();
    } else if ( rockLose || paperLose || scissorsLose ) {
      lose();
    } else {
      tie();
    }
  }

  function win() {
    $('.buttons').append(output);
    $('.buttons').append('<p>You win!</p>');
  }

  function lose() {
    $('.buttons').append(output);
    $('.buttons').append('<p>You lose.</p>');
  }

  function tie() {
    $('.buttons').append(output);
    $('.buttons').append('<p>You tied.</p>');
  }

  $('button').click(function(){
    playerChoice = $(this).data().choice;
    computerChooses();
    result();
  });

});
