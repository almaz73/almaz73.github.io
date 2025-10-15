function createNode(item, N) {
    let txt = `<div class="cart" id="galery_${N}">
                <div class="cart__slide">
                    <img class="photo" alt=''>
                    <div class="area a0"></div>
                    <div class="area a1"></div>
                    <div class="area a2"></div>
                    <div class="area a3"></div>
                    <div class="area a4"></div>
                    <div class="area a5"></div>
                    <div class="cart__blank">${item.address}</div>
                    <div class="field">
                        <div class='red'></div>
                    </div>
                </div>
                <div class="name">
                    <br>
                    <a href="${item.href}"> ${item.name}</a>
                </div>
                <div class="cart__price">
                    <div class="total">${item.price} ₽</div>
                    <div class="cart__of"> от 8&nbsp;700&nbsp;₽/мес</div>
                </div>
                <div class="cart__info">
                    ${item.info}
                </div>
                <div class="cart__box--bottom">
                <a href="#">
                    <img src="/src/images/compare_cars.svg" alt=''>
                </a>
                <a href="#">
                    <img src="/src/images/penta.svg" alt=''>
                </a>
            </div>
            </div>`

    document.querySelector('#caroffers').innerHTML += txt
}

function galeryEvents(id, images) {
    const gallery = document.querySelector('#galery_' + id + ' .cart__slide');
    const photo = gallery.querySelector('.photo');
    const areas = gallery.querySelectorAll('.area');
    const red = gallery.querySelector('.cart .red');

    photo.src = '/photo-offers/' + id + '/p1.jpg';
    areas.forEach((area, i) => area.addEventListener('mouseenter', () => {
        photo.src = images[i];
        red.style.left = i * 16.5 + '%';
    }));
    gallery.addEventListener('mouseleave', () => {
        photo.src = images[0];
        red.style.left = '0%';
    });

    let offset1, offset2, i = 0;
    gallery.addEventListener('touchstart', e => offset1 = e.targetTouches[0].pageX - gallery.offsetLeft);
    gallery.addEventListener('touchmove', e => offset2 = e.targetTouches[0].pageX - gallery.offsetLeft);
    gallery.addEventListener('touchend', () => {
        console.log('raise = ', offset1 > offset2);
        if (offset1 > offset2) i++;
        else i--;
        if (i > 5) i = 5;
        if (i < 0) i = 0;
        photo.src = images[i];
        red.style.left = i * 16.5 + '%';
    });
}


let cars = [
    {
        address: 'Набережные Челны, Мусы Джалиля 15',
        name: 'Volkswagen Polo, 2014',
        href: '/cars/polo/649868/',
        price: '784 238',
        fromPerMonth: '8 700',
        info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
        photos: ['/photo-offers/1/p1.jpg',
            '/photo-offers/1/p2.jpg',
            '/photo-offers/1/p3.jpg',
            '/photo-offers/1/p4.jpg',
            '/photo-offers/1/p5.jpg',
            '/photo-offers/1/p6.jpg']
    },
    {
        address: 'Набережные Челны, Мусы Джалиля 15',
        name: 'Volkswagen Polo, 2014',
        href: '/cars/polo/649868/',
        price: '784 238',
        fromPerMonth: '8 700',
        info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
        photos: ['/photo-offers/2/p1.jpg',
            '/photo-offers/2/p2.jpg',
            '/photo-offers/2/p3.jpg',
            '/photo-offers/2/p4.jpg',
            '/photo-offers/2/p5.jpg',
            '/photo-offers/2/p6.jpg']
    },
    {
        address: 'Набережные Челны, Мусы Джалиля 15',
        name: 'Volkswagen Polo, 2014',
        href: '/cars/polo/649868/',
        price: '784 238',
        fromPerMonth: '8 700',
        info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
        photos: ['/photo-offers/2/p1.jpg',
            '/photo-offers/2/p2.jpg',
            '/photo-offers/2/p3.jpg',
            '/photo-offers/2/p4.jpg',
            '/photo-offers/2/p5.jpg',
            '/photo-offers/2/p6.jpg']
    },
    {
        address: 'Набережные Челны, Мусы Джалиля 15',
        name: 'Volkswagen Polo, 2014',
        href: '/cars/polo/649868/',
        price: '784 238',
        fromPerMonth: '8 700',
        info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
        photos: ['/photo-offers/1/p1.jpg',
            '/photo-offers/1/p2.jpg',
            '/photo-offers/1/p3.jpg',
            '/photo-offers/1/p4.jpg',
            '/photo-offers/1/p5.jpg',
            '/photo-offers/1/p6.jpg']
    },
    {
        address: 'Набережные Челны, Мусы Джалиля 15',
        name: 'Volkswagen Polo, 2014',
        href: '/cars/polo/649868/',
        price: '784 238',
        fromPerMonth: '8 700',
        info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
        photos: ['/photo-offers/2/p1.jpg',
            '/photo-offers/2/p2.jpg',
            '/photo-offers/2/p3.jpg',
            '/photo-offers/2/p4.jpg',
            '/photo-offers/2/p5.jpg',
            '/photo-offers/2/p6.jpg']
    },
]

document.addEventListener('DOMContentLoaded', () => {
    cars.forEach((el, i) => createNode(el, i + 1)) // прикручиваем html
    cars.forEach((el, i) => galeryEvents(i + 1, el.photos)) // прикрепляем события
})