const firebaseConfig = {
    apiKey: "AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw",
    authDomain: "iamwait.firebaseapp.com",
    databaseURL: "https://iamwait-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "iamwait",
    storageBucket: "iamwait.firebasestorage.app",
    messagingSenderId: "720775593565",
    appId: "1:720775593565:web:1a263bf6a87ecfea3817b4",
    measurementId: "G-3RRDNZ9ME5"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);

// Получаем ссылку на базу данных
const database = firebase.database();





function readTextsFromDatabase(page) {
    const textRef = database.ref('berry/'+page); // создаем ссылку для подключения к БД

    let forMessages =  document.querySelector('#forMessages')
    console.log('forMessages = ',forMessages)


    textRef.on('value', (snapshot) => {
        const texts = snapshot.val();
        console.log('Все сохраненные тексты:', texts);
        if(forMessages) forMessages.innerHTML = ''
        // Можно обработать и отобразить тексты на странице
        for (const key in texts) {
            if (texts.hasOwnProperty(key)) {
                forMessages.innerHTML+='<div style="border:1px solid white; padding: 4px; margin: 4px; color:white">'+
                    texts[key].text+
                    '</div>'

                //console.log(`Текст: ${texts[key].text}, Время: ${new Date(texts[key].timestamp).toLocaleString()}`);
            }
        }
    });
}

function saveTextToDatabase(page) {
    const textRef = database.ref('berry/'+page); // Создаем ссылку на место в базе данных, куда будем сохранять

    // Получаем текст из input или textarea
    const textToSave = document.querySelector('#textInput').value;
    // Проверяем, что текст не пустой
    if (textToSave.trim() === '') return alert('Пожалуйста, введите текст');

    // Сохраняем текст
    textRef.push().set({text: textToSave,timestamp: firebase.database.ServerValue.TIMESTAMP})
        .then(() => {
            textToSave.value=''
            console.log('Текст успешно сохранен!')
        })
        .catch((error) => console.error('Ошибка при сохранении: ', error));
}
