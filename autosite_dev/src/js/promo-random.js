/* случайно вытаскивает 4 банера для раздела промо-акции */

let promos = [
    '<a href="%VITE_PROD_URL%/promo/633448/" class="ver"><img src="../../photo-action/p_0.webp" alt="Премиум авто"></a>',
    '<a href="%VITE_PROD_URL%/" class="ver"> <img src="../../photo-action/p_1.webp" alt="Подбор авто"></a>',
    '<a href="%VITE_PROD_URL%/promo/644223/" class="ver"> <img src="../../photo-action/p_2.webp" alt="Выкуп автомобилей с пробегом"></a>',
    '<a href="%VITE_PROD_URL%/promo/644340/" class="ver"> <img src="../../photo-action/p_3.webp" alt="Сделка через салон"></a>',
    '<a href="%VITE_PROD_URL%/promo/647168/" class="ver"> <img src="../../photo-action/p_4.webp" alt="Постановка на учёт в ГИБДД"></a>',
    '<a href="%VITE_PROD_URL%/promo/647169/" class="ver"><img src="../../photo-action/p_5.webp" alt="Поставьте авто на комиссию"></a>',
    '<a href="%VITE_PROD_URL%/promo/651626/" class="ver"> <img src="../../photo-action/p_6.webp" alt="Снижение цен на нормо-час"></a>',
    '<a href="%VITE_PROD_URL%/promo/651625/" class="ver"> <img src="../../photo-action/p_7.webp" alt="Установка парктроников"></a>',
    '<a href="%VITE_PROD_URL%/promo/651624/" class="ver"> <img src="../../photo-action/p_8.webp" alt="Trade-in с повышенной оценкой"></a>',
    '<a href="%VITE_PROD_URL%/promo/651623/" class="ver"> <img src="../../photo-action/p_9.webp" alt="Скидка 10% в День рождения"></a>',
    '<a href="%VITE_PROD_URL%/promo/651622/" class="ver"><img src="../../photo-action/p_10.webp" alt="Скидка на ТО (Solaris/Jetour)"></a>',
    '<a href="%VITE_PROD_URL%/promo/651621/" class="ver"> <img src="../../photo-action/p_11.webp" alt="Саквояж или EVA ковры"></a>',
    '<a href="%VITE_PROD_URL%/promo/651620/" class="ver"> <img src="../../photo-action/p_12.webp" alt="Установка видеорегистратора"></a>',
    '<a href="%VITE_PROD_URL%/promo/651619/" class="ver"> <img src="../../photo-action/p_13.webp" alt="Компрессор в подарок"></a>',
    '<a href="%VITE_PROD_URL%/promo/651618/" class="ver"> <img src="../../photo-action/p_14.webp" alt="Тонировка задней полусферы"></a>',
    '<a href="%VITE_PROD_URL%/promo/651617/" class="ver"> <img src="../../photo-action/p_15.webp" alt = "Скидка 2000 рублей на установку сигнализации"></a>',
    '<a href="%VITE_PROD_URL%/promo/651616/" class="ver"> <img src="../../photo-action/p_16.webp" alt="Первый взнос 0 рублей"></a>',
    '<a href="%VITE_PROD_URL%/promo/651615/" class="ver"><img src="../../photo-action/p_17.webp" alt="Обмен или возврат"></a>',
    '<a href="%VITE_PROD_URL%/promo/651614/" class="ver"><img src="../../photo-action/p_18.webp" alt="Гарантия на авто с пробегом"></a>',
    '<a href="%VITE_PROD_URL%/promo/651613/" class="ver"><img src="../../photo-action/p_19.webp" alt="Аренда авто"></a>',
    '<a href="%VITE_PROD_URL%/promo/651612/" class="ver"><img src="../../photo-action/p_20.webp" alt="2 сертификата в сервис">'
]

let links=''
for(let i=0; i<4; i++){
    let num = parseInt(Math.random()*(promos.length-1))
    let el  = promos.slice(num, num+1)
    links+=(el)
}

let div = document.querySelector('.promo-photos')
div.innerHTML = links