define([
    'Models/GameStatus',
    'Views/StartButton',
    'Views/FieldView',
    'Models/Fields',
    'Controllers/ClickHistory',
    'Controllers/StepComp',
    'Models/Victory'
], function (GameStatus, StartButton, FieldView, Fields_, ClickHistory, StepComp_, Victory_) {

    /* Модуль обработки нажатия игрового поля */

    var Fields = new Fields_();                               // выбранные поля
    var StepComp = new StepComp_(Fields);                     // объект для выбора хода для компьютера
    var Victory = new Victory_(Fields);                       // Объект для анализа победы


    var allButtons = document.getElementById('pole').getElementsByTagName("div");
    for (var o in allButtons) {
        allButtons[o].onclick = function () {                  //добавляем слушателей для игровых полей
            buttonClick(this.id);
        }
    }


    /* Слущатель игрового поля */
    function buttonClick(id) {
        var allCircle = Fields.circle;
        var allCross = Fields.cross;
        if (allCircle.indexOf(id.substr(1)) != -1) return;     // проверка на занятость поля
        if (allCross.indexOf(id.substr(1)) != -1) return;
        if (GameStatus.status() == 1) STEPS(id);               // Если разрешен ход игроку - обрабатываем нажатие поля
    }


    function STEPS(id) {                                       // Шаги игры

        var fishkaGamer = (GameStatus.who() == 0) ? "circle" : "cross"; // выбор фишек
        var fishkaComp = (GameStatus.who() == 1) ? "circle" : "cross";

        additive(id, fishkaGamer);                                      // ход игрока
        GameStatus.status(2);

        var Winner = Victory.checkVictory();                            // Проверка победы
        if (Winner != undefined) {
            saveVictory(Winner);
            return;
        }
        StartButton.text("Ход компьютера");

        setTimeout(function () {
            //additive(StepComp.random(), fishkaComp);                  // случайный ход компьютера
            additive(StepComp.smart(fishkaGamer, GameStatus.who()), fishkaComp); // умный ход компьютера
            GameStatus.status(1);
            var Winner = Victory.checkVictory();                        // Проверка победы
            if (Winner != undefined) {
                saveVictory(Winner);
                return;
            }
            StartButton.text("Ваш ход");
        }, 500);                                                        // добавляем задержку времени
    }

    /* Добавляет фишку на экран, и запоминает координаты */
    function additive(elem, figure) {
        FieldView.addView(elem, figure);                                // добавляем крестики/нолики
        Fields.add(elem, figure);                                       // запоминаем  поле
    }


    function saveVictory(Winner) {                                      // сохранение итогов игры
        var result = Victory.theEnd(Winner, GameStatus.who());
        ClickHistory.saveHistory(result[1], Fields.circle, Fields.cross, GameStatus.who(), result[2], result[3]);
        StartButton.text(result[0]);
        GameStatus.status(3);
    }


    function restart() {                                                // перезапуск игры

        Fields.clear();
        FieldView.clear();

        if (GameStatus.who() == 1) {
            StartButton.text("Первым начинает компьютер");
        } else {
            StartButton.text("Первым начинаете вы");
        }
        setTimeout(function () {
            if (GameStatus.who() == 1) {
                // additive(StepComp.random(), "circle");              // случайный ход компьютера
                additive(StepComp.smart(), "circle");                  // умный ход компьютера
            }
            GameStatus.status(1);
            StartButton.text("Ваш ход");
        }, 1000);                                                      //добавляем задержку времени

    }

    return {
        restart: restart
    }


});

