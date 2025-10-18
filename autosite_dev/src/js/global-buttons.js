import { fillCities } from '@/js/searchCities.js';

let burger_menu = document.querySelector('.button__burger');
let panel = document.querySelector('.main-nav.menu');
let buttonBurger = document.querySelector('.button__burger');

let cities = document.querySelector('.main-nav.cities');
let cityButton = document.querySelector('.city');
let cityClose = document.querySelector('.modal-place__close');
let isOpened;


function hideMainScroll(hide) {
  if (hide) {
    document.body.style.overflow = 'hidden';
    if (document.body.clientWidth > 500) {
      document.body.style.marginRight = '14px';
    }
  } else {
    document.body.style.overflow = 'auto';
    if (document.body.clientWidth > 500) document.body.style.marginRight = '0';
  }
}

burger_menu.addEventListener('click', () => {
  if (isOpened) {
    isOpened = false;
    cities.style.transform = 'translateX(150vw)';
    return false;
  }
  isOpened = panel.style.transform !== 'none';

  panel.style.transform = isOpened ? 'none' : 'translateX(150vw)';
  hideMainScroll(isOpened);
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
  hideMainScroll(isOpened);
  fillCities();
});
cityClose.addEventListener('click', () => {
  cities.style.transform = 'translateX(150vw)';
  hideMainScroll(false);
});


/* работа с cookie-banner */
let cookieAccept = document.querySelector('#cookie-accept');
let cookieBanner = document.querySelector('#cookie-banner');
let isCoockieBannerShow = localStorage.getItem('isCoockieBannerShow');
if (!isCoockieBannerShow) cookieBanner.classList.add('show');
cookieAccept.addEventListener('click', () => {
  localStorage.setItem('isCoockieBannerShow', new Date().toISOString());
  cookieBanner.classList.remove('show');
});

