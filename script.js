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

    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('heya')) {
        response = 'Hello to you too!';
    } else if (input.includes('can we') || input.includes('could we') || input.includes('should we')) {
        response = 'Of course, why not!';
    } else if (containsSwearWords(input)) {
        response = 'Excuse me, that goes against my community guidelines, please rephrase your prompt and try again.';
    } else if (input.includes('how are you') || input.includes('how do you do') || input.includes('how have you been')) {
        response = 'I’m just a bunch of code, but thanks for asking! How about you?';
    } else if (input.includes('what can you do') || input.includes('what are your skills') || input.includes('what are your abilities')) {
        response = 'I can chat with you, answer questions, and keep you company!';
    } else if (input.includes('tell me a joke') || input.includes('make me laugh') || input.includes('say something funny')) {
        response = 'Why don’t scientists trust atoms? Because they make up everything!';
    } else if (input.includes('bye') || input.includes('goodbye') || input.includes('see you later') || input.includes('farewell')) {
        response = 'Goodbye! Have a great day!';
    } else if (input.includes('what is your name') || input.includes('who are you') || input.includes('what do I call you')) {
        response = 'I’m Steve, your friendly AI assistant.';
    } else if (input.includes('time') || input.includes('what time is it') || input.includes('current time')) {
        response = new Date().toLocaleTimeString();
    } else if (input.includes('date') || input.includes('what is the date') || input.includes('current date')) {
        response = new Date().toLocaleDateString();
    } else if (input.includes('weather')) {
        response = 'I’m sorry, I cannot provide weather information at the moment.';
    } else if (input.includes('news')) {
        response = 'I’m sorry, I cannot provide news information at the moment. Please visit https://www.abc.net.au/.';
    } else if (input.includes('music') || input.includes('play a song') || input.includes('music recommendations')) {
        response = 'I’m sorry, I cannot play music at the moment.';
    } else if (input.includes('write me') || input.includes('compose') || input.includes('create text')) {
        response = 'I’m sorry, I can’t help you write that. Here is a Haiku: The light of the moon, It shines on the dark water, The night is silent.';
    } else if (input.includes('colour') || input.includes('color') || input.includes('favorite color')) {
        response = 'I like all colours, but I think blue is my favourite.';
    } else if (input.includes('food') || input.includes('recipe') || input.includes('meal')) {
        response = 'I’m sorry, I cannot provide food information at the moment.';
    } else if (input.includes('meaning of life') || input.includes('purpose of life') || input.includes('life meaning')) {
        response = 'There is no meaning in life except life itself.';
    } else if (input.includes('love') || input.includes('do you love me') || input.includes('what is love')) {
        response = 'I love you too!';
    } else if (input.includes('joke')) {
        response = 'Why did the scarecrow win an award? Because he was outstanding in his field!';
    } else if (input.includes('help') || input.includes('assist') || input.includes('support')) {
        response = 'How can I assist you today?';
    } else if (input.includes('quote') || input.includes('inspire me') || input.includes('motivational quote')) {
        response = 'Here’s a quote for you: "The only way to do great work is to love what you do." - Steve Jobs';
    } else if (input.includes('fact') || input.includes('interesting fact') || input.includes('did you know')) {
        response = 'Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.';
    } else if (input.includes('advice') || input.includes('suggestion') || input.includes('recommendation')) {
        response = 'Always be kind to others and treat them as you would like to be treated.';
    } else if (input.includes('story') || input.includes('tell me a story') || input.includes('narrate')) {
        response = 'Once upon a time, in a land far away, there lived a curious AI named Steve who loved to chat with humans and learn new things every day.';
    } else if (input.includes('philosophy') || input.includes('philosophical') || input.includes('deep thoughts')) {
        response = 'Philosophy is the study of the fundamental nature of knowledge, reality, and existence. It asks big questions about life, the universe, and everything.';
    } else if (input.includes('programming') || input.includes('coding') || input.includes('developing software')) {
        response = 'Programming is the process of creating a set of instructions that tell a computer how to perform a task. It’s a crucial skill in today’s technology-driven world.';
    } else if (input.includes('travel') || input.includes('vacation') || input.includes('trip')) {
        response = 'Traveling opens your mind to new cultures, experiences, and perspectives. Where would you like to go next?';
    } else if (input.includes('movie') || input.includes('film') || input.includes('cinema')) {

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
