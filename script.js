document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        appendMessage(userInput, 'user-message');
        document.getElementById('user-input').value = '';
        setTimeout(() => {
            respondToUser(userInput);
        }, 1000);
    }
});

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
    }

    appendMessage(response, 'bot-message');
}

function containsSwearWords(input) {
    const swearWords = ['swearword1', 'swearword2', 'swearword3']; // Add more swear words to the list
    return swearWords.some(swearWord => input.includes(swearWord));
}
 