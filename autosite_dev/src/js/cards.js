// создает визитки, встраивает рекламные и информационные баннеры
let cards = document.querySelector('cards');

function createNode(item, N) {
  let txt = `<div class='cart' id='galery_${N}'>
                <div class='cart__slide'>                    
                    <svg width='17' height='15' xmlns='http://www.w3.org/2000/svg'>
                      <rect x='3' y='3' width='12' height='8' stroke='white' fill='transparent' stroke-width='1'/>
                      <rect x='2' y='2' width='14' height='10' stroke='black' fill='transparent' stroke-width='1'/>                    
                    </svg>    
                    <img class='photo' alt=''>
                    <div class='cart__blank'>${item.address}</div>
                    <div class='field'>
                        <div class='red'></div>
                    </div>
                    <span class='dark'/>                    
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
                    <img src='icons/compare_cars.svg' alt=''>
                </a>
                <a href='#'>
                    <img src='icons/penta.svg' alt=''>
                </a>
            </div>
            </div>`;

  cards.innerHTML += txt;
}

function galeryEvents(id, images) {
  const gallery = document.querySelector('#galery_' + id + ' .cart__slide');
  // const wider = document.querySelector('#galery_' + id + ' .cart__slide svg');
  window.current_slide = null

  if (!gallery) return false;
  const photo = gallery.querySelector('.photo');
  const red = gallery.querySelector('.cart .red');

  photo.src = 'photo-offers/' + id + '/p1.jpg';

  photo.addEventListener('mousemove', (e) => {
    let i = parseInt(e.layerX * 100 / pieceWidth / 16.5 - 0.1);
    photo.src = images[i];
    red.style.left = i * 16.5 + '%';
  });
  gallery.addEventListener('mouseleave', () => {
    photo.src = images[0];
    red.style.left = '0%';
  });

  let offset1, offset2, i = 0;
  gallery.addEventListener('touchstart', e => offset1 = e.targetTouches[0].pageX - gallery.offsetLeft);
  gallery.addEventListener('touchmove', e => offset2 = e.targetTouches[0].pageX - gallery.offsetLeft);
  gallery.addEventListener('touchend', () => {
    if (offset1 > offset2) i++;
    else i--;
    if (i > 5) i = 5;
    if (i < 0) i = 0;
    photo.src = images[i];
    red.style.left = i * 16.5 + '%';
  });
  gallery.addEventListener('click', () => {
    gallery.classList.toggle('watch');
    window.current_slide = gallery;
    getWidth();
  });
}

// cars нужно будет скачать с сервера
cars.forEach((el, i) => createNode(el, i + 1)); // прикручиваем html
cars.forEach((el, i) => galeryEvents(i + 1, el.photos)); // прикрепляем события

let type_views = document.querySelector('.type_views');
let pieceWidth;
let getWidth = () => {
  pieceWidth = document.querySelector('cards .cart__slide').clientWidth;
  if (current_slide) pieceWidth = current_slide.clientWidth;
};
document.addEventListener('DOMContentLoaded', () => getWidth());
document.addEventListener('resize', () => getWidth());

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

document.addEventListener('keydown', (e) => e.key === 'Escape' && current_slide && current_slide.classList.toggle('watch'));


// todo нужно подумать об удалении прикрепленных событий, после смены фоток, чтобы устранить утечку памяти