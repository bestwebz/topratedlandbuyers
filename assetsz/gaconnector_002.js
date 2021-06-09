function setGaconnectorHiddenFields() {
  var gaFields = gaconnector.getCookieValues();
  for (var fieldName in gaFields) {
    var selectors = 'form input[name="' + fieldName + '"], form input#' + fieldName + ', form input[id^="field_' + fieldName + '"], form input[id^="field_' + fieldName.toLowerCase() + '"], form input[name="' + fieldName.toLowerCase() + '"], form input#' + fieldName.toLowerCase();
    var inputs = document.querySelectorAll(selectors);
    if (inputs === null) {
      continue;
    } else if (typeof inputs.length === 'undefined') {
      inputs.value = gaFields[fieldName];
    } else {
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = gaFields[fieldName];
      }
    }
  }
}

gaconnector.setCallback(setGaconnectorHiddenFields);
setInterval(setGaconnectorHiddenFields, 1000);