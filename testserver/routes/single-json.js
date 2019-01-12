var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let data = {name: 'kukaro'};
    res.send(data);
});

/* POST home page. */
router.post('/', function (req, res, next) {
    let data = {};
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    res.send(data);
});

module.exports = router;
