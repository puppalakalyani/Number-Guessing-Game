// Simple testing framework for Number Guessing Game
function testNumberGuessingGame() {
    // Mock DOM elements
    document.body.innerHTML = `
        <input type="number" id="guessInput">
        <p id="result"></p>
        <p id="attempts"></p>
    `;

    // Test scenarios
    function runTest(guess, expectedResult) {
        // Reset game state
        randomNumber = 50; // Fixed number for consistent testing
        attempts = 0;

        // Set input value
        document.getElementById('guessInput').value = guess;

        // Call the game function
        checkGuess();

        // Check results
        const resultText = document.getElementById('result').innerText;
        const attemptsText = document.getElementById('attempts').innerText;

        console.assert(
            resultText === expectedResult, 
            `Test failed for guess ${guess}. Expected: ${expectedResult}, Got: ${resultText}`
        );
        console.assert(
            attemptsText === `Attempts: 1`, 
            `Attempts tracking failed for guess ${guess}`
        );
    }

    // Test low guess
    runTest(25, 'Too low! Try again.');

    // Test high guess
    runTest(75, 'Too high! Try again.');

    // Test correct guess
    runTest(50, 'Congratulations! You\'ve guessed the number in 1 attempts.');

    console.log('All tests completed!');
}

// Run tests
testNumberGuessingGame();
