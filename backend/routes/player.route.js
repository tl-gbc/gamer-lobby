const express = require('express');
const Player = require('../models/player');
const router = express.Router();

//add new player
router.post('/add', (req, res, next) => {
    const newPlayer = new Player({
        player: req.body.player,
        rank: req.body.rank,
        score: req.body.score,
        time: req.body.time,
        favouriteGame: req.body.favouriteGame,
        status: req.body.status
    });

    newPlayer.save((err, player) => {
        if(!err){
            res.json({success: true, 
                msg: "Successfully add new player!"})
        }else{
            res.json({success: false, 
                msg: "Error! Cannot add new player!" });
            }
        });
})

//get all the players
router.get('/lists', function(req, res) {
  Player.find({}, function(err, players) {
    var playerMap = {};

    players.forEach(function(player) {
      playerMap[player._id] = player;
    });

    res.json({playerMap});
  });
});

//get one player by id
router.get('/:id', function(req, res) {
    Player.findById(req.params.id, function(err, player) {
        if (err) {
            console.log(err);
        } else {
            res.json(player);
        }
    })
})

//update
router.route('/update/:id').put((req, res, next) => {
    Player.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Player successfully updated!')
      }
    })
  })

//delete 
router.route('/delete/:id').delete((req, res, next) => {
    Player.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  
module.exports = router;