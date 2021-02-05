
/* Constants */
const WORD_LIST = ['feather', 'office', 'football', 'marzipan', 'onomatopoeia'];

let unguessedWord = [];
/* Game Logic Variables and State */
let secretWord = '';

/* DOM References */
let guessForm = document.getElementById('guess-form');
let messageContainer = document.querySelector('#message-container');
let wordContainer = document.querySelector('#word-container');
let remain = secretWord.length;

/* Functions and Game Logic */
const initialize = event => {
    secretWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]//gives me an int from 0-4

    for(let i = 0; i < secretWord.length; i++) {
        unguessedWord[i] = '_';
        // console.log(unguessedWord);
    }
    console.log('The secret word is', secretWord)
    displayWordStatus();
}

const handleSubmit = event => {
    event.preventDefault();
    let letters = secretWord.split('');
    while(remain > 0) {
        let guessAtmpt = wordContainer.value;
        if (guessAtmpt === 0) {
            break
          } if (guessAtmpt == secretWord) {
                displayWordStatus(`Congrats! You've guessed the whole word!`)
        } else if(guessAtmpt === 1) {
            } if (secretWord[i] === guessAtmpt) {
                unguessedWord[i] = guessAtmpt;
                remain--;
                displayWordStatus(`${guessAtmpt} is a match!`)
            } else {
                displayWordStatus(`${guessAtmpt} is not a match!`)
            }
    }
}


//
displayWordStatus = () => {
while(wordContainer.firstChild) {
    wordContainer.removeChild(wordContainer.firstChild);
}
//add to dom all of the unguessed letters
unguessedWord.forEach(letter => {
    let letterDiv = document.createElement('div');
    letterDiv.textContent = letter;
    letterDiv.classList.add('letter')
    wordContainer.appendChild(letterDiv);
})
}


/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize)
guessForm.addEventListener('click', handleSubmit);