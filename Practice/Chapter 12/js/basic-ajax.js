$('document').ready(function() {
  loadAjaxFiles();
})

function loadAjaxFiles() {
  $('a').click(function(evt) {
    evt.preventDefault();
    
    var page = $(this).attr('href');
    
    $('#ajaxContent').load(page + '#main');
  });
}