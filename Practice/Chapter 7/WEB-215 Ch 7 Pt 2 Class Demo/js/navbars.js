//var jsLocation = window.location;
//alert();


$('document').ready(function(){
  //examineLocation();
  markCurrentPage();
});

function examineLocation() {
  var jqLocation = $(location).attr('hostname');
  $('ul').after(jqLocation + '<br>');
  
  var fullUrl = $(location).attr('href');
  var position = fullUrl.indexOf('WEB-215%20Ch%207%20Pt%202%20Class%20Demo');
  var finalSlash = fullUrl.lastIndexOf('/');
  
  // substr (from inclusive to exclusive)
  
  var textPart = fullUrl.substring(3);
  
  $('body').append(fullUrl + '<br>');
  $('body').append(position + '<br>');
  $('body').append(finalSlash + '<br>');
  $('body').append(textPart + '<br>');
  
  // something useful
  var fullUrl = $(location).attr('href');
  /* Option one the long way
  var currentPageStart = fullUrl.lastIndexOf('/');
  var currentPage = fullUrl.substring(currentPageStart+1);
  */
  
  /* Option two shorter */
  var currentPage = fullUrl.substring(fullUrl.lastIndexOf('/')+1);
  $('body').append(currentPage + '<br>');
}

function markCurrentPage() {
  var pathname = $(location).attr('pathname');
  var curPage = pathname.substring(pathname.lastIndexOf('/') + 1);
  
  $('a').each(function() {
    if(curPage == $(this).attr('href')) {
      $(this).attr('id', 'current');
       } else if(curPage == '') {
         $('a:first').attr('id', 'current');
       } // end ifelse
  }); // end each anon fcn
}