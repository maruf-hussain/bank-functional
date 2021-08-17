function depositValue(ama){
  const depositAmount = document.getElementById(ama);
  const depositAmountText = depositAmount.value;
  const depositAmountConvert = parseFloat(depositAmountText);
  depositAmount.value = '';
  return depositAmountConvert;
}
document.getElementById('deposit-btn').addEventListener('click', function(){
  // const depositAmount = document.getElementById('deposit-amount');
  // const depositAmountText = depositAmount.value;
  // const depositAmountConvert = parseFloat(depositAmountText);
depositAmountConvert = depositValue('deposit-amount');

  const depositTotal = document.getElementById('deposit-total');
const depositTotalText = depositTotal.innerText;
const depositTotalConvert = parseFloat(depositTotalText);
const depositTotalAmount = depositTotalConvert + depositAmountConvert;
depositTotal.innerText = depositTotalAmount;


// .............update balance.................//
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const balanceConvert = parseFloat(balanceTotalText);
const balanceTotalAmount = balanceConvert + depositAmountConvert;
balanceTotal.innerText = balanceTotalAmount;



    
})

// ...............withdraw part....................//
document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withdrawAmount = document.getElementById('withdraw-amount');
    // const withdrawAmountText = withdrawAmount.value;
    // const withdrawAmountConvert = parseFloat(withdrawAmountText);
const withdrawAmountConvert = depositValue('withdraw-amount');
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalConvert = parseFloat(withdrawTotalText);
    const withdrawTotalAmount = withdrawTotalConvert + withdrawAmountConvert;
    withdrawTotal.innerText = withdrawTotalAmount;
console.log(withdrawTotalText);

// .............update balance.................//
const balanceAfterWithdraw = document.getElementById('balance-total');
const balanceAfterWithdrawText = balanceAfterWithdraw.innerText;
const balanceAfterWithdrawConvert = parseFloat(balanceAfterWithdrawText);
const totalBalanceAfterWithdraw =  balanceAfterWithdrawConvert - withdrawAmountConvert;
balanceAfterWithdraw.innerText = totalBalanceAfterWithdraw;


    // withdrawAmount.value = '';

})









// .............others person......................//
function DepositWithdrawBalance(inputId, amount, isAddition) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const inputAmount = parseFloat(inputAmountText);
  const specificTotalAmountText = document.getElementById(amount).innerText;
  const specificTotalAmount = parseFloat(specificTotalAmountText);
  const totalBalanceText = document.getElementById('total-balance').innerText;
  const totalBalance = parseFloat(totalBalanceText);

      if(inputAmount > 0) {
          if(isAddition == true) {
              document.getElementById(amount).innerText = specificTotalAmount + inputAmount;
              document.getElementById('total-balance').innerText = totalBalance + inputAmount;
          }
          else if(isAddition == false  && inputAmount <= totalBalance) {
              document.getElementById(amount).innerText = specificTotalAmount + inputAmount;
              document.getElementById('total-balance').innerText = totalBalance - inputAmount;
          }
      }
  inputField.value = '';
}

const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click',function() {
  DepositWithdrawBalance('deposit-field', 'deposit-total', true);
})

const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click',function() {
      DepositWithdrawBalance('withdraw-field', 'withdraw-total', false);
})