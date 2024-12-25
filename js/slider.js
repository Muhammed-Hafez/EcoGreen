const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// وظيفة للتنقل إلى السلايد التالية
function moveToNextSlide() {
  // تحديد السلايد الحالية والسلايد القادمة
  const current = slides[currentSlide];
  const nextSlide = (currentSlide + 1) % slides.length;

  // إزالة الحالة النشطة من السلايد الحالية
  current.classList.remove("active");
  current.classList.add("previous"); // تجعل السلايد الحالية تتحرك للخارج

  // إضافة الحالة النشطة إلى السلايد التالية
  slides[nextSlide].classList.add("active");

  // تحديث المؤشر للسلايد الحالية
  currentSlide = nextSlide;

  // بعد انتهاء الحركة، إزالة فئة "previous" لتحضير السلايد للاستخدام مرة أخرى
  setTimeout(() => current.classList.remove("previous"), 500);
}

// تشغيل السلايدر تلقائيًا كل 3 ثوانٍ
setInterval(moveToNextSlide, 5000);
