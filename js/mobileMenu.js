export function initMobileMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav-list');

    burgerMenu?.addEventListener('click', () => {
        navList?.classList.toggle('active');
        const spans = burgerMenu.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });
}