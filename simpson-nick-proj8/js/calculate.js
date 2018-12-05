$('document').ready(function () {
  //$('#tipCalc').submit(calculate);
  hideEmail('bob', 'example.com', '.emailBob');
  hideEmail('bobbie', 'example.com', '.emailBobbie');
  autoFocus('#name');
  autoClear();
  toggleRoundOff();
  validateForm();
});

function calculate() {
  //evt.preventDefault();
  var allHashes = [];
  var inputs = $('#tipCalc').find('input:not(:submit)');
  for (var i = 0; i < inputs.length; i++) {
    if ($(inputs[i]).is(':input[type=text]') && $(inputs[i]).val() != '') {
      allHashes[$(inputs[i]).attr('id')] = $(inputs[i]).val();
    }
    if ($(inputs[i]).prop('checked')) {
      allHashes[$(inputs[i]).attr('name')] = $(inputs[i]).val();
    }
  }
  $('#totalBill').text('Total bill: $' + allHashes['total']);
  var tip = allHashes['total'] * allHashes['percent'] / 100;

  if ($('#round').prop('checked')) {
    if (allHashes['roundTo'] == 'int') {
      //round to dollar
      tip = Math.round(tip);
    } else if (allHashes['roundTo'] == 'ten') {
      //round to dime
      tip = Math.round(tip * 10) / 10;
      tip = parseFloat(tip).toFixed(2);
    } else if (allHashes['roundTo'] == 'hun') {
      // round to cent
      tip = Math.round(tip * 100) / 100;
      tip = parseFloat(tip).toFixed(2);
    }
  }

  $('#totalTip').text('Total tip: ' + allHashes['percent'] + '% is $' + tip);
  var msg = '<h4>That\'s a very ' + allHashes['gender'] + ' tip, ' + allHashes['name'] + '!</h4>';
  $('#totalTip').next().remove();
  $('#totalTip').after(msg);
}

function hideEmail(user, domain, ClassName) {
  var address = user + '@' + domain;
  var emailLink = '<a href = "mailto:' + address + '">' + address + '</a>';
  $(ClassName).html(emailLink);
}

function autoFocus(focusField) {
  $(focusField).focus();
}

function autoClear() {
  var elements = $('input:text, textarea');
  elements.focus(function () {
    var defVal = $(this).prop('defaultValue');
    var curVal = $(this).val();
    if (defVal == curVal) {
      $(this).val('');
    } // end if
  }); // end focus anon function
  elements.blur(function () {
    var defVal = $(this).prop('defaultValue');
    if ($(this).val() == '') {
      $(this).val(defVal);
    } // end if
  }); // end blur anon function

}

function toggleRoundOff() {
  $('form').find(':input[type=radio][name=roundTo]').each(function () {
    $(this).attr('disabled', true);
  }); // end each anon function
  $('form').find(':input[type=radio][name=roundTo]').prev().each(function () {
    $(this).css('color', '#999')
  }); // end each anon function
  $('#round').click(function () {
    if ($(this).is(':checked') == true) {
      $('form').find(':input[type=radio][name=roundTo]').each(function () {
        $(this).attr('disabled', false);
      }); // end each anon function
      $('form').find(':input[type=radio][name=roundTo]').prev().each(function () {
        $(this).css('color', '#000')
      }); // end each anon function
    } else {
      $('form').find(':input[type=radio][name=roundTo]').each(function () {
        $(this).attr('disabled', true);
      }); // end each anon function
      $('form').find(':input[type=radio][name=roundTo]').prev().each(function () {
        $(this).css('color', '#999')
      }); // end each anon function
    } // end if-else
  }); // end anon function
}

function validateForm() {
  $('#tipCalc').validate({
    rules: {
      name: 'required',
      gender: 'required',
      total: {
        required: true,
        number: true
      },
      percent: {
        number: true
      }
    },
    messages: {
    name: 'Please enter your name.',
    gender: 'Please pick one.'
    },
    submitHandler: function(form) {
      calculate();
    },
    errorPlacement: function(error, element) {
      if (element.attr("name") == "gender") {
        error.insertAfter("#gender_f");
      } else {
        error.insertAfter(element);
      }
    }
  });
}
