const userScore = document.getElementById('score');
const result = document.getElementById('result');
const choices = document.querySelectorAll('.choice');

let userScoreCount = 0;
let computerScoreCount = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScoreCount++;
        return "You win!";
    } else {
        computerScoreCount++;
        return "You lose!";
    }
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        const resultMessage = getResult(userChoice, computerChoice);

        userScore.textContent = `${userScoreCount} : ${computerScoreCount}`;
        result.textContent = `You chose ${userChoice}, Computer chose ${computerChoice}. ${resultMessage}`;
    });
});
