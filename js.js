
// THIS PART IS FOR ADDING .ACTIVE CLASS TO .NAVLINKS AT THE HEADER 
// TO GIVE THE LINE VISUAL WHILE BEING ON A SITE
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get all nav links
  const navLinks = document.querySelectorAll('.navlinks a:not(.no-hover-effect)');

  // Function to handle active class
  function handleActiveClass(event) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      // Add active class to the clicked link
      event.currentTarget.classList.add('active');
  }

  // Attach click event to each nav link
  navLinks.forEach(link => {
      link.addEventListener('click', handleActiveClass);
  });

  // Preserve active state on page reload
  // Check the current URL and add the active class accordingly
  const currentUrl = window.location.href;
navLinks.forEach(link => {
    if (link.href === currentUrl) {
        link.classList.add('active');
    } else if (currentUrl === 'https://fryzerium.aloyasmind.dk/' || currentUrl === 'https://fryzerium.bendev.dk/') {
        navLinks[0].classList.add('active');
    }
});
});
// THIS PART IS FOR THE :FOCUS ELEMENT
//  NOT TO APPEAR WHEN CLICKING WITH MOUSE - ONLY WITH TABBING

// Add a flag to track keyboard interaction
let isKeyboard = false;

// Add event listeners for keyboard and mouse interactions
document.addEventListener('keydown', () => {
isKeyboard = true;
});

document.addEventListener('mousedown', () => {
isKeyboard = false;
});

// Add the focus-visible class if the focus event was triggered by keyboard
document.addEventListener('focusin', (event) => {
if (isKeyboard) {
  event.target.classList.add('focus-visible');
}
});

// Remove the focus-visible class on focus out
document.addEventListener('focusout', (event) => {
event.target.classList.remove('focus-visible');
});

// make articles clickable without makeing it as links
function handleBoxClick(box) {
    window.location.href = box.getAttribute('data-link');
  }
  