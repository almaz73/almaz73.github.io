let items = {}; // некоторые поля нужно запросить с обюновляемой базы
items['Марка'] = ['Все', 'AUDI', 'BMV', 'Brilliance', 'BYD', 'Cadilac']
items['Марка'].value=''; // тут будут выбранные значения
items['Модель'] = ['Все', '3 серия', '5 серия', 'X1', 'X3', 'X5']

items['Производитель'] = ['Amtel', 'Bfgoodrich', 'Cordiant', 'Formula', 'Gislaved', 'Hankook', 'Kormoran', 'Kumho', 'Nokian'];
items['Ширина профиля'] = ['Все', '155', '185', '195', '205', '215', '225'];
items['Высота профиля'] = ['Все', '45', '55', '60', '65', '70']
items['Диаметр'] = ['Все', '13', '14', '15', '16', '17']
items['Сезон'] = ['Все', 'Зима Шип', 'Лето']
items['Город'] = ['Все', 'Альметьевск', 'Казань', 'Набережные Челны', 'Нижнекамск', 'Стерлитамак']




// после загрузки сайта, заполняем все комбы
window.addEventListener('load', () => {
  let combs = document.querySelectorAll('comb');

  //заполняем исходя из настроек
  combs.forEach(comb => {
    let comb_name = comb.dataset.placeholder
    let the_Items = items[comb_name];
    if(the_Items) {
      let items_list = the_Items.map(item =>  '<div data-parent="'+comb_name+'">'+item+'</div>')

      comb.innerHTML = `<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${the_Items.value || comb_name}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items' onclick='big_comb_select(event)'>
            ${items_list.join('')}
        </div>
    </div>`
    }

    let bigCombo = comb.querySelector('.big-combo')
    let bigCombItems = comb.querySelector('.big_comb__items')
    let bigCombInput = comb.querySelector('.big-comb__input')
    let bigCombPlaceholder = comb.querySelector('.big-comb__placeholder')
    bigCombo.addEventListener('focus', ()=>{
      bigCombItems.style.display = 'block'
      bigCombInput.style.display = 'inline'
      bigCombPlaceholder.style.display = 'none'
      bigCombInput.focus()
      bigCombInput.select()
    })

    bigCombInput.addEventListener('blur', () => blur())
    bigCombInput.addEventListener('click', () => blur())
    bigCombInput.addEventListener('keydown', (e) => e.key === 'Escape' && blur())

    function blur() {
      bigCombItems.style.display = 'none'
      bigCombInput.style.display = 'none'
      bigCombPlaceholder.style.display = ''
    }
  })
});




window.big_comb_select = function(val) {
  let combName = val.srcElement.dataset.parent
  let value = val.srcElement.innerText
  let parent = val.srcElement.parentElement.parentElement
  items[combName].value = value
  parent.querySelector('.big-comb__placeholder').innerText = value
  parent.querySelector('.big-comb__placeholder').classList.add('bold')
  parent.querySelector('.big-comb__input').value = value
  parent.querySelector('.big-comb__input').blur()
  console.log('items = ',items)
};