/* Constants */
const WORD_LIST = ['producer', 'brainstorm', 'explosion', 'soup', 'feather']

/* Variables and App State */
let word = "";

/* DOM References */
let wordContainer = document.querySelector('#guess-word-container');
let textBox = document.querySelector('#textbox');
let messages = document.querySelector('#messages');

/* Functions and app logic */

// Initialize the game: 
// 1. Reset state variables
// 2. Display the word blanks in the DOM
const initialize = event => {
    word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]
    console.log('The word is:', word);
    displayWordStatus();
}

// Helper function that adds multiple <div>_</div> to DOM
const displayWordStatus = () => {
    // Clear(empty) all of the divs children 
    while(wordContainer.firstChild) {
        wordContainer.removeChild(wordContainer.firstChild);
    }
    for(let i = 0, j = 1; i < word.length, j < word.length; i++, j++) {
        let letter = document.createElement('div');
        letter.textContent = '_'
        letter.classList.add("letter", + j);
        wordContainer.appendChild(letter);
    }
    //word = word.split('');
    //console.log(word)
}

// On submit event: Guess a letter or guess the whole word
const guessLetter = event => {
    event.preventDefault();
    //console.log(`You submitted: ${textBox.value}`);
    letterChoice = textbox.value
    //console.log(letterChoice)
    word = word.split('');

    for(i = 0; i < word.length; i ++) {
        if (letterChoice == word[i]) {
          // change blank display to letter
        } else {
          // display "Incorrect or Make a buzzer sound"
          // clear submit form
        }
    }
}

// I could keep score later by setting score to some # and then using a decrement operator
// like score-- and when score equals 0 dispaly 'your out of turns' and a restart button





// Display a message to the user in the messagebox
const displayMessage = msg => { 
    /* Your code here! */
}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize);
document.addEventListener('submit', guessLetter);