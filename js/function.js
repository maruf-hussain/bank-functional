function getValue (inputId){
     const depositInput = document.getElementById(inputId);
    const depositInputText = depositInput.value;
    const depositInputTextConvert = parseFloat(depositInputText);
    depositInput.value = '';
    return depositInputTextConvert;
}
function updateTotal(updateTotal, depositInputTextConvert){
    const depositTotal= document.getElementById(updateTotal);
    const depositTotalText = depositTotal.innerText;
    const depositTotalConvert = parseFloat(depositTotalText);
    const depositTotalAmount = depositTotalConvert + depositInputTextConvert;
    depositTotal.innerText = depositTotalAmount;
}
function currentBalance(){
    const balanceTotal= document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceConvert = parseFloat(balanceTotalText);
    return balanceConvert;
}
// ............update balance...................//
function updateBalance(depositInputTextConvert, isAdd){
    const balanceTotal= document.getElementById('balance-total');
// const balanceTotalText = balanceTotal.innerText;
// const balanceConvert = parseFloat(balanceTotalText);
const balanceConvert = currentBalance();
if(isAdd == true){
    balanceTotal.innerText = balanceConvert + depositInputTextConvert;
}
else{
    balanceTotal.innerText = balanceConvert - depositInputTextConvert;
}
}
document.getElementById('deposit-btn').addEventListener('click', function(){

   depositInputTextConvert = getValue('deposit-amount');
   if(depositInputTextConvert > 0){
    updateTotal('deposit-total', depositInputTextConvert);
    updateBalance(depositInputTextConvert, true);
   }

    
})

// .....................withdraw part.....................//
document.getElementById('withdraw-button').addEventListener('click', function(){
   const withdrawInputConvert = getValue('withdraw-amount');
   const getCurrentBalance = currentBalance();
   if(withdrawInputConvert > 0 && withdrawInputConvert < getCurrentBalance){
       //    .............withdraw total.............///
updateTotal('withdraw-total', withdrawInputConvert);
// .............withdraw balance part...............//
updateBalance(withdrawInputConvert, false);

   }
   if(withdrawInputConvert > getCurrentBalance){
   console.log('your balance is low');
   }

})