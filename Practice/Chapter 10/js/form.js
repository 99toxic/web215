$('document').ready(function () {
  $('#sightingDate').datepicker({
    maxDate: 0,
    changeYear: true,
    changeMonth: true,
    yearRange: '-30:+0'
  }); // end datepicker options

  $("#whoWith").selectmenu({
    width: 170,
    icons: {button: 'ui-icon-circle-arrow-s'},
    change: function(event, ui) {
      var newImage;
      if(ui.item.label === 'Jimmy Hoffa') {
        newImage = 'images/hoffa.jpg';
      } else if(ui.item.label === 'Jimi Hendrix') {
          newImage = 'images/hendrix.jpg';
        } else if(ui.item.label === 'D.B. Cooper') {
          newImage = 'images/cooper.jpg';
        } else if(ui.item.label === 'Bruce Lee') {
          newImage = 'images/lee.jpg';
        } else if(ui.item.label === 'Aliens') {
          newImage = 'images/aliens.jpg';
        } else if(ui.item.label === 'other') {
          newImage = 'images/other.jpg';
        } else if(ui.item.label === 'No one') {
          newImage = 'images/none.jpg';
        } else {
          newImage = 'images/none.jpg';
        } // select if's 
      $('#whoPic').attr('src', newImage);
    } // end change function
  }); // end selectmenu options
  
  $( "times" ).checkboxradio();
  $( "#timesContainer" ).controlgroup();
  
//  $('#fan').buttonset();
  $( "#graceland" ).checkboxradio();
  $( "#fan" ).controlgroup();
  
  var elvisLocations = [
    'mall',
    'movies',
    'my house',
    'restaurant'
  ];
  
  $('#location').autocomplete({
    source: elvisLocations
  });
  
  $('#send').button({
  });
});
