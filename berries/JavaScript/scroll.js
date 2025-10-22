let counter = 0;
let counterTitle = ['клубничный бабл ти', 'малиновый бабл ти', 'латте', 'тыквенно-пряный латте', 'какао', 'тыквенный какао', 'зелёный чай', 'чёрный чай', 'чай масала', 'маффин', 'синабон', 'вафли', 'брауни', 'печенье'];
let slideIndex = 0;
let images = document.querySelectorAll('.image');
let _50x50s = document.querySelectorAll('._50x50');
let name = document.querySelector('#name_dish');
let timer;
images[0].style.display = 'block';

function go(val) {
  // clear()

  counter += val;
  if (counter < 0) counter = 13;
  if (counter > 13) counter = 0;

  chosen(counter, 'auto');

  clearTimeout(timer);
  timer = setTimeout(() => go(val), 2000);

}

function clear() {
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].forEach(el => {
    images[el].style.opacity = '0';
    _50x50s[el].style.boxShadow = 'none';
  });
}

function chosen(id, iaAuto) {
  counter = id;

  clear();
  name.innerHTML = counterTitle[id];
  images[id].style.opacity = '1';
  _50x50s[id].style.boxShadow = '0 0 15px rgb(59, 47, 23)';
  if (!iaAuto) window.scroll({ top: 0, behavior: 'smooth' });
}


setTimeout(() => {
  counter = -1;
  go(1);
}, 2000);
document.addEventListener('click', () => clearTimeout(timer));



document.addEventListener('DOMContentLoaded', () => {
  let carusel = document.querySelector('.carusel');
  let offset1, offset2, i = 0;
  carusel.addEventListener('touchstart', e => offset1 = e.targetTouches[0].pageX - carusel.offsetLeft);
  carusel.addEventListener('touchmove', e => offset2 = e.targetTouches[0].pageX - carusel.offsetLeft);
  carusel.addEventListener('touchend', () => {
    if (offset1 > offset2) i++;
    else i--;
    if (i > 14) i = 5;
    if (i < 0) i = 0;
    chosen(i);
  });
})
