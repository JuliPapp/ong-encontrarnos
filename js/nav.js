// Get references to the navbar and nav-menu elements
const navbar = document.querySelector('#header');
const nav_Menu = document.querySelector('.nav-menu');

// Function to update the width of nav-menu
function updateNavMenuWidth() {
    const navbarWidth = navbar.offsetWidth;
    nav_Menu.style.width = `${navbarWidth}px`;
}

// Call the function to set the initial width
updateNavMenuWidth();

// Attach an event listener to the window's resize event to update the width dynamically
window.addEventListener('resize', updateNavMenuWidth);