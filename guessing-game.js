function guessingGame() {
    const random = Math.floor(Math.random() * 100);
    let correctGuess = false;
    return function newRandoNum(num){
        if(correctGuess) return "Game Over, you won!!";
        if(random === num){

        }

    }

}

module.exports = { guessingGame };

/* Pseudo Code
1- create a function called Guessing Game
2- GuessingGame will return a function to guess a number between 0-99
ex: Math.floor(Math.random() * 100)
3- each time you call new game is called it should select a new random number *must be kept from the player*
4- game should tell you if your guess is too high, too low or correct
--- ex: if(random < num) return `${num} is too high!`
        if(random > num) return `${num} is correcr!`
5- game ends if guess is correct

/*
