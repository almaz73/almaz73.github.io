define(function () {

    /* модуль, для работы с localstorage, или с объектом, если localstorage не поддерживается */

    var globalSTORAGE = {};                            // объект на смену localstorage
    globalSTORAGE.count = "0:0";                       // может хранить данные пока браузер не обновится
    globalSTORAGE.krestikiNoliki = undefined;

    function Storage() {

        try {

            localStorage.setItem('foo', 'bar');         // если localstorage не поддерживается
                                                        // программа перейдет в раздел catch

            this.setCount = function (val) {
                localStorage.count = val;
            }
            this.setKrestikiNoliki = function (val) {
                localStorage.krestikiNoliki = val;
            }
            this.getCount = function (val) {
                try {
                    return localStorage.count;
                } catch (e) {
                    return "0:0";
                }
            }
            this.getKrestikiNoliki = function (val) {
                try {
                    return  localStorage.krestikiNoliki;
                } catch (e) {
                    return undefined;
                }
            }
            this.deleteKrestiki = function () {
                delete localStorage.krestikiNoliki;
            }
        } catch (e) {


            this.setCount = function (val) {
                globalSTORAGE.count = val;
            }
            this.setKrestikiNoliki = function (val) {
                globalSTORAGE.krestikiNoliki = val;
            }
            this.getCount = function (val) {
                return globalSTORAGE.count;
            }
            this.getKrestikiNoliki = function (val) {
                return globalSTORAGE.krestikiNoliki;
            }
            this.deleteKrestiki = function () {
                delete globalSTORAGE.krestikiNoliki;
            }
        }


        return this;
    }

    return Storage;

})