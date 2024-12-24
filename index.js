let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById('guessInput').value;
    attempts++;
    let resultMessage = '';

    if (userGuess < randomNumber) {
        resultMessage = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        resultMessage = 'Too high! Try again.';
    } else {
        resultMessage = `Congratulations! You've guessed the number in ${attempts} attempts.`;
    }

    document.getElementById('result').innerText = resultMessage;
    document.getElementById('attempts').innerText = `Attempts: ${attempts}`;
}
