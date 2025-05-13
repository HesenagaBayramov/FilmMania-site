const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.navi.prev');
const nextBtn = document.querySelector('.navi.next');

let currentIndex = 0;
const slideWidth = 220; // 200px + 2x10 margin

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > 4) currentIndex = 0;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = 4;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});
