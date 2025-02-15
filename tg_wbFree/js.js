 const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('Hello vue!')

      var WebApp = window.Telegram.WebApp;

      WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);

        var MainButton = WebApp.MainButton;
        var BackButton = WebApp.BackButton;

        MainButton.show();
        BackButton.show();

        MainButton.onClick(function() {
          WebApp.showAlert("Хорошо, ты нажал на главную кнопку.");
        });
        WebApp.onEvent('mainButtonClicked', function() {
          /* also */
        });

        BackButton.onClick(function() {
          WebApp.showAlert("Нет пути назад!");

          BackButton.hide();
        });
        WebApp.onEvent('backButtonClicked', function() {
          /* also */
        });


      function setMessage(){
        console.log('val=',message.value )
        //message.value = val.text
      }

       return {message, setMessage}
    }
  }).mount('#app')