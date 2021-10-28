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

// Banner
if (document.querySelector('.home-banner')) {
  let tl = gsap.timeline();

  tl.from('.home-banner .img', {
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: Power1.easeInOut,
    scrollTrigger: {
      trigger: ".home-banner",
      start: "0 80%",
    }, 
  });
}

// Service
if (document.querySelector('.home-services')) {
  gsap.from('.home-services .swiper-slide', {
    yPercent: -25,
    opacity: 0,
    duration: .5,
    ease: Power1.easeInOut,
    stagger:{ each: 0.15, from: 'right' },
    scrollTrigger: {
      trigger: ".home-services .swiper",
      start: "0 80%",
    }, 
  });
}

// Reviews
if (document.querySelector('.home-reviews')) {
  gsap.from('.home-reviews .swiper-slide', {
    yPercent: -25,
    opacity: 0,
    duration: .4,
    ease: Power1.easeInOut,
    stagger:{ each: 0.15, from: 'right' },
    scrollTrigger: {
      trigger: ".home-reviews",
      start: "0 80%",
    }, 
  });
}

// Steps
if (document.querySelector('.home-steps')) {
  gsap.from('.home-steps .step', {
    scale: .75,
    opacity: 0,
    duration: .5,
    ease: Power1.easeInOut,
    stagger:{ each: 0.25, from: 'right' },
    scrollTrigger: {
      trigger: ".home-steps",
      start: "0 80%",
    }, 
  });
}

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