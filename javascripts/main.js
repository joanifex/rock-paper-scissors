$(document).ready(function(){

  var choices = ['rock', 'paper', 'scissors'];
  var playerChoice;
  var computerChoice;
  var output;
  var result;
  var gameOutcomes = { 'wins': 0, 'losses': 0, 'ties': 0 };

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
      gameOutcomes.wins += 1;
      displayOutcome('win');
    } else if ( rockLose || paperLose || scissorsLose ) {
      gameOutcomes.losses += 1;
      displayOutcome('lose');
    } else {
      gameOutcomes.ties += 1;
      displayOutcome('tie');
    }
  }

  function displayOutcome(result) {
    $('.outcome').append(output);
    if ( result === 'win'){
      $('.win-counter').text(gameOutcomes.wins);
      $('.outcome').append('<p>You win!</p>');
    } else if ( result === 'lose'){
      $('.loss-counter').text(gameOutcomes.losses);
      $('.outcome').append('<p>You lose.</p>');
    } else {
      $('.tie-counter').text(gameOutcomes.ties);
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
