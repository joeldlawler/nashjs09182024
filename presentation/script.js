let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
  slides[currentSlide].style.display = "none";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") showSlide(currentSlide + 1);
  if (e.key === "ArrowLeft") showSlide(currentSlide - 1);
});
