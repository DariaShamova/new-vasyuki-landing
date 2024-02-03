/* -- Variables -- */
const gallery = document.querySelector('.gallery');
const slidesList = document.querySelector('.gallery__list');
const slides = gallery.querySelectorAll('.gallery__item');
const next = gallery.querySelector('.gallery__arrow_pos_next');
const prev = gallery.querySelector('.gallery__arrow_pos_prev');
const showNumber = gallery.querySelector('.gallery__num-active');
const totalNumber = gallery.querySelector('.gallery__num-inactive');

let curSlide = 0;
let slideWidth = slides[0].offsetWidth;
let count = Math.round(gallery.offsetWidth / slideWidth);
let maxSlide = slides.length - count; // count maximum number of slides

function changeNav() {
  showNumber.textContent = `${count}`;
  totalNumber.textContent = `${slides.length}`;
}

changeNav(); //change navigation numbers

function moveNext() {
  if (curSlide === maxSlide) { // check if current slide is the last and reset current slide
    curSlide = 0;
    prev.classList.add('disabled');
    count = Math.round(gallery.offsetWidth / slideWidth);
  } else {
    curSlide++;
    prev.classList.remove('disabled');
    count++;
  }
  //   move slide by its width
  slidesList.style.transform = `translateX(${-slideWidth * curSlide}px)`;
  changeNav();
}

function moveBack() {
  if (curSlide > 0) {
    curSlide--;
    count--;
  }
  slidesList.style.transform = `translateX(${(-slideWidth * curSlide)}px)`;
  changeNav();
}

next.addEventListener("click", function() {
  moveNext();
});

prev.addEventListener("click", function() {
  moveBack()
});

function calculateDimensions() {
  slideWidth = slides[0].offsetWidth;
  count = Math.round(gallery.offsetWidth / slideWidth);
  maxSlide = slides.length - count; // maximum number of slides
  showNumber.textContent = `${count}`;
  totalNumber.textContent = `${slides.length}`;
}

window.addEventListener('resize', calculateDimensions, false); //update for window size

const autoplay = setInterval(() => moveNext(), 4000); //make autoplay
