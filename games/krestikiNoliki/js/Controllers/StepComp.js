define(function () {

    /* Объект выдающий случайный или обдуманный ход компьютеру */

    function StepComp(Fields) {
        this.cross = "";                                        // Координаты для крестиков
        this.circle = "";                                       // Координаты для ноликов
        var VICTORY = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ];



        function random() {                                     // подбор случайного пустого поля
            var EmptyField;
            var all = Fields.circle + Fields.cross;             // соединяем координаты крестиков и ноликов вместе
            do {
                EmptyField = Math.ceil(Math.random() * 9);
            } while (all.indexOf(EmptyField) != -1);            // проверяем наличие
            return "a" + EmptyField;
        }

        /* Подбор поля с анализом*/
        function smart(fishkaGamer, who) {
            var all = Fields.circle + Fields.cross;             // соединяем координаты крестиков и ноликов вместе
            var fishki = ["circle", "cross"];
            if (who == 0)fishki = ["cross", "circle"];          // меняем расположение фишки по очередности

            if (fishkaGamer == undefined) return random();
            if (Fields[fishkaGamer].length < 2) return random();   // Если больше двух ходов ищем решение


            for (var i = 0; i < 2; i++) {
                for (var o in VICTORY) {
                    var find = 0                                 // Если два раза встречаются в комбинации,
                    for (var k in VICTORY[o]) {                  // значит третий тот, что нужно закрыть
                        if (Fields[fishki[i]].indexOf(VICTORY[o][k]) != -1)find++;
                    }
                    if (find > 1) {
                        var noExistNomer = finishNumber(VICTORY[o], o, fishki[i]);
                        if (noExistNomer != undefined) return "a" + noExistNomer;
                    }
                }
            }


            function finishNumber(val, nomer, myFishka) {        // ищет замыкающее число
                var all = Fields.circle + Fields.cross;          // соединяем координаты крестиков и ноликов вместе
                for (var k in VICTORY[nomer]) {
                    var noExistNomer = undefined;
                    if (Fields[myFishka].indexOf(VICTORY[nomer][k]) == -1) {
                        noExistNomer = VICTORY[nomer][k];        // нашел недостающий
                    }

                    if (all.indexOf(noExistNomer) != -1) {
                        noExistNomer = undefined;                // если уже занят отбрасываем
                    }
                    if (noExistNomer != undefined) {
                        return noExistNomer;                     // замыкающее число найдено
                    }
                }
            }

            return random();                                     // если не найдено - берем случайное число
        }

        return {
            random: random,
            smart: smart
        }
    }

    return StepComp;
})