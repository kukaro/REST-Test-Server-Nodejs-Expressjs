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
    for(let key in req.body){
        data[key] = `${key}#${req.body[key]}`;
    }
    res.send(data);
});

module.exports = router;
