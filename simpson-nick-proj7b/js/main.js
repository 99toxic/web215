$('document').ready(function () {
  jQuery('ul.sf-menu').superfish();
  callTree();
});

function callTree() {
  var pathname = $(location).attr('pathname');
  var curPage = pathname.substring(pathname.lastIndexOf('/') + 1);

  $('a').each(function () {
    if (curPage == $(this).attr('href')) {
      $(this).css({
        'background': '#400101'
      }); // end css current anchor
      $(this).parent('li').parent('ul').parent('li').children('a').css({
        'background': '#400101'
      }); // end css second anchor
      $(this).parent('li').parent('ul').parent('li').parent('ul').parent('li').children('a').css({
        'background': '#400101'
      }); // end css third anchor
    } // end if curPage

    if (curPage == '' && $(this).attr('href') == 'index.htm') {
      $(this).css({
        'background': '#400101'
      }); // end css onload
    } // end if curPage
  }) // end each anon
}
