const {createApp, ref, onMounted} = Vue

createApp({
    setup() {
        const message = ref('Hello!')
        const userName = ref('$$$$$$$$$$')
        const tg_params = ref('--')
        const initData = ref('')
        let webApp = {}


        onMounted(() => {
            webApp = window.Telegram?.WebApp;
            console.log('webApp', webApp)

            userName.value = webApp.initDataUnsafe.user?.username || 'Unknown';
//            webApp.showAlert(`Добро пожаловать, ${userName.value}`);
            tg_params.value = location.search

            initData.value = webApp.initData()
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