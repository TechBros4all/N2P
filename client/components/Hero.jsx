/* eslint-disable react/no-unescaped-entities */
const handleScroll = () => {
  const targetScrollY = window.matchMedia("(max-width: 991px)").matches
    ? 700
    : 650;
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
};
const Hero = () => {
  return (
    <main className="container">
      <section className="hero">
        <svg
          className="hero-svg"
          width="1280"
          height="973"
          viewBox="0 0 1280 973"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG content */}
          <rect
            width="705.953"
            height="1616.36"
            rx="13"
            transform="matrix(-0.665972 -0.745977 -0.745977 0.665972 1397.91 -98.3755)"
            fill="url(#paint0_linear_0_1)"
            fillOpacity="0.22"
          />
          <rect
            x="-140"
            y="-105.118"
            width="681.119"
            height="1642.98"
            rx="13"
            transform="rotate(-48.8509 -140 -105.118)"
            fill="url(#paint1_linear_0_1)"
            fillOpacity="0.22"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="-64.2598"
              y1="842.903"
              x2="-363.802"
              y2="1407.23"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0.09" />
              <stop offset="1" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_1"
              x1="-201.999"
              y1="751.667"
              x2="-515.205"
              y2="1311.76"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0.09" />
              <stop offset="1" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
        <div className="hero-text">
          <div className="hero-text-box">
            <h1>nth 2 prove</h1>
            <h2>Start shopping with us</h2>
          </div>
        </div>
        <button className="scroll-icon" id="scroll-icon" onClick={handleScroll}>
          <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
            <path d="M233.4 416.6c12.5 12.5 32.8 12.5 45.3 0l192 -192c12.5 -12.5 12.5 -32.8 0 -45.3s-32.8 -12.5 -45.3 0L256 346.7 86.6 177.4c-12.5 -12.5 -32.8 -12.5 -45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
          </svg>
        </button>
      </section>
    </main>
  );
};

export default Hero;
