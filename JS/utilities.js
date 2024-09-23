
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
    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('history-form').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

//
const donationTab = document.getElementById('show-add-donation-form');
const historyTab = document.getElementById('show-history-form');


