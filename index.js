const hamburger = document.querySelector(".hamburger")
const navBar = document.querySelector(".navbar");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
})
class Slider {
    constructor() {
        this.slides = document.querySelectorAll(".slide")
        this.sliderBtnRight = document.querySelector(".slider_arrow-right")
        this.sliderBtnLeft = document.querySelector(".slider_arrow-left")
        this.dotContainer = document.querySelector(".dots")
        this.currentSlide = 0;
        this.maxSlides = this.slides.length;
        this.createDotss = false;
        this.setAutoplay = false;
    }

    goToSlide(slide) {
        if (window.innerWidth <= 1200) {
            this.slides.forEach((el, i) => el.style.transform = `translateX(${120 * (i-slide)}%)`);
            this.slides.forEach((el, i) => el.style.transform = `box-shadow: 0px 0px 15px 0px rgba(34, 60, 80, 0.2);
            `);
        }
    }

    nextSlide() {
        console.log(this.currentSlide)
        if (this.currentSlide === this.maxSlides - 1) {
            this.currentSlide = 0;
        } else {
            this.currentSlide++;
        }
        this.goToSlide(this.currentSlide);
        this.activateDot(this.currentSlide)
    }

    prewSlide() {
        if (this.currentSlide === 0) {
            this.currentSlide = this.maxSlides - 1;
        } else {
            this.currentSlide--;
        }
        this.goToSlide(this.currentSlide);
        this.activateDot(this.currentSlide);
    }

    createDots() {
        let dot;
        if (this.createDotss) {
            this.slides.forEach(function(_, i) {
                dot = document.createElement("button");
                dot.classList.add("dot");
                dot.dataset.slide = `${i}`;
                this.dotContainer.appendChild(dot);
            }, this);
        }
    };

    // createDots() {
    //     this.slides.forEach(function(_, i) {
    //         this.dotContainer.insertAdjacentHTML(
    //             'beforeend',
    //             `<button class="dot" data-slide="${i}"></button>`
    //         );
    //     }, this);
    // };

    activateDot(slide) {
        document.querySelectorAll(".dot").forEach(dot => dot.classList.remove('dot--active'))
        document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('dot--active')
    }
    autoplay() {
        if (this.setAutoplay) {
            setInterval(() => this.nextSlide(), 2000);
        }
    }
}

let slider1 = new Slider();

slider1.goToSlide(0)
slider1.createDots();
slider1.autoplay()
slider1.sliderBtnRight.addEventListener('click', () => slider1.nextSlide());
slider1.sliderBtnLeft.addEventListener('click', () => slider1.prewSlide());

slider1.dotContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('dot')) {
        const { slide } = e.target.dataset;
        slider1.goToSlide(slide);
        slider1.activateDot(slide);
    }
})

//викл крапочки done
//вкл викл автоплей done

// babel
// flattened!!
//кількість крапочок.кількість слайдів
//responsive