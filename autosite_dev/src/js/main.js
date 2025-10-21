import '@/js/comb.js';
import '@/js/global-buttons.js';
import '@/js/photo-opener.js';


// Обработчик ошибки 404
// При переходе на неверный адрес перенаправляем пользователя на страницу 404
window.addEventListener('DOMContentLoaded', function(e) {
  let parts = e.target.URL.split('/');
  console.log('parts = ', parts);
  console.log('parts[3] = ', parts[3]);
  let available = [
    'index.html',
    'privacy-policy',
    'papka'
  ];

  if (parts[3] && !available.includes(parts[3])) window.location.href = '/404.html';
});