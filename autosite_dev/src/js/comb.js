let option_div = document.querySelector('.comb__items')
let select_div = document.querySelector('.comb__selected')
let comb_arrow = document.querySelector('.comb_field img')

// console.log('comb_after = ',comb_after)

let selectedCity = localStorage.getItem('selectedCity')
if (select_div) {
    select_div.innerHTML = selectedCity || 'Россия'


    document.addEventListener('click', () => openOptions(false))
    select_div.addEventListener('click', event => openComb(event))
    option_div.addEventListener('click', event => getCity(event))
}

function getCity(e) {
    let val = e.target.innerText
    if (val.length > 30) return false
    select_div.innerHTML = val
    localStorage.setItem('selectedCity', val)
}

function openComb(e) {
    openOptions(option_div.style.display !== 'block')
    e.stopPropagation()
}

function openOptions(isOpen) {
    option_div.style.display = isOpen ? 'block' : 'none'
    comb_arrow.style.rotate = isOpen ? '180deg' : '0deg'
}
