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

function currentPage(className) {
  var pathname = $(location).attr('pathname');
  var curPage = pathname.substring(pathname.lastIndexOf('/') + 1);

  $('a').each(function () {
    if (curPage == $(this).attr('href')) {
      $(this).attr('class', className);
    } // end if

    if (curPage == '') {
      $('a[href="index.html"]').attr('class', className);
    } // end if
  }); // end each anon function
} //end currentPage

function accordion(pageId) {
  $(pageId).accordion({
    collapsible: true,
    heightStyle: 'content',
    active: false
  }); // end accordion
} //end accordion

function tableStripe(rowA, rowB, hoverClass) {
  /* Stripe Table */
  $('table tr:even').addClass(rowA);
  $('table tr:odd').addClass(rowB);

  /* Formatte all text like hyperlinks */
  $('table tr td:first-child').css({
    'text-decoration': 'underline',
    'color': '#006'
  }); // end css

  /* Gives a css hover class and finger on hover (not to header row) */
  $('table tr:not(:first-child)').css('cursor', 'pointer').hover(function () {
    $(this).toggleClass(hoverClass);
  }); // end hover

  /* Opens each row to link destination (not to header row) */
  $('table tr:not(:first-child)').click(function (evt) {
    evt.preventDefault();
    var anchorLink = $(this).find('a').attr('href');
    window.open(anchorLink);
  }); // end click
} //end tableStripe

function gallery(galleryAnchor, galleryThumbImg, galleryThumb) {
  var galleryImages = [];
  var loadThese = $(galleryAnchor);
  for (i = 0; i < loadThese.length; i++) {
    galleryImages[i] = new Image();
    galleryImages[i].src = loadThese[i];
  } // end for loop

  /* Create big imgage and figcaption with alt text */
  var firstImagePath = $(galleryAnchor).attr('href');
  var firstImageAlt = $(galleryThumbImg).attr('alt');
  var firstImage = $('<figure id="galleryBig"><img src="' + firstImagePath + '" alt="' + firstImageAlt + '"><figcaption>' + firstImageAlt + '</figcaption></figure>');
  $(galleryThumb).after(firstImage);

  $('#gallery a').click(function (evt) {
    evt.preventDefault();
    oldImage = $('#galleryBig').children(':first');
    oldCapt = $('#galleryBig').children('figcaption');
    var imgPath = $(this).attr('href');
    var imgAlt = $(this).children(galleryThumbImg).attr('alt');
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

function focusArea() {
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

} //end focusArea

function formVal(fullId, firstId, lastId, emailId, dateId) {

  /* Remove old  attr names and replace with new to make global */
  $(fullId).removeAttr('name');
  $(fullId).attr('name', 'full');

  $(firstId).removeAttr('name');
  $(firstId).attr('name', 'first');

  $(lastId).removeAttr('name');
  $(lastId).attr('name', 'last');

  $(emailId).removeAttr('name');
  $(emailId).attr('name', 'email');

  $(dateId).removeAttr('name');
  $(dateId).attr('name', 'date');

  /* Checks for placeholder text */
  $.validator.addMethod("notDefaultText", function (value, element) {
    if (value == $(element).attr('value')) {
      return false;
    } else {
      return true;
    }
  });

  /* Validate rules for form */
  $('form').validate({
    rules: {
      full: {
        required: true,
        notDefaultText: true
      },
      first: {
        required: true,
        notDefaultText: true
      },
      last: {
        required: true,
        notDefaultText: true
      },
      email: {
        required: true,
        email: true,
        notDefaultText: true
      },
      date: 'required'
    },
    messages: {
      full: 'Please enter your first and last name!',
      first: 'Please enter your first name!',
      last: 'Please enter your last name!',
      email: 'Please enter your email!',
      date: 'Please pick a date!'
    },
    errorPlacement: function (error, element) {
      error.insertAfter(element).css('color', '#f00');
    }
  }); // end validate

  $(dateId).datepicker({
    maxDate: 0
  });
} //end formVal

function dragDrop(dragNames, dropNames, className, dropKey, dragKey) {
  $(dragNames).draggable({
    cursor: 'move',
    opacity: .85,
    zIndex: 100,
    revert: true
  }); // end draggable

  $(dropNames).droppable({
    hoverClass: className,
    tolerance: 'intersect',
    accept: dragNames,
    drop: function (event, ui) {
      var dropId = $(this).attr('id');
      var dragId = ui.helper.attr('id');

      if (dropId == dropKey && dragId == dragKey) {
        $('form').submit();
      }
    }
  }); // end droppable
} // end dragDrop

function movies(pageName, movieNames) {

  var pathname = $(location).attr('pathname');
  var curPage = pathname.substring(pathname.lastIndexOf('/') + 1);

  if (curPage == pageName) {

    $('#movies').remove();
    $('p').after('<div id="movies"></div>');

    var link = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=1eeeeb00d14043ac982b41707fef4655&query=' + movieNames;

    $.getJSON(link, function (data) {
      var results = data.results;
      var numResult = data.num_results;

      $('#movies').append('<h3>Viewing ' + numResult + ' movies</h3>');

      $.each(results, function (detailsIndex, detailsValue) {
        var title = detailsValue.display_title;
        var rating = detailsValue.mpaa_rating;
        var short = detailsValue.summary_short;
        var openingDate = detailsValue.opening_date;
        var opening = $.datepicker.formatDate('(MM d, yy)', new Date(openingDate));
        var movieLink = detailsValue.link.url;

        if (opening == '(undefined NaN, NaN)') {
          opening = '';
        }

        var detailString = title + ' ' + rating + ' ' + opening;
        detailString += '<br>' + short;
        detailString += '<br><a href="' + movieLink + '" target="_blank">' + movieLink + '</a>';
        var li = '<p>' + detailString + '</p> <br>';
        $('#movies').append(li);
      }); // end each
    }); // end getJSON

  } // end if

} // end movies
