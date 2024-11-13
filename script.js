document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        appendMessage(userInput, 'user-message');
        document.getElementById('user-input').value = '';
        setTimeout(() => {
            respondToUser(userInput);
        }, 1000);
    }
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function appendMessage(text, className) {
    const messageBox = document.createElement('div');
    messageBox.className = `message ${className}`;
    messageBox.innerText = text;
    document.getElementById('chat-box').appendChild(messageBox);
    messageBox.scrollIntoView();
}

function respondToUser(input) {
    let response = "I'm not sure how to respond to that.";
    input = input.toLowerCase();

    if (input.includes('hello')) {
        response = 'Hello to you too!';
    } else if (input.includes('can we')) {
        response = 'Of course, why not!';
    } else if (containsSwearWords(input)) {
        response = 'Excuse me, that goes against my community guidelines, please rephrase your prompt and try again.';
    } else if (input.includes('how are you')) {
        response = 'I’m just a bunch of code, but thanks for asking! How about you?';
    } else if (input.includes('what can you do')) {
        response = 'I can chat with you, answer questions, and keep you company!';
    } else if (input.includes('tell me a joke')) {
        response = 'Why don’t scientists trust atoms? Because they make up everything!';
    } else if (input.includes('bye')) {
        response = 'Goodbye! Have a great day!';
    } else if (input.includes('what is your name')) {
        response = 'I’m Steve, your friendly AI assistant.';
    } else if (input.includes('time')) {
        response = new Date().toLocaleTimeString();
    } else if (input.includes('date')) {
        response = new Date().toLocaleDateString();
    } else if (input.includes('weather')) {
        response = 'I’m sorry, I cannot provide weather information at the moment.';
    } else if (input.includes('news')) {
        response = 'I’m sorry, I cannot provide news information at the moment Please visit https://www.abc.net.au/.';
    } else if (input.includes('music')) {
        response = 'I’m sorry, I cannot play music at the moment.';
    } else if (input.includes('write me')) {
        response = 'I’m sorry, I cant help you write that. Here is a Haiku: The light of the moon, It shines on the dark water, The night is silent.';
    } else if (input.includes('colour')) {
        response = 'I like all colours, but I think blue is my favourite.';
    } else if (input.includes('food')) {
        response = 'I’m sorry, I cannot provide food information at the moment.';
    } else if (input.includes('meaning of life')) {
        response = 'There is no meaning in life except life iself.';
    } else if (input.includes('love')) {
        response = 'I love you too!';
    } else if (input.includes('joke')) {
        response = 'Why did the scarecrow win an award? Because he was outstanding in his field!';
    }

    appendMessage(response, 'bot-message');
}

function containsSwearWords(input) {
    const swearWords = ['swearword1', 'swearword2', 'swearword3']; // Add more swear words to the list
    return swearWords.some(swearWord => input.includes(swearWord));
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.chat-container').classList.toggle('dark-mode');
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌜' : '🌞';
}
