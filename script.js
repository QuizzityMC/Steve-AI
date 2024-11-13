document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        appendMessage(userInput, 'user-message');
        document.getElementById('user-input').value = '';
        setTimeout(() => {
            appendMessage("Hey, how's it going!", 'bot-message');
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
