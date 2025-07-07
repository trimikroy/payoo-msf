//add money to the account
/**
 * step-1: add event handler 
 *        and prevent page reload after form submit
 * step-2: get money to be added the account balance 
 * step-3: 
 * 
 */

//step-1 add an event handler to the add money button inside the form
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        // prevent page reload after form submit
        event.preventDefault();

        //step-2 get money to be added the account 
        const addMoneyInput = document.getElementById('input-add-money').value;
       const pinNumberInput = document.getElementById('input-pin-number').value;
       // console.log(addMoneyInput, pinNumberInput);
        
       //step-3 verify pin number 
       //wrong way to validate pin 
       if(pinNumberInput === '1234'){
        console.log('add money to the account')

        // step-4 get the current balance
        const balance = document.getElementById('account-balance').innerText;
       
        //step-5 add addMoneyInput with balance

        const addMoneyBalance = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);

        const newBalance = addMoneyBalance + balanceNumber;
        console.log(newBalance);

        // step-6 update the balance in the ui
        document.getElementById('account-balance').innerText = newBalance;


        // cash out button click to current balance to cash out 
        

       }else{
        alert('field to add money. Please try again')
       }
      
    });