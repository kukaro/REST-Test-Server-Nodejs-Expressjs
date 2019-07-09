var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let data = {name: 'kukaro'};

    res.send(data);
});

module.exports = router;
