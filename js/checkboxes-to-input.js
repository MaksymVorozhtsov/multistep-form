function getCheckedCheckboxes() {
    var selectedCheckboxes = document.querySelectorAll('input.services-group:checked');
    var checkValues = Array.from(selectedCheckboxes).map(cb => cb.value);
    inputValues = document.getElementById('field2-1');
    inputValues.value = checkValues;
}