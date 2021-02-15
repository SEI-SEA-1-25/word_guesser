
/* Constants */
const WORD_LIST = ['feather', 'office', 'football', 'marzipan', 'onomatopoeia'];

let unguessedWord = [];
/* Game Logic Variables and State */
let secretWord = '';

/* DOM References */
let guessForm = document.getElementById('textInput');
let messageContainer = document.querySelector('#message-container');
let wordContainer = document.querySelector('#word-container');

/* Functions and Game Logic */
const initialize = event => {
    secretWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]//gives me an int from 0-4

    for(let i = 0; i < secretWord.length; i++) {
        unguessedWord[i] = '_';
        console.log(unguessedWord);
    }
    console.log('The secret word is', secretWord)
    displayWordStatus();
}

const handleSubmit = event => {
    event.preventDefault();
    let guess = guessForm.value;
    if(guess.length == 0) return; // Reject empty submission

    let letters = secretWord.split('');
    if(guess.length == 1) { // Guessing one letter
        if(letters.includes(guess)) {
            displayMessage(`${guess} is a match!`)
            for(let i = 0; i < secretWord.length; i++) {
                if(secretWord[i] == guess) {
                    unguessedWord[i] = guess;
                } 
            }
            displayWordStatus();
            if(!unguessedWord.includes("_")) {
                displayMessage("Congrats! You've guessed the whole word!")
            }
            
        } else {
            displayMessage(`${guess} is not a match.`)
        }
    } else {
        if(guess == secretWord) {
            displayMessage("Congrats! You've guessed the whole word!")
            unguessedWord = letters;
            displayWordStatus();
        } else {
            displayMessage(`Sorry! ${guess} is not the word I'm thinking of!`);
        }
    }
}


displayWordStatus = () => {
while(wordContainer.firstChild) {
    wordContainer.removeChild(wordContainer.firstChild);
}
//add to dom all of the unguessed letters
unguessedWord.forEach( letter => {
    let letterDiv = document.createElement('div');
    letterDiv.textContent = letter;
    letterDiv.classList.add('letter')
    wordContainer.appendChild(letterDiv);
})
}


displayMessage = msg => {
    while(messageContainer.firstChild) {
        messageContainer.removeChild(messageContainer.firstChild)
    }
    let p = document.createElement('p');
    p.textContent = msg;
    messageContainer.appendChild(p);
}


/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize)
document.addEventListener('click', handleSubmit);