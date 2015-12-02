$(document).ready(function(){

var $commentBox = $('.commentBox');

$('.commentArea').on('submit', function(event){
  //stops page from refreshing
  event.preventDefault();

  //gets the data from the form
  var data = $(this).serializeArray();

  // new empty object
  var newComment = {};

  for (var i=0; i < data.length; i++)[
    if(data[i].name ===)
  ]



  $.ajax({url: '/comments',
    type: 'post',
    data: newComment
  }).done(function(data){

    }); // END $.ajax

}); // END on submit

}); //END document.ready
