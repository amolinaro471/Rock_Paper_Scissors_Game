/*
1. Have computer guess Rock, Paper or Scis
2. Have player select the same
3. decide winner
4. output winner
*/

function getComputerChoice() {
    let rand = Math.floor(Math.random()*3);
    //creates an integer number 1 - 3
    if (rand == 1) {
        return "rock";
    }
    else if (rand == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}



let playerSelection = prompt("Enter your choice: ");
playerSelection = playerSelection.toLocaleLowerCase();
let computerSelection = getComputerChoice(); 

console.log(playerSelection, computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        
    }
}