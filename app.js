// Constants//
const WORD_LIST = ['feather', 'offense', 'defense', 'marzipan', 'jalopy']


// Game Logic Variables and Game State //
let secretWord = " ";
let unguessedWord = []
let splitSecretWord = []


// DOM References //
let guessForm = document.getElementById('guess-form')
let wordContainer = document.getElementById('word-container')
let inputBar = document.getElementById('input-bar')
let messageContainer = document.getElementById('message-container')







// Functions and Game Logic // 

const initialize = event => {
    secretWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)] 
    console.log(secretWord)

    unguessedWord = secretWord.split('').map(letter => "_")
    // console.log(unguessedWord)
    displayWordStatus();
    
}


function handleSubmit (event){
    event.preventDefault();
    let userInput = inputBar.value

    splitSecretWord = secretWord.split('')
    for (let i = 0; i < splitSecretWord.length; i++)
    
        if(splitSecretWord[i].includes(userInput) === true){
            
            let letterReplace = document.getElementById(i)
            console.log(letterReplace)
            letterReplace.innerText = userInput
            let rightLetter= document.createElement('h1');
            rightLetter.textContent = 'You got it! Keep goin!'
            rightLetter.classList.add('display-msg');
            messageContainer.appendChild(rightLetter);
            setInterval(() => clearMessage(), 2000)
            
        }else{
            let wrongLetter= document.createElement('h1');
            wrongLetter.textContent = 'Wrong Letter, Guess Again!'
            wrongLetter.classList.add('display-msg');
            messageContainer.appendChild(wrongLetter);
            setInterval(() => clearMessage(), 2000)
            
        }
        
    

    
}

clearMessage = () => {

let gameMsg = document.querySelector('.display-msg')
    gameMsg.remove();
    console.log('Timeout function working!')
}

displayWordStatus = () => {
    
    while(wordContainer.firstChild) {
        wordContainer.removeChild(wordContainer.firstChild);
    }

    unguessedWord.forEach((letter, index) => {
        
        let letterDiv = document.createElement('div');
        letterDiv.textContent = letter;
        letterDiv.id = index;
        letterDiv.classList.add('letter');
        wordContainer.appendChild(letterDiv);
        // console.log(letter, index)
    })
    
}





// Event Listeners //
document.addEventListener('DOMContentLoaded', initialize)
guessForm.addEventListener('submit', handleSubmit)
