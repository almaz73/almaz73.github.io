let myCoordinate = ""; // Эта переменная будет зранить текущее местопложение

let permissions = {
    "11": [2, 6],
    "21": [4, 6, 2],
    "31": [4, 6, 2],
    "41": [4, 2],

    "12": [8, 2, 6],
    "22": [4, 8, 2],
    "32": [8],
    "42": [8],

    "13": [8, 2],
    "23": [8, 6],
    "33": [4, 6],
    "43": [5, 2],

    "14": [8, 6],
    "24": [4, 6],
    "34": [4],
    "44": [8, 2],

}


function start() {
    open("11")
}

function finish() {
    document.querySelector('.map').style.filter = "sepia(0)"
}

/**"Эта функция будет открывать поле и менять текущую координату" */
function open(val) {
    console.log(val)
    document.querySelector('._' + val).style.opacity = 0;
    myCoordinate = val;
    if (val == "44") finish()
}



/**
 * Слушаю нажатые кнопки, и 
 */
function hearButtons(event) {
    console.log("event.keyCode=", event.keyCode)
    if (myCoordinate == "") return start();

    let secondCoordinate;
    let char = myCoordinate.slice(0, 1)
    let number = myCoordinate.slice(1, 2)
    if (event.keyCode == 39) secondCoordinate = (+char + 1) + number;
    if (event.keyCode == 40) secondCoordinate = char + (+number + 1);
    if (event.keyCode == 38) secondCoordinate = char + (+number - 1);
    if (event.keyCode == 37) secondCoordinate = (+char - 1) + number;

    if (event.keyCode == 39 && permissions[myCoordinate].includes(6)) open(secondCoordinate)
    if (event.keyCode == 40 && permissions[myCoordinate].includes(2)) open(secondCoordinate)
    if (event.keyCode == 37 && permissions[myCoordinate].includes(4)) open(secondCoordinate)
    if (event.keyCode == 38 && permissions[myCoordinate].includes(8)) open(secondCoordinate)
}