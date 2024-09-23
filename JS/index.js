document.getElementById('btn-noakhali-add-money').addEventListener('click',function(){
    const addMoney = document.getElementById('input-noakhali-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    if(addMoney>0){
       const balance = document.getElementById('account-balance').innerText;
       const balanceNumber = parseFloat(balance);
       const newBalance = balanceNumber + addMoneyNumber;
       document.getElementById('account-balance').innerText = newBalance;
       const mainAccountBalance =document.getElementById('main-account-balance').innerText;
       const mainAccountNumber = parseFloat(mainAccountBalance);
       const newMainAccount = mainAccountNumber - newBalance;
       document.getElementById('main-account-balance').innerText = newMainAccount;
       
    }
    else{
        alert('Wrong amount.Please give right amount');
    }
})