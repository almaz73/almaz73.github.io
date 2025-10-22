import '@/js/comb.js';
import '@/js/global-buttons.js';
import '@/js/photo-opener.js';


// Обработчик ошибки 404
// При переходе на неверный адрес перенаправляем пользователя на страницу 404
window.addEventListener('DOMContentLoaded', function(e) {
  let parts = e.target.URL.split('/');
  let available = [
    'index.html',
    'privacy-policy',
    'papka'
  ];

  let isExist = false;
  if (parts[3] && available.includes(parts[3])) isExist = true;
  if (parts[4] && available.includes(parts[4])) isExist = true;
  
  console.log('parts = ',parts)

  // if (!isExist) window.location.href = '404.html';
});