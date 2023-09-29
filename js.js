
// scrool reveal
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });

 ScrollReveal().reveal('.home-img,.home-img2, .home-video, .macbook-img, .air-img img' , { origin: 'bottom'});
 ScrollReveal().reveal('.home-text h1, .ipad-img, .ipad2-img, .air-img2 .left' , { origin: 'right'});
 ScrollReveal().reveal('.m2-img, .air-img2 .right', { origin: 'left'});
//  toggle
 let menu =document.querySelector("#menu-icon");
 let navbar=document.querySelector(".navbar");
 
 menu.addEventListener("click", function(){
     navbar.classList.toggle("active");
 });
 window.onscroll = ()=>{
     navbar.classList.remove("active")
 }
