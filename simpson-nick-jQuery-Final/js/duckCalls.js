$('document').ready(function() {
  anchorBlank();
  currentPage('pageHighlight');
  accordion('#faqs');
  tableStripe('even-row', 'oddrow', 'over-row');
  gallery('#galleryThumbs a', '#galleryThumbs a img', '#galleryThumbs');
  focusArea();
  formVal('#fullname', '', '', '#emailaddy', '#sightingdate');
  dragDrop('#formDuck, #formCow, #formRabbit', '#formMountains, #formPond, #formSpace', 'dropHighlight', 'formPond', 'formDuck');
  movies('media.html', 'duck');
});
