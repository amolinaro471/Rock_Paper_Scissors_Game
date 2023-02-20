/*
1. Have computer guess Rock, Paper or Scis
2. Have player select the same
3. decide winner
4. output winner
*/


const container = document.querySelector('#container');

const buttonPaper = document.createElement("button");
buttonPaper.classList.add("Paper_Choice");
buttonPaper.textContent = "Paper";


const buttonScissors = document.createElement("button");
buttonScissors.classList.add('Scissors_Choice');
buttonScissors.textContent = "Scissors";

const buttonRock = document.createElement("button");
buttonRock.classList.add("Rock_Choice");
buttonRock.textContent = "Rock";

container.appendChild(buttonPaper);
container.appendChild(buttonRock); 
container.appendChild(buttonScissors);

buttonPaper.addEventListener("click", playRoundPaper);
buttonRock.addEventListener("click", playRoundRock);
buttonScissors.addEventListener("click", playRoundScissors);

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

function playRoundRock() {
    playerSelection = "rock";
    computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        return "tie"
    }
    else if (computerSelection == "paper") {
        return "computer";
    } else {
        return "rock";
    }
    
}

function playRoundPaper() {
    playerSelection = "paper";
    computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        return "tie"
    } else if (computerSelection == "rock") {
        return "player"
    } else {
        return "computer"
    }
}

function playRoundScissors() {
    playerSelection = "scissors";
    computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        return "tie"
    } else if (computerSelection == "paper") {
        return "player"
    } else {
        return "computer"
    }
}

//console.log(playRound(playerSelection, computerSelection));
function getPlayerSelection() {
    //playerSelection = prompt("Enter your choice: ");
    playerSelection = addEventListener
    playerSelection = playerSelection.toLocaleLowerCase();
    return playerSelection;
}

function game() {
    let pc = 0; 
    let cc = 0;
    let tie = 0;
    let result = 0; 
    for (let i = 0; i < 5; i++) {
        result = playRound();
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

//console.log(game());

