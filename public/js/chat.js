const chatInput = document.getElementById('chatInput');
const userList = document.querySelector('.users');
const socket = io();


const username = $('#user').text();
const room = 'CodexChat';


console.log(user)

socket.emit('joinRoom', {username, room});

// Current online users
socket.on('onlineUsers', ({ room, users }) => {
    // outputRoomName(room);
    outputUsers(users);
})

socket.on('message', message => {
    console.log(message);
    // outputMessage(message);
    $(".chat-box").append(`<div class="chat-message">
        <p class="chatInfo">${message.username} @ <span>${message.time}:</span></p>
        <p class="chatMsg">${message.text}</p></div>`)
    
    //Need to find a way to include autoscroll function for chatbox
});

// Chat input
chatInput.addEventListener('submit', (e) => {
    e.preventDefault();

    const msg = e.target.elements.msg.value;

    socket.emit('chatMsg', msg)

    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});


function outputUsers(users) {
    userList.innerHTML = `
     ${users.map(user => `<p>${user.username}</p>`).join()}`;
}