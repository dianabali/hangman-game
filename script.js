const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'language', 'interface', 'javascript', 'developer', 'function', 'string', 'website', 'computer', 'software'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// Show the hidden word
function displayWord() {
    wordEl.innerHTML = `
        ${selectedWord
            .split('') // Turn the word into an array of letters. Map letters to span elements
            .map(letter => ` 
                <span class="letter">${correctLetters.includes(letter) ? letter : ''}</span>
            `).join('')}
    `;

    const innerWord = wordEl.innerText.replace(/\n/g, ''); // Remove new line characters

    if (innerWord === selectedWord) { // Check if the user has won
        finalMessage.innerText = 'Yayyyy! You won! 😊';
        popup.style.display = 'flex';
    }
}

displayWord();

// 6 
