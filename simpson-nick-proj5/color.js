$('document').ready(function () {
  $('p').hide();
  $('p:first').show();
  colorPicker();
});

function colorPicker() {

  $('a').click(function (evt) {

    var anchorId = $(this).attr('href');
    var colorName = $(this).text();
    var img = 'images/' + colorName + '.jpg';

    /* Prevents default use of anchors */
    evt.preventDefault();

    /* Creates class for anchor tags */
    $('a').removeClass('selectedColor');
    $(this).addClass('selectedColor');

    /* Creates class for body */
    $('body').attr('class', colorName);

    /* Creates image src and title */
    $('#colorSample').attr("src", img).attr("title", 'The color is ' + colorName);

    /* hides all p and shows the color */
    $('p').hide();
    $(anchorId).show();

  }); // end click anon fcn

} // end colorPicker
