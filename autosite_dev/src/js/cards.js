// создает визитки, встраивает рекламные и информационные баннеры
let cards = document.querySelector('cards');

let VITE_PROD_URL = import.meta.env.VITE_PROD_URL;

function createNode(item, N) {
  let txt = `<div class='cart' id='galery_${N}'>
                <div class='cart__slide'>                    
                    <img class='photo' alt=''>
                    <div class='cart__blank'>${item.address}</div>
                    <div class='field'>
                        <div class='red'></div>
                    </div>
                    <span class='dark-fon'/>                    
                </div>
                <div class='name'>
                    <br>
                    <a href='${item.href}'> ${item.name}</a>
                </div>
                <div class='cart__price'>
                    <div class='total'>${item.price} ₽</div>
                    <div class='cart__of'> от 8&nbsp;700&nbsp;₽/мес</div>
                </div>
                <div class='cart__info'>
                    ${item.info}
                </div>
                <div class='cart__box--bottom'>
                <a href='#'>
                    <img src='${VITE_PROD_URL}/icons/compare_cars.svg' alt=''>
                </a>
                <a href='#'>
                    <img src='${VITE_PROD_URL}/icons/penta.svg' alt=''>
                </a>
            </div>
            </div>`;

  cards.innerHTML += txt;
}

function galeryEvents(id, images) {
  const gallery = document.querySelector('#galery_' + id + ' .cart__slide');
  window.current_slide = null;

  if (!gallery) return false;
  const photo = gallery.querySelector('.photo');
  const red = gallery.querySelector('.cart .red');
  let offset1, offset2, i = 0;
  photo.src = VITE_PROD_URL + '/photo-offers/' + id + '/p1.jpg';
  photo.addEventListener('mousemove', (e) => {
    let i = parseInt(e.layerX * 100 / pieceWidth / 16.5 - 0.1);
    photo.src = VITE_PROD_URL + images[i];
    red.style.left = i * 16.5 + '%';
  });
  gallery.addEventListener('mouseleave', () => {
    photo.src = VITE_PROD_URL + images[0];
    red.style.left = '0%';
  });
  gallery.addEventListener('touchstart', e => offset1 = e.targetTouches[0].pageX - gallery.offsetLeft);
  gallery.addEventListener('touchmove', e => offset2 = e.targetTouches[0].pageX - gallery.offsetLeft);
  gallery.addEventListener('touchend', () => {
    if (offset1 > offset2) i++;
    else i--;
    if (i > 5) i = 5;
    if (i < 0) i = 0;
    photo.src = VITE_PROD_URL + images[i];
    red.style.left = i * 16.5 + '%';
  });
  gallery.addEventListener('click', () => {
    if (document.body.clientWidth < 500) return false;
    gallery.classList.toggle('watch');
    window.current_slide = gallery;
    getWidth();
  });
}

export function fill(cars) {
  cars.forEach((el, i) => createNode(el, i + 1)); // прикручиваем html
  cars.forEach((el, i) => galeryEvents(i + 1, el.photos)); // прикрепляем события
}

let type_views = document.querySelector('.type_views');
let pieceWidth;
let getWidth = () => {
  pieceWidth = document.querySelector('cards .cart__slide').clientWidth;
  if (current_slide) pieceWidth = current_slide.clientWidth;
};
document.addEventListener('DOMContentLoaded', () => getWidth());
window.addEventListener('resize', () => current_slide && current_slide.classList.remove('watch'));
type_views.addEventListener('click', (e) => {
  // выбор варианта отображения галерии
  for (let childrenKey in type_views.children) type_views.children[childrenKey].classList && type_views.children[childrenKey].classList.remove('active');
  cards.classList = [];
  getWidth();
  if (e.srcElement.classList.value === 'dot8') cards.classList.add('cards', 'dot8');
  if (e.srcElement.classList.value === 'dot4') cards.classList.add('cards', 'dot4');
  if (e.srcElement.classList.value === 'dot1') cards.classList.add('cards', 'dot1');
  e.srcElement.classList.add('active');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && current_slide) {
    current_slide.classList.remove('watch')
    getWidth();
  }
});

let price_order = document.querySelector('.type_views.coin');

if (price_order) price_order.addEventListener('click', (e) => {
  let more = price_order.querySelector('img').style.rotate !== '180deg';
  price_order.querySelector('img').style.rotate = more ? '180deg' : '0deg';
  console.log('запрос нужен more = ', more);
  // запрос нужен
});

