$('document').ready(function(){
  hideHeading();
  showHeading();
  toggleHeading();
  //$('#h, #s').hide();
}); // end doc ready

function hideHeading(){
  $('#h').click(function(){
    $('h1').hide();
  }); // end click anon fcn
} // end hideHeading

function showHeading(){
  $('#s').click(function(){
    $('h1').show();
  }); // end click anon fcn
} // end showHeading

function toggleHeading(){
  $('#t').click(function(){
    $('h1').toggle();
  }); // end click anon fcn
} // end toggleHeading