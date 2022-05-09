define(function () {

    /* Модуль отображения фишек на экране, звуковые и анимационные эффекты */

    var myAudio = document.getElementById("sound");


    function addView(elem, figure) {                                                     // Добавляем кружок/крест
        var image = '<img src="img/' + ((figure == undefined) ? "cross" : figure) + '.jpg">';
        document.getElementById(elem).innerHTML = image;
        stretch(document.getElementById(elem).getElementsByTagName("img")[0]);          // анимируем появление
        try {
            setTimeout(function () {
                myAudio.play();
            }, 200);                                                                     // добавляем звук
        } catch (e) {
        }
    }

    function clear() {                                                                   // чистим поля
        for (var i = 1; i < 10; i++) {
            document.getElementById("a" + i).innerHTML = "";
        }
    }

    function stretch(elem) {                                                            // Анимирование
        animate({
            duration: 100,
            step: function (progress) {
                elem.style.width = (progress * 20 + 80) + '%';
                elem.style.height = (progress * 20 + 80) + '%';
            }
        });
    }

    function animate(opts) {
        var start = new Date;                                                       // сохранить время начала
        var timer = setInterval(function () {
            var progress = (new Date - start) / opts.duration;                      // вычислить сколько времени прошло
            if (progress > 1) progress = 1;
            opts.step(progress);                                                    // отрисовать анимацию
            if (progress == 1) clearInterval(timer); // конец :)
        }, opts.delay || 10);                                                       // по умолчанию кадр каждые 10мс
    }

    return{
        addView: addView,
        clear: clear
    }

})