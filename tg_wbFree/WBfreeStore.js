const {createApp, ref, onMounted} = Vue

createApp({
    setup() {
        const message = ref('Hello!')
        const userName = ref('$$$$$$$$$$')
        const tgparams = ref('$$')
        const initData = ref('')
        const ls = ref('')
        let webApp = {}


        onMounted(() => {
             ls.value = localStorage.getItem('tgparams');
             console.log('localstorage ', ls.value)

            webApp = window.Telegram?.WebApp;
            console.log('webApp', webApp)

            userName.value = webApp.initDataUnsafe.user?.username;
//            webApp.showAlert(`Добро пожаловать, ${userName.value}`);
            console.log('location.search=', location.search)
            tgparams.value = location.search

            const initData = new URLSearchParams(window.location.search);
            console.log('===',initData.get('_ijt'))

            webApp.ready();
             // Получаем initData
               initData.value = webApp.initData;

            console.log('  initData.value=',  initData.value)

//tgparams.value=333
//            if(tgparams.value) localStorage.setItem('tgparams', tgparams.value);

        });


        function setMessage() {
           console.log('val=', message.value)

            webApp.postEvent('web_app_data_send', { data: 'your_data' });
        }

        function saveClose(){
            webApp.postEvent('web_app_data_send', { data: 'your_data' });
            webApp.close()
        }

        function save(){
            webApp.sendData('#######'+JSON.stringify(message.value));
        }

        return {
            message,
            setMessage,
            userName,
            save,
            saveClose,
            tgparams,
            initData,
            ls
        }
    }
}).mount('#app')