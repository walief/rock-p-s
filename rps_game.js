let weapon = [
    'rock', 'paper', 'scissors'
];

function getComputerChoice() {
    //return random choice of 'Rock', 'Paper', or 'Scissors'
    let choice = weapon[Math.floor(Math.random() * 3)];
    console.log("Computer chooses " + choice)
    return choice;
}

function playRound(playerSelection, computerSelection) {

    //make parameterr case-insensitive
    let playerSelection = playerSelection.toLowerCase()
    let computerSelection = computerSelection.toLowerCase()
    
    let outcome;

    //play a single round
    //return a string that declares the winner
    //rock beats scissors 1-3
    //paper beats rock 2-1
    //scissors beat paper 3-2

    outcome = weapon.indexOf(playerSelection) - weapon.indexOf(computerSelection)
    if (outcome < 0) {
        outcome += 3;
    }
    if (outcome == 1) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else if (outcome == 2) {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else {
        return `It's a tie! ${computerSelection} same as ${playerSelection}`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose: ");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()