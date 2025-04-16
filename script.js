document.addEventListener('DOMContentLoaded', function() {
  // Header scroll effect
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
  
  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const closeMenuBtn = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuLinks = document.querySelectorAll('.menu-link');
  
  mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
  });
  
  closeMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
  });
  
  menuLinks.forEach(link => {
      link.addEventListener('click', function() {
          mobileMenu.classList.remove('active');
          document.body.style.overflow = 'auto';
      });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          if (this.getAttribute('href') !== '#') {
              e.preventDefault();
              
              const targetId = this.getAttribute('href');
              const targetElement = document.querySelector(targetId);
              
              if (targetElement) {
                  const headerHeight = header.offsetHeight;
                  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                  
                  window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                  });
              }
          }
      });
  });
  
  // Make all elements visible on load (replacing animation system based on scroll position)
  const makeElementsVisible = () => {
      document.querySelectorAll('.style-card, .team-image, .team-text, .review-card, .hours-container, .faq-item, .booking-form, .contact-info, .map').forEach(el => {
          el.classList.add('visible');
      });
  };
  
  // Call immediately to make elements visible without scroll animations
  makeElementsVisible();
});