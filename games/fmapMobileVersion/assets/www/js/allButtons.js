function allButtons(val){/*container*/
    if(val==undefined)val=E.BAZA;

    var burArr = [];
   // создаем новый массив из списка
    var bazaBus=[],bazaTram=[],bazaTrol=[], bazaMetro=[];
    for(var o in val){
        var vid=o.substr(0,1);
        if(vid=="a")bazaBus.push(o.substr(2));
        if(vid=="t")bazaTram.push(o.substr(2));
        if(vid=="r")bazaTrol.push(o.substr(2));
        if(vid=="m")bazaMetro.push(o.substr(2));
    }
    bazaBus.sort(function(a,b){return parseInt(a)>parseInt(b)?1:-1});
    bazaTrol.sort(function(a,b){return parseInt(a)>parseInt(b)?1:-1});
    bazaTram.sort(function(a,b){return parseInt(a)>parseInt(b)?1:-1});
    bazaMetro.sort(function(a,b){return parseInt(a)>parseInt(b)?1:-1});
    E.vidCount=[]; // метро, трам, трол, авто. / количество
    E.vidCount.push(bazaMetro.length);
    E.vidCount.push(bazaTram.length);
    E.vidCount.push(bazaTrol.length);
    E.vidCount.push(bazaBus.length);
   // console.log("### E.vidCount = "+ E.vidCount);

    document.getElementById("id_m").innerHTML="<pre>         Веток метро :  "+E.vidCount[0]+"</pre>";
    if(E.vidCount[0]==0)document.getElementById("id_m").style.display="none";
    document.getElementById("id_t").innerHTML="<pre>    Трамвайных линий :  "+E.vidCount[1]+"</pre>";
    if(E.vidCount[1]==0)document.getElementById("id_t").style.display="none";
    document.getElementById("id_r").innerHTML="<pre> Троллейбусных линий :  "+E.vidCount[2]+"</pre>";
    if(E.vidCount[2]==0)document.getElementById("id_r").style.display="none";
    document.getElementById("id_a").innerHTML="<pre>    Автобусных линий :  "+E.vidCount[3]+"</pre>";
    if(E.vidCount[3]==0)document.getElementById("id_a").style.display="none";
//    console.log("### = 9e9e9e9e9e");
//    console.log("### document.getElementsById().innerHTML= "+document.getElementById("id_a").innerHTML);


// созлаем кнопки метро
    for(var o in bazaMetro) {
        burArr.push("m"+bazaMetro[o]);
    }
// созлаем кнопки трамваев
    for(var o in bazaTram) {
        burArr.push("t"+bazaTram[o]);
    }
// созлаем кнопки троллейбусов
    for(var o in bazaTrol) {
        burArr.push("r"+bazaTrol[o]);
    }
// создаем кнопки автобусов
    for(var o in bazaBus) {
        burArr.push("a"+bazaBus[o]);
    }




    return burArr;
}

function mySort(data){
    return
}


$("#panel-responsive-page1").on("pageshow",function(event, ui) {
    var myHight = document.body.offsetHeight-67;
    $("#map").css({'minHeight':myHight+'px'});
    $("#id_leftList").css({'maxHeight':(myHight+5)+'px'});
    initMap();
    initBusList();
    initLineList();
});
/*$("#panel-responsive-page1").on("orientationchange",function(event, ui) {
    var myHight = document.body.offsetHeight-60;
    $("#map").css({'minHeight':myHight+'px'});
    initMap();
});*/