$(document).ready(function(){
  // workWithEvents();
  helperFunctions();
}); // end doc ready

function workWithEvents(){
  $('#coloredBox').bind('mouseover', highlight);
  $('#coloredBox').bind('mouseout', highlight);
  $('#coloredBox').bind('click', function() {
    $(this).unbind('mouseover', highlight);
    $(this).unbind('mouseout', highlight);
    $(this).html('you turned off the highlighter');
  }); // end click anon fcn
} // end workwithEvents

function highlight(){
  $(this).toggleClass('highlighted');
} // end highlight

function helperFunctions(){
  $('#coloredBox').hover(highlight, highlight);
  $('#coloredBox a').click(function(evt){
    evt.preventDefault();
    window.open('http://www.yahoo.com');
  }); //end click anon fcn
} // end function

