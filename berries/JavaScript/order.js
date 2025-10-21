let oredering_buttons = document.querySelector('.oredering_buttons');
let myOrders = document.querySelector('#myOrders');
oredering_buttons.style.display = 'none';
let meAllOrders = localStorage.getItem('meAllOrders');

let OrederList = meAllOrders ? JSON.parse(meAllOrders) : []; // из локалстораж прежние заказы отображаю
// OrederList= [{id:1233, name:'Торт очароывашка', received:true}, {id:33, name:'Треугольник'}, {id:554, name:'Зефир'}];

function preOrder() {
  oredering_buttons.style.display = 'block';
}

function noorder() {
  oredering_buttons.style.display = 'none';
}

function order() {
  let codeOrder = parseInt(Math.random() * 9999);
  OrederList.push({ code: codeOrder, name: counterTitle[counter] , id: counter });


  let botId = 'bot7957374061:AAE3bSimGQu4rLXfOk9lsUp143r3m_Qefek';
  let chatId = '-1003196894475';
  let text = 'Заказ: ' + codeOrder + ' — ' + counterTitle[counter] + '  https://fmap.ru/berries';
  let linkTelega = `https://api.telegram.org/${botId}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${text}`;

  fetch(linkTelega)
    .then(response => response.json())
    .then(json => {
      console.log(' все будет хорошо > > > ' + json);
      oredering_buttons.style.display = 'none';
      localStorage.setItem('meAllOrders', JSON.stringify(OrederList));
      showOrders();
    });
}

function showOrders() {
  myOrders.innerHTML = '';
  OrederList.reverse();

  if (OrederList.length) myOrders.innerHTML = '<h4>Ваши заказы</h4>';
  OrederList.forEach(el => {
    myOrders.innerHTML += '<div class="order_number" onclick="chosen('+el.id+')"> код:' + el.code + ' - ' + el.name + '</div>';
  });
}

console.log('myOrders = ', myOrders);
showOrders();