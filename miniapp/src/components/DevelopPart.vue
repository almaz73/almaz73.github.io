<template>


  <br><br>
  <hr>
  <h1>userId : {{fbStore.userId}}</h1>
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
    userName: {{ userName }}<br>
    userId: {{ userId }}

  </div>
  <p>
    txtArea: {{txtArea}}<br>
    txtArea2: {{txtArea2}}
  </p>

</template>

<script setup>
import {ref, onMounted} from "vue";
import {usefbStore} from "@/pinia/fbStore.js";

const fbStore = usefbStore()
const field = ref('g1')
const saveTxt = ref('')
const result = ref('')
const resultSave = ref('')
const isFB = ref(false)
const isTelegram = ref(true)
const userId = ref('')
const userName = ref('')
const txtArea = ref('')
const txtArea2 = ref('')


let games = localStorage.getItem('games')
if (games) {
  // продалжаем начатую игру
} else {
  // обращаемся к fb за списком readyToPlay
  // Если нет желающих играть эту игру, сами нажимаем ищу соперника
}

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

onMounted(() => {

  let webApp = window.Telegram?.WebApp;
  console.log('webApp', webApp)

  userName.value = webApp.initDataUnsafe.user?.username || 'Unknown';
  userId.value = webApp.initDataUnsafe.user?.id || '-'

  fbStore.userId = userId.value
//            webApp.showAlert(`Добро пожаловать, ${userName.value}`);
  console.log('location.search=', location.search)

  const initData = new URLSearchParams(window.location.search);
  console.log('===', initData.get('_ijt'))

  webApp.ready();
  // Получаем initData
  initData.value = webApp.initData;

  txtArea.value = JSON.stringify(webApp)
  txtArea2.value = JSON.stringify(webApp.initData)

  console.log('  initData.value=', initData.value)

});
</script>
