document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextSlide = document.getElementById('nextSlide');
    const prevSlide = document.getElementById('prevSlide');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove('is-active');
            if (i === index) {
                slide.classList.add('is-active');
            }
        });
    };

    const next = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    const prev = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    // Event listeners for buttons
    nextSlide.addEventListener('click', next);
    prevSlide.addEventListener('click', prev);

    // Auto-slide every 5 seconds
    setInterval(next, 5000);
});
