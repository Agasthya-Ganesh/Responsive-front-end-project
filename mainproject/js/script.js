let navbars=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()=>{
    navbars.classList.toggle('active');
    
    cartcontainer.classList.remove('active');
    searchbar.classList.remove('active');
}

let cartcontainer=document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick=()=>{
    cartcontainer.classList.toggle('active');

    navbars.classList.remove('active');
    searchbar.classList.remove('active');
}

let searchbar=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchbar.classList.toggle('active');

    navbars.classList.remove('active');
    cartcontainer.classList.remove('active');
    
}

//HEADER SECTION ENDS 

