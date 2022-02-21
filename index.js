let slides = document.querySelectorAll(".slide")
let sliderBtnRight = document.querySelector(".slider_arrow-right")
let sliderBtnLeft = document.querySelector(".slider_arrow-left")

let currentSlide = 0;
const maxSlides = slides.length;


const goToSlide = function(slide) {
    if (window.innerWidth <= 1200) {
        slides.forEach((el, i) => el.style.transform = `translateX(${120 * (i-slide)}%)`);
        slides.forEach((el, i) => el.style.transform = `box-shadow: 0px 0px 15px 0px rgba(34, 60, 80, 0.2);
        `);
    }
}
goToSlide(0)

const nextSlide = function() {
    if (currentSlide === maxSlides - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    goToSlide(currentSlide);
}
const prewSlide = function() {
    if (currentSlide === 0) {
        currentSlide = maxSlides - 1;
    } else {
        currentSlide--;
    }
    goToSlide(currentSlide);
}

sliderBtnRight.addEventListener('click', nextSlide);
sliderBtnLeft.addEventListener('click', prewSlide);