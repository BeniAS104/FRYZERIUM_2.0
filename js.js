document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
    :root {--swiper-theme-color: var(--brown); --swiper-navigation-color: var(--brown) }
    `;
    document.head.appendChild(style);
});
