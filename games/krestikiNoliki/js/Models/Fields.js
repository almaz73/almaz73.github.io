define(function () {

    /* Модуль хранения крестиков и ноликов (фишек) */

    function Fields() {

        this.cross = "";
        this.circle = "";

        this.add = function (coordinates, figure) {             // Добавление новой фишки
            coordinates = coordinates.substr(1);
            if (this[figure] != undefined) {
                if (this[figure].indexOf(coordinates) == -1) {  // отсекаем повторяющиеся узлы
                    this[figure] += coordinates;
                }
            } else {
                this[figure] = coordinates;
            }
        };


        this.clear = function () {                              // Очистка данных
            this.cross = "";
            this.circle = "";
        };

        return this
    }

    return Fields;
})