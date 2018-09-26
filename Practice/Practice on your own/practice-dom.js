window.onload = init;

function init() {
  practice();
}

function practice() {

  /////////////// Finding Elements by ID //////////////////

  var masthead = document.getElementById('masthead');
  var mainNav = document.getElementById('mainNav');
  var msg1 = masthead + " has an id of 'masthead' and " + mainNav + " has an id of 'mainNav'";

  //alert(msg1);

  /////////////// Finding Elements by Tag Name //////////////////

  var allElements = document.getElementsByTagName('*');
  var allAnchor = document.getElementsByTagName('a');
  var msg2 = "There are " + allElements.length + " tags in the document. " + allAnchor.length + " are anchors.";

  //alert(msg2);

  /////////////// Get Attributes //////////////////

  var pageHead = document.getElementById('pageHead');
  var msg3 = "The " + pageHead.className + " class is 'pageHead'."

  //alert(msg3);

  /////////////// Display your Alerts //////////////////

  var br = '\n';

  //alert (msg1 + br + msg2 + br + msg3);

  /////////////// Loop Through the DOM //////////////////

  // Creating links for anchor in mainNav Id
  var viewAnchor = mainNav.getElementsByTagName('a') //Used the mainNav variable from finding elements id section

  for (i = 0; i < viewAnchor.length; i++) {
    var theUrl = viewAnchor[i].getAttribute('href');
    viewAnchor[i].setAttribute('title', theUrl);
    viewAnchor[i].setAttribute('href', 'http://www.google.com');
    viewAnchor[i].target = '_blank';
  }

  // Creating links for anchor in sidebar Id 
  var sidebar = document.getElementById('sidebar');
  var sideAnchor = sidebar.getElementsByTagName('a');

  for (i = 0; i < sideAnchor.length; i++) {
    sideAnchor[i].setAttribute('title', theUrl);
    sideAnchor[i].setAttribute('href', 'http://www.abtech.edu');
    sideAnchor[i].target = '_blank';
  }
}
