function globalFunctions() {
  anchorBlank();
  currentPage();
  accordion();
  tableStripe();;
  duckgallery();
  duckContact();
  duckMovies();
} // end globalFunctions

function anchorBlank() {
  var allAnchor = document.getElementsByTagName('a');

  for (i = 0; i < allAnchor.length; i++) {
    var theUrl = allAnchor[i].getAttribute('href');
    var exUrl = theUrl.startsWith("http" || "https");
    if (exUrl == true) {
      allAnchor[i].target = '_blank';
    } // End if
  } // End for loop
} //end anchorBlank

function currentPage() {
  var siteTitle = $('title').text();
  var pathname = $(location).attr('pathname');
  var curPage = pathname.substring(pathname.lastIndexOf('/') + 1);

  $('a').each(function () {
    if (siteTitle == 'Oh Duck!' && curPage == $(this).attr('href')) {
      $(this).attr('class', 'pageHighlight');
    } // end if
    if (siteTitle == 'Aquaphobic fish' && curPage == $(this).attr('href')) {
      $(this).attr('class', 'currentLink');
    } // end if

    if (siteTitle == 'Oh Duck!' && curPage == '') {
      $('a[href="index.html"]').attr('class', 'pageHighlight');
    } // end if

    if (siteTitle == 'Aquaphobic fish' && curPage == '') {
      $('a[href="index.html"]').attr('class', 'currentLink');
    } // end if
  }); // end each anon function
} //end currentPage

function accordion() {
  //  if($('h2').text() == 'Who has the most rubber ducks?') {
  //    $(this).append('<div>');
  //  }
  //  if($('h2').text() == 'Are all rubber ducks yellow?') {
  //    $(this).prepend('</div>');
  //  }

  $('#faqs').accordion({
    collapsible: true,
    heightStyle: 'content',
    active: false
  });

  $('#fishfaq').accordion({
    collapsible: true,
    heightStyle: 'content',
    active: false
  });
} //end accordion

function tableStripe() {
  $('#duck_stories tr:even').addClass('even-row');
  $('#duck_stories tr:odd').addClass('oddrow');
  $('#duck_stories tr td:first-child').css({
    'text-decoration': 'underline',
    'color': '#006'
  });

  $('#duck_stories tr:not(:first-child)').hover(function () {
    $(this).toggleClass('over-row');
  });

  $('#fishfun tr:even').addClass('rowA');
  $('#fishfun tr:odd').addClass('rowB');

  $('#fishfun tr:not(:first-child)').hover(function () {
    $(this).toggleClass('rowOver');
  });

  $('#duck_stories tr:not(:first-child), #fishfun tr:not(:first-child)').css('cursor', 'pointer').click(function (evt) {
    evt.preventDefault();
    var anchorLink = $(this).find('a').attr('href');
    window.open(anchorLink);
  });
} //end tableStripe

function duckgallery() {
  var galleryImages = [];
  var loadThese = $('#galleryThumbs a');
  for (i = 0; i < loadThese.length; i++) {
    galleryImages[i] = new Image();
    galleryImages[i].src = loadThese[i];
  } // end for

  var firstImagePath = $('#galleryThumbs a').attr('href');
  var firstImageAlt = $('#galleryThumbs a img').attr('alt');
  var firstImage = $('<figure id="galleryBig"><img src="' + firstImagePath + '" alt="' + firstImageAlt + '"><figcaption>' + firstImageAlt + '</figcaption></figure>');
  $('#galleryThumbs').after(firstImage);

  $('#gallery a').click(function (evt) {
    evt.preventDefault();
    oldImage = $('#galleryBig').children(':first');
    oldCapt = $('#galleryBig').children('figcaption');
    var imgPath = $(this).attr('href');
    var imgAlt = $(this).children('#galleryThumbs a img').attr('alt');
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

function duckContact() {
  var elements = $('input:text, textarea');
  elements.focus(function () {
    var defVal = $(this).prop('value');
    var curVal = $(this).val();
    if (defVal == curVal) {
      $(this).val('');
    } // end if
  }); // end focus anon function

  elements.blur(function () {
    var defVal = $(this).prop('defaultValue');
    if ($(this).val() == '') {
      $(this).val(defVal);
    } // end if
  }); // end blur anon function

  $('#content form').validate({
    rules: {
      fullname: 'required',
      emailaddy: {
        required: true,
        email: true
      },
      sightingdate: 'required',
      date: 'required'
    },
    messages: {
      fullname: 'Please enter your name.',
      emailaddy: 'Please enter your email.'
    }
  });

  $('#sightingdate').datepicker({
    maxDate: 0
  });

  $('#formDuck, #formCow, #formRabbit').draggable({
    cursor: 'move',
    opacity: .75,
    zIndex: 100,
    revert: true
  });
  $('#formMountains, #formPond, #formSpace').droppable({
    hoverClass: 'dropHighlight',
    tolerance: 'intersect',
    accept: '#formDuck, #formCow, #formRabbit',
    drop: function (event, ui) {
      var dropId = $(this).attr('id');
      var dragId = ui.helper.attr('id');

      if (dropId == 'formPond' && dragId == 'formDuck') {
        $('#content form').submit();
      }
    }
  });
} // end contactVal

function duckMovies() {

  var pathname = $(location).attr('pathname');
  var curPage = pathname.substring(pathname.lastIndexOf('/') + 1);

  if(curPage == 'media.html') {

  $('#movies').remove();
  $('p').after('<div id="movies"></div>');

  var link = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=1eeeeb00d14043ac982b41707fef4655&query=duck';

  $.getJSON(link, function (data) {
    var results = data.results;
    var numResult = data.num_results;

    $('#movies').append('<h3>Viewing ' + numResult + ' movies</h3>');

    $.each(results, function(detailsIndex, detailsValue) {
      var title = detailsValue.display_title;
      var rating = detailsValue.mpaa_rating;
      var short = detailsValue.summary_short;
      var opening = detailsValue.opening_date;
      var movieLink = detailsValue.link.url;

      var detailString = title + ' ' + rating;
            detailString += '<br>' + short;
            detailString += '<br><a href="' + movieLink + '" target="_blank">' + movieLink + '</a>';
            var li = '<p>' + detailString + '</p> <br>';
            $('#movies').append(li);
    });
  }); // end getJSON

  }

}
