let currentIndex = 0;
const totalSlides = document.querySelectorAll(".testimonial-item").length;

function moveSlide(direction) {
  currentIndex += direction;

  // إذا وصلنا إلى آخر شريحة، ننتقل مباشرة إلى الشريحة الأولى
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // تحريك السلايدر إلى الشريحة الحالية
  const carousel = document.querySelector(".testimonial-carousel");
  carousel.style.transition = "none"; // تعطيل الانتقال عند العودة للبداية
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  // إعادة تمكين الانتقال بعد التحرك مباشرةً إلى أول شريحة
  setTimeout(() => {
    carousel.style.transition = "transform 0.5s ease"; // إضافة تأثير الانتقال مجددًا
  }, 50);
}

// التكرار التلقائي كل 5 ثوانٍ
setInterval(() => {
  moveSlide(1);
}, 5000);

// التحكم اليدوي للأزرار
