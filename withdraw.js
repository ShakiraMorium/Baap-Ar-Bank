// withdraw button//
// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('clicked');
//   step-2

    const withdrawFeild = document.getElementById('withdraw-feild');
    
    const newWithdrawString = withdrawFeild.value;
    
    const newWithdrawAmount = parseFloat(newWithdrawString);
    
   

    // step-3
    const previousWithdraw = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString);

    // step-4
    const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    // console.log(currentWithdrawTotal)
    previousWithdraw.innertext = currentWithdrawTotal;
    // console.log(currentWithdraw)

    // step-5
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText =  newBalanceTotal;


    // step-7
    withdrawFeild.value = '';


    
})