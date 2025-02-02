// Welcome pop-up when the page loads
window.onload = function () {
  const welcomePopup = document.getElementById('welcome-popup');
  welcomePopup.style.display = 'flex'; // Show the pop-up

  // Close the pop-up when the button is clicked
  const closeButton = document.getElementById('close-welcome');
  closeButton.addEventListener('click', function () {
    welcomePopup.style.display = 'none'; // Hide the pop-up
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