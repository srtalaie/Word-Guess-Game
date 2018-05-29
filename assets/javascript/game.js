let wins = 0;
let wordBank = ['robbery', 'gallows', 'sheriff', 'whiskey', 'revolver'];
let blankSpaces = ['_', '_', '_', '_', '_', '_', '_'];
let guessedLetters = [];
let guesses = 12;
let currentWord;

function wordGenerator(){
    return currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
}

currentWord = wordGenerator();
console.log(currentWord);

let word = document.getElementById('word');
let numGuesses = document.getElementById('num-guesses');
let winsId = document.getElementById('wins');
let lettersGuessed = document.getElementById('letters-guessed');

word.innerHTML = `<p>${blankSpaces.join(' ')}</p>`;
numGuesses.innerHTML = `<p>Number of Guesses Remaining: ${guesses}</p>`;

document.onkeydown = function(event){
    let userInput = event.key;
    let currentLetter;
    
    for(let i = 0; i < currentWord.length; i++){
        currentLetter = currentWord[i];
        if (blankSpaces.join('') === currentWord){
            alert('Congrats you guessed correctly!');
            currentWord = wordGenerator();
            wins++;
            blankSpaces = ['_', '_', '_', '_', '_', '_', '_'];
            guessedLetters = [];
            guesses = 12;
        } else if (guesses === 0){
            alert("Sorry the correct word was " + currentWord);
            currentWord = wordGenerator();
            blankSpaces = ['_', '_', '_', '_', '_', '_', '_'];
            guessedLetters = [];
            guesses = 12;
        } else if (userInput === guessedLetters[i]){
            alert("You've chosen this letter already");
        } else  if (userInput === currentLetter){
            blankSpaces[i] = userInput;
        }
    }

    guesses--;
    guessedLetters.push(userInput);

    word.innerHTML = `<p>${blankSpaces.join(' ')}</p>`;
    lettersGuessed.innerHTML = `<p>Letters Already Guessed:</p>
                                <p>${guessedLetters}</p>`;
    winsId.innerHTML = `<p>Wins: ${wins}</p>`;
    numGuesses.innerHTML = `<p>Number of Guesses Remaining: ${guesses}</p>`;
}