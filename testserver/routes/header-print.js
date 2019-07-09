var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let data = {name: 'kukaro'};
    console.log('**********************');
    console.log(req.headers);
    console.log('**********************');
    // res.set({'access-control-allow-origin':'http://127.0.0.1:5500'});
    console.log(res.getHeaders());
    res.send(data);
});

module.exports = router;
