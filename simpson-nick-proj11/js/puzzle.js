$('document').ready(function () {
  $('button').click(scramblePuzzle);
  puzzle();
});


function scramblePuzzle() {
  var li = $('li');
  var j;
  for (var i = 0; i < li.length; i++) {
    j = Math.floor(Math.random() * li.length);
    $(li[i]).before($(li[j]));
  }
  $('h1').text('Project 11 Puzzle Enabled').css('background-color', '#66f');
  $('ul').sortable('enable');
};

function puzzle() {
  $('ul').sortable({
    cursor: 'move',
    placeholder: 'placeholder',
    start: function (event, ui) {
      $('h1').text('Project 11 Puzzle in progress…').css('background-color', '#f00');
    },
    stop: function (event, ui) {
      var sortedLi =$('ul').sortable('toArray');
      if (sortedLi[0] == '0' && sortedLi[1] == '1' && sortedLi[2] == '2' && sortedLi[3] == '3' && sortedLi[4] == '4' && sortedLi[5] == '5' && sortedLi[6] == '6' && sortedLi[7] == '7' && sortedLi[8] == '8') {
        $('h1').text('Project 11 Puzzle Complete').css('background-color', '#0f0');
        $('ul').sortable({disabled: true});
      } else {
        $('h1').text('Project 11 Puzzle in progress…').css('background-color', '#f00');
      } // end if-else
    }
  }); // end sortable
}
