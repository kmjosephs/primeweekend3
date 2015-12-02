var express = require('express');
var router = express.Router();
var commentMessages = require('../comments.json');
var fs = require('fs');
var path = require('path');
/* Create a GET route that accepts an ID and serves every comment with an
ImageId that matches. */


router.post('/:id?', function(req, res, next){
  if (req.params.id !== undefined){
    res.send(commentMessages[req.params.id]);
  } else{
    res.send(commentMessages);
  }

});
/* I need to connect the form with the  comment box*/
router.post('/', function(req, res, next){
  var newComment = {
    message: req.body.message,
    imageId: req.body.imageId
  };

  commentMessages.push(newComment);

  var commentString = JSON.stringify(comments);

  var filePath = path.join(__dirname, '../comments.json');

  fs.writeFile(filePath, string, function(err) {
    if (err) {
      // if there is an error, "next" middleware will handle it.
      // Next in our case is the error handler in app.js
      next(err);
    } else {
      // it's all good! Send the object back.
      res.send(newComment);
    }
  });

});


module.exports = router;
