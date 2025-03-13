const {createApp, ref, onMounted} = Vue

createApp({
    setup() {


// const firebaseConfig = {
//     apiKey: "AIzaSyBG-JTEatQGl7crnowv5fD7MuHSTpVwhpw",
//     authDomain: "myexperiment-169dd.firebaseapp.com",
//     databaseURL: "https://myexperiment-169dd.firebaseio.com",
//     projectId: "myexperiment-169dd",
//     storageBucket: "myexperiment-169dd.appspot.com",
//     messagingSenderId: "382700959515",
//     appId: "1:382700959515:web:b61b2a07505b9e712ac5be"
// };

        var firebaseConfig = {
            apiKey: "AIzaSyBMpMVOZdxN-lWLiczbc9wcpTty7cC_6Xg",
            authDomain: "iamwaitingforyou-73.firebaseapp.com",
            databaseURL: "https://iamwaitingforyou-73-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "iamwaitingforyou-73",
            storageBucket: "iamwaitingforyou-73.firebasestorage.app",
            messagingSenderId: "576527778879",
            appId: "1:576527778879:web:059f06122df2b01d9a248a",
            measurementId: "G-62LMJM4Z24"
        };
        let  database = null
        function readySite() {

        const app = initializeApp(firebaseConfig);

            database = getDatabase(app);

        }



        const userId = ref('Hello!')
        const userName = ref('$$$$$$$$$$')
        const initData = ref('')
        const ls = ref('')
        const txtArea = ref('')
        const txtArea2 = ref('')
        const someText = ref('')
        const readText = ref('')

        let userRef
        let webApp = {}







        onMounted(() => {
            console.log('localstorage ', ls.value)

            webApp = window.Telegram?.WebApp;
            console.log('webApp', webApp)

            userName.value = webApp.initDataUnsafe.user?.username || 'Unknown';
            userId.value = webApp.initDataUnsafe.user?.id || '-'
//            webApp.showAlert(`Добро пожаловать, ${userName.value}`);
            console.log('location.search=', location.search)

            const initData = new URLSearchParams(window.location.search);
            console.log('===',initData.get('_ijt'))

            webApp.ready();
            // Получаем initData
            initData.value = webApp.initData;

            txtArea.value = JSON.stringify(webApp)
            txtArea2.value = JSON.stringify(webApp.initData)

            console.log('  initData.value=',  initData.value)


        });


        // Пример использования
        function saveTxt() {
            // writeUserData('123', 'АЛМАЗЗ', 'asasa@ti.to');
            writeUserData(someText.value);

        }

        function readTxt() {
            get(userRef).then((snapshot) => {
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    readText.value = userData
                    console.log("Данные пользователя:", userData);
                } else {
                    console.log("Данные не найдены");
                }
            }).catch((error) => {
                console.error("Ошибка чтения данных: ", error);
            });
        }


        return {userId, userName, initData, ls, txtArea, txtArea2, readySite, readTxt, saveTxt}
    }
}).mount('#app')