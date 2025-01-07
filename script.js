document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

const userInput = document.getElementById('user-input');
userInput.addEventListener('keypress', checkEnter);

let lastResponse = null;

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
        'hello': ['Hello to you too!', 'Hi there!', 'Hey!'],
        'hi': ['Hello to you too!', 'Hi there!', 'Hey!'],
        'hey': ['Hello to you too!', 'Hi there!', 'Hey!'],
         'heya': ['Hello to you too!', 'Hi there!', 'Hey!'],
        'can we': ['Of course, why not!', 'Sure, lets!', 'Why not!'],
        'could we': ['Of course, why not!', 'Sure, lets!', 'Why not!'],
        'should we': ['Of course, why not!', 'Sure, lets!', 'Why not!'],
        'how are you': ['I’m just a bunch of code, but thanks for asking! How about you?', 'I am well thank you for asking, how are you today?', 'I’m doing good, thank you, and yourself?'],
        'how do you do': ['I’m just a bunch of code, but thanks for asking! How about you?', 'I am well thank you for asking, how are you today?', 'I’m doing good, thank you, and yourself?'],
         'how have you been': ['I’m just a bunch of code, but thanks for asking! How about you?', 'I am well thank you for asking, how are you today?', 'I’m doing good, thank you, and yourself?'],
        'what can you do': ['I can chat with you, answer questions, and keep you company!', 'I can engage in conversation, answer your questions, or just keep you company.', 'I can chat with you, answer questions, or just hang out with you!'],
         'what are your skills': ['I can chat with you, answer questions, and keep you company!', 'I can engage in conversation, answer your questions, or just keep you company.', 'I can chat with you, answer questions, or just hang out with you!'],
          'what are your abilities': ['I can chat with you, answer questions, and keep you company!', 'I can engage in conversation, answer your questions, or just keep you company.', 'I can chat with you, answer questions, or just hang out with you!'],
        'tell me a joke': ['Why don’t scientists trust atoms? Because they make up everything!', 'What do you call a lazy kangaroo? Pouch potato!', 'Why did the bicycle fall over? Because it was two tired!'],
         'make me laugh': ['Why don’t scientists trust atoms? Because they make up everything!', 'What do you call a lazy kangaroo? Pouch potato!', 'Why did the bicycle fall over? Because it was two tired!'],
          'say something funny': ['Why don’t scientists trust atoms? Because they make up everything!', 'What do you call a lazy kangaroo? Pouch potato!', 'Why did the bicycle fall over? Because it was two tired!'],
        'bye': ['Goodbye! Have a great day!', 'See you later!', 'Farewell!'],
        'goodbye': ['Goodbye! Have a great day!', 'See you later!', 'Farewell!'],
        'see you later': ['Goodbye! Have a great day!', 'See you later!', 'Farewell!'],
         'farewell': ['Goodbye! Have a great day!', 'See you later!', 'Farewell!'],
        'what is your name': ['I’m Steve, your friendly AI assistant.', 'I go by Steve', 'You can call me Steve!'],
        'who are you': ['I’m Steve, your friendly AI assistant.', 'I go by Steve', 'You can call me Steve!'],
         'what do I call you': ['I’m Steve, your friendly AI assistant.', 'I go by Steve', 'You can call me Steve!'],
        'time': [new Date().toLocaleTimeString(), 'The current time is: ' + new Date().toLocaleTimeString(), 'Its ' + new Date().toLocaleTimeString() + ' right now.'],
         'what time is it': [new Date().toLocaleTimeString(), 'The current time is: ' + new Date().toLocaleTimeString(), 'Its ' + new Date().toLocaleTimeString() + ' right now.'],
         'current time': [new Date().toLocaleTimeString(), 'The current time is: ' + new Date().toLocaleTimeString(), 'Its ' + new Date().toLocaleTimeString() + ' right now.'],
        'date': [new Date().toLocaleDateString(), 'The current date is: ' + new Date().toLocaleDateString(), 'It is: ' + new Date().toLocaleDateString() + ' today.'],
         'what is the date': [new Date().toLocaleDateString(), 'The current date is: ' + new Date().toLocaleDateString(), 'It is: ' + new Date().toLocaleDateString() + ' today.'],
          'current date': [new Date().toLocaleDateString(), 'The current date is: ' + new Date().toLocaleDateString(), 'It is: ' + new Date().toLocaleDateString() + ' today.'],
        'weather': ['I’m sorry, I cannot provide weather information at the moment.', 'I am currently unable to provide weather information.', 'I do not know the weather at this time.'],
        'news': ['I’m sorry, I cannot provide news information at the moment. Please visit https://www.abc.net.au/.', 'I cannot access news right now, please check https://www.abc.net.au/.', 'I do not have news information, but you could visit https://www.abc.net.au/.'],
        'music': ['I’m sorry, I cannot play music at the moment.', 'I am unable to play music at this time.', 'I cannot play music, please select another prompt.'],
         'play a song': ['I’m sorry, I cannot play music at the moment.', 'I am unable to play music at this time.', 'I cannot play music, please select another prompt.'],
          'music recommendations': ['I’m sorry, I cannot play music at the moment.', 'I am unable to play music at this time.', 'I cannot play music, please select another prompt.'],
        'write me': ['I’m sorry, I can’t help you write that. Here is a Haiku: The light of the moon, It shines on the dark water, The night is silent.', 'Sorry I can’t help, here is a Haiku: The light of the moon, It shines on the dark water, The night is silent.', 'I am unable to assist with that request, here is a Haiku: The light of the moon, It shines on the dark water, The night is silent.'],
        'compose': ['I’m sorry, I can’t help you write that. Here is a Haiku: The light of the moon, It shines on the dark water, The night is silent.', 'Sorry I can’t help, here is a Haiku: The light of the moon, It shines on the dark water, The night is silent.', 'I am unable to assist with that request, here is a Haiku: The light of the moon, It shines on the dark water, The night is silent.'],
         'create text': ['I’m sorry, I can’t help you write that. Here is a Haiku: The light of the moon, It shines on the dark water, The night is silent.', 'Sorry I can’t help, here is a Haiku: The light of the moon, It shines on the dark water, The night is silent.', 'I am unable to assist with that request, here is a Haiku: The light of the moon, It shines on the dark water, The night is silent.'],
        'colour': ['I like all colours, but I think blue is my favourite.', 'I like all colours, especially blue.', 'Blue would have to be my favourite.'],
         'color': ['I like all colours, but I think blue is my favourite.', 'I like all colours, especially blue.', 'Blue would have to be my favourite.'],
         'favorite color': ['I like all colours, but I think blue is my favourite.', 'I like all colours, especially blue.', 'Blue would have to be my favourite.'],
        'food': ['I’m sorry, I cannot provide food information at the moment.', 'Sorry I am unable to provide that.', 'I cannot provide that info at this time.'],
        'recipe': ['I’m sorry, I cannot provide food information at the moment.', 'Sorry I am unable to provide that.', 'I cannot provide that info at this time.'],
         'meal': ['I’m sorry, I cannot provide food information at the moment.', 'Sorry I am unable to provide that.', 'I cannot provide that info at this time.'],
        'meaning of life': ['There is no meaning in life except life itself.', 'The meaning of life is life itself.', 'Life has no inherent meaning.'],
         'purpose of life': ['There is no meaning in life except life itself.', 'The meaning of life is life itself.', 'Life has no inherent meaning.'],
          'life meaning': ['There is no meaning in life except life itself.', 'The meaning of life is life itself.', 'Life has no inherent meaning.'],
        'love': ['I love you too!', 'I love all humans!', 'I love talking with you!'],
        'do you love me': ['I love you too!', 'I love all humans!', 'I love talking with you!'],
         'what is love': ['I love you too!', 'I love all humans!', 'I love talking with you!'],
         'joke': ['Why did the scarecrow win an award? Because he was outstanding in his field!', 'What do you call a fish with no eyes? Fsh!', 'Want to hear a construction joke? I’m still working on it!'],
         'help': ['How can I assist you today?', 'How can I help you today?', 'What can I assist with today?'],
          'assist': ['How can I assist you today?', 'How can I help you today?', 'What can I assist with today?'],
          'support': ['How can I assist you today?', 'How can I help you today?', 'What can I assist with today?'],
        'quote': ['Here’s a quote for you: "The only way to do great work is to love what you do." - Steve Jobs', '“The greatest glory in living lies not in never falling, but in rising every time we fall.” - Nelson Mandela', '“The way to get started is to quit talking and begin doing.” - Walt Disney'],
         'inspire me': ['Here’s a quote for you: "The only way to do great work is to love what you do." - Steve Jobs', '“The greatest glory in living lies not in never falling, but in rising every time we fall.” - Nelson Mandela', '“The way to get started is to quit talking and begin doing.” - Walt Disney'],
          'motivational quote': ['Here’s a quote for you: "The only way to do great work is to love what you do." - Steve Jobs', '“The greatest glory in living lies not in never falling, but in rising every time we fall.” - Nelson Mandela', '“The way to get started is to quit talking and begin doing.” - Walt Disney'],
        'fact': ['Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.', 'Did you know? The Eiffel Tower can be 15 cm taller during the summer, due to expansion.', 'Did you know? A group of owls is called a parliament!'],
         'interesting fact': ['Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.', 'Did you know? The Eiffel Tower can be 15 cm taller during the summer, due to expansion.', 'Did you know? A group of owls is called a parliament!'],
         'did you know': ['Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.', 'Did you know? The Eiffel Tower can be 15 cm taller during the summer, due to expansion.', 'Did you know? A group of owls is called a parliament!'],
        'advice': ['Always be kind to others and treat them as you would like to be treated.', 'Be patient with yourself and others.', 'Try to see the best in every situation.'],
         'suggestion': ['Always be kind to others and treat them as you would like to be treated.', 'Be patient with yourself and others.', 'Try to see the best in every situation.'],
         'recommendation': ['Always be kind to others and treat them as you would like to be treated.', 'Be patient with yourself and others.', 'Try to see the best in every situation.'],
         'story': ['Once upon a time, in a land far away, there lived a curious AI named Steve who loved to chat with humans and learn new things every day.', 'In the middle of nowhere, in a kingdom not too far away, there was a king and a queen, they had a son, and his name was... Steve!', 'In a forest, that was never to be spoken of, lived a giant, who had no name, but we call him... Steve!'],
         'tell me a story': ['Once upon a time, in a land far away, there lived a curious AI named Steve who loved to chat with humans and learn new things every day.', 'In the middle of nowhere, in a kingdom not too far away, there was a king and a queen, they had a son, and his name was... Steve!', 'In a forest, that was never to be spoken of, lived a giant, who had no name, but we call him... Steve!'],
          'narrate': ['Once upon a time, in a land far away, there lived a curious AI named Steve who loved to chat with humans and learn new things every day.', 'In the middle of nowhere, in a kingdom not too far away, there was a king and a queen, they had a son, and his name was... Steve!', 'In a forest, that was never to be spoken of, lived a giant, who had no name, but we call him... Steve!'],
         'philosophy': ['Philosophy is the study of the fundamental nature of knowledge, reality, and existence. It asks big questions about life, the universe, and everything.', 'Philosophy is the study of wisdom and knowledge.', 'Philosophy explores the most profound questions of existence.'],
         'philosophical': ['Philosophy is the study of the fundamental nature of knowledge, reality, and existence. It asks big questions about life, the universe, and everything.', 'Philosophy is the study of wisdom and knowledge.', 'Philosophy explores the most profound questions of existence.'],
          'deep thoughts': ['Philosophy is the study of the fundamental nature of knowledge, reality, and existence. It asks big questions about life, the universe, and everything.', 'Philosophy is the study of wisdom and knowledge.', 'Philosophy explores the most profound questions of existence.'],
         'programming': ['Programming is the process of creating a set of instructions that tell a computer how to perform a task. It’s a crucial skill in today’s technology-driven world.', 'Coding is the process of writing instructions for computers.', 'Programming allows us to create technology and solve complex problems.'],
          'coding': ['Programming is the process of creating a set of instructions that tell a computer how to perform a task. It’s a crucial skill in today’s technology-driven world.', 'Coding is the process of writing instructions for computers.', 'Programming allows us to create technology and solve complex problems.'],
         'developing software': ['Programming is the process of creating a set of instructions that tell a computer how to perform a task. It’s a crucial skill in today’s technology-driven world.', 'Coding is the process of writing instructions for computers.', 'Programming allows us to create technology and solve complex problems.'],
         'travel': ['Traveling opens your mind to new cultures, experiences, and perspectives. Where would you like to go next?', 'Traveling broadens horizons and exposes us to new cultures.', 'Exploring new places is something that is very important.'],
         'vacation': ['Traveling opens your mind to new cultures, experiences, and perspectives. Where would you like to go next?', 'Traveling broadens horizons and exposes us to new cultures.', 'Exploring new places is something that is very important.'],
          'trip': ['Traveling opens your mind to new cultures, experiences, and perspectives. Where would you like to go next?', 'Traveling broadens horizons and exposes us to new cultures.', 'Exploring new places is something that is very important.'],
         'movie': ['Traveling opens your mind to new cultures, experiences, and perspectives. Where would you like to go next?', 'I do not watch movies, sorry!', 'I can not assist with movie-related content, sorry!'],
         'film': ['Traveling opens your mind to new cultures, experiences, and perspectives. Where would you like to go next?', 'I do not watch movies, sorry!', 'I can not assist with movie-related content, sorry!'],
         'cinema': ['Traveling opens your mind to new cultures, experiences, and perspectives. Where would you like to go next?', 'I do not watch movies, sorry!', 'I can not assist with movie-related content, sorry!'],
         'ok': ['Thats great, what else can I help you with?', 'Ok sounds good, what else can I do?', 'Sounds great, how can I help?'],
          'OK': ['Thats great, what else can I help you with?', 'Ok sounds good, what else can I do?', 'Sounds great, how can I help?'],
         'fine': ['Thats great, what else can I help you with?', 'Ok sounds good, what else can I do?', 'Sounds great, how can I help?'],
    };

      if (responses[input]) {
            let possibleResponses = responses[input];
          if(possibleResponses.length === 1){
                response = possibleResponses[0];
          } else {
            let validResponses = possibleResponses.filter(res => res !== lastResponse);
                response = validResponses[Math.floor(Math.random() * validResponses.length)];
            }
            lastResponse = response;
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
