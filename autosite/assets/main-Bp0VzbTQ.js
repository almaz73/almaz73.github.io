import"./main-JULC2FE6.js";document.addEventListener("DOMContentLoaded",()=>{let c=[{url:"/cars/vaz-lada/",imgSrc:"/src/icons/lada.png",text:"ВАЗ (LADA)",total:470},{url:"/cars/kia/",imgSrc:"/src/icons/kia.png",text:"KIA",total:162},{url:"/cars/hyundai/",imgSrc:"/src/icons/hyundai.png",text:"HYUNDAI",total:136},{url:"/cars/renault/",imgSrc:"/src/icons/renault.png",text:"RENAULT",total:104},{url:"/cars/chevrolet/",imgSrc:"/src/icons/chevrolet.png",text:"CHEVROLET",total:87},{url:"/cars/volkswagen/",imgSrc:"/src/icons/volkswagen.png",text:"VOLKSWAGEN",total:86},{url:"/cars/skoda/",imgSrc:"/src/icons/skoda.png",text:"SKODA",total:82},{url:"/cars/nissan/",imgSrc:"/src/icons/nissan.png",text:"NISSAN",total:70},{url:"/cars/ford/",imgSrc:"/src/icons/ford.png",text:"FORD",total:48},{url:"/cars/opel/",imgSrc:"/src/icons/opel.png",text:"OPEL",total:44},{url:"/cars/toyota/",imgSrc:"/src/icons/toyota.png",text:"TOYOTA",total:34},{url:"/cars/mitsubishi/",imgSrc:"/src/icons/mitsubishi.png",text:"MITSUBISHI",total:28},{url:"/cars/mazda/",imgSrc:"/src/icons/mazda.png",text:"MAZDA",total:22},{url:"/cars/chery/",imgSrc:"/src/icons/chery.png",text:"CHERY",total:21},{url:"/cars/gaz/",imgSrc:"/src/icons/gaz.png",text:"ГАЗ",total:20},{url:"/cars/haval/",imgSrc:"/src/icons/haval.png",text:"HAVAL",total:17},{url:"/cars/honda/",imgSrc:"/src/icons/honda.png",text:"HONDA",total:17},{url:"/cars/datsun/",imgSrc:"/src/icons/datsun.png",text:"DATSUN",total:15},{url:"/cars/geely/",imgSrc:"/src/icons/geely.png",text:"GEELY",total:14},{url:"/cars/peugeot/",imgSrc:"/src/icons/peugeot.png",text:"PEUGEOT",total:12}],a=`<div class='container main__top--block'>
    <h2>Топ 20 марок по продаже</h2>

    <div class='page__flex'>
        <div class='box'>
            <ul>`;c.forEach((t=>{a+=` <li>
              <a href='${t.urlc}'>
                  <span class='icon'>
                      <img src='${t.imgSrc}' alt='' class=' mw-100 d-block' loading='lazy'>
                  </span>
                  <span class='text'>${t.text}</span>
                  <span class='total'>${t.total}</span>
              </a>
          </li>`})),a+=` </ul></div>
    </div>
</div>`,document.querySelector("#brands_dynamic").innerHTML=a,console.log("text",text)});
