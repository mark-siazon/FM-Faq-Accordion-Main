document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.toggle-header');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const info = toggle.nextElementSibling;
      const icon = toggle.querySelector('.img-btn');

      if (info.classList.contains('toggle-hidden')) {
        info.classList.remove('toggle-hidden');
        info.classList.add('toggle-visible');
        icon.src = 'assets/images/icon-minus.svg'; // Change icon to minus
      } else {
        info.classList.remove('toggle-visible');
        info.classList.add('toggle-hidden');
        icon.src = 'assets/images/icon-plus.svg'; // Change icon back to plus
      }
    });
  });
});
