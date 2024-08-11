// Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    // Get the user's guess from the input field
    var userGuess = document.getElementById("userGuess").value;

    // Convert the guess to a number
    var guess = Number(userGuess);

    // Get the element to display the result message
    var resultMessage = document.getElementById("resultMessage");

    // Check the user's guess
    if (guess < randomNumber) {
        resultMessage.innerText = "Too low! Try again.";
    } else if (guess > randomNumber) {
        resultMessage.innerText = "Too high! Try again.";
    } else if (guess === randomNumber) {
        resultMessage.innerText = "Congratulations! You guessed the number!";
    } else {
        resultMessage.innerText = "Please enter a valid number!";
    }
}
