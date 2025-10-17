import"./main-DA_BwKET.js";document.addEventListener("DOMContentLoaded",()=>{let t=[{url:"/cars/vaz-lada/",imgSrc:"icons/lada.png",text:"ВАЗ (LADA)",total:470},{url:"/cars/kia/",imgSrc:"icons/kia.png",text:"KIA",total:162},{url:"/cars/hyundai/",imgSrc:"icons/hyundai.png",text:"HYUNDAI",total:136},{url:"/cars/renault/",imgSrc:"icons/renault.png",text:"RENAULT",total:104},{url:"/cars/chevrolet/",imgSrc:"icons/chevrolet.png",text:"CHEVROLET",total:87},{url:"/cars/volkswagen/",imgSrc:"icons/volkswagen.png",text:"VOLKSWAGEN",total:86},{url:"/cars/skoda/",imgSrc:"icons/skoda.png",text:"SKODA",total:82},{url:"/cars/nissan/",imgSrc:"icons/nissan.png",text:"NISSAN",total:70},{url:"/cars/ford/",imgSrc:"icons/ford.png",text:"FORD",total:48},{url:"/cars/opel/",imgSrc:"icons/opel.png",text:"OPEL",total:44},{url:"/cars/toyota/",imgSrc:"icons/toyota.png",text:"TOYOTA",total:34},{url:"/cars/mitsubishi/",imgSrc:"icons/mitsubishi.png",text:"MITSUBISHI",total:28},{url:"/cars/mazda/",imgSrc:"icons/mazda.png",text:"MAZDA",total:22},{url:"/cars/chery/",imgSrc:"icons/chery.png",text:"CHERY",total:21},{url:"/cars/gaz/",imgSrc:"icons/gaz.png",text:"ГАЗ",total:20},{url:"/cars/haval/",imgSrc:"icons/haval.png",text:"HAVAL",total:17},{url:"/cars/honda/",imgSrc:"icons/honda.png",text:"HONDA",total:17},{url:"/cars/datsun/",imgSrc:"icons/datsun.png",text:"DATSUN",total:15},{url:"/cars/geely/",imgSrc:"icons/geely.png",text:"GEELY",total:14},{url:"/cars/peugeot/",imgSrc:"icons/peugeot.png",text:"PEUGEOT",total:12}],s=`<div class='container main__top--block'>
    <h2>Топ 20 марок по продаже</h2>

    <div class='list_brands'>`;t.forEach((o=>{s+=` <div>
              <a href='${o.urlc}'>
                  <span class='icon'>
                      <img src='${o.imgSrc}' alt='' class='d-block' loading='lazy'>
                  </span>
                  <span class='text'>${o.text}</span>
                  <span class='total'>${o.total}</span>
              </a>
          </div>`})),s+=`</div>
</div>`,document.querySelector("#brands_dynamic").innerHTML=s});function d(t,s){let o=`<div class="cart" id="galery_${s}">
                <div class="cart__slide">
                    <img class="photo" alt=''>
                    <div class="area a0"></div>
                    <div class="area a1"></div>
                    <div class="area a2"></div>
                    <div class="area a3"></div>
                    <div class="area a4"></div>
                    <div class="area a5"></div>
                    <div class="cart__blank">${t.address}</div>
                    <div class="field">
                        <div class='red'></div>
                    </div>
                </div>
                <div class="name">
                    <br>
                    <a href="${t.href}"> ${t.name}</a>
                </div>
                <div class="cart__price">
                    <div class="total">${t.price} ₽</div>
                    <div class="cart__of"> от 8&nbsp;700&nbsp;₽/мес</div>
                </div>
                <div class="cart__info">
                    ${t.info}
                </div>
                <div class="cart__box--bottom">
                <a href="#">
                    <img src="icons/compare_cars.svg" alt=''>
                </a>
                <a href="#">
                    <img src="icons/penta.svg" alt=''>
                </a>
            </div>
            </div>`,r=document.querySelector("#caroffers");r&&(r.innerHTML+=o)}function g(t,s){const o=document.querySelector("#galery_"+t+" .cart__slide");if(!o)return!1;const r=o.querySelector(".photo"),f=o.querySelectorAll(".area"),c=o.querySelector(".cart .red");r.src="photo-offers/"+t+"/p1.jpg",f.forEach((a,l)=>a.addEventListener("mouseenter",()=>{r.src=s[l],c.style.left=l*16.5+"%"})),o.addEventListener("mouseleave",()=>{r.src=s[0],c.style.left="0%"});let p,n,e=0;o.addEventListener("touchstart",a=>p=a.targetTouches[0].pageX-o.offsetLeft),o.addEventListener("touchmove",a=>n=a.targetTouches[0].pageX-o.offsetLeft),o.addEventListener("touchend",()=>{console.log("raise = ",p>n),p>n?e++:e--,e>5&&(e=5),e<0&&(e=0),r.src=s[e],c.style.left=e*16.5+"%"})}let i=[{address:"Набережные Челны, Мусы Джалиля 15",name:"Volkswagen Polo, 2014",href:"/cars/polo/649868/",price:"784 238",fromPerMonth:"8 700",info:"133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин",photos:["photo-offers/1/p1.jpg","photo-offers/1/p2.jpg","photo-offers/1/p3.jpg","photo-offers/1/p4.jpg","photo-offers/1/p5.jpg","photo-offers/1/p6.jpg"]},{address:"Набережные Челны, Мусы Джалиля 15",name:"Volkswagen Polo, 2014",href:"/cars/polo/649868/",price:"784 238",fromPerMonth:"8 700",info:"133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин",photos:["photo-offers/2/p1.jpg","photo-offers/2/p2.jpg","photo-offers/2/p3.jpg","photo-offers/2/p4.jpg","photo-offers/2/p5.jpg","photo-offers/2/p6.jpg"]},{address:"Набережные Челны, Мусы Джалиля 15",name:"Volkswagen Polo, 2014",href:"/cars/polo/649868/",price:"784 238",fromPerMonth:"8 700",info:"133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин",photos:["photo-offers/2/p1.jpg","photo-offers/2/p2.jpg","photo-offers/2/p3.jpg","photo-offers/2/p4.jpg","photo-offers/2/p5.jpg","photo-offers/2/p6.jpg"]},{address:"Набережные Челны, Мусы Джалиля 15",name:"Volkswagen Polo, 2014",href:"/cars/polo/649868/",price:"784 238",fromPerMonth:"8 700",info:"133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин",photos:["photo-offers/1/p1.jpg","photo-offers/1/p2.jpg","photo-offers/1/p3.jpg","photo-offers/1/p4.jpg","photo-offers/1/p5.jpg","photo-offers/1/p6.jpg"]},{address:"Набережные Челны, Мусы Джалиля 15",name:"Volkswagen Polo, 2014",href:"/cars/polo/649868/",price:"784 238",fromPerMonth:"8 700",info:"133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин",photos:["photo-offers/2/p1.jpg","photo-offers/2/p2.jpg","photo-offers/2/p3.jpg","photo-offers/2/p4.jpg","photo-offers/2/p5.jpg","photo-offers/2/p6.jpg"]}];document.addEventListener("DOMContentLoaded",()=>{i.forEach((t,s)=>d(t,s+1)),i.forEach((t,s)=>g(s+1,t.photos))});
