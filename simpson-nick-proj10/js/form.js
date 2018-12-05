$('document').ready(function () {
  formUi();
});

function formUi() {
  $('#concertDate').datepicker({
    changeYear: true,
    changeMonth: true,
    dateFormat: 'yyyy/mm/dd',
    minDate: new Date(2019, 08 - 1, 14),
    maxDate: new Date(2019, 08 - 1, 22)
  }); // end datepicker options

  $('#theShirt').after('<img id="shirtImage" src="images/blank-shirt.jpg">');


  $("#freeShirt").selectmenu({
    width: 170,
    icons: {
      button: 'ui-icon-triangle-1-s'
    },
    change: function (event, ui) {
      var newImage;
      if (ui.item.label === 'The Cars') {
        newImage = 'images/the-cars.jpg';
      } else if (ui.item.label === 'Duran Duran') {
        newImage = 'images/duran-duran.jpg';
      } else if (ui.item.label === 'Flock of Seagulls') {
        newImage = 'images/flock-of-seagulls.jpg';
      } else if (ui.item.label === 'Missing Persons') {
        newImage = 'images/missing-persons.jpg';
      } else {
        newImage = 'images/blank-shirt.jpg';
      } // select if's
      $('#shirtImage').attr('src', newImage);
    } // end change function
  }); // end selectmenu options

  $("headliners").checkboxradio();
  $("#headliner").controlgroup();

  $("decade").checkboxradio();
  $("#bornIn").controlgroup();

  var theShows = [
    'Adam and the Ants',
    'A-ha',
    'Blondie',
    'Bow Wow Wow',
    'Culture Club',
    'Depeche Mode',
    'Devo',
    'Echo & the Bunnymen',
    'Madness',
    'Modern English',
    'Oingo Boingo',
    'Simple Minds',
    'Siouxsie and the Banshees',
    'Spandau Ballet',
    'Talk Talk',
    'Tears for Fears',
    'The Cure',
    'The Fixx',
    'The Human League',
    'The Jam',
    'The Psychedelic Furs',
    'The Smiths',
    'Thompson Twins',
    'Ultravox',
    'XTC'
  ];

  $('#lineup').autocomplete({
    source: theShows
  });

  $("usbAudio").checkboxradio();
  $("usbVideo").checkboxradio();
  $("backstage").checkboxradio();
  $("#addOns").controlgroup();

  $('#send').button({
    icon: 'ui-icon-caret-1-e',
    iconPosition: 'end'
  });
}
