// note:(.value will be used in inputfeild and text area.) 
// [.innertext will be used in text ]
 document.getElementById('btn-deposite').addEventListener('click', function(){
    // console.log('clicked')

    // step-2 get the value on deposite button
    const depositeFeild = document.getElementById('deposite-feild');
    const newDepositeString = depositeFeild.value;
    const newDepositeAmount = parseFloat(newDepositeString);

    // console.log(depositeAmount)

    // step-3 add value on Deposite  
    const depositeTotal = document.getElementById('deposite-amount');
    const previouseDepositeString = depositeTotal.innerText;
    const previouseDeposite = parseFloat(previouseDepositeString);

    // step-4
    const currentAmount = previouseDeposite + newDepositeAmount;
    // console.log(depositeTotal)
    depositeTotal.innerText = currentAmount; 

    // step-5:
    const balanceTotal= document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    // console.log(balanceTotal)
    const previousBalance = parseFloat(previousBalanceString);

    // step-6:
    const currentBalance = previousBalance + newDepositeAmount;
    balanceTotal.innerText = currentBalance;




    // step-7 clear deosite feild
    depositeFeild.value = '';

})

