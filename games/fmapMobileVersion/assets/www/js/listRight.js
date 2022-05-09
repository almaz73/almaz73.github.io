function initLineList(){
    document.getElementById("listLines").innerHTML="";
    var tx="", color;
    for(var o in E.linesArray) {
        var vid=E.linesArray[o].substr(0,1);
        switch (vid){
            case "a": color="#f00"; break;
            case "r": color="#009"; break;
            case "t": color="#090"; break;
            default : color="#000";
        }

        tx+='<div class="ui-block-e">' +
            '<a href="#"/*add-form"*/ class="ui-shadow ui-btn ui-corner-all Amira" name="'+vid+'" style="background-color: '+color+' !important;">'+
            E.linesArray[o].substring(1)+'</a></div>'
    }

    document.getElementById("listLines").innerHTML=tx;


    $(".Amira").on( "click", function(event) {
        var nomer = event.toElement.innerHTML;

        var vid = event.toElement.name;
        if(E.linesArray.indexOf(vid+nomer)==-1)return;
        showLine(vid, nomer);
        // включаю все остановки выбранного маршрута
        showAllStopBus(vid+"_"+nomer)
        $( "#checkbox-mini-0")[0].name = vid+"_"+nomer;
    });

}

function showAllStopBus(nomer){
    if(!$( "#checkbox-mini-0")[0].checked)return;
    if(nomer.indexOf("_")==-1)return
    busStopLayerGroup.clearLayers ();// стерает прежние маркеры остановок
    for (var o in E.BusStopsAll){
        //console.log(nomer+ "### = "+E.BusStopsAll[o][1]+"    "+ (E.BusStopsAll[o][1].indexOf(nomer+",")>-1));
        if(E.BusStopsAll[o][1].indexOf(nomer+",")>-1){
            showStopBus(o, E.BusStopsAll[o][0][0])
        }
    }
}

$("#checkbox-mini-0").on( "click", function(event) {
    if(this.checked)showAllStopBus($("#checkbox-mini-0")[0].name);
    else busStopLayerGroup.clearLayers ();// стерает прежние маркеры остановок
});

$("#id_sbros").on( "click", function(event) {
    E.linesArray= E.linesArrayMemory;
    initLineList();
    showLine();
    busStopLayerGroup.clearLayers ();// стерает прежние маркеры остановок

    $( "#checkbox-mini-0")[0].name="";
//    console.log("### = "+$( "#checkbox-mini-0")[0].checked );
//    console.log("### = "+$( "#checkbox-mini-0")[0].name);
});



function showLine(vid,nomer, noClear){
    if(vid==undefined){
        linesLayerGroup.clearLayers();
        return
    }
    var  color, weight=4;
    switch (vid){
        case "a":color="#f00"; break;
        case "t": color="#090";break;
        case "r": color="#00f";break;
        case "m": color="#000";break;
    }

    E.marshrut[vid+nomer] = new L.Polyline(E.BAZA[vid+"_"+nomer],{color: color,  weight: weight});
    if(noClear!="noClear")linesLayerGroup.clearLayers();
    linesLayerGroup.addLayer(E.marshrut[vid+nomer]);
}
