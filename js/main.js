// Mobile menu toggle
const burgerMenu = document.querySelector(".burger-menu");
const navList = document.querySelector(".nav-list");

burgerMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
  const spans = burgerMenu.querySelectorAll("span");
  spans.forEach((span) => span.classList.toggle("active"));
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
      // Close mobile menu if open
      navList.classList.remove("active");
    }
  });
});
