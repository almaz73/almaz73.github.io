function allButtons(container){





    /*var allBut="<style>  " +
        "button { " +
        "padding: 0px;" +
        "font-size: 16px;" +
        "width: 60px;" +
        "height: 50px;" +
        "opacity: 0.7;"+
        "}" +
        "button.twoLines{" +
        "font-size: 11px;" +
        "}" +
        "button.r{color: blue}" +
        "button.m{color: dark}" +
        "button.a{color: red}" +
        "button.t{color: green}" +
        "</style>";*/

    for(var o in E.BAZA){
        var vidAndName = o.split("_")
        allBut+="<button onclick='parent.onMyClick(this)' class='"+vidAndName[0]+"'>"+vidAndName[1]+"</button>"
    }


    /*allBut+="<button onclick='parent.onMyClick(this)' class='a'>14224a</button>" +
        "<button class='twoLines r' >2<br>летний</button>" +
        "<button class='twoLines'>3<br>сезонный</button>" +
        "<button class='a'>4</button><button>2332</button>" +
        "<button>2332</button><button onclick='parent.onMyClick(this)'>7777</button><button>2332</button>";*/
    container.document.body.innerHTML =  allBut;
}


function onMyClick(e){
    e.style.backgroundColor=(e.style.backgroundColor=="")?"#ffe":"";
    var nazhat = (e.style.backgroundColor!="")
    //var vid = e.className
    //var textContent = e.textContent;
   //console.log("### nazhat,vid,textContent = "+nazhat,vid,textContent);

    //console.log("### E.marshrut= "+E.marshrut);

    onBut(e,nazhat)

    //linesLayerGroup.addLayer(E.marshrut[vid+obj.value]);
}



function onBut(obj,nazhat){
    var vidR,  color, weight=4;
    var vid =obj.className;
    var textContent =obj.textContent;
    switch (vid){
        case "a": vidR = "автобус"; color="#f00"; break;
        case "t": vidR = "трамвай"; color="#090";break;
        case "r": vidR = "троллейбус"; color="#00f";break;
        case "m": vidR = "метро"; color="#000";break;
    }

    if(nazhat){
        E.marshrut[vid+textContent] = new L.Polyline(E.BAZA[vid+"_"+textContent],{color: color,  weight: weight});
        E.marshrut[vid+textContent].bindLabel(vidR+" №"+textContent);
        linesLayerGroup.addLayer(E.marshrut[vid+textContent]);
    }else{
        linesLayerGroup.removeLayer(E.marshrut[vid+textContent]);
    }
}