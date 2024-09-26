const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");


hamburger.addEventListener("click",function(){
    navMenu.classList.toggle('left-[0]');
    hamburger.classList.toggle("ri-close-large-line")
});
navLink.forEach(link =>{
    link.addEventListener("click",function(){
       navMenu.classList.toggle('left-[0]');
    hamburger.classList.toggle("ri-close-large-line") 
    })
})



// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
 speed:1000,
 spaceBetween:30,
 autoplay:{
    delay:1000,
    disableOnInteraction:false
 },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
  grabCursor:true,
  breakpoints:{
    640:{
       slidesPerView:1
  },
  768:{
    slidesPerView:2
  },
  1024:{
    slidesPerView:3
  },
}
});