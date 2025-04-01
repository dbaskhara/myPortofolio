// Remove the entire window.onload function and replace with:
document.addEventListener('DOMContentLoaded', function() {
  // Keep the smooth scrolling code
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Dark mode toggle functionality
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
});

