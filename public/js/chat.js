const socket = io();

var user = {};

socket.on('user-connected', (users) => {
    $(".chat-box").append('<div class="chat-message"><p>' + users.user + ' has joined chat.</p>')
});

socket.on('user-disc', (users) => {
    $(".chat-box").append('<div class="chat-message><p>' + users.user + ' has joined.</p>')
});

socket.on('new-message', (data) => {
    $(".chat-box").append('<div class="chat-message><p>' + data.user + ': ' + data.message +'</p>')
});

socket.on('online-users', (users) => {
    const values = Object.values(users)
    socket.emit('send-users', value);
});

socket.on('display-users', (values) => {

})