require([
    'Controllers/Clicks',
    'Controllers/ClickGameStatus',
    'Controllers/ClickHistory',
    'Models/GameStatus'], function (Clicks, ClickGameStatus, ClickHistory, GameStatus) {

    GameStatus.status(0);  // назначаем статус  - Игра в ожидании
    GameStatus.who(0);     // назначаем по умолчанию -  начинает игрок
    var myStorag = ClickHistory.myStorag;

    var count = myStorag.getCount() || "0:0";
    document.getElementById("count").innerHTML = count;
});


// ниже заглушка для IE, чтобы не зависал на забытые console.log
if (typeof(console) == 'undefined') {
    var console = {
        log: function (message) {
            alert(message)
        }
    }
}
