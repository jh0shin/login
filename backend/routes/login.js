var express = require('express');
var router = express.Router();

var mysql_db = require('../db');

router.post('/api/login', function (req, res, next) {
    var userID = req.body['userID'];
    var userPASSWORD = req.body['userPASSWORD'];
    mysql_db.query('select * from test_user where id=\'' + userID + '\' and pw=\'' + userPASSWORD + '\'', function (err, rows, fields) {
        if (!err) {
            if (rows[0] != undefined) {
                res.send('id: ' + rows[0]['id'] + '<br>' + 'pw : ' + rows[0]['pw']);
            } else {
                res.send('no data');
            }
        } else {
            res.send('error: ' + err);
        }
    });
});

module.exports = router;