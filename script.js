$(document).ready(function () {
  $("#flipbook").turn({
    width: 800,
    height: 600,
    autoCenter: true,
    duration: 1000, // Animation speed
    acceleration: true, // Enable hardware acceleration
  });
});