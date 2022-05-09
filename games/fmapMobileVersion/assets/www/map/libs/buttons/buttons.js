function onBut(obj,thin){
    var vidR, vid, color, weight=5;
    switch (obj.className.split(" ")[0]){
        case "aBut": vidR = "автобус"; vid = "a"; color="#f0f"; break;
        case "tBut": vidR = "трамвай"; vid = "t"; color="#090";break;
        case "rBut": vidR = "троллейбус"; vid = "r"; color="#00f";break;
        case "mBut": vidR = "метро"; vid = "m"; color="#000";break;
    }
    if(thin=='thin'){
        weight=1;
    } // для режима редактирования

    if(obj.style.height!="24px"){
        obj.style.height="24px";
        //obj.style.fontWeight = "bold";
        obj.style.color=color;
        obj.style.marginTop='0px';
        E.marshrut[vid+obj.value] = new L.Polyline(E.BigArr[vid+"_"+obj.value],{color: color,  weight: weight});
        E.marshrut[vid+obj.value].bindLabel(vidR+" №"+obj.value);
        linesLayerGroup.addLayer(E.marshrut[vid+obj.value]);
        //linesLayerGroup.addLayer(E.marshrut[vid+obj.value]);
    }else{
        linesLayerGroup.removeLayer(E.marshrut[vid+obj.value]);
        obj.style.height= "20px";
        obj.style.marginTop='3px';
       // obj.style.width = "30px";
        //obj.style.fontWeight = "normal";
        obj.style.color="#000";
    }
}