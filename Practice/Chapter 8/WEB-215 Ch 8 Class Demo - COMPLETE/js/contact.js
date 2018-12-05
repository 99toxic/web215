$('document').ready(function(){
  hideEmail('bob', 'example.com', '.emailBob');
  hideEmail('sue', 'example.com', '.emailSue');
  autoFocus('#name');
  autoClear();
  //toggleDependents();
  toggleDependents2('#spam', 'frequency'); // checkbox id, radio button group
});

function hideEmail(user, domain, replaceMe){
  var address = user + '@' + domain;
  var emailLink = '<a href="mailto:'+address+'">'+address+'</a>';
  $(replaceMe).html(emailLink);
}

function autoFocus(fieldToFocus){
  $(fieldToFocus).focus();
}

function autoClear(){
  // grab all elements that may have default values
  var elements = $('input, textarea');
  
  // compare the default value text to the actual text of the field in the browser
  elements.focus(function(){
    var defVal = $(this).prop('defaultValue');
    var curVal = $(this).val();
    if(defVal == curVal){
       $(this).val('');
       } // end if
  }); // end focus anon fcn
  
  // when user leaves fields, check if it's empty. If so, set it back to the original default value
  elements.blur(function(){
    if($(this).val()==''){
       $(this).val($(this).prop('defaultValue'));
       } // end if
  }); // end blur anon fcn
}


// lots of hard to read code
function toggleDependents(){
  // disable radio buttons
  $('form').find(':input[type=radio][name=frequency]').each(function(){
    $(this).attr('disabled', true);
  }); // end each anon fcn
  
  // gray out the labels
  $('form').find(':input[type=radio][name=frequency]').prev().each(function(){
    $(this).css('color','#999');
  }); // end each anon fcn
  
  // determine if checkbox is checked or cleared
  $('#spam').click(function(){
    if($(this).is(':checked') == true){
       $('form').find(':input[type=radio][name=frequency]').each(function(){
         $(this).attr('disabled', false);
       }); // end each anon fcn
      $('form').find(':input[type=radio][name=frequency]').prev().each(function(){
        $(this).css('color','#000');
      }); // end each anon fcn
       } else {
       $('form').find(':input[type=radio][name=frequency]').each(function(){
         $(this).attr('disabled', true);
       }); // end each anon fcn
      $('form').find(':input[type=radio][name=frequency]').prev().each(function(){
        $(this).css('color','#999');
      }); // end each anon fcn
       } // end if-else
  }); // end click anon fcn
}


// compartmentalized abstracted functions

function toggleDependents2(trigger, groupname){
  disabledDependents(groupname);
  $(trigger).click(function(){
    if($(this).is(':checked')==true){
       enableDependents(groupname);
       } else {
       disabledDependents(groupname);
       }
  }); // end click anon fcn
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














