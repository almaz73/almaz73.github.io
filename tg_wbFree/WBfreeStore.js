const {createApp, ref, onMounted} = Vue

createApp({
    setup() {
        const tgparams = ref('') // приходящие данные
        const list = ref([])
        let webApp = ref({})
        let  isForce = ref(false)




        onMounted(() => {


            webApp.value = window.Telegram?.WebApp;
            // let MainButton = window.Telegram?.WebApp?.MainButton
            // console.log('webApp', webApp.value)

            // userName.value = webApp.value.initDataUnsafe.user?.username;
            console.log('location.search=', location.search)
            tgparams.value = location.search


            // tgparams.value = "'d=%D0%9C%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD1%F0%9F%8C%9E123,222,333,444%F0%9F%8C%9E1%F0%9F%90%B7%D0%9C%D0%B0%D0%B32%F0%9F%8C%9E12,2,%F0%9F%8C%9E%F0%9F%90%B7'"

            list.value = []
            if(tgparams.value) {
                decodeURIComponent(tgparams.value).slice(3).split('🐷').forEach(el => {
                    arrEl = el.split('🌞')
                    arrEl[0].length > 2 && list.value.push({
                        name: arrEl[0],
                        art: arrEl[1],
                        token: arrEl[2] ? 'exist' : ''
                    })
                })
            } else{
                list.value = [{name:'', art:'', token:''}]
            }
            
            // console.log('list.value.length = ',list.value.length)
            // console.log('list.value = ',list.value)
            //
            //
            // // webApp.value.ready();
            //  // Получаем initData
            // console.log(' webApp.value.=',webApp.value.initData)
            // console.log( 'webApp.value.initDataUnsafe = ', webApp.value.initDataUnsafe);



            // MainButton && MainButton.setParams({
            //     text: 'Сохранить и закрыть',
            //     has_shine_effect: true,
            //     is_visible: true
            // })
            //
            // // так и не заработал
            // MainButton && MainButton.onclick && MainButton.onclick(forceSave());
            // MainButton.show()
            // MainButton.enable()

            // MainButton && MainButton.setParams({is_visible: true, is_active: true, is_progress_visible: true, text: 'Join', color: '#2481cc'})
                // .onClick(prepareDeata());

            // document.querySelector('a.tgme_channel_join_telegram').click()

//             webApp.value.MainButton.text = "Сохранить и закрыть";
//             // webApp.value.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
// //            webApp.value.MainButton.setText('_ТЕКСТ__11_')
// //            webApp.value.MainButton.show()
// //             webApp.value.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры
//
//             webApp.value.MainButton.show() //показываем
//             webApp.value.MainButton.enable() //показываем
        });



        function addStore(){
            list.value.push({name:'',token:'', art:'' })
        }

        function prepareDeata(force){
            let link = ''
            let exist = false
            list.value.forEach((el)=>{
                if (!el.name) exist = true
                link+=`${el.name}🌞${el.art}🌞${el.token}🐷`
            })
            isForce.value = exist
            if (exist && !force) {
                link = ''
                webApp.value.showConfirm('Магазин без названия - удаление')
            }
            return link
        }
        function save(){
            let link = prepareDeata()
            console.log('___link=', link)
            link && webApp.value.sendData(link); // данные возвращаются боту
        }
        function forceSave() {
            let link = prepareDeata(true)
            link && webApp.value.sendData(link); // данные возвращаются боту
            !link && webApp.value.showConfirm('Нет данных')
        }

        return {
            list,
            addStore,
            forceSave,
            save,
            tgparams,
            isForce
        }
    }
}).mount('#app')