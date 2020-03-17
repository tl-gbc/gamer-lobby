const express = require('express');
const Admin = require('../models/admin');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const passport = require('passport');
module.exports = router;


router.post('/register', (req, res, next) => {
    const newAdmin = new Admin({
        username: req.body.username,
        password: req.body.password
    });

    Admin.addAdmin(newAdmin, (err, admin) => {
        if (err) {
            res.json({success: false, msg: 'failed'});
        } else {
            res.json({success: true, msg: 'registered'});
        }
    })
});

// Authenticate 
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.getUserByUsername(username, (err, admin) => {
        if (err) throw err;
        if (!admin) {
            return res.json({success: false, msg: 'Wrong username'});
        }
            if (password == admin.password) {
                const token = jwt.sign(admin.toJSON(), config.secret, {
                    expiresIn: '24hr' 
                });
                res.json({
                    success: true, 
                    token: 'JWT ' + token,
                    admin: {
                        id: admin._id, 
                        username: admin.username,
                        //password: admin.password
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password'});
            }
    })
});


/*router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({admin: req.user});
    console.log({admin: req.user})
});*/

module.exports = router;