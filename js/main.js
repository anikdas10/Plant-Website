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

// shw scrolllup
const scrollup = () =>{
  const scrolllupBtn = document.getElementById("scroll-up");
  if(this.scrollY>=250){
    scrolllupBtn.classList.remove("-bottom-1/2");
    scrolllupBtn.classList.add("bottom-4");
  }
  else{
    scrolllupBtn.classList.add("-bottom-1/2");
    scrolllupBtn.classList.remove("bottom-4");
  }
}
window.addEventListener("scroll",scrollup)


// change background header

const scrollHeader = () =>{
  const scrolllheader = document.getElementById("nav-bar");
  if(this.scrollY>=250){
    scrolllheader.classList.add("border-b" ,"border-yellow-500");
  }
  else{
   scrolllheader.classList.remove("border-b" ,"border-yellow-500");
  }
}
window.addEventListener("scroll",scrollHeader)


// scroll section active link

// activeLink = () =>{

// }

// window.add("scroll",activeLink)