let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const intervalTime = 4000;

// Función para cambiar de imagen
function moveSlide(direction) {
    slideIndex += direction;

    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    const offset = slideIndex * -100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

// Función para cambiar automáticamente
function autoSlide() {
    moveSlide(1);
}

// Iniciar el intervalo para el cambio automático
const slideInterval = setInterval(autoSlide, intervalTime);

document.querySelector('.prevBtn').addEventListener('click', () => {
    moveSlide(-1);
    resetInterval();
});

document.querySelector('.nextBtn').addEventListener('click', () => {
    moveSlide(1);
    resetInterval();
});

// Reinicia el intervalo cuando se navega manualmente
function resetInterval() {
    clearInterval(slideInterval);
    setInterval(autoSlide, intervalTime);
}
