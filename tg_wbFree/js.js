

 const { createApp, ref, onMounted } = Vue

  createApp({
    setup() {
      const message = ref('Hello vue!')
      const userName  = ref('$$$$$$$$$$')


        onMounted(() => {
          // Проверяем, доступен ли объект Telegram.WebApp
          if (window.Telegram && window.Telegram.WebApp) {
            // обьект телеграм бота
            const webApp = window.Telegram.WebApp;
            

            // Получаем данные пользователя
            userName.value = webApp.initDataUnsafe.user?.username || 'Unknown';
            
            webApp.showAlert(`Добро пожаловать, ${userName.value}`);

            // Разворачиваем приложение на весь экран
//            webApp.expand();
          } else {
            console.error('Telegram WebApp SDK не загружен');
          }
        });


      function setMessage(){
        console.log('val=',message.value )
        //message.value = val.text
      }

       return {message, setMessage, userName}
    }
  }).mount('#app')