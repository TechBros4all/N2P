// scroll button on homepage


// const scroller = document.getElementById('scroll-icon');
// scroller.addEventListener('click', () => {
//     if (window.matchMedia('(max-width: 991px)').matches) {
//         setTimeout(() => {
//             window.scrollTo(0, 550);
//         }, 500);
//     } else {
//         setTimeout(() => {
//             window.scrollTo(0, 650);
//         }, 500);
//     }
// });

const scroller = document.getElementById('scroll-icon');
scroller.addEventListener('click', () => {
    const targetScrollY = window.matchMedia('(max-width: 991px)').matches ? 700 : 650;
    const duration = 1000; // Animation duration in milliseconds
    const startTime = performance.now();
    const startScrollY = window.scrollY || window.pageYOffset;

    function scrollStep(timestamp) {
        const currentTime = timestamp - startTime;
        if (currentTime < duration) {
            const progress = currentTime / duration;
            const newY = startScrollY + (targetScrollY - startScrollY) * progress;
            window.scrollTo(0, newY);
            window.requestAnimationFrame(scrollStep);
        } else {
            window.scrollTo(0, targetScrollY);
        }
    }

    window.requestAnimationFrame(scrollStep);
});