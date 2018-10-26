$('document').ready(function () {
  // initialize document or que functions
  // display first image
  displayFirstImage();
  // pre-load remaining images
  preloadImages();
  // load the gallery
  gallery();
});

// function library
/*
1. Attach a function to the clicked thumbnail
2. Stop default link behavior
3. Get the path to the big image for the clicked thumbnail
4. Create a new image object for the clicked image
5. Hide the new image so we can place it invisibly
6. Insert the new invisible image after the thumbnails
7a. Fade in the new image
7b. At the same time, remove the old image
	Oh! That means that at some point, we have to figure out what the old image was
	We should probably do that early - before we start working with a new image...
	...so maybe do that between steps 1 and 2
*/

function displayFirstImage() {
  var firstPath = $('#thumbs a:first').attr('href');
  var firstAlt = $('#thumbs img:first').attr('alt');
  var firstBigImg = '<figure id="galleryBig"><img src="' + firstPath + '"alt="' + firstAlt + '"></figure>';
  $('#thumbs').after(firstBigImg);
}

function preloadImages() {
  var arrImages = [];
  var galleryAnchors = $('#thumbs a');

  for (i = 0; i < galleryAnchors.length; i++) {
    arrImages[i] = new image();
    arrImages[i].src = galleryAnchors[i];
  }
}

function gallery() {
  $('#thumbs a').click(function (evt) {
    evt.preventDefault();
    var OldImg = $('#galleryBig').children(':first');
    var imgPath = $(this).attr('href');
    var theNewImg = $('<img src="' + imgPath + '">');
    theNewImg.hide();
    OldImg.after(theNewImg);
    theNewImg.fadeIn();
    OldImg.remove();
  }); // end click anon fcn
}
