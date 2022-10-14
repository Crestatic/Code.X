// Dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// Import sequelize connection and store
const sequelize = require('./config/connection');
const { setEngine } = require('crypto');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3002;

//set up custom handlebars helpers
const hbs = exphbs.create({ helpers });

//config session
const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        sameSite: 'none',
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

// // Socket.IO stuff
// const users = {};

// io.on('connection', (socket) => {
//     socket.on('new-user', (user) => {
//         users[socket.id] = user
//         socket.broadcast.emit('user-connected', user)
//         socket.emit('current-users', users);
//         console.log('user joined');
//     })

//     socket.on('message', (data) => {
//         io.sockets.emit('new-message', data);
//     });

//     socket.on('send-users', (values) => {
//         io.sockets.emit('display-uers', values)
//     });
    
//     socket.on('disconnect', () => {
//         socket.broadcast.emit('user-disc', users[socket.id]);
//         delete users[socket.id];
//         socket.emit('current-users', users);
//         console.log('user disconnected')
//     })
// });


// set up connection for db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening to port ${PORT}!`));
});