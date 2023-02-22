/*
1. Have computer guess Rock, Paper or Scis
2. Have player select the same
3. decide winner
4. output winner
*/

const container = document.querySelector('#container');
const buttonPaper = document.querySelector(".paper");
const buttonRock = document.querySelector(".rock");
const buttonScissors = document.querySelector(".scissors");
const outcome = document.querySelector('.outcome');

buttonPaper.addEventListener("click", () => {
    playRound("paper");
})
buttonRock.addEventListener("click", () => {
    playRound("rock");
})
buttonScissors.addEventListener("click", () => {
    playRound("scissors");
})

function getComputerChoice() {
    let rand = Math.floor(Math.random()*3);
    if (rand == 1) {
        return "rock";
    }
    else if (rand == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
   
function playRound (choice) {
    let playerSelection = choice;
    computerSelection = getComputerChoice();
    const p = document.createElement('p');
     
    let winner = "tie"
    if (playerSelection == computerSelection) {
        winner = "tie"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        winner = "player"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        winner = "player"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        winner = "player"
    } else {
        winner = "computer"
    }
    console.log(winner);
    p.innerText = "Winner is: " + winner;
    outcome.appendChild(p);
    //return winner
}

function game() {
    let pc = 0; 
    let cc = 0;
    let tie = 0;
    while (pc < 5 || cc < 5) {
        result = "player";
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
