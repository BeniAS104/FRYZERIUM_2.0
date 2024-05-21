document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
    :root {--swiper-theme-color: var(--brown); --swiper-navigation-color: var(--brown) }
    `;
    document.head.appendChild(style);
});
// ACCESIBILITY LIGHTHOUSE - ADDS TITLE TO INSTA IFRAMES
document.addEventListener('DOMContentLoaded', function() {
    // Mutation observer to watch for changes in the DOM
    var observer = new MutationObserver(function(mutations) {
        // Iterates over each mutation
        mutations.forEach(function(mutation) {
            // Checks if any nodes were added
            if (mutation.type === 'childList') {
                // Selects all iframes
                var iframes = document.querySelectorAll('iframe');

                // Iterate over each iframe
                iframes.forEach(function(iframe) {
                    // Checks if the iframe does not have a title attribute
                    if (!iframe.hasAttribute('title')) {
                        // Sets a title attribute based on your preference
                        iframe.setAttribute('title', 'Embedded Instagram Content');
                    }
                });
            }
        });
    });

    // Configuration of the observer (watch for childList changes)
    var config = { childList: true, subtree: true };

    // Start observing the document
    observer.observe(document.body, config);
});