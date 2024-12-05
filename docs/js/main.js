// Menunggu DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Seleksi elemen untuk menu burger
    const burgers = document.querySelectorAll('.navbar-menu-open');
    const menus = document.querySelectorAll('.navbar-side');
    const closes = document.querySelectorAll('.navbar-close');
    const backdrops = document.querySelectorAll('.navbar-backdrop');

    // Fungsi toggle visibility menu
    const toggleMenuVisibility = () => {
        menus.forEach(menu => menu.classList.toggle('is-hidden'));
    };

    // Tambahkan event listener untuk tombol burger
    burgers.forEach(burger => {
        burger.addEventListener('click', toggleMenuVisibility);
    });

    // Tambahkan event listener untuk tombol close
    closes.forEach(close => {
        close.addEventListener('click', toggleMenuVisibility);
    });

    // Tambahkan event listener untuk backdrop
    backdrops.forEach(backdrop => {
        backdrop.addEventListener('click', toggleMenuVisibility);
    });

    // Seleksi elemen popup dan tombol close
    const popup = document.querySelector('.popup');
    const closeButton = document.querySelector('.close-button');

    // Fungsi untuk membuka popup
    function openPopup() {
        if (popup) {
            popup.classList.add('active');
        }
    }

    // Fungsi untuk menutup popup
    function closePopup() {
        if (popup) {
            popup.classList.remove('active');
        }
    }

    // Tambahkan event listener untuk tombol close popup
    if (closeButton) {
        closeButton.addEventListener('click', closePopup);
    }

    // Menutup popup saat menekan tombol Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closePopup();
        }
    });
});
