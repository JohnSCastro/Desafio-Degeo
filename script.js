// Implementando evento para pesquisa (desktop)

const searchBarDesktop = document.querySelector('.search-bar-desktop');
const searchBtnDesktop = document.querySelector('.search-desktop');
const closeBtnDesktop = document.querySelector('.close-desktop');
const inputDesktop = document.querySelector('.input-value-desktop');

searchBtnDesktop.addEventListener('click', () => {
    searchBarDesktop.classList.add('active');
})

closeBtnDesktop.addEventListener('click', () => {
    searchBarDesktop.classList.remove('active');
    inputDesktop.value = '';
})

document.addEventListener('click', (evento) => {
    if (!searchBarDesktop.contains(evento.target) && !searchBtnDesktop.contains(evento.target)) {
        searchBarDesktop.classList.remove('active');
        inputDesktop.value = '';
    }
});

// Implementando evento para pesquisa (mobile)

const searchBarMobile = document.querySelector('.search-bar-mobile');
const searchBtnMobile = document.querySelector('.search-mobile');
const closeBtnMobile = document.querySelector('.close-mobile');
const inputMobile = document.querySelector('.input-value-mobile');

searchBtnMobile.addEventListener('click', () => {
    searchBarMobile.classList.add('active');
})

closeBtnMobile.addEventListener('click', () => {
    searchBarMobile.classList.remove('active');
    inputMobile.value = '';
})

document.addEventListener('click', (evento) => {
    if (!searchBarMobile.contains(evento.target) && !searchBtnMobile.contains(evento.target)) {
        searchBarMobile.classList.remove('active');
        inputMobile.value = '';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
});

// Implementação de slider dos Banners individual

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider-single');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                dots[i].classList.add('active');
            }
        });
    }

    document.querySelector('.prev').addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    document.querySelector('.next').addEventListener('click', function() {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
});

// Implementação de Slider interativo dos 3 cards de Dados

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.card-single');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }

    document.querySelector('.card-prev').addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? totalSlides - 3 : currentIndex - 1;
        updateSlides();
    });

    document.querySelector('.card-next').addEventListener('click', function() {
        currentIndex = (currentIndex >= totalSlides - 3) ? 0 : currentIndex + 1;
        updateSlides();
    });

    updateSlides();

});