var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sub-page', { title: 'Sub' });
});

module.exports = router;
