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

document.getElementById('scissorsButtonButton').addEventListener('click', function () {
    userChoice = '✌🏻'
    console.log(userChoice)
})

document.getElementById('playButton').addEventListener('click', function () {
    const computerChoice = getComputerChoice();

    if (userChoice === '👊🏻' && computerChoice === '👊🏻') {
        document.getElementById('message').innerHTML ='tie message';
    }
    if (userChoice === '🖐🏻' && computerChoice === '🖐🏻') {
        document.getElementById('message').innerHTML ='tie message';
    }
    if (userChoice === '✌🏻' && computerChoice === '✌🏻') {
        document.getElementById('message').innerHTML ='tie message';
    }

    if (userChoice === '👊🏻' && computerChoice === '✌🏻') {
        document.getElementById('message').innerHTML ='you win';
    }
    if (userChoice === '🖐🏻' && computerChoice === '👊🏻') {
        document.getElementById('message').innerHTML ='you win';
    }
    if (userChoice === '✌🏻' && computerChoice === '🖐🏻') {
        document.getElementById('message').innerHTML ='you win';
    }

    if (userChoice === '👊🏻' && computerChoice === '🖐🏻') {
        document.getElementById('message').innerHTML ='you lose';
    }
    if (userChoice === '🖐🏻' && computerChoice === '✌🏻') {
        document.getElementById('message').innerHTML ='you lose';
    }
    if (userChoice === '✌🏻' && computerChoice === '👊🏻') {
        document.getElementById('message').innerHTML ='you lose';
    }


})
