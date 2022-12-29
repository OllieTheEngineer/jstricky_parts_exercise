function guessingGame() {
    const randomNum = Math.floor(Math.random() * 100);
    let correctGuess = false;
    let triedGuesses = 0;
    return function newRandoNum(num){
        if(correctGuess) return "The game is over, you already won!"
        triedGuesses++;
        if(randomNum === num){
            correctGuess = true;
            return `You win! You found ${num} in ${triedGuesses} guesses.`;

        }
        if(randomNum < num) return `${num} is too high!`;
        if(randomNum > num) return `${num} is too low!`;
    }

}

module.exports = { guessingGame };

