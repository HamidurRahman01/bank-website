//  hendle deposit button

document.getElementById('diposit-button').addEventListener('click',function(){
    // get the amout diposited
    const dipositInput = document.getElementById('diposit-input');
    const newDipositText = dipositInput.value ;
    const newDipositAmount = parseFloat(newDipositText);
   
    //  update diposit total
    const dipositTotal = document.getElementById('diposit-total');
    const previousDipositText = dipositTotal.innerText;
    const previousDipositAmount = parseFloat(previousDipositText);
    const newDipositTotal = previousDipositAmount +  newDipositAmount;
    dipositTotal.innerText = newDipositTotal;
    
    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDipositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the diposit input fild
    dipositInput.value = ' ';

    // handle withdraw event handler
    document.getElementById('withdraw-button').addEventListener('click',function(){
        
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
        const newWithdrawAmount = parseFloat(withdrawAmountText);
        console.log(newWithdrawAmount );

        // set withdraw total
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawText = withdrawTotal.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawText);
        const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        withdrawTotal.innerText = newWithdrawTotal;

        // update balance
           const balanceTotal = document.getElementById('balance-total');
           const previousBalanceText = balanceTotal.innerText;
           const previousBalanceTotal = parseFloat(previousBalanceText);
           const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
           balanceTotal.innerText = newBalanceTotal;

        // clear withdraw input
        withdrawInput.value = ' ';
    })

})