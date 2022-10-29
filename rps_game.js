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

    let outcome = weapon.indexOf(playerSelection) - weapon.indexOf(computerSelection)
    if (outcome < 0) {
        outcome += 3;
    }
    if (outcome == 1) { // player wins
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else if (outcome == 2) { // computer wins
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else { // draw
        return `It's a tie! Both chose ${playerSelection}`
    }
}

function game() {

    const btns = document.querySelectorAll('button');

    const scoreboard = document.querySelector('#scoreboard');
    const announce = document.createElement('h2');
    const result = document.createElement('h1');
    scoreboard.appendChild(announce);
    announce.innerText = "Let's play!";
    scoreboard.appendChild(result);

    btns.forEach(button => button.addEventListener('click', function () {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        announce.innerText = 'Computer chooses ' + computerSelection;
        result.style.color = 'red';
        result.innerText = playRound(playerSelection, computerSelection);

    }));

}

game()