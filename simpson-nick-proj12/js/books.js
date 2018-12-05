$('document').ready(function() {
  sendData();
});

function sendData() {
  $('#bestsellers').submit(function(evt) {
    evt.preventDefault();

    var formData = $('#bestsellers').serialize();

    formData = encodeURI(formData);

    var api = '1eeeeb00d14043ac982b41707fef4655';
    var searchURL = 'https://api.nytimes.com/svc/books/v3/lists.json';

    searchURL += '?api-key=' + api;

    searchURL += '&' + formData;

    $.getJSON(searchURL, displayResults);
  }); // end submit anonymous function
} // end function

function displayResults(dataFromServer) {
  $('#resultsHeading').remove();
  $('#resultsList').remove();
  $('#bestsellers').after('<h2 id="resultsHeading"></h2>');
  $('#resultsHeading').after('<ol id="resultsList"></ol>');

  var results = dataFromServer.results;

  $.each(results, function(resultsIndex, resultsValue) {
    var bookList = resultsValue.display_name;
    var heading = 'Bestselling ' + bookList + ' books';

    $('#resultsHeading').text(heading);

    var details = resultsValue.book_details;

    $.each(details, function(detailsIndex, detailsValue) {
      var title = detailsValue.title;
      var author = detailsValue.author;
      var description = detailsValue.description;
      var detailString = title + ' by ' + author;

      detailString += '<br>' + description;
      detailString += '<br><a href="'+resultsValue.amazon_product_url+'" target="_blank">' + resultsValue.amazon_product_url + '</a>';

      var li = '<li>' + detailString + '</li>';

      $('#resultsList').append(li);
    }); // end INNER each anonymous function

  }); // end each anonymous function
} // end function
