let count = 0;

    //noakhali//
document.getElementById('btn-noakhali-add-money').addEventListener('click',function(){
    count += 1;
    const addMoney = getInputFieldValueById('input-noakhali-add-money');
    
    if(addMoney>0){
       const balance = getInputFieldTextById('noakhali-account-balance');
       
       const newBalance = balance + addMoney;
       document.getElementById('noakhali-account-balance').innerText = newBalance;
       const mainAccountBalance = getInputFieldTextById('main-account-balance');
       const newMainAccount = mainAccountBalance - newBalance;
       document.getElementById('main-account-balance').innerText = newMainAccount;
         if(newMainAccount<0){
         
           alert('error')
         }
       //history
       const historyInfo = document.createElement('historyInfo');
      historyInfo.innerText = `
      ${addMoney}Taka is Donated for Flood-2024 at Noakhali,Bangladesh and new Balance:${newBalance}
      `;
      console.log(historyInfo);
      document.getElementById('history-container').appendChild(historyInfo);
}
else{
        alert('Wrong amount.Please give right amount');
     }
    
})

//feni//
document.getElementById('btn-feni-add-money').addEventListener('click',function(){
    const addMoney = getInputFieldValueById('input-feni-add-money');
    
    if(addMoney>0){
       const balance = getInputFieldTextById('feni-account-balance');
       
       const newBalance = balance + addMoney;
       document.getElementById('feni-account-balance').innerText = newBalance;
       const mainAccountBalance = getInputFieldTextById('main-account-balance');
       const newMainAccount = mainAccountBalance - newBalance;
       document.getElementById('main-account-balance').innerText = newMainAccount;
       //history
       const historyInfo = document.createElement('historyInfo');
      historyInfo.innerText = `
      ${addMoney}Taka is Donated for Flood Relief at Feni,Bangladesh and new Balance: ${newBalance}
      `;
      console.log(historyInfo);
      document.getElementById('history-container').appendChild(historyInfo);
  
}
else{
        alert('Wrong amount.Please give right amount');
     }
    
})
//aid//
document.getElementById('btn-quata-add-money').addEventListener('click',function(){
    const addMoney = getInputFieldValueById('input-quata-add-money');
    
    if(addMoney>0){
       const balance = getInputFieldTextById('quata-account-balance');
       
       const newBalance = balance + addMoney;
       document.getElementById('quata-account-balance').innerText = newBalance;
       const mainAccountBalance = getInputFieldTextById('main-account-balance');
       const newMainAccount = mainAccountBalance - newBalance;
       document.getElementById('main-account-balance').innerText = newMainAccount;
       //history
       const historyInfo = document.createElement('historyInfo');
      historyInfo.innerHTML = `
      <p class="text-2xl">${addMoney}Taka is Donated for Aid for Injured in the Quota Movement,Bangladesh and new Balance:${newBalance}</p>
      `;
      console.log(historyInfo);
      document.getElementById('history-container').appendChild(historyInfo);
  
}
else{
        alert('Wrong amount.Please give right amount');
     }
    
})


