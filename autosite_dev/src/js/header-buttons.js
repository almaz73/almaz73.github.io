let burger_menu = document.querySelector('.button__burger');
let panel = document.querySelector('.main-nav.menu');
let buttonBurger = document.querySelector('.button__burger');

let cities = document.querySelector('.main-nav.cities');
let cityButton = document.querySelector('.city');
let cityClose = document.querySelector('.modal-place__close');
let isOpened;

let cityInput = document.querySelector('.form__modal-place--group input');

burger_menu.addEventListener('click', () => {
  console.log('isOpened = ', isOpened);

  if (isOpened) {
    isOpened = false;
    cities.style.transform = 'translateX(150vw)';
    return false;
  }
  isOpened = panel.style.transform !== 'none';

  panel.style.transform = isOpened ? 'none' : 'translateX(150vw)';
  document.body.style.overflow = isOpened ? 'hidden' : 'auto';
  document.body.style.marginRight = isOpened ? '15px' : '0';
  if (isOpened) {
    buttonBurger.classList.add('close');
    isOpened = false;
  } else buttonBurger.classList.remove('close');
});

cityButton.addEventListener('click', () => {
  isOpened = cities.style.transform !== 'none';
  if (isOpened) {
    cities.style.transform = 'none';
    cities.style.backgroundColor = 'white';
  }
});
cityClose.addEventListener('click', () => {
  cities.style.transform = 'translateX(150vw)';
});

cityInput.addEventListener('input', res => {
  console.log('res = ', res);


  // document.body.innerHTML = document.body.innerHTML.replace(/аза/gi, '<mark>$&</mark>');
});

