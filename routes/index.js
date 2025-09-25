var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'to the public server of J. Monteiro' });
});

module.exports = router;
