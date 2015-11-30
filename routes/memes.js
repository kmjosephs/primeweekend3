// I just modified this from index.js. I don't really understand it.

var express = require('express');
var router = express.Router();
var memeImages = require('../memes.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('In memes');
  res.render('memes', {memes:memeImages });
});

module.exports = router;
