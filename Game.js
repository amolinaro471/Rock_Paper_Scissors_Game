/*
1. Have computer guess Rock, Paper or Scis
2. Have player select the same
3. decide winner
4. output winner
*/

let compWin = 0; 
let playWin = 0;
const container = document.querySelector('#container');
const buttonPaper = document.querySelector(".paper");
const buttonRock = document.querySelector(".rock");
const buttonScissors = document.querySelector(".scissors");
const outcome = document.querySelector('.outcome');
const winner = document.createElement('p');

function checkWinner () {
    
    if (playWin == 5) {
        winner.innerText = "You win, Congrats!";
        winner.style.color = "green";
        winner.style.fontSize = "32px";
        outcome.appendChild(winner);
        //location.reload();
    }
    if (compWin == 5) {
        winner.innerText = "You Lose, You suck!";
        winner.style.color = "red";
        winner.style.fontSize = "32px";
        outcome.appendChild(winner);
        //location.reload();
    }
}

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
        playWin++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        winner = "player"
        playWin++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        winner = "player"
        playWin++;
    } else {
        winner = "computer"
        compWin++;
    }
    //console.log(winner);
    p.innerText = "Winner is: " + winner;
    outcome.appendChild(p);
    return winner
}

buttonPaper.addEventListener("click", () => {
    playRound("paper");
    checkWinner();
})
buttonRock.addEventListener("click", () => {
    playRound("rock");
    checkWinner(); 
})
buttonScissors.addEventListener("click", () => {
    playRound("scissors");
    checkWinner();
})

