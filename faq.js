
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
