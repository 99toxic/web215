window.onload = init;

function init() {
  starterFunction();
  //functionTwo();
  viewTitles();
}

function starterFunction() {
  // gets a single element
  var masthead = document.getElementById('masthead');
  //alert(masthead.nodeName);

  var mainNav = document.getElementById('mainNav');
  //alert(mainNav.nodeName);

  var doesnot = document.getElementById('doesnot');
  //alert(doesnot.nodeName);

  // gets a collection of elements
  var arrLinks = document.getElementsByTagName('a');
  //alert(arrLinks.length);

  var allElements = document.getElementsByTagName('*');
  //alert(allElements.length);

  for (i = 0; i < allElements.length; i++) {
    //alert(allElements[i].nodeName);
  }
  
  //get an attribute
  var masthead = document.getElementById('masthead');
  var theClass = masthead.getAttribute('class');
  //alert(theClass);
  
  //Set an attribute
  masthead.setAttribute('class', 'newClass');
  
  
  
} //end function

function viewTitles() {
  var arrAnchors = document.getElementsByTagName('a');
  
  for(c=0; c<arrAnchors.length; c++) {
   //var theTitle = arrAnchors[c].getAttribute('title');
    //alert(theTitle);
    
    var theUrl = arrAnchors[c].getAttribute('href');
    arrAnchors[c].setAttribute('title', theUrl);
  }//end for
}//end function

/*
function functionTwo() {
  alert('I am');
}
*/
