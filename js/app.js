/* Constants */
const WORD_LIST = ['producer', 'brainstorm', 'explosion', 'soup', 'feather']

/* Variables and App State */
let word = "";
let current_word = [];
/* DOM References */
let wordContainer = document.querySelector('#guess-word-container');
let textBox = document.querySelector('#textbox');
let messages = document.querySelector('#messages-container');

/* Functions and app logic */

// Initialize the game: 
// 1. Reset state variables
// 2. Display the word blanks in the DOM
const initialize = event => {
    word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]
    for (let i=0; i < word.length; i++) {
        current_word.push("_");
    }
    displayWordStatus();
}

// On submit event: Guess a letter or guess the whole word
//submit button
const guessLetter = event => {
    event.preventDefault();
    displayMessage()
    displayWordStatus()
}

// Display a message to the user in the messagebox
const displayMessage = msg => { 
    if (word.includes(textBox.value)) {
        messages.innerText = (`${textBox.value} is a match!`)
        current_word[word.indexOf(textBox.value)] = textBox.value
    } else {
        messages.innerText = (`${textBox.value} is not a match!`)
    }
}
// Helper function that adds multiple <div>_</div> to DOM
const displayWordStatus = () => {
    // Clear(empty) all of the divs children 
    while(wordContainer.firstChild) {
        wordContainer.removeChild(wordContainer.firstChild);
    }
    for(let i = 0; i < word.length; i++) {
        let letter = document.createElement('div');
        letter.textContent = current_word[i]
        letter.classList.add("letter");
        wordContainer.appendChild(letter);
    }

}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize);
document.addEventListener('submit', guessLetter);



