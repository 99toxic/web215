$('document').ready(function () {
  loadImages();
  displayFirst();
  gallery();
});

function loadImages() {
  var galleryImages = [];
  var loadThese = $('#thumbs a');
  for (i = 0; i < loadThese.length; i++) {
    galleryImages[i] = new Image();
    galleryImages[i].src = loadThese[i];
  }
} // end loadImages

function displayFirst() {
  var firstImagePath = $('#thumbs a').attr('href');
  var firstImageAlt = $('#thumbs a img').attr('alt');
  var firstImage = $('<figure id="galleryBig"><img src="' + firstImagePath + '" alt="' + firstImageAlt + '"><figcaption>' + firstImageAlt + '</figcaption></figure>');
  $('#thumbs').after(firstImage);
}

function gallery() {
  $('#gallery a').click(function (evt) {
    evt.preventDefault();
    oldImage = $('#galleryBig').children(':first');
    oldCapt = $('#galleryBig').children('figcaption');
    var imgPath = $(this).attr('href');
    var imgAlt = $(this).children('#thumbs a img').attr('alt');
    var newImage = $('<img src="' + imgPath + '" alt="' + imgAlt + '">');
    var newCapt = $('<figcaption>' + imgAlt + '</figcaption>');
    newImage.hide();
    newCapt.hide();
    $('#galleryBig').prepend(newImage, newCapt);
    $(newImage).fadeIn();
    $(newCapt).fadeIn();
    oldImage.remove();
    oldCapt.remove();
  }); //end anonymous fcn
} //end gallery
