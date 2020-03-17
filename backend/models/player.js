const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
    player: {type: String, required: true},
    rank: {type: String, required: true},
    score: {type: String},
    time: {type: String},
    //gamePlayed: {type: String},
    favouriteGame: {type: String},
    status: {type: String},
})

const Player = module.exports = mongoose.model('Player', PlayerSchema);