const {createApp, ref, onMounted} = Vue

createApp({
    setup() {
        const message = ref('Hello!')
        const userName = ref('$$$$$$$$$$')
        const tgparams = ref('$$')
        const initData = ref('')
        const link = ref('')
        const ls = ref('')
        let webApp = ref{}


        onMounted(() => {
             ls.value = localStorage.getItem('WBfreeStore');
             console.log('localstorage ', ls.value)

            webApp.value = window.Telegram?.WebApp;
            console.log('webApp', webApp.value)

            userName.value = webApp.value.initDataUnsafe.user?.username;
//            webApp.value.showAlert(`Добро пожаловать, ${userName.value}`);
            console.log('location.search=', location.search)
            tgparams.value = location.search

           link.value = new URLSearchParams(window.location.search);

            webApp.value.ready();
             // Получаем initData
            initData.value = webApp.value.initData || webApp.value.initDataUnsafe;

            console.log('  initData.value=',  initData.value)

//            if(tgparams.value) localStorage.setItem('WBfreeStore', tgparams.value);

        });


        function setMessage() {
           console.log('val=', message.value)

            webApp.value.postEvent('web_app_data_send', { data: 'your_data' });
        }

        function saveClose(){
            webApp.value.postEvent('web_app_data_send', { data: 'your_data' });
            webApp.value.close()
        }

        function save(){
            webApp.value.sendData('#######'+JSON.stringify(message.value));
        }

        return {
            message,
            setMessage,
            userName,
            save,
            saveClose,
            tgparams,
            initData,
            link
            ls
        }
    }
}).mount('#app')