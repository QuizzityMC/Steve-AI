// Save chat history and theme preference
function saveToLocalStorage() {
    const chatHistory = document.getElementById('chat-box').innerHTML;
    localStorage.setItem('chatHistory', chatHistory);
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Load chat history and theme preference
function loadFromLocalStorage() {
    const savedChatHistory = localStorage.getItem('chatHistory');
    if (savedChatHistory) {
        document.getElementById('chat-box').innerHTML = savedChatHistory;
    }
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.chat-container').classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = '🌜';
    }
}

window.onload = function() {
    loadFromLocalStorage();
};

document.getElementById('send-button').addEventListener('click', () => {
    sendMessage();
    saveToLocalStorage();
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    toggleTheme();
    saveToLocalStorage();
});
