/* -- Variables -- */
const list = document.querySelector('.slider__cards');
const dots = document.querySelectorAll('.slider__dot');
const previousBtn = document.querySelector('.slider__arrow_pos_prev');
const nextBtn = document.querySelector('.slider__arrow_pos_next');

let position = 0;
let screen = 0;
let maxScreens = 5;
let width = 335;

function addDot(index) { // update navigation dots
  dots[index].classList.add('active');
}

function removeDot(index) {
  index++;
  dots[index].classList.remove('active');
}

function disableNext(index) { //update arrows styles
  if (index > 0) {
    previousBtn.classList.remove('disabled');
  }
  if (index > (maxScreens - 2)) {
    nextBtn.classList.add('disabled');
  }
}

function disablePrevious(index) {
  if (index < 1) {
    previousBtn.classList.add('disabled');
  }
  if (index < 4) {
    nextBtn.classList.remove('disabled');
  }
}

nextBtn.onclick = function() {
  if (screen < (maxScreens - 1)) {
    position -= width;
    screen++;
    list.style.transform = `translateX(${position}px)`;
  }
  addDot(screen);
  disableNext(screen)
}

previousBtn.onclick = function() {
  if (screen > 0) {
    position += width;
    screen--;
    list.style.transform = `translateX(${position}px)`;
  }
  removeDot(screen);
  disablePrevious(screen);
}
