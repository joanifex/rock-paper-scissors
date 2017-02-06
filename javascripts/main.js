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
      outcome('win');
    } else if ( rockLose || paperLose || scissorsLose ) {
      outcome('lose');
    } else {
      outcome('tie');
    }
  }

  function outcome(result) {
    $('.outcome').append(output);
    if ( result === 'win'){
      $('.outcome').append('<p>You win!</p>');
    } else if ( result === 'lose'){
      $('.outcome').append('<p>You lose.</p>');
    } else {
      $('.outcome').append('<p>You tied.</p>');
    }
  }

  $('button').click(function(){
    playerChoice = $(this).data().choice;
    $('.outcome').empty();
    computerChooses();
    result();
  });

});
