define(function () {

    /* Объект для хранения статуса игры и очередности хода  */

    function status(status) {
        if (status == undefined)return this.GameStatus;
        this.GameStatus = status || 0;
        // Статусы
        // 0 - Игра остановлена
        // 1 - Ход игрока
        // 2 - Ход компьютера
        // 3 - Конец и итог игры
    }

    function who(who) {
        if (who == undefined)return this.WhoFirst;
        this.WhoFirst = who || 0;
        // Статусы
        // 0 - Первым начинает игрок
        // 1 - Первым начинает компьютер

    }

    return {
        status: status,
        who: who
    };
})