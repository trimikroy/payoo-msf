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
       
      
    });