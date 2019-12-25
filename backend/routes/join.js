var express = require('express');
var router = express.Router();

var mysqlDB = require('../db');

router.post('/', function (req, res, next) {
    var userID = req.body.user.id;
    var userPASSWORD = req.body.user.password;

    mysqlDB.query('insert into test_user values(?, ?)', [userID, userPASSWORD], function (err, rows, fields) {
        if (!err) {
            res.json({result : 1});
        } else {
            res.json({result : 0});
        }
    });
});

module.exports = router;