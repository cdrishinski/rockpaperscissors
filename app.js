var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var playerScore = 0;
var computerScore = 0;

function computerPlay (rock, paper, scissors) {
  let options = [rock, paper,scissors];
  let randomChoice = options[Math.floor(Math.random() * values.length)];
  alert(randomChoice);
}

computerPlay();










