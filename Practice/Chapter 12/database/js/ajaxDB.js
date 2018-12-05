$('document').ready(function() {
  loadAjaxResults();
});

function loadAjaxResults() {
  // bind submit to form to prevent default
  $('form').submit(function(evt) {
    evt.preventDefault();
    
    // take form data and serialize it (make it look like get or post)
    var formData = $('form').serialize();
    $.get('process.php', formData, displayResults)
  }); // end submit anon fcn
}

function displayResults(returnData) {
  $('#searchResults').remove();
  var newHTML = '<div id="searchResults">' + returnData + '</div>';
  $('form').after(newHTML);
}