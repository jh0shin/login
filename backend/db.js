var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    post: 3000,
    user: 'root',
    password: '',
    database: 'test_user'
});

module.exports = connection;