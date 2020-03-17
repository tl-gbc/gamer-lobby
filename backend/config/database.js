//const crypto = require('crypto').randomBytes(256).toString('hex'); 

module.exports = {
    uri: 'mongodb://admin:admin@cluster0-shard-00-00-vrhvw.mongodb.net:27017,cluster0-shard-00-01-vrhvw.mongodb.net:27017,cluster0-shard-00-02-vrhvw.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
    db: 'game',
    secret : 'secret'
}