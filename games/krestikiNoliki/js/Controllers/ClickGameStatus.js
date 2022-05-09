define(['Models/GameStatus', 'Views/StartButton', 'Controllers/Clicks'], function (GameStatus, StartButton, Clicks) {

    /* Модуль обработки кнопки старта и переигровки */

    document.getElementById('start').onclick = function () {
        document.getElementById("div_history").style.display = "none";
        switch (GameStatus.status()) {
            case 0 :                                                // Передаем ход игроку
                StartButton.text("Ваш ход");
                GameStatus.status(1);
                break;
            case 3 :                                                // Меняем очередность игры и перезапускаем игру
                GameStatus.who((GameStatus.who() == 1) ? 0 : 1);
                Clicks.restart();
                break;

        }
    }

})