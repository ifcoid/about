// Burger menus
document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const burgers = document.querySelectorAll('.navbar-menu-open');
    const menus = document.querySelectorAll('.navbar-side');
    const closes = document.querySelectorAll('.navbar-close');
    const backdrops = document.querySelectorAll('.navbar-backdrop');

    // Toggle menu visibility
    const toggleMenuVisibility = () => {
        menus.forEach(menu => menu.classList.toggle('is-hidden'));
    };

    // Open menu on burger click
    burgers.forEach(burger => {
        burger.addEventListener('click', toggleMenuVisibility);
    });

    // Close menu on close button click
    closes.forEach(close => {
        close.addEventListener('click', toggleMenuVisibility);
    });

    // Close menu on backdrop click
    backdrops.forEach(backdrop => {
        backdrop.addEventListener('click', toggleMenuVisibility);
    });
});
