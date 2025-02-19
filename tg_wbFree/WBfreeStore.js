const {createApp, ref, onMounted} = Vue

createApp({
    setup() {
        let cod = "eyJhb3ciOiJFUzI1NiIsImtpZCI6IjIwMjQxMjE3djEiLCJ03XAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc1MjQzMjI2MCwiaWQiOiIwMTk0NTk0MS1hMDkwLTdjYTgtYjQxMC0wYWI2M2JjNWVhYzEiLCJpaWQiOjM3ODAyMDk2LCJvaWQiOjgyNjk0NSwicyI6MTA4OCwic2lkIjoiMjc3ZTFmYWItMjI5Ny00NDY0LWJlMmYtNWJkYzAwMTY5YWIyIiwidCI6Z3Fsc2UsInVpZCI6Mzc4MDIwOTZ9.DRqlTtm5vkveWnC3jOhyA2CAdB_-p1XOuZADzDPkcbFMfmyyaMR1pca94FKEC1Jcgp3hqcOjP45QiuPZaIsXdw'"
//        const name = ref('Hello!')
//        const token = ref(cod)
//        const art = ref('')
        const list = ref([{name:'11',token:cod, art:'' }])

        const userName = ref('$$$$$$$$$$')
        const tgparams = ref('$$')
        const initData = ref('')
        const ls = ref('')
        let webApp = ref({})




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


            webApp.value.MainButton.text = "Сохранить и закрыть";
            webApp.value.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
//            webApp.value.MainButton.setText('_ТЕКСТ__11_')
//            webApp.value.MainButton.show()
            webApp.value.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры
            webApp.value.MainButton.enable() //показываем

            if (webApp.value.MainButton.isVisible){ //если кнопка показана
                webApp.value.MainButton.hide() //скрываем кнопку
            }
            else{ //иначе
               webApp.value.MainButton.show() //показываем
            }

        });

        function addStore(){
            list.value.push({name:'',token:'', art:'' })
        }

        function prepareDeata(){
            let link = ''
            let exist = false
            list.value.forEach((el)=>{
                if (!el.name) exist = true
                link+=`${el.name}&${el.art}&${el.token}###`
            })
            if (true) webApp.value.showConfirm('Магазин без названия - будут удалены все остальные настройки ', message.value)
            return link
        }
        function save(){
            let link = prepareDeata()
            console.log('___=', cod)
            // Тут отпарвить данные боту
            webApp.value.sendData(link);
        }

        return {
            list,
            addStore,
            save,
            tgparams,
            ls,
        }
    }
}).mount('#app')