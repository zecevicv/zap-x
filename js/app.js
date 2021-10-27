/* #Home Services
================================================== */
if (document.querySelector('.home-services .swiper')) {
  new Swiper(".home-services .swiper", {
    slidesPerView: 'auto',
  });
}

/* #Home Reviews
================================================== */
if (document.querySelector('.home-reviews .swiper')) {
  new Swiper(".home-reviews .swiper", {
    loop: true,
    pagination: {
      el: ".home-reviews .swiper-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.25,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 4.5,
        centeredSlides: true,
      }
    }
  });
}