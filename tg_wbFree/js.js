 const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('Hello vue!')




      function setMessage(){
        console.log('val=',message.value )
        //message.value = val.text
      }

       return {message, setMessage}
    }
  }).mount('#app')