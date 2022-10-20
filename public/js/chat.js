const chatInput = document.getElementById('chatInput');
const username = document.getElementById('user');
console.log(username)
const socket = io();

let user = $('#user').text();
console.log(user)

socket.on('message', message => {
    console.log(message);
    // outputMessage(message);
    $(".chat-box").append(`<div class="chat-message">
        <p class="chatInfo">${message.username} @ <span>${message.time}:</span></p>
        <p class="chatMsg">${message.text}</p></div>`)
    
    //Need to find a way to include autoscroll function for chatbox.
});

// Chat input
chatInput.addEventListener('submit', (e) => {
    e.preventDefault();

    const msg = e.target.elements.msg.value;

    socket.emit('chatMsg', msg)

    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

// function outputMessage(message)

// var user = {};

// socket.on('user-connected', (users) => {
//     $(".chat-box").append('<div class="chat-message"><p>' + users.user + ' has joined chat.</p>')
// });

// socket.on('user-disc', (users) => {
//     $(".chat-box").append('<div class="chat-message><p>' + users.user + ' has joined.</p>')
// });

// socket.on('new-message', (data) => {
//     $(".chat-box").append('<div class="chat-message><p>' + data.user + ': ' + data.message +'</p>')
// });

// socket.on('online-users', (users) => {
//     const values = Object.values(users)
//     socket.emit('send-users', value);
// });

// socket.on('display-users', (values) => {

// })