let weapon = [
    'rock', 'paper', 'scissors'
];

function getComputerChoice() {
    let choice = weapon[Math.floor(Math.random() * 3)];
    return choice;
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    //use modulo math to determine the winner
    let outcome = (weapon.indexOf(playerSelection) - weapon.indexOf(computerSelection));
    if (outcome < 0) {
        outcome += 3;
    }
    if (outcome == 1) {
        return 'player wins';
    }
    else if (outcome == 2) {
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
