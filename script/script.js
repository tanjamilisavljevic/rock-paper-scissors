const allComputerChoices = ['👊🏻', '🖐🏻', '✌🏻']

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * allComputerChoices.length);
    return allComputerChoices[randomIndex]
}

let userChoice = '';

document.getElementById('rockButton').addEventListener('click', function () {
    userChoice = '👊🏻'
    console.log(userChoice)
})

document.getElementById('paperButton').addEventListener('click', function () {
    userChoice = '🖐🏻'
    console.log(userChoice)
})

document.getElementById('scissorsButton').addEventListener('click', function () {
    userChoice = '✌🏻'
    console.log(userChoice)
})

function playAgain() {
    document.getElementById('playButton').innerHTML = 'play again';
}

function tie() {
    document.getElementById('message').innerHTML = 'tie message';
    playAgain();
}

function victory() {
    document.getElementById('message').innerHTML = 'you win';
    playAgain();
}

function defeat() {
    document.getElementById('message').innerHTML = 'you lose';
    playAgain();
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
