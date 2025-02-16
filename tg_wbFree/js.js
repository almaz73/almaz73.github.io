const {createApp, ref, onMounted} = Vue

createApp({
    setup() {
        const message = ref('Hello!')
        const userName = ref('$$$$$$$$$$')
        let webApp = {}


        onMounted(() => {
            // Проверяем, доступен ли объект Telegram.WebApp
            if (window.Telegram && window.Telegram.WebApp) {
                // обьект телеграм бота
                webApp = window.Telegram.WebApp;

                console.log('webApp',webApp)

                // Получаем данные пользователя
                userName.value = webApp.initDataUnsafe.user?.username || 'Unknown';

                webApp.showAlert(`Добро пожаловать, ${userName.value}`);

                // Разворачиваем приложение на весь экран
//            webApp.expand();
            } else {
                console.error('Telegram WebApp SDK не загружен');
            }

        });


        function setMessage() {
            console.log('val=', message.value)
           webApp.showAlert(webApp.initData());
        }

        function save(){
            webApp.sendData('#######'+JSON.stringify(message.value));
        }

        return {message, setMessage, userName, save}
    }
}).mount('#app')