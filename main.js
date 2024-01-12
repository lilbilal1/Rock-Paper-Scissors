const choices=["rock","paper","scissors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("result");
const playerScore=document.getElementById("playerScore");
const computerscore=document.getElementById("computerScore");
let playerScoreCount = 0;
let computerScoreCount = 0;

function updateScore(winner) {
    if (winner === 'player') {
        playerScoreCount++;
    } else if (winner === 'computer') {
        computerScoreCount++;
    }

    playerScore.textContent = ` ${playerScoreCount}`;
    computerScore.textContent = ` ${computerScoreCount}`;
}

function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
   let result="";

    if(playerChoice===computerChoice){
        result="It's a Tie";
    }
    else {
        switch(playerChoice){
            case "rock":
            result=(computerChoice ==="scissors") ? "You win" : "You Lose";
            break;
            case "paper":
                result=(computerChoice==="rock") ? "You win" : "You Lose";
                break;
            case "scissors":
                    result=(computerChoice==="paper") ? "You win" : "You Lose";
                 break;    
        }
        if (result.includes("win")) {
            updateScore('player');
        } else if (result.includes("Lose")) {
            updateScore('computer');
        }
    }
    playerDisplay.textContent=`Player: ${playerChoice}`;
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`;
    resultDisplay.textContent=result;

}