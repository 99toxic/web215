window.onload = init;

function init() {
  starterFunction();
}

function starterFunction() {

  // Gets all anchor tags
  var allAnchor = document.getElementsByTagName('a');

  for (i = 0; i < allAnchor.length; i++) {
    // Add Link Titles
    var theUrl = allAnchor[i].getAttribute('href');
    allAnchor[i].setAttribute('title', theUrl);
    // External Links to new tab
    var exUrl = theUrl.startsWith("http" || "https");
    if (exUrl == true) {
      allAnchor[i].target = '_blank';
    } // End if
  } // End for loop
} // End starterFunction
