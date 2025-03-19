<template>
  <hr><hr><hr>
  <h3>userId : {{fbStore.userId}} </h3>
  <h3>userName : {{fbStore.userName}}</h3>
  <h2 style="text-align: center" @click="isFB=!isFB"> Админка FB ▼</h2>
  <div v-if="isFB">
    <h4> Чтение (Админка)</h4>
    Поле: <input v-model="field"/>
    <button @click="getField()"> Получить</button>
    <br>
    <textarea rows="7" v-model="result" style="width: 98%"/>
    <hr>
    <h4> Сохранение </h4>
    <textarea rows="2" v-model="saveTxt" placeholder="текст для сохранения" style="width: 98%"/>
    <button @click="setField()"> Сохранить</button>
    <br>
  </div>

  <h2 style="text-align: center" @click="isTelegram=!isTelegram"> Админка Телеграмм ▼</h2>
  <div v-if="isTelegram">
    userName: {{ fbStore.userName }}<br>
    userId: {{ fbStore.userId }}
    <p>
      <button @click="toClipboard()">Скопировать </button>
      txtArea: {{txtArea}}<br>
    </p>
  </div>


</template>

<script setup>
import {ref, onMounted} from "vue";
import {UsefbStore} from "@/pinia/fbStore.js";

const fbStore = UsefbStore()
const field = ref('g1')
const saveTxt = ref('')
const result = ref('')
const resultSave = ref('')
const isFB = ref(false)
const isTelegram = ref(false)
const txtArea = ref('')





function getField() {
  fbStore.getField(field.value || 'guest').then(res => {
    result.value = JSON.stringify(res)
  })
}

function setField() {
  fbStore.setField(field.value, saveTxt.value).then(res => {
    resultSave.value = JSON.stringify(res)
  })
}

function toClipboard() {
  navigator.clipboard.writeText(txtArea.value).then(function() {
    console.log('Текст успешно скопирован в буфер обмена');
  }, function(err) {
    console.error('Произошла ошибка при копировании текста: ', err);
  });
}

onMounted(() => {
  let webApp = window.Telegram?.WebApp;
  if( webApp) {
    fbStore.userName = webApp.initDataUnsafe.user?.username || '-';
    fbStore.userId = webApp.initDataUnsafe.user?.id || '-'
  }
  txtArea.value = JSON.stringify(webApp)
});
</script>
