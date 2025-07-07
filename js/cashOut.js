document.getElementById('btn-cashOut')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOut = document.getElementById('input-cash-out').value;
        const cashOutNumber = parseFloat(cashOut);
        const pinNumber = document.getElementById('input-cashOut-pin').value;
        //console.log(cashOut,pinNumber);

        // wrong way to verify pin number
        if (pinNumber === '1234') {
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);
            // reduce the balance
            const newBalance = balanceNumber - cashOutNumber;

            //update the balance
            document.getElementById('account-balance').innerText = newBalance
        }
        else {
            alert("Field to cash out. Please try again");
        }


    })