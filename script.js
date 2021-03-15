//computer selects r, p, s - done
//human enters r, p, s in prompt - done
//round function calculates who won
//game function loops 5 times and decides who won the most

function playerChooses () {
    let keepGoing = true;

    do{
        let playerChoice = prompt("Rock, Paper, Or Scissors?").toLowerCase();
        if(playerChoice == "rock" ||
           playerChoice == "paper" ||
           playerChoice == "scissors"
    ) {
        keepGoing = false;
        return playerChoice;
    } else { alert("Please type either Rock, Paper, Or Scissors");};

    }while(keepGoing);

}

function computerChooses() {
    let computerChoice = getRandomNumber(1, 4);
    console.log(computerChoice);
    switch(computerChoice) {
        case 1:
            return "rock";
        case 2 :
            return "paper";
        case 3 :
            return "scissors";
    }
}

//console.log(computerChooses());

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function playRound(computerChooses, playerChooses) {
    let computerChoice = computerChooses;
    let playerChoice = playerChooses;
    let keepGoing = true;

    while(keepGoing){
        if(playerChoice == "rock" && computerChoice == "paper" ||
           playerChoice == "paper" && computerChoice == "scissors" ||
           playerChoice == "scissors" && computerChoice == "rock"
        ){
            alert(`${computerChoice} beats ${playerChoice}! You lost this round...`);
            keepGoing = false;
            return "Lost";
            
        } else if(playerChoice == "rock" && computerChoice == "scissors" ||
                  playerChoice == "paper" && computerChoice == "rock" ||
                  playerChoice == "scissors" && computerChoice == "paper"
        ){
            alert(`${playerChoice} beats ${computerChoice}! You won this round!`);
            keepGoing = false;
            return "Won";
        } else {alert(`You both chose ${playerChoice}! This round is a draw!`); return "Draw";}
    }
}

function playGame() {
    let count = parseInt(prompt("How many rounds do you want to play?"));
    let playerScore = 0;
    let computerScore = 0;
    do {
        let result = playRound(computerChooses(), playerChooses());
        if(result == "Won") {
            playerScore ++;
            count --;
        } else if(result == "Lost") {
            computerScore ++;
            count --;
        } else {
            count --;
        }
    }while(count > 0)

    let finalScore = `The overall score was You:${playerScore} - Computer${computerScore}`;
    if(playerScore > computerScore){
        alert(finalScore + " You won the game!");

    } else if(computerScore > playerScore) {
        alert(finalScore + " You lost the game :(");

    } else {alert(finalScore + " The game was a draw!");};
}

playGame();
