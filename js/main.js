let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const intervalTime = 4000; // Tiempo en milisegundos (3 segundos)

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
    moveSlide(1); // Mueve a la siguiente imagen
}

// Iniciar el intervalo para el cambio automático
const slideInterval = setInterval(autoSlide, intervalTime);

// Agregar eventos a los botones
document.querySelector('.prevBtn').addEventListener('click', () => {
    moveSlide(-1);
    resetInterval(); // Reinicia el intervalo al hacer clic manualmente
});

document.querySelector('.nextBtn').addEventListener('click', () => {
    moveSlide(1);
    resetInterval(); // Reinicia el intervalo al hacer clic manualmente
});

// Reinicia el intervalo cuando se navega manualmente
function resetInterval() {
    clearInterval(slideInterval);
    setInterval(autoSlide, intervalTime);
}
