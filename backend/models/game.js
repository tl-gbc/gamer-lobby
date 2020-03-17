const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
    title: {type: String},
    platform: {type: String},
    genre: {type: String},
    rating: {type: String},
    publisher: {type: String},
    release: {type: String},
    status: {type: String},
})

const Game = module.exports = mongoose.model('Game', GameSchema);