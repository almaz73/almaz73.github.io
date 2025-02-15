 const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('Hello vue!')

        try{
            if(WebApp) WebAppVUE.VALUE = WebApp
            else {
                WebAppVUE = '###'+ JSON.stringify(window.Telegram.WebApp);
            }
        } catch(e){}


      function setMessage(){
        console.log('val=',message.value )
        //message.value = val.text
      }

       return {message, setMessage, WebAppVUE}
    }
  }).mount('#app')