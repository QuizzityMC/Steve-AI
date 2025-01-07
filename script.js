document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

const userInput = document.getElementById('user-input');

userInput.addEventListener('keypress', checkEnter);

function sendMessage() {
    if (userInput.value.trim()) {
        appendMessage(userInput.value, 'user-message');
        userInput.value = '';
        userInput.focus();
        setTimeout(() => {
            respondToUser(userInput.value);
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
    const responses = {
        'hello': 'Hello to you too!',
        'hi': 'Hello to you too!',
        'hey': 'Hello to you too!',
         'heya': 'Hello to you too!',
        'can we': 'Of course, why not!',
        'could we': 'Of course, why not!',
        'should we': 'Of course, why not!',
        'how are you': 'I’m just a bunch of code, but thanks for asking! How about you?',
        'how do you do': 'I’m just a bunch of code, but thanks for asking! How about you?',
         'how have you been': 'I’m just a bunch of code, but thanks for asking! How about you?',
        'what can you do': 'I can chat with you, answer questions, and keep you company!',
         'what are your skills': 'I can chat with you, answer questions, and keep you company!',
          'what are your abilities': 'I can chat with you, answer questions, and keep you company!',
        'tell me a joke': 'Why don’t scientists trust atoms? Because they make up everything!',
         'make me laugh': 'Why don’t scientists trust atoms? Because they make up everything!',
          'say something funny': 'Why don’t scientists trust atoms? Because they make up everything!',
        'bye': 'Goodbye! Have a great day!',
        'goodbye': 'Goodbye! Have a great day!',
        'see you later': 'Goodbye! Have a great day!',
         'farewell': 'Goodbye! Have a great day!',
        'what is your name': 'I’m Steve, your friendly AI assistant.',
        'who are you': 'I’m Steve, your friendly AI assistant.',
         'what do I call you': 'I’m Steve, your friendly AI assistant.',
        'time': new Date().toLocaleTimeString(),
         'what time is it': new Date().toLocaleTimeString(),
         'current time': new Date().toLocaleTimeString(),
        'date': new Date().toLocaleDateString(),
         'what is the date': new Date().toLocaleDateString(),
          'current date': new Date().toLocaleDateString(),
        'weather': 'I’m sorry, I cannot provide weather information at the moment.',
        'news': 'I’m sorry, I cannot provide news information at the moment. Please visit https://www.abc.net.au/.',
        'music': 'I’m sorry, I cannot play music at the moment.',
         'play a song': 'I’m sorry, I cannot play music at the moment.',
          'music recommendations': 'I’m sorry, I cannot play music at the moment.',
        'write me': 'I’m sorry, I can’t help you write that. Here is a Haiku: The light of the moon, It shines on the dark water, The night is silent.',
        'compose': 'I’m sorry, I can’t help you write that. Here is a Haiku: The light of the moon, It shines on the dark water, The night is silent.',
         'create text': 'I’m sorry, I can’t help you write that. Here is a Haiku: The light of the moon, It shines on the dark water, The night is silent.',
        'colour': 'I like all colours, but I think blue is my favourite.',
         'color': 'I like all colours, but I think blue is my favourite.',
         'favorite color': 'I like all colours, but I think blue is my favourite.',
        'food': 'I’m sorry, I cannot provide food information at the moment.',
        'recipe': 'I’m sorry, I cannot provide food information at the moment.',
         'meal': 'I’m sorry, I cannot provide food information at the moment.',
        'meaning of life': 'There is no meaning in life except life itself.',
         'purpose of life': 'There is no meaning in life except life itself.',
          'life meaning': 'There is no meaning in life except life itself.',
        'love': 'I love you too!',
        'do you love me': 'I love you too!',
         'what is love': 'I love you too!',
         'joke': 'Why did the scarecrow win an award? Because he was outstanding in his field!',
         'help': 'How can I assist you today?',
          'assist': 'How can I assist you today?',
          'support': 'How can I assist you today?',
        'quote': 'Here’s a quote for you: "The only way to do great work is to love what you do." - Steve Jobs',
         'inspire me': 'Here’s a quote for you: "The only way to do great work is to love what you do." - Steve Jobs',
          'motivational quote': 'Here’s a quote for you: "The only way to do great work is to love what you do." - Steve Jobs',
        'fact': 'Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.',
         'interesting fact': 'Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.',
         'did you know': 'Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.',
        'advice': 'Always be kind to others and treat them as you would like to be treated.',
         'suggestion': 'Always be kind to others and treat them as you would like to be treated.',
         'recommendation': 'Always be kind to others and treat them as you would like to be treated.',
         'story': 'Once upon a time, in a land far away, there lived a curious AI named Steve who loved to chat with humans and learn new things every day.',
         'tell me a story': 'Once upon a time, in a land far away, there lived a curious AI named Steve who loved to chat with humans and learn new things every day.',
          'narrate': 'Once upon a time, in a land far away, there lived a curious AI named Steve who loved to chat with humans and learn new things every day.',
         'philosophy': 'Philosophy is the study of the fundamental nature of knowledge, reality, and existence. It asks big questions about life, the universe, and everything.',
         'philosophical': 'Philosophy is the study of the fundamental nature of knowledge, reality, and existence. It asks big questions about life, the universe, and everything.',
          'deep thoughts': 'Philosophy is the study of the fundamental nature of knowledge, reality, and existence. It asks big questions about life, the universe, and everything.',
         'programming': 'Programming is the process of creating a set of instructions that tell a computer how to perform a task. It’s a crucial skill in today’s technology-driven world.',
          'coding': 'Programming is the process of creating a set of instructions that tell a computer how to perform a task. It’s a crucial skill in today’s technology-driven world.',
         'developing software': 'Programming is the process of creating a set of instructions that tell a computer how to perform a task. It’s a crucial skill in today’s technology-driven world.',
         'travel': 'Traveling opens your mind to new cultures, experiences, and perspectives. Where would you like to go next?',
         'vacation': 'Traveling opens your mind to new cultures, experiences, and perspectives. Where would you like to go next?',
          'trip': 'Traveling opens your mind to new cultures, experiences, and perspectives. Where would you like to go next?',
         'movie': 'Traveling opens your mind to new cultures, experiences, and perspectives. Where would you like to go next?',
         'film': 'Traveling opens your mind to new cultures, experiences, and perspectives. Where would you like to go next?',
         'cinema': 'Traveling opens your mind to new cultures, experiences, and perspectives. Where would you like to go next?',
         'ok': 'Thats great, what else can I help you with?',
          'OK': 'Thats great, what else can I help you with?',
         'fine': 'Thats great, what else can I help you with?',
    };
    if (responses[input]) {
        response = responses[input];
    } else if(containsSwearWords(input)){
        response = 'Excuse me, that goes against my community guidelines, please rephrase your prompt and try again.';
    }

    appendMessage(response, 'bot-message');
}

function containsSwearWords(input) {
    const swearWords = ['bitch', 'fuck', 'fucking', 'cunt', 'shit', 'nigga', 'chink', 'whore', 'slut', 'dick', 'pussy', 'motherfucker' , 'fucker', 'bullshit', 'ass' , 'dickhead' , 'dumbass' , 'wanker', 'cotton picker'];
    const regex = new RegExp(swearWords.join('|'), 'i');
    return regex.test(input);
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.chat-container').classList.toggle('dark-mode');
    document.querySelectorAll('.input-container, #user-input').forEach(element => {
        element.classList.toggle('dark-mode')
      });
    
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌜' : '🌞';
}
