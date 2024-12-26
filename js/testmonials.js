let currentSlideT = 0;
const slidesT = document.querySelectorAll(".testimonial-item");
const totalSlides = slidesT.length;

function showSlide(index) {
  // Reset all slidesT
  slidesT.forEach((slide, i) => {
    slide.classList.remove("active", "prev");
    if (i === index) {
      slide.classList.add("active");
    } else if (i === (index - 1 + totalSlides) % totalSlides) {
      slide.classList.add("prev");
    }
  });
}

function moveToNextSlide() {
  currentSlideT = (currentSlideT + 1) % totalSlides;
  showSlide(currentSlideT);
}

// Initialize the first slide
showSlide(currentSlideT);

// Auto-slide every 3 seconds
setInterval(moveToNextSlide, 5000);
