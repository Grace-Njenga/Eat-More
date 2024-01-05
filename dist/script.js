// JavaScript to toggle the menu on click of the toggle button
const primaryNav = document.querySelector(".nav");
const navToogle = document.querySelector(".menu");
navToogle.addEventListener('click', () =>{
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToogle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToogle.setAttribute("aria-expanded", false);
  }
})

//swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // dynamicBullets: true,
    clickable: true,
  },

});

// book a table 
document.getElementById('bookBtn').addEventListener('click', function() {
  document.getElementById('bookingFormOverlay').style.display = 'block';
});

document.getElementById('closeBtn').addEventListener('click', function() {
  document.getElementById('bookingFormOverlay').style.display = 'none';
});

// initialize aos 
AOS.init();

