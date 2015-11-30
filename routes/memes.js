// I just modified this from index.js. I don't really understand it.

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/memes', function(req, res, next) {
  res.render('memes', { title: 'Memes', message: 'test' });
});

module.exports = router;
