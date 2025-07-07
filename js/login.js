

//search : form submit reloading this page


//step-1:  set event handler 
document.getElementById('button-login')
    .addEventListener('click', function(event){

        //step-2:prevent default behavior (prevent reloading browser)
        event.preventDefault(); // vejal to beginners
        console.log('button click check ')

        //step-3: get the input value or phone number and pin number
        const phoneNumber = document.getElementById('phone-number').value; 
        const pinNumber = document.getElementById('pin-number').value; 
       // console.log(phoneNumber, pinNumber);

        //step-4: validate phone or pin

        if(phoneNumber === '5' && pinNumber === '1234'){
             console.log('Your are Logged in');
             window.location.href = '/home.html'
        }else{
            alert('Wrong phone number or pic')
        }

    })