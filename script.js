// Welcome pop-up when the page loads
window.onload = function () {
  const welcomePopup = document.getElementById('welcome-popup');
  welcomePopup.style.display = 'flex'; // Show the pop-up

  // Hide all sections and footer initially
  const sections = document.querySelectorAll('section, footer');
  sections.forEach(section => {
    section.style.opacity = '0'; // Start fully transparent
    section.style.transform = 'translateY(20px)'; // Start slightly below
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Smooth transition
  });

  // Close the pop-up and show all sections and footer with animation
  const closeButton = document.getElementById('close-welcome');
  closeButton.addEventListener('click', function () {
    welcomePopup.style.display = 'none'; // Hide the pop-up

    // Show sections and footer with a fade-in and slide-up effect
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = '1'; // Fade in
        section.style.transform = 'translateY(0)'; // Slide up
      }, index * 200); // Delay each section's animation
    });
  });
};

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});