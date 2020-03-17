const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;

const AdminSchema = mongoose.Schema({
    username: {type:String, required: true},
    password: {type:String, required: true}
})
const Admin = module.exports = mongoose.model('Admin', AdminSchema);

Admin.getUserById = function(id, callback) {
    Admin.findById(id, callback);
}

Admin.getUserByUsername = function(username, callback) {
    const query = {username: username};
    Admin.findOne(query, callback);
}

/*
Admin.addAdmin = function(newAdmin, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
            if (err) throw err;
            newAdmin.password = hash;
            newAdmin.save(callback); 
        })
    })
}*/

module.exports.comparePassword = function(candidatePassword, password, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}
