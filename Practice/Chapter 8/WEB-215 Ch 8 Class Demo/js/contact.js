$('document').ready(function() {
  hideEmail('bob', 'example.com', '.emailBob');
  hideEmail('bobbie', 'example.com', '.emailBobbie');
  autoFocus('#name');
  autoClear();
  //toggleDependents();
  toggleDependentsTwo('#spam', 'frequency'); // checkbox id, radio button group
});

function hideEmail(user, domain, replaceMe) {
  var address = user + '@' + domain;
  var emailLink = '<a href = "mailto:'+address+'">'+address+'</a>';
  $(replaceMe).html(emailLink);
}

function autoFocus(fieldToFocus) {
  $(fieldToFocus).focus();
}

function autoClear() {
  // grab all elements that may have default values
  var elements = $('input, textarea');
  
  // Compare the default value text to the actual text of the field in the browser
  elements.focus(function() {
    var defVal = $(this).prop('defaultValue');
    var curVal = $(this).val();
    if(defVal == curVal) {
       $(this).val('');
       }
  }); // end focus anon function
  
  // When user leaves field check if empty. if so, set back to value.
  elements.blur(function() {
    var defVal = $(this).prop('defaultValue');
    if($(this).val() == '') {
       $(this).val(defVal);
       } // end if
  }); // end blur anon function
}

function toggleDependents() {
  // Disable radio buttons
  $('form').find(':input[type=radio][name=frequency]').each(function() {
   $(this).attr('disabled', true); 
  }); // end each anon function
  
  // Gray out the labels
  $('form').find(':input[type=radio][name=frequency]').prev().each(function() {
    $(this).css('color', '#999');
  }); // end each anon function
  
  // Determine if checkbox is checked or cleared
  $('#spam').click(function() {
    if($(this).is(':checked') == true) {
      $('form').find(':input[type=radio][name=frequency]').each(function() {
        $(this).attr('disabled', false);
      }); // end each anon function
      $('form').find(':input[type=radio][name=frequency]').prev().each(function() {
        $(this).css('color', '#000')
      }); // end each anon function
       } else { 
      $('form').find(':input[type=radio][name=frequency]').each(function() {
        $(this).attr('disabled', true);
      }); // end each anon function
      $('form').find(':input[type=radio][name=frequency]').prev().each(function() {
        $(this).css('color', '#999')        
      }); // end each anon function
       } // end if-else
  }); // end click anon function
}

// Compartmentalized abstracted functions
function toggleDependentsTwo(trigger, groupname) {
  disabledDependents(groupname);
  $(trigger).click(function() {
    if($(this).is(':checked') == true) {
       enableDependents (groupname);
       } else {
        disabledDependents (groupname);
       }
  }) // end click anon function
}

function disabledDependents(disableThese) {
  $('form').find(':input[type=radio] [name='+disableThese+']').each(function() {
    $(this).attr('disabled', true);
  })
  
  $('form').find(':input[type=radio] [name='+disableThese+']').prev().each(function() {
    $(this).css('color', '999');
  });
}

function toggleDependentstwo(trigger, groupname){
  disabledDependents(groupname);
  $(trigger).click(function(){
    if($(this).is(':checked')==true){
       enableDependents(groupname);
       } else {
       disabledDependents(groupname);
       }
  }); // end click anon fcn
}

function enableDependents(enableThese) {
  $('form').find(':input[type=radio][name='+disableThese+']').each(function(){
    $(this).attr('disabled', true);
  });
  
  $('form').find(':input[type=radio][name='+disableThese+']').prev().each(function(){
    $(this).css('color', '#999');
  });
}

function disabledDependents(disableThese){
  $('form').find(':input[type=radio][name='+disableThese+']').each(function(){
    $(this).attr('disabled', true);
  });
  
  $('form').find(':input[type=radio][name='+disableThese+']').prev().each(function(){
    $(this).css('color', '#999');
  });
}

function enableDependents(enableThese){
  $('form').find(':input[type=radio][name='+enableThese+']').each(function(){
    $(this).attr('disabled', false);
  });
  
  $('form').find(':input[type=radio][name='+enableThese+']').prev().each(function(){
    $(this).css('color', '#000');
  });
}
