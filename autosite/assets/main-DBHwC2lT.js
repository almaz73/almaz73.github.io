import"./main-9sDCzJY1.js";document.addEventListener("DOMContentLoaded",()=>{let e=[{url:"/cars/vaz-lada/",imgSrc:"icons/lada.png",text:"ВАЗ (LADA)",total:470},{url:"/cars/kia/",imgSrc:"icons/kia.png",text:"KIA",total:162},{url:"/cars/hyundai/",imgSrc:"icons/hyundai.png",text:"HYUNDAI",total:136},{url:"/cars/renault/",imgSrc:"icons/renault.png",text:"RENAULT",total:104},{url:"/cars/chevrolet/",imgSrc:"icons/chevrolet.png",text:"CHEVROLET",total:87},{url:"/cars/volkswagen/",imgSrc:"icons/volkswagen.png",text:"VOLKSWAGEN",total:86},{url:"/cars/skoda/",imgSrc:"icons/skoda.png",text:"SKODA",total:82},{url:"/cars/nissan/",imgSrc:"icons/nissan.png",text:"NISSAN",total:70},{url:"/cars/ford/",imgSrc:"icons/ford.png",text:"FORD",total:48},{url:"/cars/opel/",imgSrc:"icons/opel.png",text:"OPEL",total:44},{url:"/cars/toyota/",imgSrc:"icons/toyota.png",text:"TOYOTA",total:34},{url:"/cars/mitsubishi/",imgSrc:"icons/mitsubishi.png",text:"MITSUBISHI",total:28},{url:"/cars/mazda/",imgSrc:"icons/mazda.png",text:"MAZDA",total:22},{url:"/cars/chery/",imgSrc:"icons/chery.png",text:"CHERY",total:21},{url:"/cars/gaz/",imgSrc:"icons/gaz.png",text:"ГАЗ",total:20},{url:"/cars/haval/",imgSrc:"icons/haval.png",text:"HAVAL",total:17},{url:"/cars/honda/",imgSrc:"icons/honda.png",text:"HONDA",total:17},{url:"/cars/datsun/",imgSrc:"icons/datsun.png",text:"DATSUN",total:15},{url:"/cars/geely/",imgSrc:"icons/geely.png",text:"GEELY",total:14},{url:"/cars/peugeot/",imgSrc:"icons/peugeot.png",text:"PEUGEOT",total:12}],t=`<div class='container main__top--block'>
    <h2>Топ 20 марок по продаже</h2>

    <div class='list_brands'>`;e.forEach((o=>{t+=` <div>
              <a href='${o.urlc}'>
                  <span class='icon'>
                      <img src='${o.imgSrc}' alt='' class='d-block' loading='lazy'>
                  </span>
                  <span class='text'>${o.text}</span>
                  <span class='total'>${o.total}</span>
              </a>
          </div>`})),t+=`</div>
</div>`,document.querySelector("#brands_dynamic").innerHTML=t});function g(e,t){let o=`<div class="cart" id="galery_${t}">
                <div class="cart__slide">
                    <img class="photo" alt=''>
                    <div class="area a0"></div>
                    <div class="area a1"></div>
                    <div class="area a2"></div>
                    <div class="area a3"></div>
                    <div class="area a4"></div>
                    <div class="area a5"></div>
                    <div class="cart__blank">${e.address}</div>
                    <div class="field">
                        <div class='red'></div>
                    </div>
                </div>
                <div class="name">
                    <br>
                    <a href="${e.href}"> ${e.name}</a>
                </div>
                <div class="cart__price">
                    <div class="total">${e.price} ₽</div>
                    <div class="cart__of"> от 8&nbsp;700&nbsp;₽/мес</div>
                </div>
                <div class="cart__info">
                    ${e.info}
                </div>
                <div class="cart__box--bottom">
                <a href="#">
                    <img src="icons/compare_cars.svg" alt=''>
                </a>
                <a href="#">
                    <img src="icons/penta.svg" alt=''>
                </a>
            </div>
            </div>`,s=document.querySelector("#caroffers");s&&(s.innerHTML+=o)}function h(e,t){const o=document.querySelector("#galery_"+e+" .cart__slide");if(!o)return!1;const s=o.querySelector(".photo"),i=o.querySelectorAll(".area"),c=o.querySelector(".cart .red");s.src="photo-offers/"+e+"/p1.jpg",i.forEach((n,d)=>n.addEventListener("mouseenter",()=>{s.src=t[d],c.style.left=d*16.5+"%"})),o.addEventListener("mouseleave",()=>{s.src=t[0],c.style.left="0%"});let l,p,r=0;o.addEventListener("touchstart",n=>l=n.targetTouches[0].pageX-o.offsetLeft),o.addEventListener("touchmove",n=>p=n.targetTouches[0].pageX-o.offsetLeft),o.addEventListener("touchend",()=>{console.log("raise = ",l>p),l>p?r++:r--,r>5&&(r=5),r<0&&(r=0),s.src=t[r],c.style.left=r*16.5+"%"})}let f=[{address:"Набережные Челны, Мусы Джалиля 15",name:"Volkswagen Polo, 2014",href:"/cars/polo/649868/",price:"784 238",fromPerMonth:"8 700",info:"133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин",photos:["photo-offers/1/p1.jpg","photo-offers/1/p2.jpg","photo-offers/1/p3.jpg","photo-offers/1/p4.jpg","photo-offers/1/p5.jpg","photo-offers/1/p6.jpg"]},{address:"Набережные Челны, Мусы Джалиля 15",name:"Volkswagen Polo, 2014",href:"/cars/polo/649868/",price:"784 238",fromPerMonth:"8 700",info:"133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин",photos:["photo-offers/2/p1.jpg","photo-offers/2/p2.jpg","photo-offers/2/p3.jpg","photo-offers/2/p4.jpg","photo-offers/2/p5.jpg","photo-offers/2/p6.jpg"]},{address:"Набережные Челны, Мусы Джалиля 15",name:"Volkswagen Polo, 2014",href:"/cars/polo/649868/",price:"784 238",fromPerMonth:"8 700",info:"133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин",photos:["photo-offers/2/p1.jpg","photo-offers/2/p2.jpg","photo-offers/2/p3.jpg","photo-offers/2/p4.jpg","photo-offers/2/p5.jpg","photo-offers/2/p6.jpg"]},{address:"Набережные Челны, Мусы Джалиля 15",name:"Volkswagen Polo, 2014",href:"/cars/polo/649868/",price:"784 238",fromPerMonth:"8 700",info:"133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин",photos:["photo-offers/1/p1.jpg","photo-offers/1/p2.jpg","photo-offers/1/p3.jpg","photo-offers/1/p4.jpg","photo-offers/1/p5.jpg","photo-offers/1/p6.jpg"]},{address:"Набережные Челны, Мусы Джалиля 15",name:"Volkswagen Polo, 2014",href:"/cars/polo/649868/",price:"784 238",fromPerMonth:"8 700",info:"133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин",photos:["photo-offers/2/p1.jpg","photo-offers/2/p2.jpg","photo-offers/2/p3.jpg","photo-offers/2/p4.jpg","photo-offers/2/p5.jpg","photo-offers/2/p6.jpg"]}];document.addEventListener("DOMContentLoaded",()=>{f.forEach((e,t)=>g(e,t+1)),f.forEach((e,t)=>h(t+1,e.photos))});let a={};a.Марка=["Все","AUDI","BMV","Brilliance","BYD","Cadilac"];a.Марка.value="zzzzzz";a.Модель=["Все","3 серия","5 серия","X1","X3","X5"];a.Производитель=["Amtel","Bfgoodrich","Cordiant","Formula","Gislaved","Hankook","Kormoran","Kumho","Nokian"];a["Ширина профиля"]=["Все","155","185","195","205","215","225"];a["Высота профиля"]=["Все","45","55","60","65","70"];a.Диаметр=["Все","13","14","15","16","17"];a.Сезон=["Все","Зима Шип","Лето"];window.addEventListener("load",()=>{let e=document.querySelectorAll("comb");console.log("combs = ",e),console.log("combs[0].dataset = ",e[0].dataset),e.forEach(t=>{let o=t.dataset.placeholder,s=a[o];if(s){let i=s.map(l=>'<div data-parent="'+o+'">'+l+"</div>"),c=`<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>${s.value||o}</span>
        <img src='arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items' onclick='big_comb_select(event)'>
            ${i.join("")}
        </div>
    </div>`;t.innerHTML=c}})});window.big_comb_select=function(e){let t=e.srcElement.dataset.parent,o=e.srcElement.innerText,s=e.srcElement.parentElement.parentElement;a[t].value=o,s.querySelector(".big-comb__selected").innerText=o,setTimeout(()=>s.blur(),100),console.log("items = ",a)};
