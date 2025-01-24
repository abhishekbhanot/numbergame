let attempts = 0;
const maxAttempts = 5;
let random;
function clic(){
    let first=parseInt(document.getElementById("one").value)
    let second=parseInt(document.getElementById("two").value)


 random=Math.floor(Math.random()*(second-first+1))+first;
console.log(random);

}


function checkGuess() {
    const guess = parseInt(document.getElementById('three').value);
    const mess = document.getElementById('show');

   

    attempts++;

    if (guess === random) {
        mess.textContent = "You guessed the right number!";
    } else if (attempts >= maxAttempts) {
        mess.textContent = `Sorry! You've used all your guesses. The number was ${random}.`;
    } else {
        mess.textContent = `Wrong guess! You have ${maxAttempts - attempts} guesses left.`;
    }
}


