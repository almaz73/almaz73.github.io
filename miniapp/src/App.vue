<template>
  <component :is="game"></component>

  игры
  <button @click="setGame(1)">1</button>
  <button @click="setGame(2)">2</button>


  <br><br>
  <hr>
  <h2 style="text-align: center"> Админка</h2>
  <h4> Чтение (Админка)</h4>
  Поле: <input v-model="field"/><button @click="getField()"> Получить  </button><br>
  <textarea rows="7" v-model="result" style="width: 98%"/>
  <hr>
  <h4> Сохранение </h4>
  <textarea rows="2" v-model="saveTxt"  placeholder="текст для сохранения" style="width: 98%"/>
  <button @click="setField()"> Сохранить  </button><br>

</template>


<script setup>
import {shallowRef, ref} from 'vue'
import FireBaseCheck from "@/components/FireBaseCheck.vue";
import KrestikiNoliki from "@/components/KrestikiNoliki.vue";
import {usefbStore} from "@/pinia/fbStore.js";

const fbStore=usefbStore()
const field = ref('g1')
const saveTxt = ref('')
const result = ref('')
const resultSave = ref('')
let game = shallowRef(null)

function setGame(val) {
  switch (val){
    case 1: game.value = FireBaseCheck; break
    case 2: game.value = KrestikiNoliki; break
  }
}

let games = localStorage.getItem('games')
if (games) {
  // продалжаем начатую игру
} else{
  // обращаемся к fb за списком readyToPlay
  // Если нет желающих играть эту игру, сами нажимаем ищу соперника
}

function getField() {
  fbStore.getField(field.value||'guest').then(res=>{
    result.value = JSON.stringify(res)
  })
}

function setField() {
  fbStore.setField(field.value,saveTxt.value ).then(res=>{
    resultSave.value = JSON.stringify(res)
  })
}


</script>