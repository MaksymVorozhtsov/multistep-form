var guaranteeCheckbox, reportGuarantee, alreadyHasDate, otherAddres, formElement31, formElement32, formElement33, formElement34, formElement35, formElement36, formElement37, deliveryAddressFieldsToHide;

guaranteeCheckbox = document.querySelector('input[value="ch-one"]');
reportGuarantee = document.getElementById('formElement3');
alreadyHasDate = document.querySelector('option[value="know"]');
appoitmentDate = document.getElementById('formElement5');
otherAddres = document.getElementById('formElement29');
formElement31 = document.getElementById('formElement31');
formElement32 = document.getElementById('formElement32');
formElement33 = document.getElementById('formElement33');
formElement34 = document.getElementById('formElement34');
formElement35 = document.getElementById('formElement35');
formElement36 = document.getElementById('formElement36');
formElement37 = document.getElementById('formElement37');
deliveryAddressFieldsToHide = [formElement31, formElement32, formElement33, formElement34, formElement35, formElement36, formElement37];

// is element is checked hide/show related elements
var hideElements = function (element, elementsToHide) {
if (element.checked || element.selected) {
  for (var i = 0; i < elementsToHide.length; i++) {
    elementsToHide[i].classList.remove('not-active');
  }
} else {
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].classList.add('not-active');
    }
  }
};

// hide related elements on load
hideElements(guaranteeCheckbox, [reportGuarantee]);
hideElements(alreadyHasDate, [appoitmentDate]);
hideElements(otherAddres, deliveryAddressFieldsToHide);

// checkboxes changes
guaranteeCheckbox.addEventListener('change', function (e) {
  hideElements(e.target, [reportGuarantee]);
});
alreadyHasDate.parentElement.addEventListener('change', function (e) {
  hideElements(e.target.lastElementChild, [appoitmentDate]);
});
otherAddres.addEventListener('change', function (e) {
  hideElements(e.target, deliveryAddressFieldsToHide);
});