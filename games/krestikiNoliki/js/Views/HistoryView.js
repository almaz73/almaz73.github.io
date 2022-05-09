define(['Models/Storage'], function (Storage) {

    /* Модуль для работы с таблицей истории */

    var historyDiv = document.getElementById("div_history");

    function view() {                                                   // показ
        historyDiv.style.display = "block";
    }

    function hide() {                                                   // скрывание
        historyDiv.style.display = "none";
    }

    function add(myStorag) {                                            // добавление данных
        if (myStorag.getKrestikiNoliki() != undefined) {
            var myJSONs = JSON.parse(myStorag.getKrestikiNoliki());
        }

        document.getElementById("historyList").innerHTML = "";
        if (myJSONs == undefined) return;

        for (var i = myJSONs.length - 1; i >= 0; i--) {
            var date = new Date(myJSONs[i].date);
            var values = [ date.getHours(), date.getMinutes(), date.getSeconds(), date.getDate(), date.getMonth() + 1 ];
            for (var id in values) {
                values[ id ] = values[ id ].toString().replace(/^([0-9])$/, '0$1');
            }
            date = values[ 0 ] + ":" + values[ 1 ] + ":" + values[ 2 ] +
                "  &nbsp;  <small>" + values[ 3 ] + "." + values[ 4 ] + "." + date.getFullYear() + "</small>";


            var content = '<table style="width: 100%; margin: 0px auto"><tr>' +
                '<td width="40px">' + (i + 1) + '.</td>' +
                '<td style="text-align: left">' +
                '<a href="#" style="color:' + myJSONs[i].color + '"> ' + myJSONs[i].text + '</a>' +
                '</td><td style="text-align: right">' + date + '</td>' +
                '</tr></table>';
            document.getElementById("historyList").innerHTML += content;

        }
    }


    return{
        view: view,
        hide: hide,
        add: add
    }
});