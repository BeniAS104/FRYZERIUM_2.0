document.addEventListener('DOMContentLoaded', () => {
    const cats = document.querySelectorAll('.cat');  // Select all category elements
    const serviceClasses = ['cutting', 'dyeing', 'haircare', 'updos'];  // Define service classes

    // Function to handle category clicks
    function handleCatClick(cat, index) {
        cats.forEach(c => c.classList.remove('active2'));  // Deactivate all categories
        cat.classList.add('active2');  // Activate the clicked category

        serviceClasses.forEach(serviceClass => {
            document.querySelectorAll(`.${serviceClass}.service`).forEach(element => {
                element.classList.add('hidden');  // Hide all services
            });
        });

        const selectedServiceClass = serviceClasses[index];
        document.querySelectorAll(`.${selectedServiceClass}.service`).forEach(element => {
            element.classList.remove('hidden');  // Show services of the clicked category
        });
    }

    // Attach event listeners to each category
    cats.forEach((cat, index) => {
        cat.addEventListener('click', () => handleCatClick(cat, index));
    });

    // Set initial state by activating the first category
    if (cats.length > 0) {
        handleCatClick(cats[0], 0);
    }
});
