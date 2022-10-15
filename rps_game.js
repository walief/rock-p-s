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
    let player1 = playerSelection.toLowerCase()
    let player2 = computerSelection.toLowerCase()
    
    let result;
    let outcome;

    //play a single round
    //rock beats scissors 1-3
    //paper beats rock 2-1
    //scissors beat paper 3-2

    outcome = weapon.indexOf(player1) - weapon.indexOf(player2)
    if (outcome < 0) {
        outcome += 3;
    }
    if (outcome == 1) {
        result = `You win! ${player1} beats ${player2}`
    }
    else if (outcome == 2) {
        result = `You lose! ${player2} beats ${player1}`
    }
    else {
        result = `It's a tie! ${player2} same as ${player1}`
    }

    //return a string that declares the winner
    return result;
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose: ");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()