

//search : form submit reloading this page


//step-1:  set event handler 
document.getElementById('button-login')
    .addEventListener('click', function(event){

        //step-2:prevent default behavior (prevent reloading browser)
        event.preventDefault(); // vejal to beginners
        console.log('button click check ')

        //step-3: get the input value or phone number 
        const phoneNumber = document.getElementById('phone-number').value; 
        console.log(phoneNumber);

    })