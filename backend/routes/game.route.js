const express = require('express');
const app = express();
const router = express.Router();

const Game = require('../models/game');

router.post('/add', (req, res, next) => {
    const newGame = new Game({
        title: req.body.title,
        platform: req.body.platform,
        genre: req.body.genre,
        rating: req.body.rating,
        publisher: req.body.publisher,
        release: req.body.release,
        status: req.body.status
    });

    newGame.save((err, game) => {
        if(!err){
            res.json({success: true, 
                msg: "Successfully add new game!"})
        }else{
            res.json({success: false, 
                msg: "Error! Cannot add new game!" });
            }
        });
})

router.get('/lists', function(req, res) {
    Game.find((err, game) => {
      if(!err){
        res.json(game);
      }
      else{
        console.log(err);
      }
    });
  })

router.get('/:id', function(req, res) {
    Game.findById(req.params.id, function(err, game) {
        if (err) {
            console.log(err);
        } else {
            res.json(game);
        }
    })
})


router.route('/update/:id').put((req, res, next) => {
    Game.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Game successfully updated!')
    }
  })
})

router.route('/delete/:id').delete((req, res, next) => {
    Game.findByIdAndRemove(req.params.id, (error, data) => {
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