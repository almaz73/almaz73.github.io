import {fill} from '@/js/cards.js';


export function filter_changed(items, name) {
    console.log('items = ', items)
    console.log('name = ', name)
    console.log('items[name].value = ', items[name].value)


}


/** Запрос сервера и отображения витрины **/
function getVitrina() {
    if (location.pathname === '/') {
        // Если это первая страница, скрываем сортировку по цене
        let coin = document.querySelector('.type_views.coin')
        if (coin) coin.style.display = 'none'
    }

// в зависимости от страницы, запрашиваем нужные данные
    let cars
    if (location.pathname === '/') {
        let name = document.querySelector('#vitrina_name')
        name.innerHTML = 'Специальные предложения по цене'
        name.style.fontSize = '1.5rem'
        cars = [
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
    } else if (location.pathname === '/cars/') {
        document.querySelector('#vitrina_name').innerHTML = 'Автомобили'
        cars = [
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
    } else {
        document.querySelector('#vitrina_name').innerHTML = 'Автомобили ВАЗ (LADA) с пробегом'
        cars = [
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
    }

    fill(cars)
}

getVitrina()


