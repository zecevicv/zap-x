/* #Header
    ======================================================= */
const header = document.querySelector('.header');

// Scroll BG Color change
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-purple');
    } else {
      header.classList.remove('header-purple');
    }
  });

  if (window.scrollY > 0) {
    header.classList.add('header-purple');
  } else {
    header.classList.remove('header-purple');
  }
}

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
  tl.from('.home-banner .text > *', {
    opacity: 0,
    yPercent: 50,
    duration: .5,
    delay: .5,
    ease: Power1.easeOut,
    stagger:{ each: .2 },
    scrollTrigger: {
      trigger: ".home-banner",
      start: "0 80%",
    }, 
  }).from('.home-banner .img img', {
    opacity: 0,
    duration: 1,
    scale: .85,
    ease: Power1.easeOut,
    stagger:{ each: .2 },
    scrollTrigger: {
      trigger: ".home-banner",
      start: "0 80%",
    }, 
  });
}

// Service
if (document.querySelector('.home-services')) {
  let tl = gsap.timeline();
  tl.from('.home-services .swiper-slide', {
    yPercent: -25,
    opacity: 0,
    duration: .5,
    ease: Power1.easeInOut,
    stagger:{ each: 0.15, from: 'right' },
    scrollTrigger: {
      trigger: ".home-services .swiper",
      start: "0 80%",
    }, 
  }).from('.home-services .text > *', {
    opacity: 0,
    yPercent: 100,
    duration: .5,
    ease: Power1.easeOut,
    stagger:{ each: .4 },
  }).from('.home-services .img li', {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    delay: .25,
    ease: Elastic.easeOut.config(1, 0.85),
  });

  ScrollTrigger.create({
    trigger: ".home-services",
    animation: tl,
    start: "0 80%",
  });
}

// Reviews
if (document.querySelector('.home-reviews')) {
  let tl = gsap.timeline();
  tl.from('.home-reviews .text > *', {
    opacity: 0,
    yPercent: 100,
    duration: .5,
    delay: .5,
    ease: Power1.easeOut,
    stagger:{ each: .2 },
  }).from('.home-reviews .swiper-slide', {
    yPercent: -25,
    opacity: 0,
    duration: .4,
    ease: Power1.easeInOut,
    stagger:{ each: 0.15, from: 'right' },
  }).from('.home-reviews .swiper-pagination', {
    opacity: 0,
    duration: .4,
    ease: Power1.easeInOut,
    delay: .5
  }, '<');

  ScrollTrigger.create({
    trigger: ".home-reviews",
    animation: tl,
    start: "0 80%",
  });
}

// Steps
if (document.querySelector('.home-steps')) {
  gsap.from('.home-steps .step', {
    scale: .9,
    opacity: 0,
    duration: .5,
    rotate: 5,
    ease: Power1.easeInOut,
    stagger:{ each: 0.25, from: 'right' },
    scrollTrigger: {
      trigger: ".home-steps .steps",
      scrub: 1,
      start: '0 90%',
      end: '100% 70%',
    }, 
  });
}

// Action
if (document.querySelector('.home-action')) {
  gsap.from('.home-action .container > *', {
    opacity: 0,
    yPercent: 100,
    duration: .5,
    ease: Power1.easeOut,
    stagger:{ each: .15 },
    scrollTrigger: {
      trigger: ".home-action .container",
      start: "0 80%",
    }, 
  });
}

// Contact
if (document.querySelector('.home-contact')) {
  gsap.from('.home-contact input', {
    opacity: 0,
    xPercent: 100,
    duration: .5,
    ease: Power1.easeOut,
    stagger:{ each: .15 },
    scrollTrigger: {
      trigger: ".home-contact form",
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

/* #Blog Post Slider
================================================== */
if (document.querySelector('.blog-post-slider .swiper')) {
  new Swiper(".blog-post-slider .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 1.25,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });
}

/* #Price Extras
================================================== */
if (document.querySelector('.price-extras .swiper')) {
  new Swiper(".price-extras .swiper", {
    pagination: {
      el: ".price-extras .swiper-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });
}

/* #Price Sticky Desktop
================================================== */
let scrollPos = 0;
const priceSticky = document.querySelector('.price-sticky-desktop');

if (priceSticky) {
  window.addEventListener('scroll', (e) => {
    if (window.scrollY > 600) {
      priceSticky.classList.add('show');
    } else {
      priceSticky.classList.remove('show');
    }
  
    // if (window.scrollY == 0) {
    //   header.classList.remove('hide-top');
    //   header.classList.remove('show-bottom');
    // }
  
    scrollPos = (document.body.getBoundingClientRect()).top;
  });
}