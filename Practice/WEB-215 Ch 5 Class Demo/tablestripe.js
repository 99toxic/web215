$(document).ready(function(){
  tableFunctions();
});

function tableFunctions(){
  $('#theList tr:even').addClass('rowOdd');
  $('#theList tr:odd').addClass('rowEven');
  $('#theList tr').hover(hilite, hilite);
  $('#theList tr').click(disabledColor);
  $('#theList a').click(stopLink);
  $('#theList td:odd').prepend('$');
}

function hilite(){
  $(this).toggleClass('highlighted');
}

function disabledColor(){
  $(this).toggleClass('disabled');
}

function stopLink(evt){
  evt.preventDefault();
  var theTextIJustCLickedOn = $(this).text();
  var msg = 'You clicked the '+theTextIJustCLickedOn+' link';
  alert(msg);
}