function initBusList(){
    var txt="";
    for (var o in E.BusStopsAll){
       if(E.BusStopsAll[o][1]=="")continue; // не включаем остановки без маршрутов
       txt +=' <li><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+o+'</a></li>';
    }
    document.getElementById("listStopBus").innerHTML=txt;
    $(".ui-icon-carat-r").on( "click", listenerAdd);
    function listenerAdd (event) {
        var ostanovka = event.currentTarget.innerHTML;
        for(var o in stopBusChoice)if(stopBusChoice[o]==ostanovka) return;
        stopBusChoice.push(ostanovka);
        addStop();
    }
}

var stopBusChoice=[];
function addStop(){
    document.getElementById("searchBus").innerHTML="";
    for(var o in stopBusChoice){
        document.getElementById("searchBus").innerHTML+=
            '<div data-role="controlgroup" data-type="horizontal" class="ui-controlgroup ui-controlgroup-horizontal ui-corner-all">'+
                '<div class="ui-controlgroup-controls ">'+
                    '<a href="#nav-panel" class="ui-shadow ui-btn ui-corner-all ui-first-child" style="max-width: 145px">'+stopBusChoice[o]+'</a>'+
                    '<a href="#"  class="ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-last-child rustam">'+stopBusChoice[o]+'</a>'+
                '</div>'+
           '</div>'
    }

    busStopLayerGroup.clearLayers ();// стерает прежние маркеры остановок
    //открываем все нажатые остановки
    for(var o in stopBusChoice){
        nameStop = stopBusChoice[o];
        //console.log(o+"### = "+nameStop)
        coordinats = E.BusStopsAll[nameStop][0];
        for(var o in coordinats){
            showStopBus(nameStop, coordinats[o]);
        }



    }
    truncatedLines();

    // создаем усеченный список маршрутов, высвечиваем и обновляем кнопки маршрутов в правой вкладке
    function truncatedLines(){
        var jointlinesAll="";
        var firstLines = E.BusStopsAll[stopBusChoice[0]][1].split(","); // создаем массив из первого
        for(var d=0; d<firstLines.length-1; d++){
            var exist=true;
            for(var i=1; i<stopBusChoice.length;i++){
                var D = E.BusStopsAll[stopBusChoice[i]][1];
                if(D.indexOf(firstLines[d])==-1){
                    // если ищем 5, ловит и 45,.  дополнительно проверяем, есть ли там
                    exist=false
                }
            }
            if(exist)jointlinesAll+=firstLines[d]+",";
        }
        if(jointlinesAll==""){
            showLine();// чищу
            document.getElementById("searchBus").innerHTML+='<div class="ui-shadow ui-btn" style="background-color: #900;">Нет прямого маршрута</div>'
        }else{
            document.getElementById("searchBus").innerHTML+='<a href="#add-form" class="ui-shadow ui-btn" style="background-color: #090; padding: 5px;">'+
                shortList(jointlinesAll)+
            '</a>'

        }
    }
    function shortList(val){
        var d=val.split(","), objTmp={},TX="";
        var color = {"m":"#000", "t":"#090", "r":"#009", "a":"#900"};
        for(var o=0;o< d.length-1;o++) objTmp[d[o]]=true;
        E.linesArray= allButtons(objTmp);


        for(var o in E.linesArray){
            var vid = E.linesArray[o].substr(0,1);
            var nomer = E.linesArray[o].substring(1);
            try{showLine(vid, nomer, (o!=0)?"noClear":"")  }catch (e){};
            TX+="<span style='color:"+color[vid]+"'>"+((o==0)?"":", ")+nomer+"</span>";
        }

        initLineList(); // пересоздаю кнопки маршуртов
        return TX;
    }



    $(".ui-first-child").on( "click", function(event) {
        //console.log("!Открываю остановку = "+nameStop);
        var nameStop= event.currentTarget.innerHTML;
        var coordinats = E.BusStopsAll[nameStop][0];
        E.map.setView(coordinats[0]); // перемещаю на первую кординату остановки
        showStopBus(nameStop, coordinats[0]);
    });

    // удаляю выбранные остановки
    $(".rustam").on( "click", function(event) {
        //console.log("### ui-icon-delete потеря = "+1);
        var stopBus = event.currentTarget.innerHTML;
        for(var o in stopBusChoice){
            if(stopBusChoice[o]==stopBus){
                stopBusChoice.splice(o,1);
                break;
            }
        }
        showLine();// чищу
        addStop();
    });



}

function showStopBus(name, coordinates){
    new L.Marker(coordinates).addTo(busStopLayerGroup).bindPopup(name).on('mouseover', function(e){
        this.openPopup();/*+"<br><button>удалить</button>"*/
    }).openPopup();
}





