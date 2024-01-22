// swiper js
const swiper = new Swiper('.swiper', {
    allowTouchMove: true,

    autoplay: {
        delay: 1500,
    },

    // Responsive breakpoints
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        380: {
            slidesPerView: 2,
            spaceBetween:20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    },
});