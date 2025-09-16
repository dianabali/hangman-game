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
            // Turn the word into an array of letters. Map letters to span elements
            .split('') 
            .map(letter => ` 
                <span class="letter">${correctLetters.includes(letter) ? letter : ''}</span>
            `).join('')}
    `;

    const innerWord = wordEl.innerText.replace(/\n/g, ''); // Remove new line characters

    if (innerWord === selectedWord) { // Check if the user has won
        finalMessage.innerText = 'Yayyyy! You won!😊';
        popup.style.display = 'flex';
    }
}

// Update the wrong letters
function displayWrongLetters() {
    wrongLettersEl.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `; 


// Show notification
function showNotification() {
    notification.classList.add('show');

    // Hide the notification after 2 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Keydown letter press
window.addEventListener('keydown', e => {
    if (e.keyCode >= 65 && e.keyCode <= 90) { // Check if the key pressed is a letter
        const letter = e.key; // Get the letter pressed 

        if (selectedWord.includes(letter)) { // Check if the letter is in the word
            if (!correctLetters.includes(letter)) { // Check if the letter has not been guessed already
                correctLetters.push(letter);
                displayWord();
            } else {
                showNotification();
            }
        } else {
            if (!wrongLetters.includes(letter)) { // Check if the letter has not been guessed already
                wrongLetters.push(letter);
                displayWrongLetters();
            } else {
                showNotification();
            }
        }
    }
});

displayWord();


