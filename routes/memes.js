var express = require('express');
var router = express.Router();
var memeImages = require('../memes.json');


router.get('/', function(req, res, next) {
  console.log('In memes');
  res.render('memes', {memes:memeImages });
});

module.exports = router;
