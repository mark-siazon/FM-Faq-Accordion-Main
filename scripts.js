// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with class 'toggle-header'
  const toggles = document.querySelectorAll('.toggle-header');

  // Add click event listener to each toggle header
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      // Find the next element sibling of the clicked toggle header
      const info = toggle.nextElementSibling;
      // Find the icon element within the toggle header
      const icon = toggle.querySelector('.img-btn');

      // Toggle visibility classes and change icon source based on current state
      if (info.classList.contains('toggle-hidden')) {
        // Show the info content
        info.classList.remove('toggle-hidden');
        icon.src = 'assets/images/icon-minus.svg'; // Change icon to minus
      } else {
        // Hide the info content
        info.classList.add('toggle-hidden');
        icon.src = 'assets/images/icon-plus.svg'; // Change icon back to plus
      }
    });
  });
});