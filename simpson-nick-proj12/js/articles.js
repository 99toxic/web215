$('document').ready(function () {
  jqueryUi();
  autoFocus('#q');
  articleVal();
  sendInfo();
});

function jqueryUi() {
  $('#articles').append('<input type="hidden" name="alt_begin_date" id="altDate">');
  $('#articles').append('<input type="hidden" name="alt_end_date" id="altDateTwo">');
  var datePicker = {
    changeYear: true,
    changeMonth: true,
    dateFormat: 'M d, yy',
    altFormat: 'yy-mm-dd',
    yearRange: '1851:2019',
    minDate: new Date(1851, 09 - 1, 18),
    maxDate: 0
  }

  $('#date').datepicker(datePicker, $.extend({altField: 'altDate'}));
  $('#dateTwo').datepicker(datePicker, $.extend({altField: 'altDateTwo'}));
}

function autoFocus(focusField) {
  $(focusField).focus();
}

function articleVal() {
    $('#articles').validate({
    rules: {
      q: 'required',
      begin_date: {
        required: true,
        date: true
      },
      end_date: {
        required: true,
        date: true
      }
    }
  });
}

function sendInfo() {
  $('#articles').submit(function (evt) {
    evt.preventDefault();

    var formData = 'q=';
    formData += $('#q').val();
    formData += $('#altDate').val();
    formData += $('#altDateTwo').val();

    var api = '1eeeeb00d14043ac982b41707fef4655';
    var searchURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

    searchURL += '?api-key=' + api;

    searchURL += '&' + formData;

    $.getJSON(searchURL, getArticles);
  }); // end submit anonymous function
} // end function

function getArticles(dataFromServer) {
  $('#articleHeading').remove();
  $('#articleList').remove();
  $('#articleViewing').remove();
  $('#articles').after('<h2 id="articleHeading"></h2>');
  $('#articleHeading').after('<h3 id="articleViewing"></h3>');
  $('#articleViewing').after('<ol id="articleList"></ol>');

  var articles = dataFromServer.response.meta;

  $.each(articles, function (articlesIndex, articlesValue) {

    var articleSearch = $('#q').val();
    var beginDate = $('#date').val();
    var endDate = $('#dateTwo').val();
    var articlePages = articlesValue.hits;
    var heading = 'Your search for "' + articleSearch + '" from ' + beginDate + ' to ' + endDate + ' returned ' + articlePages + ' articles';

    $('#articleHeading').text(heading);

    var details = dataFromServer.response.docs;

    $.each(details, function (detailsIndex, detailsValue) {

      var title = detailsValue.source;
      var pubDate = detailsValue.pub_date;
      var formatPubDate = $.datepicker.formatDate('(MM d, yy)', new Date(pubDate));
      var description = detailsValue.snippet;
      var articleLink = detailsValue.web_url;
      var detailString = title + formatPubDate;
      var pageNumber = detailsValue.print_page;
      var viewing = 'Viewing ' + pageNumber + ' to ' + pageNumber + ' of ' + pageNumber;

      $('#articleViewing').text(viewing);

      detailString += '<br>' + description;
      detailString += '<br><a href="'+articleLink+'" target="_blank">' +articleLink+ '</a>';

      var li = '<li>' + detailString + '</li>';

      $('#articleList').append(li);

    }); // end each anonymous function

  }); // end each anonymous function

} // end function
