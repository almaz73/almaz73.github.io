

 const { createApp, ref, onMounted } = Vue

  createApp({
    setup() {
      const message = ref('Hello vue!')
      const WebAppVUE  = ref('$$$$$$$$$$')


        onMounted(() => {
          // Проверяем, доступен ли объект Telegram.WebApp
          if (window.Telegram && window.Telegram.WebApp) {
            const webApp = window.Telegram.WebApp;

            // Получаем данные пользователя
            WebAppVUE.value = webApp.initDataUnsafe.user?.id || 'Unknown';

            // Разворачиваем приложение на весь экран
            webApp.expand();
          } else {
            console.error('Telegram WebApp SDK не загружен');
          }
        });


      function setMessage(){
        console.log('val=',message.value )
        //message.value = val.text
      }

       return {message, setMessage, WebAppVUE}
    }
  }).mount('#app')