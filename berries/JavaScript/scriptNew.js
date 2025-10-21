let counter = 0;
let counterTitle = ['Халва', 'Шокалад', 'Блины', 'Пряники'];
let slideIndex = 0;
let images = document.querySelectorAll('.image');
let _50x50s = document.querySelectorAll('._50x50');
console.log('_50x50s = ', _50x50s);
let name = document.querySelector('#name_dish');
let timer;
images[0].style.display = 'block';

function go(val) {
  // clear()

  counter += val;
  if (counter < 0) counter = 13;
  if (counter > 13) counter = 0;

  chosen(counter);

  clearTimeout(timer);
  timer = setTimeout(() => go(val), 2000);

}

function clear() {
  [0, 1, 2, 3].forEach(el => {
    images[el].style.opacity = '0';
    _50x50s[el].style.boxShadow = 'none';
  });
}

function chosen(id) {
  clear();
  name.innerHTML = counterTitle[id];
  images[id].style.opacity = '1';
  _50x50s[id].style.boxShadow = '0 0 8px red inset';
}


go(1);
document.addEventListener('click', () => clearTimeout(timer));