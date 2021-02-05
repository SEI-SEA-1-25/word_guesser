
const WORD_LIST = ['feather', 'offense', 'football', 'marzipan', 'onomonopoeia']

let unGuessedWord = []

let secretWord = "";


let guessForm = document.getElementById('#guess-form')
let messageCenter = document.querySelector('#message-container')
let wordContainer = document.querySelector('#word-container')



const initialize = event => {
    secretWord = WORD_LIST[Math.floor(Math.random( ) * WORD_LIST.length)]
    // console.log('the secret word is', secretWord);
    for (let i = 0; i < secretWord.length; i++) {
        unGuessedWord.push('_')
        
    }
    console.log(unregistered);
    console.log('the secret word is', secretWord);
    displayWordStatus();
}
const handleSubmit = event => {

}
displayWordStatus = () => {
     while (wordContainer.firstChild)
     console.log('');
}

document.addEventListener('DOMContentLoaded', initialized);
document.addEventListener('submit', handleSubmit);

