let option_div = document.querySelector('.comb__items')
let select_div = document.querySelector('.comb__selected')

let selectedCity = localStorage.getItem('selectedCity')
select_div.innerHTML = selectedCity || 'Альметьевск'

function getCity(e) {
    let val = e.target.innerText
    select_div.innerHTML = val
    localStorage.setItem('selectedCity', val)
}

function openComb(e) {
    option_div.style.display = option_div.style.display === 'block' ? 'none' : 'block'
    e.stopPropagation()
}

document.addEventListener('click', () => option_div.style.display = 'none')
select_div.addEventListener('click', event => openComb(event))
option_div.addEventListener('click', event => getCity(event))