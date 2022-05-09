define(function () {

    /* Модуль анализа победы и подведения итогов  */

    function Victory(Fields) {

                                        //Массив со списком победных комбинаций
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


        function checkVictory() {                                           // проверка - есть ли победитель

            var exist;                                                      // существование победной комбинации

            for (var i = 0, elem = ["circle", "cross"]; i < 2; i++) {
                if (Fields[elem[i]].length > 2) {
                    for (var o in VICTORY) {                                // проверяем нет ли победных комбинация
                        exist = true;
                        for (var k in VICTORY[o]) {
                            if (Fields[elem[i]].indexOf(VICTORY[o][k]) == -1)exist = false
                        }                                                   //  Если совпадут все три элемента узла,
                        if (exist) return elem[i];                          //  тогда победитель найден
                    }
                }

                if (Fields.circle.length + Fields.cross.length == 9) {
                    return "НИЧЬЯ"
                }
            }
            return undefined;
        }

        var COMMENTS = ["Вы победили!", "Ваша победа, сэр!", "Ваша взяла!", "Ваша победа! Вы молодец!", "Вы выиграли! Очень хорошо!"];
        var COMMENTS2 = ["Победа за компьютером!", "Компьютер победил!", "Компьютер крут!", "Победитель - компьютер.", "Компьютер в выигрыше."];
        var COMMENTS3 = ["Ничья!", "Никто не победил.", "Победителей пока нет.", "Противостояние без выигрыша.", "Ничейный счёт."];
        var COMMENTS4 = [" Будем еще играть?", " Продолжим?", " Играть заново!", " Пробуем еще?", " Играем еще!"];


        function theEnd(Winner, who) {                                          // Обоработка конца игры

            var text, pointGamer = 0, pointComp = 0;
            var random1 = Math.floor(Math.random() * 5);
            var random2 = Math.floor(Math.random() * 5);

            if (Winner == "НИЧЬЯ") text = COMMENTS3[random1];

            if (who == 0 && Winner == "circle")victorGamer();                   // узнаем победителя
            if (who == 1 && Winner == "circle")victorComp();

            if (who == 0 && Winner == "cross")victorComp();
            if (who == 1 && Winner == "cross")victorGamer();


            function victorGamer() {                                            // победа игрока
                text = COMMENTS[random1];
                pointGamer = 1;
            }


            function victorComp() {                                             // победа компьютера
                text = COMMENTS2[random1];
                pointComp = 1;
            }

            var allComment = text + COMMENTS4[random2];                         // комментарий для кнопки

            return [allComment, text, pointGamer, pointComp];                   // комментарии и счет победителя
        }


        return {
            checkVictory: checkVictory,
            theEnd: theEnd
        }

    }

    return Victory;
})