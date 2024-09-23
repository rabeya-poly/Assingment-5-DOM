window.addEventListener('scroll', function(){
   const header = document.getElementById('header');
   if(window.scrollY > 100){
      header.classList.add('fixed');
   }
   else{
      header.classList.remove('fixed');
   }
})


let count = 0;

    //noakhali//

document.getElementById('btn-noakhali-add-money').addEventListener('click',function(){

   const addMoney = getInputFieldValueById('input-noakhali-add-money');
   
   if(addMoney>0){
      const balance = getInputFieldTextById('noakhali-account-balance');
      
      const newBalance = balance + addMoney;
      document.getElementById('noakhali-account-balance').innerText = newBalance;
      const mainAccountBalance = getInputFieldTextById('main-account-balance');
      const newMainAccount = mainAccountBalance - newBalance;
      if(newMainAccount<0){
        
        alert('error');
        return;
      }
      document.getElementById('main-account-balance').innerText = newMainAccount;
       //history
       const historyInfo = document.createElement('div');
     
       historyInfo.className = "bg-white shadow-5xl border rounded-lg w-fit p-6 m-20";
      historyInfo.innerHTML = `
     <p class="text-2xl w-fit "> ${addMoney}Taka is Donated for Flood-2024 at Noakhali,Bangladesh.</p>
     <p>${new Date().toLocaleString()}</p>
      `;
      
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
      if(newMainAccount<0){
        
        alert('error');
        return;
      }
      document.getElementById('main-account-balance').innerText = newMainAccount;
       //history
       const historyInfo = document.createElement('div');
       historyInfo.className = "bg-white shadow-5xl border rounded-lg w-fit p-6 m-20";
       historyInfo.innerHTML = `
     <p class="text-2xl  w-fit"> ${addMoney}Taka is Donated for Flood Relief at Feni,Bangladesh.</p>
     <p>${new Date().toLocaleString()}</p>
      `;
      
      document.getElementById('history-container').appendChild(historyInfo);

}
else{
        alert('Wrong amount.Please give right amount');
     }
    
})
//aid//
document.getElementById('btn-quata-add-money').addEventListener('click',function(){
    const addMoney = getInputFieldValueById('input-quata-add-money')
    
    if(addMoney>0){
       const balance = getInputFieldTextById('quata-account-balance');
       
       const newBalance = balance + addMoney;
       document.getElementById('quata-account-balance').innerText = newBalance;
       const mainAccountBalance = getInputFieldTextById('main-account-balance');
       const newMainAccount = mainAccountBalance - newBalance;
       if(newMainAccount<0){
         
         alert('error');
         return;
       }
       document.getElementById('main-account-balance').innerText = newMainAccount;
       //history
       const historyInfo = document.createElement('div');
       historyInfo.className = "bg-white shadow-5xl border rounded-lg w-fit p-6 m-20";
      historyInfo.innerHTML = `
      <p class="text-2xl  w-fit ">${addMoney}Taka is Donated for Aid for Injured in the Quota Movement,Bangladesh.</p>
      <p>${new Date().toLocaleString()}</p>
      `;
      
      document.getElementById('history-container').appendChild(historyInfo);
  
}
else{
        alert('Wrong amount.Please give right amount');
     }
    
})

//**Toggle Active Status**//


donationTab.addEventListener('click',function(){
   donationTab.classList.add(
      'bg-lime-400',
      'text-black'
   );
   donationTab.classList.remove('text-gray-600');
   historyTab.classList.remove('text-black','bg-lime-400');
   historyTab.classList.add('text-gray-600');
   document.getElementById('donation-form').classList.add('hidden');
   document.getElementById('history-form').classList.remove('hidden');
})