$('document').ready(function () {
  accordion();
});

function accordion() {
  $('#tab').tabs({
    heightStyle: 'content',
  });
  $('#panelOne').accordion({
    collapsible: true,
    heightStyle: 'content',
    active: false
  });
  $('#panelTwo').accordion({
    collapsible: true,
    heightStyle: 'content',
    active: false
  });
}
