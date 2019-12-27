
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    post: 3000,
    user: 'root',
    password: '1q2w3e4r',
    database: 'test_user'
});
// need to change user and password (use user except root with granting permission)

module.exports = connection;