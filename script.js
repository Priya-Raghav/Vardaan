  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      nav: true,
      dots: true,
      responsive: {
        0: { items: 1 },
        768: { items: 1 },
        1200: { items: 1 }
      }
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  });

  document.querySelectorAll('.about-section').forEach(section => {
    observer.observe(section);
  });
