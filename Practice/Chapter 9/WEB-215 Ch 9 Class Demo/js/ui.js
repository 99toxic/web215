$('document').ready(function() {
  accordion();
});

function accordion() {
  //inject the tranangles 
  var arrow = '<span class="arrow-closed"></span>';
  $('#accordion h2').prepend(arrow);
  
  //hide all siblings of triggers
  $('#accordion h2').next().hide();
  
  //show siblings when trigger is clicked
  $('#accordion h2').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('open');
    if ($(this).children('span').hasClass('arrow-closed')) {
      $(this).children('span').removeClass('arrow-closed').addClass('arrow-open');
    } else {
      $(this).children('span').removeClass('arrow-open').addClass('arrow-closed');
    }
  });
  
  //display finger on trigger
  $('#accordion h2').hover(function() {
    $(this).css('cursor', 'pointer');
  });
}