let oredering_buttons = document.querySelector('.oredering_buttons');
let myOrders = document.querySelector('#myOrders');
oredering_buttons.style.display = 'none';
let meAllOrders = localStorage.getItem('meAllOrders');

let OrederList = meAllOrders ? JSON.parse(meAllOrders) : []; // из локалстораж прежние заказы отображаю
// OrederList= [{id:1233, name:'Торт очароывашка', received:true}, {id:33, name:'Треугольник'}, {id:554, name:'Зефир'}];

OrederList.sort(function(a, b) {
  if (a.time > b.time) return -1;
})

function preOrder() {
  oredering_buttons.style.display = 'block';
}

function noorder() {
  oredering_buttons.style.display = 'none';
}

function order() {
  oredering_buttons.classList.add('disabled');
  let codeOrder = parseInt(Math.random() * 9999);
  OrederList.push({ code: codeOrder, name: counterTitle[counter], id: counter, time: Date.now() });


  let botId = 'bot7957374061:AAE3bSimGQu4rLXfOk9lsUp143r3m_Qefek';
  let chatId = '-1003196894475';
  let text = 'Заказ: ' + codeOrder + ' — ' + counterTitle[counter] + '  https://fmap.ru/berries';
  let linkTelega = `https://api.telegram.org/${botId}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${text}`;

  fetch(linkTelega)
    .then(response => response.json())
    .then(() => {
      oredering_buttons.style.display = 'none';
      oredering_buttons.classList.remove('disabled');
      localStorage.setItem('meAllOrders', JSON.stringify(OrederList));
      showOrders();
    });
}

function removeOrder(event, code) {
  event.stopPropagation();

  let found = OrederList.find(el => el.code === code);
  if (found.received && !found.deleted) found.deleted = true;
  if (!found.received) found.received = true;

  OrederList.sort(function(a, b) {
    if (a.time > b.time) return -1;
  })

  localStorage.setItem('meAllOrders', JSON.stringify(OrederList));
  showOrders();
}


function showOrders() {
  myOrders.innerHTML = '';
  OrederList.reverse();

  if (OrederList.length) myOrders.innerHTML = '<h4>Ваши заказы</h4>';
  OrederList.forEach(el => {
    if (el.deleted) {
      myOrders.innerHTML += '<div class="order_number" onclick="chosen(' + el.id + ')">' + ++el.id + '</div>';
    } else if (el.received) {

      myOrders.innerHTML += '<div class="order_number wide line" onclick="chosen(' + el.id + ')"> код:' +
        '<b> ' + el.code + ' </b> &nbsp; — ' + el.name + '' +
        ' <a onclick="removeOrder( event,' + el.code + ')">✖</a></div>';
    } else {
      myOrders.innerHTML += '<div class="order_number wide" onclick="chosen(' + el.id + ')"> код:' +
        '<b> ' + el.code + ' </b> &nbsp; — ' + el.name + '' +
        ' <a onclick="removeOrder(event,' + el.code + ')">✖</a></div>';
    }

  });
}

showOrders();