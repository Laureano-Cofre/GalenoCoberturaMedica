document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Inicializar el carrusel mostrando la primera imagen
    showSlide(currentSlide);

    // Código para el nuevo carrusel de servicios médicos
    const medicalCarousel = document.querySelector('.medical-carousel-container');
    const medicalSlides = document.querySelectorAll('.medical-carousel-slide');
    const totalSlides = medicalSlides.length;
    let currentMedicalSlide = 0;

    function updateMedicalCarousel() {
        const slidesToShow = window.innerWidth <= 768 ? 2 : 5; // Mostrar 2 slides en pantallas pequeñas y 5 en pantallas grandes
        const offset = -currentMedicalSlide * (100 / slidesToShow); // Calcula el desplazamiento adecuado
        medicalCarousel.style.transform = `translateX(${offset}%)`;
    }

    function nextMedicalSlide() {
        const slidesToShow = window.innerWidth <= 768 ? 2 : 5; // Mostrar 2 slides en pantallas pequeñas y 5 en pantallas grandes
        currentMedicalSlide = (currentMedicalSlide + 1) % totalSlides;
        if (currentMedicalSlide + slidesToShow > totalSlides) {
            currentMedicalSlide = 0;
        }
        updateMedicalCarousel();
    }

    function prevMedicalSlide() {
        const slidesToShow = window.innerWidth <= 768 ? 2 : 5; // Mostrar 2 slides en pantallas pequeñas y 5 en pantallas grandes
        currentMedicalSlide = (currentMedicalSlide - 1 + totalSlides) % totalSlides;
        if (currentMedicalSlide < 0) {
            currentMedicalSlide = totalSlides - slidesToShow;
        }
        updateMedicalCarousel();
    }

    document.querySelector('.next-medical').addEventListener('click', nextMedicalSlide);
    document.querySelector('.prev-medical').addEventListener('click', prevMedicalSlide);

    // Inicializar el carrusel mostrando las primeras imágenes
    updateMedicalCarousel();

    // Actualizar el carrusel al redimensionar la ventana
    window.addEventListener('resize', updateMedicalCarousel);
});
