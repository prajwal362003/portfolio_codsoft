const hamburger = document.querySelector('.header .navbar .navlist .hamburger');
const mob_menu = document.querySelector('.header .navbar .navlist ul');
const header =document.querySelector('.header .container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mob_menu.classList.toggle('active');

});

document.addEventListener('scroll',()=>{
    var scroll_pos = window.scrollY;

    if (scroll_pos > 748){
        header.style.backgroundColor = "#29323c";
    }

    else{
        header.style.backgroundColor ="transparent";
    }
})