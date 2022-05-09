define(function () {

    /* Модуль отображения сообщений на стартовой кнопке */

    var but = document.getElementById("start");

    function text(text) {                      // меняем содержимое кнопки
        but.innerHTML = text;
    }

    return{
        text: text
    }
});