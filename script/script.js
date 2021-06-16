const allComputerChoices = ['👊🏻', '🖐🏻', '✌🏻']

function getComputerChoice() {
    return Math.floor(Math.random() * allComputerChoices.length)
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


})
