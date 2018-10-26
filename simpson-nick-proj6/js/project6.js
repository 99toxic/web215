$('document').ready(function () {
  showHide();
  setInterval('rotateImages()', 4000);
});

function showHide() {
  var currentPhoto = $('#photoShow img.current');
  var firstWidth = $('img:first').width();
  var firstHeight = $('img:first').height();

  $('#photoShow img:not(:first)').css({opacity: 0.0});

  $('#photoShow').width(firstWidth).height(firstHeight);
}

function rotateImages() {
  var currentPhoto = $('#photoShow img.current');

  var nextPhoto = currentPhoto.next();
  if (nextPhoto.length == 0) {
    nextPhoto = $('#photoShow img:first');
  } // end if

  var nextWidth = nextPhoto.width();
  var nextHeight = nextPhoto.height();

  currentPhoto.css({opacity: 0.0}).removeClass('current');

  nextPhoto.css({opacity: 0.0}).addClass('current').animate({opacity: 1.0}, 2000); // end callback

  $('#photoShow').animate({
    width: nextWidth,
    height: nextHeight
    });

} // end rotateImages
