document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Sticky Header
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('backdrop-blur-xl', 'bg-[#05070a]/80', 'border-[#C8A46B]/15', 'py-4', 'shadow-[0_10px_40px_rgba(0,0,0,0.5)]');
      header.classList.remove('backdrop-blur-sm', 'bg-transparent', 'border-transparent', 'py-6');
    } else {
      header.classList.remove('backdrop-blur-xl', 'bg-[#05070a]/80', 'border-[#C8A46B]/15', 'py-4', 'shadow-[0_10px_40px_rgba(0,0,0,0.5)]');
      header.classList.add('backdrop-blur-sm', 'bg-transparent', 'border-transparent', 'py-6');
    }
  });

  // Mobile Navigation Menu Toggle
  const menuBtn = document.querySelector('button[aria-label="Toggle menu"]');
  const mobileMenu = document.querySelector('.lg\\:hidden.fixed.top-0.right-0');
  const menuBackdrop = document.querySelector('.lg\\:hidden.fixed.inset-0');
  const closeMenuBtn = document.querySelector('button[aria-label="Close menu"]');
  const navLinksMobile = mobileMenu.querySelectorAll('nav a');

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    menuBackdrop.classList.remove('opacity-0', 'pointer-events-none');
    menuBackdrop.classList.add('opacity-100', 'pointer-events-auto');
  }

  function closeMenu() {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
    menuBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
    menuBackdrop.classList.add('opacity-0', 'pointer-events-none');
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
  if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);
  navLinksMobile.forEach(link => link.addEventListener('click', closeMenu));

  // Active Navigation Section Highlight on Scroll
  const navLinksDesktop = document.querySelectorAll('header nav a');
  const sections = ['home', 'about', 'expertise', 'ventures', 'achievements', 'insights', 'contact'];

  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 120;
    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el) {
        const offset = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= offset && scrollPos < offset + height) {
          // Highlight desktop nav
          navLinksDesktop.forEach(link => {
            if (link.getAttribute('href') === `#${secId}`) {
              link.classList.add('text-[#C8A46B]', 'font-semibold');
              link.classList.remove('text-slate-300', 'hover:text-white');
              link.querySelector('span').classList.add('w-full');
              link.querySelector('span').classList.remove('w-0');
            } else {
              link.classList.remove('text-[#C8A46B]', 'font-semibold');
              link.classList.add('text-slate-300', 'hover:text-white');
              link.querySelector('span').classList.remove('w-full');
              link.querySelector('span').classList.add('w-0');
            }
          });

          // Highlight mobile nav
          navLinksMobile.forEach(link => {
            if (link.getAttribute('href') === `#${secId}`) {
              link.classList.add('text-[#C8A46B]', 'font-semibold');
              link.classList.remove('text-slate-300', 'hover:text-white');
            } else {
              link.classList.remove('text-[#C8A46B]', 'font-semibold');
              link.classList.add('text-slate-300', 'hover:text-white');
            }
          });
        }
      }
    });
  });

  // Hero Section Load Animations (GSAP)
  const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
  
  heroTl.fromTo('.hero-portrait-container', 
    { clipPath: 'inset(0 0 100% 0)', scale: 1.1 }, 
    { clipPath: 'inset(0 0 0% 0)', scale: 1, duration: 2, ease: 'power4.inOut' }
  )
  .fromTo('.hero-portrait', 
    { scale: 1.2 }, 
    { scale: 1, duration: 2.2, ease: 'power3.out' }, 
    '-=2'
  )
  .fromTo('.hero-title-text', 
    { yPercent: 100 }, 
    { yPercent: 0, duration: 1.2 }, 
    '-=1.4'
  )
  .fromTo('.hero-subtitle', 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8 }, 
    '-=0.9'
  )
  .fromTo('.hero-desc', 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8 }, 
    '-=0.8'
  )
  .fromTo('.hero-ctas', 
    { y: 20, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8 }, 
    '-=0.7'
  )
  .fromTo('.hero-featured', 
    { opacity: 0, y: 15 }, 
    { opacity: 0.55, y: 0, duration: 0.8 }, 
    '-=0.6'
  )
  .fromTo('.hero-stats-bar', 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.2 }, 
    '-=0.8'
  );

  // Stats Counters Count-Up Function
  const statsList = [
    { selector: '.stat-num-1', target: 10 },
    { selector: '.stat-num-2', target: 500 },
    { selector: '.stat-num-3', target: 2500 },
    { selector: '.stat-num-4', target: 25 },
    { selector: '.stat-num-5', target: 2 },
    { selector: '.stat-num-6', target: 1 }
  ];

  statsList.forEach(stat => {
    heroTl.fromTo(stat.selector, 
      { textContent: 0 }, 
      { 
        textContent: stat.target, 
        duration: 2.5, 
        ease: 'power3.out', 
        snap: { textContent: 1 } 
      },
      '-=1.2'
    );
  });

  // Scroll Animations for Core Sections (Desktop-only to match React media queries)
  if (window.innerWidth >= 768) {
    // About Section Entrance
    gsap.fromTo('.about-portrait-card',
      { opacity: 0, y: 50, scale: 0.97 },
      {
        opacity: 1, y: 0, scale: 1, duration: 1.4, ease: 'power4.out',
        scrollTrigger: {
          trigger: '.about-portrait-card',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.about-content-col > *',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-content-col',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // About Timeline Scrub
    gsap.fromTo('.timeline-scroll-line',
      { scaleY: 0 },
      {
        scaleY: 1, ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-scroll-line',
          start: 'top 75%',
          end: 'bottom 65%',
          scrub: 1.2
        }
      }
    );

    document.querySelectorAll('.timeline-item').forEach(item => {
      const badge = item.querySelector('.timeline-badge');
      const text = item.querySelector('.timeline-text');
      gsap.fromTo([badge, text],
        { opacity: 0, x: 25 },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Expertise Section Entrance
    gsap.fromTo('.expertise-header-row > *',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.expertise-header-row',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.expertise-desktop-grid > *',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.expertise-desktop-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Ventures Section Entrance
    gsap.fromTo('.ventures-header-row > *',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.ventures-header-row',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Parallax background on Core Values Section
    gsap.fromTo('.parallax-values-bg',
      { yPercent: -15 },
      {
        yPercent: 15, ease: 'none',
        scrollTrigger: {
          trigger: '#values-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );

    gsap.fromTo('.values-card-container',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1.4, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.values-card-container',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Achievements Section Entrance
    gsap.fromTo('.achievements-grid > *',
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.achievements-grid',
          start: 'top 82%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Insights Section Entrance
    gsap.fromTo('.insights-header',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.insights-header',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.insights-grid > *',
      { opacity: 0, y: 36 },
      {
        opacity: 1, y: 0, duration: 0.95, stagger: 0.13, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.insights-grid',
          start: 'top 82%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Testimonials Section Entrance
    gsap.fromTo('.testimonials-portrait-frame',
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.testimonials-portrait-frame',
          start: 'top 82%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.testimonials-content-box',
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.testimonials-content-box',
          start: 'top 82%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Contact Section Entrance
    gsap.fromTo('.contact-card-box',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-card-box',
          start: 'top 82%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }

  // Initialize Ventures Swiper Slider
  new Swiper('.ventures-swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 24
      }
    }
  });

  // Custom Vanilla JS Carousel Slider Helper function
  function createCustomSlider({
    trackSelector,
    slidesSelector,
    dotsSelector,
    slidesPerViewMobile = 1,
    slidesPerViewDesktop = 2,
    autoplayDelay = 4500
  }) {
    const track = document.querySelector(trackSelector);
    if (!track) return;
    
    const slides = track.querySelectorAll(slidesSelector);
    const dots = document.querySelectorAll(dotsSelector);
    let activeIdx = 0;
    let autoplayInterval;

    function getSlidesPerView() {
      return window.innerWidth < 768 ? slidesPerViewMobile : slidesPerViewDesktop;
    }

    function getSlideCount() {
      const perView = getSlidesPerView();
      return Math.max(1, slides.length - perView + 1);
    }

    function updateSlider() {
      const perView = getSlidesPerView();
      const slideCount = getSlideCount();
      if (activeIdx >= slideCount) activeIdx = 0;

      // Translate track
      const translation = activeIdx * (100 / perView);
      track.style.transform = `translateX(-${translation}%)`;

      // Update dots indicator active states
      dots.forEach((dot, idx) => {
        if (idx === activeIdx) {
          dot.classList.add('w-8', 'bg-[#C8A46B]');
          dot.classList.remove('w-4', 'bg-[#C8A46B]/20');
        } else {
          dot.classList.remove('w-8', 'bg-[#C8A46B]');
          dot.classList.add('w-4', 'bg-[#C8A46B]/20');
        }
      });

      // Update slide active states (to trigger card highlight transitions)
      slides.forEach((slide, idx) => {
        const isVisible = (window.innerWidth < 768) 
          ? (idx === activeIdx) 
          : (idx === activeIdx || idx === activeIdx + 1);

        const card = slide.querySelector('.group');
        if (card) {
          if (isVisible) {
            card.classList.add('bg-[#05070a]/60', 'border-[#C8A46B]/25', 'shadow-[0_15px_30px_rgba(5,7,10,0.4)]', 'scale-100', 'opacity-100');
            card.classList.remove('bg-[#05070a]/30', 'border-transparent', 'scale-95', 'opacity-40', 'pointer-events-none');
          } else {
            card.classList.remove('bg-[#05070a]/60', 'border-[#C8A46B]/25', 'shadow-[0_15px_30px_rgba(5,7,10,0.4)]', 'scale-100', 'opacity-100');
            card.classList.add('bg-[#05070a]/30', 'border-transparent', 'scale-95', 'opacity-40', 'pointer-events-none');
          }
        }
      });
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(() => {
        const slideCount = getSlideCount();
        activeIdx = (activeIdx + 1) % slideCount;
        updateSlider();
      }, autoplayDelay);
    }

    function stopAutoplay() {
      if (autoplayInterval) clearInterval(autoplayInterval);
    }

    // Bind dots click events
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        activeIdx = idx;
        updateSlider();
        startAutoplay();
      });
    });

    // Handle resize update
    window.addEventListener('resize', () => {
      updateSlider();
    });

    // Start
    updateSlider();
    startAutoplay();
  }

  // 1. Initialize Core Values Carousel Slider
  createCustomSlider({
    trackSelector: '.values-track',
    slidesSelector: '.values-slide',
    dotsSelector: '.values-dot',
    slidesPerViewMobile: 1,
    slidesPerViewDesktop: 2,
    autoplayDelay: 4500
  });

  // 2. Initialize Mobile Insights Carousel Slider
  if (window.innerWidth < 768) {
    createCustomSlider({
      trackSelector: '.insights-track',
      slidesSelector: '.insights-slide',
      dotsSelector: '.insights-dot',
      slidesPerViewMobile: 1,
      slidesPerViewDesktop: 4, // Not used in mobile view anyway
      autoplayDelay: 4500
    });
  }

  // 3. Initialize Expertise Slider on Mobile
  if (window.innerWidth < 768) {
    createCustomSlider({
      trackSelector: '.expertise-track',
      slidesSelector: '.expertise-slide',
      dotsSelector: '.expertise-dot',
      slidesPerViewMobile: 1,
      slidesPerViewDesktop: 4,
      autoplayDelay: 4500
    });
  }

  // Testimonials Carousel Section
  const testimonials = [
    {
      name: 'Rohan Verma',
      role: 'Entrepreneur, Hyderabad',
      rating: 5,
      image: 'images/vspaces_interior.png',
      quote: 'V Spaces made our search for the perfect co-working space seamless. Payal and her team offered professional, supportive guidance throughout the journey. They understood our business needs and exceeded expectations. I strongly recommend V Spaces to anyone seeking flexible and reliable workspace solutions. Thank you for your exceptional service.'
    },
    {
      name: 'Priya Nair',
      role: 'Director, Bluewave Ventures',
      rating: 5,
      image: 'images/veva_realty_interior.png',
      quote: 'Working with Veva Realty was an absolute pleasure. Payal’s insight into the Hyderabad market is unmatched. She guided us through our commercial investment with complete transparency and helped us secure a property that far exceeded our initial brief. A truly trust-driven real estate experience.'
    },
    {
      name: 'Arjun Mehta',
      role: 'Co-Founder, Apex Capital',
      rating: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXoLS0kH4TGRTOp9fY8T1Kv7d-phfxOxRbA&s',
      quote: 'Payal Kar Dutta is not just a real estate advisor — she is a strategic partner. Her meticulous approach to understanding our portfolio goals and her vast network made the entire acquisition process effortless. Veva Realty sets the gold standard for luxury real estate in South India.'
    }
  ];

  const tQuote = document.querySelector('#testimonials p');
  const tName = document.querySelector('#testimonials .font-semibold');
  const tRole = document.querySelector('#testimonials p.text-\\[11px\\]');
  const tImage = document.querySelector('#testimonials img');
  const tDots = document.querySelectorAll('.testimonials-dot');
  let activeTestimonialIdx = 0;
  let testimonialInterval;

  function switchTestimonial(idx) {
    if (idx === activeTestimonialIdx) return;
    
    // Add fade out animation effect
    tQuote.classList.add('opacity-0');
    tName.parentElement.classList.add('opacity-0');
    tImage.classList.add('opacity-0');

    setTimeout(() => {
      activeTestimonialIdx = idx;
      const tData = testimonials[activeTestimonialIdx];
      
      tQuote.textContent = tData.quote;
      tName.textContent = tData.name;
      tRole.textContent = tData.role;
      tImage.src = tData.image;
      tImage.alt = tData.name;

      // Update dots indicator active states
      tDots.forEach((dot, dotIdx) => {
        if (dotIdx === activeTestimonialIdx) {
          dot.classList.add('w-8', 'bg-[#C8A46B]');
          dot.classList.remove('w-5', 'bg-[#C8A46B]/25');
        } else {
          dot.classList.remove('w-8', 'bg-[#C8A46B]');
          dot.classList.add('w-5', 'bg-[#C8A46B]/25');
        }
      });

      // Remove fade effect
      tQuote.classList.remove('opacity-0');
      tName.parentElement.classList.remove('opacity-0');
      tImage.classList.remove('opacity-0');
    }, 350);
  }

  function startTestimonialAutoplay() {
    stopTestimonialAutoplay();
    testimonialInterval = setInterval(() => {
      const nextIdx = (activeTestimonialIdx + 1) % testimonials.length;
      switchTestimonial(nextIdx);
    }, 4500);
  }

  function stopTestimonialAutoplay() {
    if (testimonialInterval) clearInterval(testimonialInterval);
  }

  tDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      switchTestimonial(idx);
      startTestimonialAutoplay();
    });
  });

  // Start Testimonials Carousel
  startTestimonialAutoplay();
});
