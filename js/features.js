// button show toggle features 

document.getElementById('btn-show-cash-out')
    .addEventListener('click', function(){
        console.log('btn show cash out')
        // show cash out button click
        document.getElementById('cash-out-form').classList.remove('hidden');

        // hide the add money form
        document.getElementById('add-money-form').classList.add('hidden')
})
document.getElementById('btn-show-add-money')
    .addEventListener('click', function(){
        console.log('add money show')
        
        // cash out form hidden
        document.getElementById('cash-out-form').classList.add('hidden');

        // add money form show
        document.getElementById('add-money-form').classList.remove('hidden')
    })