const {createApp, ref, onMounted} = Vue

createApp({
    setup() {
        const userName = ref('$$$$$$$$$$')
        const tgparams = ref('$$')
        const initData = ref('')
        const ls = ref('')
        const txtArea = ref('')
        const txtArea2 = ref('')
        let webApp = {}


        onMounted(() => {
             ls.value = localStorage.getItem('tgparams');
             console.log('localstorage ', ls.value)

            webApp = window.Telegram?.WebApp;
            console.log('webApp', webApp)

            userName.value = webApp.initDataUnsafe.user?.username || 'Unknown';
            console.log('location.search=', location.search)
            tgparams.value = location.search
            txtArea.value = webApp
            txtArea2.value = webApp.initDataUnsafe

            const initData = new URLSearchParams(window.location.search);
            console.log('===',initData.get('_ijt'))

            webApp.ready();
             // Получаем initData
               initData.value = webApp.initData;

            console.log('  initData.value=',  initData.value)

            if(tgparams.value) localStorage.setItem('tgparams', tgparams.value);

        });





        return { userName, tgparams, initData, ls, txtArea, txtArea2}
    }
}).mount('#app')