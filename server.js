// Dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const formatMessage = require('./utils/message');
const { userJoin, getCurrentUser, userLeave, getOnlineUsers } = require('./utils/users');

// Import sequelize connection and store
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3002;

// Set up socket.io

const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "localhost:3002",
        methods: "GET,POST",
        credentials: "false"
    }
});


//set up custom handlebars helpers
const hbs = exphbs.create({ helpers });

//config session
const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// set up template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);



io.on('connection', (socket) => {
    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room);

        socket.join(user.room)
        // socket.emit sends message to the user connecting
        socket.emit('message', formatMessage('Code.X Chat', 'Welcome to Code.X Chat!'));
        // socket.broadcast.emit sends message to everyone but user
        socket.broadcast.to(user.room).emit('message', formatMessage('Code.X Chat', `${user.username} has joined the chat!`));
        
        io.to(user.room).emit('onlineUsers', {
            room: user.room,
            users: getOnlineUsers(user.room)
        });
    });


    // Runs when a user disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        if(user) {
            io.to(user.room).emit('message', formatMessage('Code.X Chat', `${user.username} has left the chat!`))
        };

        io.to(user.room).emit('onlineUsers', {
            room: user.room,
            users: getOnlineUsers(user.room)
        });
        
    });

    // grats the input from user and emit to io server
    socket.on('chatMsg', (msg) => {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message', formatMessage(user.username, msg))
    });
});



// set up connection for db and server
sequelize.sync({ force: false }).then(() => {
    http.listen(PORT, () => console.log(`Now listening to port ${PORT}!`));
});