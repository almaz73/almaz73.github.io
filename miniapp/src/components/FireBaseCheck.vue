<template>
  <div class="fb-check">
    <div class="about">
      <h2>Пишем/Читаем</h2>
    </div>
    <input v-model="someText">
    <button @click="saveTxt()"> Сохранить</button>
    <span> {{ result }} </span>


    <h3>{{ readText }}</h3>
    <button @click="readTxt()"> Читать</button>

    <div style="font-size: 18px; background: orange; margin: 16px; padding: 5px">{{ listenValue }}</div>
  </div>
</template>

<style>
.fb-check {
  background: pink;
  font-size: larger;
}
</style>

<script setup>
import {ref} from 'vue'
import {database} from '../assets/firebase.ts';
import {ref as R, set, get} from "firebase/database";
import {onValue} from "firebase/database";

const someText = ref('')
const readText = ref('')
const userRef = R(database, 'guest');
const result = ref()
const listenValue = ref('')

function writeUserData(text) {
  set(userRef, {text: text}).then(() => {
    console.log("Данные успешно записаны!");
    result.value = 'Записано!'
  }).catch((error) => {
    console.error("Ошибка записи данных: ", error);
    result.value = 'Ошибка'
  });
}

onValue(userRef, (snapshot) => {
  listenValue.value = snapshot.val();
  console.log("Данные пользователя обновлены:", listenValue.value);
});

// Пример использования
function saveTxt() {
  writeUserData(someText.value);
}

function readTxt() {
  // онлайн обновление переменной
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