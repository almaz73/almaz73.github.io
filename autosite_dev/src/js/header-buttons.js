let burger_menu = document.querySelector('.button__burger');
let panel = document.querySelector('.main-nav');
let buttonBurger = document.querySelector('.button__burger');


burger_menu.addEventListener('click', () => {
  let isOpened = panel.style.transform === 'none';
  panel.style.transform = isOpened ? 'translateX(150vw)' : 'none';
  document.body.style.overflow = isOpened ? 'auto' : 'hidden';
  buttonBurger.style.backgroundImage = isOpened ? 'url(/src/images/burger.svg)' : 'url(/src/images/close.svg)';
  document.body.style.marginRight = isOpened ? '0' : '15px';
});