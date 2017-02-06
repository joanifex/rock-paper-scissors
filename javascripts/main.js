$(document).ready(function(){

  var choices = ['rock', 'paper', 'scissors'];
  var playerChoice;
  var computerChoice;
  var output;
  var result;
  var outcomes = { 'wins': 0, 'losses': 0, 'ties': 0 };

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
      outcomes.wins += 1;
      displayOutcome('win');
    } else if ( rockLose || paperLose || scissorsLose ) {
      outcomes.losses += 1;
      displayOutcome('lose');
    } else {
      outcomes.ties += 1;
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
    $('.win-counter').text(outcomes.wins);
    $('.loss-counter').text(outcomes.losses);
    $('.tie-counter').text(outcomes.ties);
    var gamesPlayed = outcomes.wins + outcomes.losses + outcomes.ties;
    if ( gamesPlayed == 0){
      $('.win-percentage').text( 0 );
      $('.loss-percentage').text( 0 );
      $('.tie-percentage').text( 0 );
    } else {
      $('.win-percentage').text( Math.ceil((outcomes.wins / gamesPlayed) * 100) + '%');
      $('.loss-percentage').text( Math.ceil((outcomes.losses / gamesPlayed) * 100) + '%' );
      $('.tie-percentage').text( Math.ceil((outcomes.ties / gamesPlayed) * 100) + '%');
    }
  }

  $('.new-game').click(function(){
    outcomes.wins = 0;
    outcomes.losses = 0;
    outcomes.ties = 0;
    refreshOutcomes();
    $('.outcome').empty();
  });

  $('.btn').click(function(){
    playerChoice = $(this).data().choice;
    $('.outcome').empty();
    computerChooses();
    result();
  });
});
