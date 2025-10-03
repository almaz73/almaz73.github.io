let burger_menu = document.querySelector('.button__burger');
let panel = document.querySelector('.main-nav');
let buttonBurger = document.querySelector('.button__burger');


burger_menu.addEventListener('click', () => {
  let isOpened = panel.style.transform === 'none';
  panel.style.transform = isOpened ? 'translateX(150vw)' : 'none';
  document.body.style.overflow = isOpened ? 'auto' : 'hidden';
  document.body.style.marginRight = isOpened ? '0' : '15px';
  if (isOpened) buttonBurger.classList.add('close');
  else buttonBurger.classList.remove('close');


});