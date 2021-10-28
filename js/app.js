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

/* #GSAP Animations
================================================== */
gsap.registerPlugin(ScrollTrigger);

// Portfolio
if (document.querySelector('.home-portfolio')) {
  const allItems = document.querySelectorAll('.home-portfolio .portfolio li');

  if (window.innerWidth > 1024) {
    allItems.forEach((item, index) => {
      if (index == 1 || index == 4 || index == 7 || index == 10) {
        gsap.to(item, {
          yPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: ".home-portfolio .portfolio",
            scrub: true
          }, 
        });
      } else {
        gsap.to(item, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: ".home-portfolio .portfolio",
            scrub: true
          }, 
        });
      }
    });
  } else {
    allItems.forEach((item, index) => {
      if (index % 2 == 0) {
        gsap.to(item, {
          yPercent: -25,
          ease: "none",
          scrollTrigger: {
            trigger: ".home-portfolio .portfolio",
            scrub: true
          }, 
        });
      } else {
        gsap.to(item, {
          yPercent: 25,
          ease: "none",
          scrollTrigger: {
            trigger: ".home-portfolio .portfolio",
            scrub: true
          }, 
        });
      }
    });
  }
  
}