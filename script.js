let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let attempts = 0;
const maxAttempts = 5;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const messageElement = document.getElementById('message');

   

    attempts++;

    if (userGuess === randomNumber) {
        messageElement.textContent = "Congratulations! You guessed the right number!";
    } else if (attempts >= maxAttempts) {
        messageElement.textContent = `Sorry! You've used all your guesses. The number was ${randomNumber}.`;
    } else {
        messageElement.textContent = `Wrong guess! You have ${maxAttempts - attempts} guesses left.`;
    }
}