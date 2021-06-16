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

document.getElementById('playButton').addEventListener('click', function () {
    const computerChoice = getComputerChoice();

    if (userChoice === '👊🏻' && computerChoice === '👊🏻') {
        document.getElementById('message').innerHTML ='tie message';
        document.getElementById('playButton').innerHTML ='play again';
    }
    if (userChoice === '🖐🏻' && computerChoice === '🖐🏻') {
        document.getElementById('message').innerHTML ='tie message';
        document.getElementById('playButton').innerHTML ='play again';
    }
    if (userChoice === '✌🏻' && computerChoice === '✌🏻') {
        document.getElementById('message').innerHTML ='tie message';
        document.getElementById('playButton').innerHTML ='play again';
    }

    if (userChoice === '👊🏻' && computerChoice === '✌🏻') {
        document.getElementById('message').innerHTML ='you win';
        document.getElementById('playButton').innerHTML ='play again';
    }
    if (userChoice === '🖐🏻' && computerChoice === '👊🏻') {
        document.getElementById('message').innerHTML ='you win';
        document.getElementById('playButton').innerHTML ='play again';
    }
    if (userChoice === '✌🏻' && computerChoice === '🖐🏻') {
        document.getElementById('message').innerHTML ='you win';
        document.getElementById('playButton').innerHTML ='play again';
    }

    if (userChoice === '👊🏻' && computerChoice === '🖐🏻') {
        document.getElementById('message').innerHTML ='you lose';
        document.getElementById('playButton').innerHTML ='play again';
    }
    if (userChoice === '🖐🏻' && computerChoice === '✌🏻') {
        document.getElementById('message').innerHTML ='you lose';
        document.getElementById('playButton').innerHTML ='play again';
    }
    if (userChoice === '✌🏻' && computerChoice === '👊🏻') {
        document.getElementById('message').innerHTML ='you lose';
        document.getElementById('playButton').innerHTML ='play again';
    }


})
