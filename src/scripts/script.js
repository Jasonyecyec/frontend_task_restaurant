document.addEventListener("DOMContentLoaded", updateDateTimeInput);
document
  .getElementById("date_time")
  .addEventListener("focus", updateDateTimeInput);

const reviewContainer = document.getElementById("review-container");

// Function to adjust scrollLeft based on screen width
function adjustScrollPosition() {
  if (window.matchMedia("(min-width: 1280px)").matches) {
    // Desktop (xl and above)
    reviewContainer.scrollLeft = 250;
  } else {
    // Mobile (sm and below)
    reviewContainer.scrollLeft = 0;
  }
}

adjustScrollPosition();
window.addEventListener("resize", adjustScrollPosition);

function updateDateTimeInput() {
  const dateTimeInput = document.getElementById("date_time");
  const now = new Date();
  const formattedDateTime = now.toISOString().slice(0, 16);
  dateTimeInput.value = formattedDateTime;
  dateTimeInput.min = formattedDateTime;
}

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
