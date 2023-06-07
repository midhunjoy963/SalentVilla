
let currentSlide = 0;

nextSlide = () => {
  const slides = document.querySelectorAll('.slide');
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');

};
const slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
