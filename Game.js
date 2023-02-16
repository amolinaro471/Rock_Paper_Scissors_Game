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
//console.log(playerSelection, computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "player"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "player"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "player"
    } else {
        return "computer"
    }
}

//console.log(playRound(playerSelection, computerSelection));


function game() {
    let pc = 0; 
    let cc = 0;
    let tie = 0;
    let result = 0; 
    let playerSelection = 0;
    let computerSelection = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter your choice: ");
        playerSelection = playerSelection.toLocaleLowerCase();
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result); 
        if (result == "player") {
            pc = pc + 1;
        } else if (result == "computer") {
            cc = cc + 1;
        } else {
            tie = tie + 1;
        }
    }

    return "PC: " + pc + " CC: " + cc + " Tie: " + tie;
}

console.log(game());