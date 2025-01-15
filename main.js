// Handle collapsible menu
document.getElementById("toggle-menu").addEventListener("click", function () {
  const menu = document.getElementById("menu-items");
  if (menu.style.display === "none" || !menu.style.display) {
    menu.style.display = "block"; // Show the menu
  } else {
    menu.style.display = "none"; // Hide the menu
  }
});

// Adjust page width dynamically based on screen size
function adjustPageWidth() {
  const container = document.getElementById("page-container");
  const screenWidth = window.innerWidth;

  if (screenWidth >= 992 && screenWidth <= 1600) {
    container.style.width = "90%";
  } else if (screenWidth >= 700 && screenWidth <= 767) {
    container.style.width = "80%";
  } else if (screenWidth >= 600 && screenWidth < 700) {
    container.style.width = "75%";
  } else if (screenWidth <= 600) {
    container.style.width = "50%";
  } else {
    container.style.width = "100%"; // Default full width
  }
}

// Call adjustPageWidth when the page loads and on resize
adjustPageWidth();
window.addEventListener("resize", adjustPageWidth);
