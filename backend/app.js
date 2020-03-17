const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
const config = require('./config/database');
const path= require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
      console.log('Could not connect to database: ', err);
    } else {
      console.log('Connected to database: ' + config.db);
    }
  });

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({ }));  

app.use(express.static(path.join(__dirname , '/../dist/gamer-lobby')));

const admins = require('./routes/admin.route');
const players = require('./routes/player.route');
const games = require('./routes/game.route');

app.use('/admins', admins);
app.use('/players', players);
app.use('/games', games);

app.get('*', (req, res) => {
  res.sendfile(path.join(__dirname , '/../dist/gamer-lobby/index.html'))
});

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})