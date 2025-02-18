const {createApp, ref, onMounted} = Vue

createApp({
    setup() {
        const message = ref('Hello!')
        const userName = ref('$$$$$$$$$$')
        const tgparams = ref('$$')
        const initData = ref('')
        let webApp = {}


        onMounted(() => {
            webApp = window.Telegram?.WebApp;
            console.log('webApp', webApp)

            userName.value = webApp.initDataUnsafe.user?.username || 'Unknown';
//            webApp.showAlert(`Добро пожаловать, ${userName.value}`);
                console.log('location.search=', location.search)
            tgparams.value = '777' +location.search || '888'

            try{
                initData.value = webApp.initData()
            }catch (e){
                initData.value = e
            }
        });


        function setMessage() {
            console.log('val=', message.value)
           webApp.showAlert(webApp.initData());

           try{
                initData.value = webApp.initData()
            }catch (e){
                initData.value = e
            }
        }

        function save(){
            webApp.sendData('#######'+JSON.stringify(message.value));
        }

        return {message, setMessage, userName, save, tgparams, initData}
    }
}).mount('#app')