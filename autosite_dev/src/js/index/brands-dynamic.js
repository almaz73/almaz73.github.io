document.addEventListener('DOMContentLoaded', () => {

  let brandDatas = [
    {
      "url": "/cars/vaz-lada/",
      "imgSrc": "icons/lada.png",
      "text": "ВАЗ (LADA)",
      "total": 470
    },
    {
      "url": "/cars/kia/",
      "imgSrc": "icons/kia.png",
      "text": "KIA",
      "total": 162
    },
    {
      "url": "/cars/hyundai/",
      "imgSrc": "icons/hyundai.png",
      "text": "HYUNDAI",
      "total": 136
    },
    {
      "url": "/cars/renault/",
      "imgSrc": "icons/renault.png",
      "text": "RENAULT",
      "total": 104
    },
    {
      "url": "/cars/chevrolet/",
      "imgSrc": "icons/chevrolet.png",
      "text": "CHEVROLET",
      "total": 87
    },
    {
      "url": "/cars/volkswagen/",
      "imgSrc": "icons/volkswagen.png",
      "text": "VOLKSWAGEN",
      "total": 86
    },
    {
      "url": "/cars/skoda/",
      "imgSrc": "icons/skoda.png",
      "text": "SKODA",
      "total": 82
    },
    {
      "url": "/cars/nissan/",
      "imgSrc": "icons/nissan.png",
      "text": "NISSAN",
      "total": 70
    },
    {
      "url": "/cars/ford/",
      "imgSrc": "icons/ford.png",
      "text": "FORD",
      "total": 48
    },
    {
      "url": "/cars/opel/",
      "imgSrc": "icons/opel.png",
      "text": "OPEL",
      "total": 44
    },
    {
      "url": "/cars/toyota/",
      "imgSrc": "icons/toyota.png",
      "text": "TOYOTA",
      "total": 34
    },
    {
      "url": "/cars/mitsubishi/",
      "imgSrc": "icons/mitsubishi.png",
      "text": "MITSUBISHI",
      "total": 28
    },
    {
      "url": "/cars/mazda/",
      "imgSrc": "icons/mazda.png",
      "text": "MAZDA",
      "total": 22
    },
    {
      "url": "/cars/chery/",
      "imgSrc": "icons/chery.png",
      "text": "CHERY",
      "total": 21
    },
    {
      "url": "/cars/gaz/",
      "imgSrc": "icons/gaz.png",
      "text": "ГАЗ",
      "total": 20
    },
    {
      "url": "/cars/haval/",
      "imgSrc": "icons/haval.png",
      "text": "HAVAL",
      "total": 17
    },
    {
      "url": "/cars/honda/",
      "imgSrc": "icons/honda.png",
      "text": "HONDA",
      "total": 17
    },
    {
      "url": "/cars/datsun/",
      "imgSrc": "icons/datsun.png",
      "text": "DATSUN",
      "total": 15
    },
    {
      "url": "/cars/geely/",
      "imgSrc": "icons/geely.png",
      "text": "GEELY",
      "total": 14
    },
    {
      "url": "/cars/peugeot/",
      "imgSrc": "icons/peugeot.png",
      "text": "PEUGEOT",
      "total": 12
    }
  ]

  let txt = `<div class='container main__top--block'>
    <h2>Топ 20 марок по продаже</h2>

    <div class='list_brands'>`

  brandDatas.forEach((el => {
    txt += ` <div>
              <a href='${el.urlc}'>
                  <span class='icon'>
                      <img src='${el.imgSrc}' alt='' class='d-block' loading='lazy'>
                  </span>
                  <span class='text'>${el.text}</span>
                  <span class='total'>${el.total}</span>
              </a>
          </div>`
  }))

  txt += `</div>
</div>`

  document.querySelector('#brands_dynamic').innerHTML = txt
})

