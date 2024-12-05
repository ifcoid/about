document.addEventListener('DOMContentLoaded', () => {
    // Slide elements
    const slides = document.querySelectorAll('.slide');
    const nextSlideButton = document.getElementById('nextSlide');
    const prevSlideButton = document.getElementById('prevSlide');
    let currentSlide = 0;

    // Show slide at specific index 
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('is-active', i === index);
        });
    };

    // Navigate to the next slide
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    // Navigate to the previous slide
    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    // Add event listeners if elements exist
    if (nextSlideButton) {
        nextSlideButton.addEventListener('click', nextSlide);
    }
    if (prevSlideButton) {
        prevSlideButton.addEventListener('click', prevSlide);
    }

    // Auto-slide every 5 seconds
    const autoSlideInterval = setInterval(nextSlide, 5000);

    // Pause auto-slide on hover, resume on mouse leave
    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        slide.addEventListener('mouseleave', () => setInterval(nextSlide, 5000));
    });

    // Initialize Swiper for testimonials
    const swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});
