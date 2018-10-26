$('document').ready(function(){
  setInterval('rotateImages()', 3000);
}); // end doc ready

function rotateImages(){
  var currentPhoto = $('#photoShow img.current');
  var nextPhoto = currentPhoto.next();
  if(nextPhoto.length == 0){
      nextPhoto = $('#photoShow img:first');
     } // end if
  currentPhoto.removeClass('current').addClass('previous');
  
  nextPhoto.css('opacity', 0).addClass('current').animate({'opacity': 1},1000,function(){
    currentPhoto.removeClass('previous');
    } // end callback function
  ); // end animate()
  
} // end function
