const {createApp, ref, onMounted} = Vue

createApp({
    setup() {
        const message = ref('Hello!')
        const userName = ref('$$$$$$$$$$')
        const tgparams = ref('$$')
        const initData = ref('')
        const ls = ref('')
        let webApp = ref{}

        let cod = "eyJhb3ciOiJFUzI1NiIsImtpZCI6IjIwMjQxMjE3djEiLCJ03XAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc1MjQzMjI2MCwiaWQiOiIwMTk0NTk0MS1hMDkwLTdjYTgtYjQxMC0wYWI2M2JjNWVhYzEiLCJpaWQiOjM3ODAyMDk2LCJvaWQiOjgyNjk0NSwicyI6MTA4OCwic2lkIjoiMjc3ZTFmYWItMjI5Ny00NDY0LWJlMmYtNWJkYzAwMTY5YWIyIiwidCI6Z3Fsc2UsInVpZCI6Mzc4MDIwOTZ9.DRqlTtm5vkveWnC3jOhyA2CAdB_-p1XOuZADzDPkcbFMfmyyaMR1pca94FKEC1Jcgp3hqcOjP45QiuPZaIsXdw'"


        onMounted(() => {
             ls.value = localStorage.getItem('WBfreeStore');
             console.log('localstorage ', ls.value)

            webApp.value = window.Telegram?.WebApp;
            console.log('webApp', webApp.value)

            userName.value = webApp.value.initDataUnsafe.user?.username;
            console.log('location.search=', location.search)
            tgparams.value = location.search


            webApp.value.ready();
             // Получаем initData
            console.log(' webApp.value.=',webApp.value.initData)
            console.log( 'webApp.value.initDataUnsafe = ', webApp.value.initDataUnsafe);

            webApp.value.MainButton.setText('_ТЕКСТ__11_')
            webApp.value.MainButton.show()

        });


        function setMessage() {
           console.log('val=', message.value)
        }


        function save(){
            console.log('cod=', cod)
            // Тут отпарвить данные боту
            webApp.value.sendData("? ? ? ? ? ? ?  some string that we need to send="+cod);
        }

        return {
            message,
            setMessage,
            save,
            tgparams,
            ls
        }
    }
}).mount('#app')