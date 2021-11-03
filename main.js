let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>
{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onscroll = () =>
{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

document.getElementById('pizza1').addEventListener('change', function(){
    var pizza1 = document.getElementById('pizza1').value;
    switch (pizza1){
        case '22Sm':
            var ammount = '10 $';
            document.getElementById('price1').innerHTML = 'Price is' + " " + ammount
            break;
        
        case '33Sm':
            var ammount = '17 $';
            document.getElementById('price1').innerHTML = 'Price is' + " " + ammount
            break;


        case '49Sm':
            var ammount = '25 $';
            document.getElementById('price1').innerHTML = 'Price is' + " " + ammount
            break;   
    }
})

document.getElementById('pizza2').addEventListener('change', function(){
    var pizza2 = document.getElementById('pizza2').value;
    switch (pizza2){
        case '22Sm':
            var ammount = '10 $';
            document.getElementById('price2').innerHTML = 'Price is' + " " + ammount
            break;
        
        case '33Sm':
            var ammount = '22 $';
            document.getElementById('price2').innerHTML = 'Price is' + " " + ammount
            break;


        case '49Sm':
            var ammount = '25 $';
            document.getElementById('price2').innerHTML = 'Price is' + " " + ammount
            break;   
    }
})

document.getElementById('pizza3').addEventListener('change', function(){
    var pizza1 = document.getElementById('pizza3').value;
    switch (pizza1){
        case '22Sm':
            var ammount = '10 $';
            document.getElementById('price3').innerHTML = 'Price is' + " " + ammount
            break;
        
        case '33Sm':
            var ammount = '22 $';
            document.getElementById('price3').innerHTML = 'Price is' + " " + ammount
            break;


        case '49Sm':
            var ammount = '25 $';
            document.getElementById('price3').innerHTML = 'Price is' + " " + ammount
            break;   
    }
})


document.getElementById('pizza4').addEventListener('change', function(){
    var pizza1 = document.getElementById('pizza4').value;
    switch (pizza1){
        case '22Sm':
            var ammount = '10 $';
            document.getElementById('price4').innerHTML = 'Price is' + " " + ammount
            break;
        
        case '33Sm':
            var ammount = '22 $';
            document.getElementById('price4').innerHTML = 'Price is' + " " + ammount
            break;


        case '49Sm':
            var ammount = '25 $';
            document.getElementById('price4').innerHTML = 'Price is' + " " + ammount
            break;   
    }
})


document.getElementById('pizza5').addEventListener('change', function(){
    var pizza1 = document.getElementById('pizza5').value;
    switch (pizza1){
        case '22Sm':
            var ammount = '10 $';
            document.getElementById('price5').innerHTML = 'Price is' + " " + ammount
            break;
        
        case '33Sm':
            var ammount = '22 $';
            document.getElementById('price5').innerHTML = 'Price is' + " " + ammount
            break;


        case '49Sm':
            var ammount = '25 $';
            document.getElementById('price5').innerHTML = 'Price is' + " " + ammount
            break;   
    }
})
document.getElementById('pizza6').addEventListener('change', function(){
    var pizza1 = document.getElementById('pizza6').value;
    switch (pizza1){
        case '22Sm':
            var ammount = '10 $';
            document.getElementById('price6').innerHTML = 'Price is' + " " + ammount
            break;
        
        case '33Sm':
            var ammount = '22 $';
            document.getElementById('price6').innerHTML = 'Price is' + " " + ammount
            break;


        case '49Sm':
            var ammount = '25 $';
            document.getElementById('price6').innerHTML = 'Price is' + " " + ammount
            break;   
    }
})


document.getElementById('pizza7').addEventListener('change', function(){
    var pizza1 = document.getElementById('pizza7').value;
    switch (pizza1){
        case '22Sm':
            var ammount = '10 $';
            document.getElementById('price7').innerHTML = 'Price is' + " " + ammount
            break;
        
        case '33Sm':
            var ammount = '22 $';
            document.getElementById('price7').innerHTML = 'Price is' + " " + ammount
            break;


        case '49Sm':
            var ammount = '25 $';
            document.getElementById('price7').innerHTML = 'Price is' + " " + ammount
            break;   
    }
})


document.getElementById('pizza8').addEventListener('change', function(){
    var pizza1 = document.getElementById('pizza8').value;
    switch (pizza1){
        case '22Sm':
            var ammount = '10 $';
            document.getElementById('price8').innerHTML = 'Price is' + " " + ammount
            break;
        
        case '33Sm':
            var ammount = '22 $';
            document.getElementById('price8').innerHTML = 'Price is' + " " + ammount
            break;


        case '49Sm':
            var ammount = '25 $';
            document.getElementById('price8').innerHTML = 'Price is' + " " + ammount
            break;   
    }
})


document.getElementById('lemonade1').addEventListener('change', function(){
    var lemonade1 = document.getElementById('lemonade1').value;
    switch (lemonade1){
        case '100ml':
            var ammount = '5 $';
            document.getElementById('lemonnadepr1').innerHTML = 'Price is' + " " + ammount
            break;
        
        case '250ml':
            var ammount = '9 $';
            document.getElementById('lemonnadepr1').innerHTML = 'Price is' + " " + ammount
            break;


        case '500ml':
            var ammount = '11 $';
            document.getElementById('lemonnadepr1').innerHTML = 'Price is' + " " + ammount
            break;   
    }
})



document.querySelectorAll('.galery-image-container img').forEach(image=>{
 
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');

    }
    
    document.querySelector('.popup-image span').onclick = () =>{
        document.querySelector('.popup-image').style.display= 'none';
    }
    
   
})

