$('document').ready(function () {
  draggable();
  droppable();
  sortable();
}); // end ready anon fct

function draggable() {
  $('#timeline-singers figure').draggable({
    cancel: 'figcaption',
    cursor: 'move',
    opacity: .75,
    zIndex: 100
  }); // end draggable
}

function droppable() {
  $('#timeline div').droppable({
    activeClass: 'dropZone',
    hoverClass: 'dropHover',
    tolerance: 'fit',
    accept: '#timeline-singers figure',
    drop: function (event, ui) {
      // $(this) = the droppable element
      // ui.helper = the dragged element
      var dropClass = $(this).attr('class');
      var dragId = ui.helper.attr('id');
      var areWeCorrect = dropClass.indexOf(dragId);
      if (areWeCorrect != -1) {
        $(this).css('background-color', '#0f0');
        $(this).droppable({
          disabled: true
        });
        ui.helper.draggable({
          disabled: true
        });
        ui.helper.effect('pulsate', {
          times: 2
        }, 2000, function () {
          ui.helper.css('opacity', '1');
        });
      } else {
        $(this).css('background-color', '#f00');
        ui.helper.effect('explode', {
          pieces: 16
        }, 1000, function () {
          ui.helper.fadeIn(function () {
            ui.helper.css('opacity', '1');
          }); // end fadeIn anon fct
        }); // end explode anon fct
      } //end if-else
    } // end drop evt
  }); // end droppable
}

function sortable() {
  $('#singers-sorted').sortable({
    curor: 'move',
    placeholder: 'singer-placeholder',
    start: function (event, ui) {
      $('#result').text('result:... waiting');
    },
    stop: function (event, ui) {
      var sortedSigners = $('#singers-sorted').sortable('toArray');
      if (sortedSigners[0] == 'david' && sortedSigners[1] == 'sammy') {
        $('#result').text('Result: Nice!');
        $('#singers-sorted').sortable({disabled: true});
      } else {
        $('#result').text('Result: Ummm...')
      } // end if-else
    }
  }); // end sortable
}
