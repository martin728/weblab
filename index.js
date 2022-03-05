let slides = document.querySelectorAll(".slide")
let sliderBtnRight = document.querySelector(".slider_arrow-right")
let sliderBtnLeft = document.querySelector(".slider_arrow-left")
let dotContainer = document.querySelector(".dots")

let currentSlide = 0;
const maxSlides = slides.length;


const goToSlide = function(slide) {
    if (window.innerWidth <= 1200) {
        slides.forEach((el, i) => el.style.transform = `translateX(${120 * (i-slide)}%)`);
        slides.forEach((el, i) => el.style.transform = `box-shadow: 0px 0px 15px 0px rgba(34, 60, 80, 0.2);
        `);
    }
}

const nextSlide = function() {
    if (currentSlide === maxSlides - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide)
}

const prewSlide = function() {
    if (currentSlide === 0) {
        currentSlide = maxSlides - 1;
    } else {
        currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide)

}

const createDots = function() {
    slides.forEach(function(_, i) {
        dotContainer.insertAdjacentHTML(
            'beforeend',
            `<button class="dot" data-slide="${i}"></button>`
        );
    });
};

const activateDot = function(slide) {
    document.querySelectorAll(".dot").forEach(dot => dot.classList.remove('dot--active'))
    document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('dot--active')
}

goToSlide(0)
createDots();

sliderBtnRight.addEventListener('click', nextSlide);
sliderBtnLeft.addEventListener('click', prewSlide);
dotContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
    }
})