const allComputerChoices = ['👊🏻', '🖐🏻', '✌🏻']

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * allComputerChoices.length);
    return allComputerChoices[randomIndex]
}
let userScore = 0;
let computerScore = 0;
document.getElementById('scoreUser').innerHTML = '' + userScore;
document.getElementById('scoreComputer').innerHTML = '' + computerScore;


function makeSelected(element) {
    document.getElementById(element).classList.add("selectedButton");
}
function removeSelected(element) {
    document.getElementById(element).classList.remove("selectedButton");
}
function winMessage(element) {
    document.getElementById(element).classList.add("winningMessage");
}
function loseMessage(element) {
    document.getElementById(element).classList.add("losingMessage");
}
function tieMessage(element) {
    document.getElementById(element).classList.add("tiedMessage");
}
function removeWinMessage(element) {
    document.getElementById(element).classList.remove("winningMessage");
}
function removeLoseMessage(element) {
    document.getElementById(element).classList.remove("losingMessage");
}
function removeTieMessage(element) {
    document.getElementById(element).classList.remove("tiedMessage");
}


let userChoice = '';

document.getElementById('rockButton').addEventListener('click', function () {
    userChoice = '👊🏻'
    console.log(userChoice)
    makeSelected('rockButton')
    removeSelected('paperButton')
    removeSelected('scissorsButton')
})

document.getElementById('paperButton').addEventListener('click', function () {
    userChoice = '🖐🏻'
    console.log(userChoice)
    makeSelected('paperButton')
    removeSelected('rockButton')
    removeSelected('scissorsButton')
})

document.getElementById('scissorsButton').addEventListener('click', function () {
    userChoice = '✌🏻'
    console.log(userChoice)
    makeSelected('scissorsButton')
    removeSelected('paperButton')
    removeSelected('rockButton')
})

function playAgain() {
    document.getElementById('playButton').innerHTML = 'Play again!';
}

function tie() {
    document.getElementById('message').innerHTML = 'Oh-oh! We have a tie! 🤠';
    playAgain();
    removeLoseMessage('message');
    removeWinMessage('message');
    tieMessage('message');

}

function victory() {
    document.getElementById('message').innerHTML = 'Good job, you won.. 🥱';
    playAgain();
    removeLoseMessage('message');
    removeTieMessage('message');
    winMessage('message');
    document.getElementById('scoreUser').innerHTML= '' + ++userScore;
}

function defeat() {
    document.getElementById('message').innerHTML = 'You lose, loser 🤡';
    playAgain();
    removeTieMessage('message');
    removeWinMessage('message');
    loseMessage('message');
    document.getElementById('scoreComputer').innerHTML= '' + ++computerScore;
}

document.getElementById('playButton').addEventListener('click', function () {
    const computerChoice = getComputerChoice();

    if (userChoice === '👊🏻' && computerChoice === '👊🏻') {
        tie();
    }
    if (userChoice === '🖐🏻' && computerChoice === '🖐🏻') {
        tie();
    }
    if (userChoice === '✌🏻' && computerChoice === '✌🏻') {
        tie();
    }
    if (userChoice === '👊🏻' && computerChoice === '✌🏻') {
        victory();
    }
    if (userChoice === '🖐🏻' && computerChoice === '👊🏻') {
        victory();
    }
    if (userChoice === '✌🏻' && computerChoice === '🖐🏻') {
        victory();
    }
    if (userChoice === '👊🏻' && computerChoice === '🖐🏻') {
        defeat();
    }
    if (userChoice === '🖐🏻' && computerChoice === '✌🏻') {
        defeat();
    }
    if (userChoice === '✌🏻' && computerChoice === '👊🏻') {
        defeat();
    }

})
