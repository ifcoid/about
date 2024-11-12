// Menu Burger
document.addEventListener('DOMContentLoaded', () => {
    // Seleksi elemen
    const burgers = document.querySelectorAll('.navbar-menu-open');
    const menus = document.querySelectorAll('.navbar-side');
    const closes = document.querySelectorAll('.navbar-close');
    const backdrops = document.querySelectorAll('.navbar-backdrop');

    // Fungsi toggle visibility menu
    const toggleMenuVisibility = () => {
        menus.forEach(menu => menu.classList.toggle('is-hidden'));
    };

    // Buka menu ketika tombol burger diklik
    burgers.forEach(burger => {
        burger.addEventListener('click', toggleMenuVisibility);
    });

    // Tutup menu ketika tombol close diklik
    closes.forEach(close => {
        close.addEventListener('click', toggleMenuVisibility);
    });

    // Tutup menu ketika backdrop diklik
    backdrops.forEach(backdrop => {
        backdrop.addEventListener('click', toggleMenuVisibility);
    });
});
