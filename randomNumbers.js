//--------------------------------------------------------------------

/* We can write instructions called OPERATORS.
   These include math and string and logic operators. 
   Below are some examples of functions these operators
*/

let userChoice = "";
let computerChoice = "";
let choices = [
  "rock",
  "paper",
  "scissors"
];
let winner = "";
let output = document.getElementById("output"); // The output where you will see the result



// When the user clicks on a button, we record the choice
function youPlay(choice) {
  userChoice = choice;
  compterChose();
  whoWon();
  announceWinner()
}

// Then the Computer choses a random item in the choices array of items
function compterChose() {
  computerChoice = choices[Math.floor(Math.random()*choices.length)];
}

// Compare User and Computer choices to see who won
function whoWon() {
  // A tie
  if( userChoice == computerChoice) {
    winner = "Nobody";
  }
  // You win
  else if ( userChoice == "rock" && computerChoice == "scissors") {
    winner = "You";
  }
  else if ( userChoice == "paper" && computerChoice == "rock") {
    winner = "You";
  }
  else if ( userChoice == "scissors" && computerChoice == "paper") {
    winner = "You";
  }
  // Computer wins
  else if ( userChoice == "scissors" && computerChoice == "rock") {
    winner = "You";
  }
  else if ( userChoice == "rock" && computerChoice == "paper") {
    winner = "You";
  }
  else if ( userChoice == "paper" && computerChoice == "scissors") {
    winner = "You";
  }
}

// Anounce Scores
function announceWinner() {
  output.innerText = "You picked " + userChoice +". Computer picked " + computerChoice + ". " + winner + " won! ";
}

