define(['Views/HistoryView', 'Models/Storage'], function (HistoryView, Storage) {

    /* Модуль работы с историей */

    var myStorag = new Storage();                                             // ссылка на модуль работы с localstorage

    document.getElementById("buttonHistory").onclick = function () {          // просмотр истории
        require(['Views/HistoryView'], function (HistoryView) {
            if (document.getElementById("div_history").style.display == "block") {
                HistoryView.hide();
            } else {
                HistoryView.add(myStorag);
                HistoryView.view();
            }
        })
    }

    document.getElementById("clearHistory").onclick = function () {             // очистка истории

        myStorag.deleteKrestiki();
        myStorag.setCount("0:0");

        HistoryView.add(myStorag);
        document.getElementById("count").innerHTML = "0:0";
    }

    function saveHistory(text, circle, cross, who, pointGamer, pointComp) {     // запись

        var colorVictory = "#000000";
        /* Победа за кем? Черный:ничья, красный:победа, синий:поражение */
        if (pointGamer == 1) colorVictory = "#ff0000";
        if (pointComp == 1) colorVictory = "#0000ff";

        var myJSONs = [];

        if (myStorag.getKrestikiNoliki() != undefined) {
            myJSONs = JSON.parse(myStorag.getKrestikiNoliki());
        }


        myJSONs.push({text: text,
                "circle": circle,
                "cross": cross,
                "who": who,
                "date": new Date().getTime(),
                "color": colorVictory});

        myStorag.setKrestikiNoliki(JSON.stringify(myJSONs));            // Пересохряняем историю с обновлением


        HistoryView.add(myStorag);                                      // Заполняем таблицу истории


        var count = myStorag.getCount() || "0:0";
        var acArr = count.split(":");
        count = (+acArr[0] + pointGamer) + ":" + (+acArr[1] + pointComp); // Пересохряняем счёт с изменениями


        myStorag.setCount(count);
        document.getElementById("count").innerHTML = count;
    }


    return{
        saveHistory: saveHistory,
        myStorag: myStorag
    }
})