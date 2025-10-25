let big_comb_html = `<div class='big-combo' tabindex='1'>
    <span class='big-comb__selected'>Россия</span>
    <img src='svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>

    <div class='big_comb__items' onclick='big_comb_select(event)'>
        <div>Альметьевск</div>
        <div>Астрахань</div>
    </div>
</div>`;

let items = {};
items['Марка'] = ['Все', 'AUDI', 'BMV', 'Brilliance', 'BYD', 'Cadilac']
items['Марка'].value=''; // тут будут выбранные значения
items['Модель'] = ['Все', '3 серия', '5 серия', 'X1', 'X3', 'X5']

items['Производитель'] = ['Amtel', 'Bfgoodrich', 'Cordiant', 'Formula', 'Gislaved', 'Hankook', 'Kormoran', 'Kumho', 'Nokian'];
items['Ширина профиля'] = ['Все', '155', '185', '195', '205', '215', '225'];
items['Высота профиля'] = ['Все', '45', '55', '60', '65', '70']
items['Диаметр'] = ['Все', '13', '14', '15', '16', '17']
items['Сезон'] = ['Все', 'Зима Шип', 'Лето']




// после загрузки сайта, заполняем все комбы
window.addEventListener('load', () => {
  let combs = document.querySelectorAll('comb');

  //заполняем исходя из настроек
  combs.forEach(comb => {
    let comb_name = comb.dataset.placeholder
    let the_Items = items[comb_name];
    if(the_Items) {
      let items_list = the_Items.map(item =>  '<div data-parent="'+comb_name+'">'+item+'</div>')

      let html = `<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>${the_Items.value || comb_name}</span>
        <img src='svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items' onclick='big_comb_select(event)'>
            ${items_list.join('')}
        </div>
    </div>`;
      comb.innerHTML = html;
    }
  })
});




window.big_comb_select = function(val) {
  let combName = val.srcElement.dataset.parent
  let value = val.srcElement.innerText
  let parent = val.srcElement.parentElement.parentElement
  items[combName].value = value
  parent.querySelector('.big-comb__selected').innerText = value
  parent.blur()
  console.log('items = ',items)
};