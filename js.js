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
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});
