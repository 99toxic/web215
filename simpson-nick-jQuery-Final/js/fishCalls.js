$('document').ready(function () {
  anchorBlank();
  currentPage('currentLink');
  accordion('#fishfaq');
  tableStripe('rowA', 'rowB', 'rowOver');
  gallery('#survivors a', '#survivors a img', '#survivors');
  focusArea();
  formVal('', '#fname', '#lname', '#email', '#date');
  dragDrop('#pumpkin, #fish, #tire', '#car, #cauldron, #aquarium', 'highlightFishTargets', 'aquarium', 'fish');
  movies('movies.html', 'fish');
});
