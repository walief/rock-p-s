let weapon = [
    'rock', 'paper', 'scissors'
];

function getComputerChoice() {
    //return random choice of 'rock', 'paper', or 'scissors'
    let choice = weapon[Math.floor(Math.random() * 3)];
    return choice;
}

function playRound(playerSelection, computerSelection) {

    //make parameter case-insensitive
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    //play a single round
    //return a string that declares the winner
    //rock beats scissors 1-3
    //paper beats rock 2-1
    //scissors beat paper 3-2

    let outcome = (weapon.indexOf(playerSelection) - weapon.indexOf(computerSelection));
    if (outcome < 0) {
        outcome += 3;
    }
    if (outcome == 1) { // battle outcomes are cyclic - player had the superior weapon (+1)
        return 'player wins';
    }
    else if (outcome == 2) { // same as -1 (mod 3) - player had the lesser weapon
        return 'computer wins';
    }
    else {
        return 'draw';
    }
}

function game() {

    const btns = document.querySelectorAll('button');

    const scoreboard = document.getElementById('scoreboard');
    const announce = document.getElementById('announcements');
    const scoreDisplay = document.getElementById('score-display');

    let playerScore = 0;
    let computerScore = 0;
    let scoreLimit = 5;
    let gameOver = false;
    
    announce.innerText = "Let's play!";
    scoreDisplay.innerText = 'Player: ' + playerScore + ' | ' + 'Computer: ' + computerScore;


    btns.forEach(button => button.addEventListener('click', function () {

        if(!gameOver) {
            const playerSelection = button.id;
            const computerSelection = getComputerChoice();
            
            announce.innerText = 'Computer chooses ' + computerSelection + ' ...\n';
            
            let outcome = playRound(playerSelection, computerSelection);
            
            if (outcome == 'player wins') {
                playerScore++;
                announce.innerText += `You win! ${playerSelection} beats ${computerSelection}`;
                if(playerScore === scoreLimit) {
                    announce.innerText += '\n\nYou win the game!'
                    gameOver = true;
                }
            } else if (outcome == 'computer wins') {
                computerScore++;
                announce.innerText += `You lose! ${computerSelection} beats ${playerSelection}`;
                if(computerScore === scoreLimit) {
                    announce.innerText += '\n\nComputer wins the game!'
                    gameOver = true;
                }
            } else {
                announce.innerText += `It's a tie! Both chose ${playerSelection}`
            }
        }
        scoreDisplay.innerText = 'Player: ' + playerScore + ' | ' + 'Computer: ' + computerScore;

    }));

}

game();