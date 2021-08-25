var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    let data = {name: 'kukaro'};
    console.log(req);
    res.send(data);
});

router.get('/view', function (req, res, next) {
    res.render('long-url', { });
});


module.exports = router;
