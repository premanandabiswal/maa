// Home link: index.html — helper note
// Main site script (no-op for home link)
  const totalSlides = 4;
      let currentSlide = 0;

      const mainTrack = document.getElementById("main-track");
      const subTrack = document.getElementById("sub-track");
      const subCover = document.getElementById("sub-reveal-cover");

      setInterval(() => {
        // 1. Cover the second frame with a yellow block (Swipe in from left)
        subCover.classList.remove("origin-right");
        subCover.classList.add("origin-left");
        subCover.style.transform = "scaleX(1)";

        setTimeout(() => {
          // Increment slide index, loop back to 0 at the end
          currentSlide = (currentSlide + 1) % totalSlides;
          const offset = -(currentSlide * 100);

          // Main track slides normally from right to left
          mainTrack.style.transform = `translateX(${offset}%)`;
          subTrack.style.transform = `translateX(${offset}%)`;

          setTimeout(() => {
            subCover.classList.remove("origin-left");
            subCover.classList.add("origin-right");
            subCover.style.transform = "scaleX(0)";
          }, 50);
        }, 500);
      }, 3500);
      const quotes = [
        "Two souls, one heart, blooming together forever.",
        "Every petal tells a story of love.",
        "Celebrate moments with flowers and fragrance.",
        "Where emotions bloom beautifully.",
      ];

      let i = 0;
      const quote = document.getElementById("quote-text");

      setInterval(() => {
        // Slide out to top
        quote.classList.remove("slide-in-down");
        quote.classList.add("slide-out-up");

        setTimeout(() => {
          // Change text and slide in from bottom
          i = (i + 1) % quotes.length;
          quote.textContent = quotes[i];

          quote.classList.remove("slide-out-up");
          quote.classList.add("slide-in-down");
        }, 500);
      }, 3500);

      // Intersection Observer for scroll animations
      document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            } else {
              entry.target.classList.remove("is-visible");
            }
          });
        }, { threshold: 0.15 });

        document.querySelectorAll(".scroll-animate").forEach((el) => {
          observer.observe(el);
        });
      });