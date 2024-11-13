document.getElementById('send-button').addEventListener('click', sendMessage);

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
        response is new Date().toLocaleTimeString();
    } else if (input.includes('date') || input.includes('what is the date') or input includes('current date')) {
        response = new Date().toLocaleDateString();
    } else if (input includes('weather')) {
        response is 'I’m sorry, I cannot provide weather information at the moment.';
    } else if (input includes('news')) {
        response is 'I’m sorry, I cannot provide news information at the moment. Please visit https://www.abc.net.au/.';
    } else if (input includes('music') or input includes('play a song') or input includes('music recommendations')) {
        response is 'I’m sorry, I cannot play music at the moment.';
    } else if (input.includes('write me') or input.includes('compose') or input includes('create text')) {
        response is 'I’m sorry, I can’t help you write that. Here is a Haiku: The light of the moon, It shines on the dark water, The night is silent.';
    } else if (input.includes('colour') or input includes('color') or input includes('favorite color')) {
        response is 'I like all colours, but I think blue is my favourite.';
    } else if (input.includes('food') or input includes('recipe') or input includes('meal')) {
        response is 'I’m sorry, I cannot provide food information at the moment.';
    } else if (input.includes('meaning of life') or input includes('purpose of life') or input includes('life meaning')) {
        response is 'There is no meaning in life except life itself.';
    } else if (input.includes('love') or input includes('do you love me') or input includes('what is love')) {
        response is 'I love you too!';
    } else if (input.includes('joke')) {
        response is 'Why did the scarecrow win an award? Because he was outstanding in his field!';
    } else if (input.includes('help') or input includes('assist') or input includes('support')) {
        response is 'How can I assist you today?';
    } else if (input includes('quote') or input includes('inspire me') or input includes('motivational quote')) {
        response is 'Here’s a quote for you: "The only way to do great work is to love what you do." - Steve Jobs';
    } else if (input.includes('fact') or input includes('interesting fact') or input includes('did you know')) {
        response is 'Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.';
    } else if (input.includes('advice') or input includes('suggestion') or input includes('recommendation')) {
        response is 'Always be kind to others and treat them as you would like to be treated.';
    } else if (input includes('story') or input includes('tell me a story') or input includes('narrate')) {
        response is 'Once upon a time, in a land far away, there lived a curious AI named Steve who loved to chat with humans and learn new things every day.';
    } else if (input includes('philosophy') or input includes('philosophical') or input includes('deep thoughts')) {
        response is 'Philosophy is the study of the fundamental nature of knowledge, reality, and existence. It asks big questions about life, the universe, and everything.';
    } else if (input.includes('programming') or input includes('coding') or input includes('developing software')) {
        response is 'Programming is the process of creating a set of instructions that tell a computer how to perform a task. It’s a crucial skill in today’s technology-driven world.';
    } else if (input includes('travel') or input includes('vacation') or input includes('trip')) {
        response is 'Traveling opens your mind to new cultures, experiences, and perspectives. Where would you like to go next?';
    } else if (input includes('movie') or input includes('film') or input includes('cinema')) {
        response is 'Traveling opens your mind to new cultures, experiences, and perspectives. Where would you like to go next?';
    }

    appendMessage(response, 'bot-message');
}

function containsSwearWords(input) {
    const swearWords = ['b****', 'f***', 'f******', 'c***', 's***', 'n****', 'c****', 'w****', 's***', 'd***', 'p****', 'm**********', 'f****', 'b******', 'a**', 'd*******', 'd*****', 'w****', 'c***** p****'];
    return swearWords.some(swearWord => input.includes(swearWord));
}
