
function getInputValue(elementId){
    const inputFieldValue = document.getElementById(elementId);
    const inputStringValue = inputFieldValue.value;
    const inputValue = parseFloat(inputStringValue);
    inputFieldValue.value = '';
    return inputValue;
}

function getElementValue(elementId){
    const elementTagValue = document.getElementById(elementId)
    const elementStringValue = elementTagValue.innerText;
    const elementValue = parseFloat(elementStringValue);
    return elementValue;
}

function setValue(elementId, valueId){
    const setValueId = document.getElementById(elementId);
    setValueId.innerText = valueId;
}