
function getInputFieldValueById(id){
const inputValue = document.getElementById(id).value;
const inputValueNumber = parseFloat(inputValue);
return inputValueNumber;
}  

function getInputFieldTextById(id){
    const inputTextValue = document.getElementById(id).innerText;
    const inputTextValueNumber = parseFloat(inputTextValue);
    return inputTextValueNumber; 
}

function showSectionById(id){
    
}