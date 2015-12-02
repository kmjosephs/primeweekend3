var express = require('express');
var router = express.Router();
var memeImages = require('../memes.json')

/* GET memes page. */
router.get('/', function(req, res, next) {
  console.log('Printing memes to index.')
  res.render('memes', {title: 'BEST MEMES EVAR!', memes:memeImages});
});

module.exports = router;
