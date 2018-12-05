$('document').ready(function() {
  buildBookmarks('h3', 'header');
});

function buildBookmarks(whichTag, bookmarkContainer) {

  var anchorCounter = 0;

  var ul = $('<ul id="bookmarksList">');

  $('#content ' + whichTag).each(function () {
    $(this).html('<a id="bookmark' + anchorCounter + '"></a>' + $(this).html());

    var li = $('<li><a href="#bookmark' + anchorCounter + '">' + $(this).text() + '</a></li>');

    ul.append(li);
    anchorCounter++;
    
  });
  
  $('#' + bookmarkContainer).append(ul);

}
