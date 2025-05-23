// Mobile menu toggle
const burgerMenu = document.querySelector(".burger-menu");
const navList = document.querySelector(".nav-list");

burgerMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
  const spans = burgerMenu.querySelectorAll("span");
  spans.forEach((span) => span.classList.toggle("active"));
});

// مراقبة العناصر وعند الظهور في الشاشة نضيف الكلاس 'visible'
const elements = document.querySelectorAll(
  ".about-head, .about-grid, .about-card, .about-card h3"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

elements.forEach((element) => {
  observer.observe(element);
});

// مراقبة العناصر وعند الظهور في الشاشة نضيف الكلاس 'visible'
const productGrid = document.querySelector(".product-grid");
const productCards = document.querySelectorAll(".product-card");

const observerP = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
); // 0.1 تعني أن العنصر سيظهر عندما يظهر 10% من مساحته في الشاشة

// مراقبة المصفوفة والبطاقات
observerP.observe(productGrid);
productCards.forEach((card) => observerP.observe(card));

$(document).ready(function () {
  $(".sliderC").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hrElements = document.querySelectorAll("hr");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // إضافة الفئة
          observer.unobserve(entry.target); // التوقف عن المراقبة بعد التفعيل
        }
      });
    },
    {
      threshold: 0.5, // نسبة ظهور العنصر (50%)
    }
  );

  hrElements.forEach((hr) => observer.observe(hr));
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    // نتأكد إن href مش بس "#" أو فارغ
    if (href && href !== "#") {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
        // Close mobile menu if open
        navList.classList.remove("active");
      }
    }
  });
});
