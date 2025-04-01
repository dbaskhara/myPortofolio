// Remove the entire window.onload function and replace with:
document.addEventListener('DOMContentLoaded', function() {
  // Add any initialization code if needed
});

// Keep the smooth scrolling code
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});