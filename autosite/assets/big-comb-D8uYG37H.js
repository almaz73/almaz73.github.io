document.addEventListener("DOMContentLoaded",()=>{let c=[{url:"/cars/vaz-lada/",imgSrc:"/icons/lada.png",text:"ВАЗ (LADA)",total:470},{url:"/cars/kia/",imgSrc:"/icons/kia.png",text:"KIA",total:162},{url:"/cars/hyundai/",imgSrc:"/icons/hyundai.png",text:"HYUNDAI",total:136},{url:"/cars/renault/",imgSrc:"/icons/renault.png",text:"RENAULT",total:104},{url:"/cars/chevrolet/",imgSrc:"/icons/chevrolet.png",text:"CHEVROLET",total:87},{url:"/cars/volkswagen/",imgSrc:"/icons/volkswagen.png",text:"VOLKSWAGEN",total:86},{url:"/cars/skoda/",imgSrc:"/icons/skoda.png",text:"SKODA",total:82},{url:"/cars/nissan/",imgSrc:"/icons/nissan.png",text:"NISSAN",total:70},{url:"/cars/ford/",imgSrc:"/icons/ford.png",text:"FORD",total:48},{url:"/cars/opel/",imgSrc:"/icons/opel.png",text:"OPEL",total:44},{url:"/cars/toyota/",imgSrc:"/icons/toyota.png",text:"TOYOTA",total:34},{url:"/cars/mitsubishi/",imgSrc:"/icons/mitsubishi.png",text:"MITSUBISHI",total:28},{url:"/cars/mazda/",imgSrc:"/icons/mazda.png",text:"MAZDA",total:22},{url:"/cars/chery/",imgSrc:"/icons/chery.png",text:"CHERY",total:21},{url:"/cars/gaz/",imgSrc:"/icons/gaz.png",text:"ГАЗ",total:20},{url:"/cars/haval/",imgSrc:"/icons/haval.png",text:"HAVAL",total:17},{url:"/cars/honda/",imgSrc:"/icons/honda.png",text:"HONDA",total:17},{url:"/cars/datsun/",imgSrc:"/icons/datsun.png",text:"DATSUN",total:15},{url:"/cars/geely/",imgSrc:"/icons/geely.png",text:"GEELY",total:14},{url:"/cars/peugeot/",imgSrc:"/icons/peugeot.png",text:"PEUGEOT",total:12}],e=`

    <div class='list_brands'>`;c.forEach((t=>{e+=` <div>
              <a href='${t.urlc}'>
                  <span class='icon'>
                      <img src='${t.imgSrc}' alt='' class='d-block' loading='lazy'>
                  </span>
                  <span class='text'>${t.text}</span>
                  <span class='total'>${t.total}</span>
              </a>
          </div>`})),e+="</div>",document.querySelector("#brands_dynamic").innerHTML=e});let a={};a.Марка=["Все","AUDI","BMV","Brilliance","BYD","Cadilac"];a.Марка.value="";a.Модель=["Все","3 серия","5 серия","X1","X3","X5"];a.Производитель=["Amtel","Bfgoodrich","Cordiant","Formula","Gislaved","Hankook","Kormoran","Kumho","Nokian"];a["Ширина профиля"]=["Все","155","185","195","205","215","225"];a["Высота профиля"]=["Все","45","55","60","65","70"];a.Диаметр=["Все","13","14","15","16","17"];a.Сезон=["Все","Зима Шип","Лето"];window.addEventListener("load",()=>{document.querySelectorAll("comb").forEach(e=>{let t=e.dataset.placeholder,l=a[t];if(l){let n=l.map(o=>'<div data-parent="'+t+'">'+o+"</div>"),r=`<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>${l.value||t}</span>
        <img src='svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items' onclick='big_comb_select(event)'>
            ${n.join("")}
        </div>
    </div>`;e.innerHTML=r}})});window.big_comb_select=function(c){let e=c.srcElement.dataset.parent,t=c.srcElement.innerText,l=c.srcElement.parentElement.parentElement;a[e].value=t,l.querySelector(".big-comb__selected").innerText=t,l.blur(),console.log("items = ",a)};
