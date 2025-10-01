let burger_menu = document.querySelector('.button__burger');
let panel = document.querySelector('.main-nav');
console.log('panel = ', panel);

burger_menu.addEventListener('click', () => {
  let isOpened = panel.style.transform === 'none';
  panel.style.transform = isOpened ? 'translateX(150vw)' : 'none';
  document.body.style.overflow = isOpened ? 'auto' : 'hidden';
});