var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    post: 3000,
    user: 'root',
    password: '1q2w3e4r',
    database: 'test_user'
});

module.exports = connection;