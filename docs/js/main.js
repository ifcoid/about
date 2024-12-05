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
// Mendapatkan elemen popup dan tombol close
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close-button');

// Fungsi untuk membuka popup 
function openPopup() {
    popup.classList.add('active');
} 

// Fungsi untuk menutup popup
function closePopup() {
    popup.classList.remove('active');
}

// Menutup popup saat tombol close diklik
closeButton.addEventListener('click', closePopup);

// Menutup popup saat menekan tombol Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closePopup();
    }
});
