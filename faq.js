const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
  // Get all FAQ buttons
  const faqButtons = document.querySelectorAll('.bg-gray-800 button');
  
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle the visibility of the answer
      const answer = button.nextElementSibling;
      const icon = button.querySelector('.plus-minus');

      // Toggle the hidden class
      answer.classList.toggle('hidden');

      // Change icon based on state
      if (answer.classList.contains('hidden')) {
        icon.textContent = '+'; // Show plus when collapsed
      } else {
        icon.textContent = '–'; // Show minus when expanded
      }
    });
  });


  
// stagger
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.stagger-item');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        const item = entry.target;

        // When the element enters the viewport
        if (entry.isIntersecting) {
          item.style.transitionDelay = `${index * 0.2}s`; // Stagger delay when entering
          item.classList.add('visible'); // Trigger animation when entering
        } else {
          // When the element exits the viewport
          item.style.transitionDelay = `${(items.length - index) * 0.2}s`; // Stagger delay for removal
          item.classList.remove('visible'); // Remove animation when exiting
        }
      });
    },
    {
      threshold: 0.3, // Trigger when 20% of the element is in the viewport
    }
  );

  items.forEach((item) => {
    observer.observe(item); // Start observing each element
  });
});
  
  

