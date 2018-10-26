/*
This initializes the slideshow to run backwards.
When the button is clicked, the slideshow reverses direction
Note the time has been changed to 1 second so you can see the changes sooner
*/

$('document').ready(function(){
  // store the interval in a global variable so you can cancel it later from another function
  // also, pass an argument "p" to tell the slideshow to rotate backwards using prev() - rather than forward using next()
  repeatRotate = setInterval('rotateImages("p")', 1000);
  
  // call a new function to toggle the direction when the button is clicked
  $('#direction').click(changeDirection);
}); // end doc ready


// almost our original function from class, with a few changes
function rotateImages(rotateDir){
  
  // store the direction - p or n - in the button's "name" attribute for easy retrieval later
  $('#direction').attr('name', rotateDir);
  var currentPhoto = $('#photoShow img.current');
  
  // conditional; if "p" rotate backwards; if not "p" rotate forward
  if(rotateDir=='p'){
    var nextPhoto = currentPhoto.prev();
    if(nextPhoto.length == 0){
        nextPhoto = $('#photoShow img:last');
       } // end nested if
  } else {
    var nextPhoto = currentPhoto.next();
    if(nextPhoto.length == 0){
        nextPhoto = $('#photoShow img:first');
       } // end nested if
  } // end if-else
  currentPhoto.removeClass('current').addClass('previous');
  
  nextPhoto.css('opacity', 0).addClass('current').animate({'opacity': 1},1000,function(){
    currentPhoto.removeClass('previous');
  } // end callback function
  ); // end animate()
  
} // end function

function changeDirection(){
  
  // stop the current slideshow
  clearInterval(repeatRotate);
  
  // if the button's "name" attribute is "p", change it to "n" and set a new interval to call the rotating function without "p"
  // else - the button's name is not "p", so set it to "p" and set the interval to call the rotate function with "p"
  if($(this).attr('name') == 'p'){
    $(this).attr('name', 'n');
    repeatRotate = setInterval('rotateImages("n")', 1000);
  } else {
    $(this).attr('name', 'p');
    repeatRotate = setInterval('rotateImages("p")', 1000);
  }
}
