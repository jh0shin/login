var express = require('express');
var router = express.Router();

var mysqlDB = require('../db');

router.post('/', function (req, res, next) {
    var userID = req.body.user.id;
    var userPASSWORD = req.body.user.password;
    mysqlDB.query('select * from test_user where id=? and pw=?', [userID, userPASSWORD], function (err, rows, fields) {
        if (!err) {
            if (rows[0] != undefined) {
                res.json({result : 1});
            } else {
                res.json({result : 0});
            }
        } else {
            res.send('error: ' + err);
        }
    });
});

module.exports = router;