<template>
  <div class="about">
    <h1>Запишем данные и прочитаем</h1>
  </div>
  <input v-model="someText">
  <button @click="saveTxt()"> Сохранить </button>
  <span> {{result}} </span>



  <h3>{{readText}}</h3>
  <button @click="readTxt()"> Читать </button>
</template>

<script setup>
import {ref} from 'vue'
import { database } from '../assets/firebase.ts';
import { ref as R, set , get } from "firebase/database";

const someText = ref('')
const readText = ref('')
const userRef = R(database, 'guest' );
const result = ref()

function writeUserData(text) {
  set(userRef, {text: text}).then(() => {
    console.log("Данные успешно записаны!");
    result.value = 'Записано!'
  }).catch((error) => {
    console.error("Ошибка записи данных: ", error);
    result.value = 'Ошибка'
  });
}

// Пример использования
function saveTxt() {
  // writeUserData('123', 'АЛМАЗЗ', 'asasa@ti.to');
  writeUserData(someText.value);

}

function readTxt() {
  get(userRef).then((snapshot) => {
    if (snapshot.exists()) {
      const userData = snapshot.val();
      readText.value = userData
      console.log("Данные пользователя:", userData);
    } else {
      console.log("Данные не найдены");
    }
  }).catch((error) => {
    console.error("Ошибка чтения данных: ", error);
  });
}


</script>
