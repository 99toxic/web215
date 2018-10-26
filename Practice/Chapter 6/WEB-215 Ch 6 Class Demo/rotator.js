$('document').ready(function(){
  setInterval('rotateImages()', 3000); // rotate every 30 sec
});

function rotateImages(){
  var currentPhot = $('#photoShow img.current');
  var nextPhoto = currentPhot.next(); // goes to next photo
  
  if(nextPhoto.length == 0) {
    nextPhoto = $('#photoShow img:first'); // when its the end of photos start over
     }// end if
  
  currentPhot.removeClass('current').addClass('previous'); // current is z-index 2 previous z-index 1
  
  nextPhoto.css('opacity', 0).addClass('current').animate({'opacity': '1'}, 1000, function(){
    currentPhot.removeClass('previous');
  }// end callback function
  );// end animate
} // end rotateImages
