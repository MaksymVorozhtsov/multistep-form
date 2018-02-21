function getSelectedOption() {
    var selectedOption = document.querySelectorAll('select.date-select');
    var selectValues = Array.from(selectedOption).map(cb => cb.value);
    selectToInput = document.getElementById('field4-1');
    selectToInput.value = selectValues;
}