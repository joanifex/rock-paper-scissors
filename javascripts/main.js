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
    refreshOutcomes();
    if ( result === 'win'){
      $('.outcome').append('<p>You win!</p>');
    } else if ( result === 'lose'){
      $('.outcome').append('<p>You lose.</p>');
    } else {
      $('.outcome').append('<p>You tied.</p>');
    }
  }

  function refreshOutcomes() {
    $('.win-counter').text(gameOutcomes.wins);
    $('.loss-counter').text(gameOutcomes.losses);
    $('.tie-counter').text(gameOutcomes.ties);
  }

  $('.new-game').click(function(){
    gameOutcomes.wins = 0;
    gameOutcomes.losses = 0;
    gameOutcomes.ties = 0;
    refreshOutcomes();
    $('.outcome').empty();
  });

  $('.buttons').click(function(){
    playerChoice = $(this).data().choice;
    $('.outcome').empty();
    computerChooses();
    result();
  });
});
