const express = require('express');
const path = require('path');
const session = require('session');
const socketio = require('socket.io');
const morgan = require('morgan');
const db = require('./db');

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', '/public')))

app.use('/api', require('./routes'));

app.get('*', function (req, res, next) {
    res.status(200).send('../public/index.html');
})



const server = app.listen(port, () => {
    console.log('Planet Earth')
    db.sync({force:false})
  });
  
const io = socketio(server);

require('../socket/socket.js')(io);