<template>
  <hr>
  <i>SearchOpponent</i>
  <hr>
  <p>
    Привет, {{ fbStore.nickname || fbStore.userName }} !
  </p>
  <p>
    <input v-model="nickName"
           style="font-size: larger; padding: 4px; text-align: center"
           @input="fbStore.nickname=nickName"
           placeholder="Сменить nickName">
  </p>
  <button @click="search()">
    Искать соперника!
  </button>
  <br>
  <br>
  <textarea v-model="listReadyPlayers" rows="5" style="width: 95%"/>
  <br><br>
</template>
<script setup>
import {ref, onMounted} from 'vue'
import {UsefbStore} from "@/pinia/fbStore.js";
import {searchOpponent} from "@/components/searchOpponent.js";

const fbStore = UsefbStore()
const listReadyPlayers = ref('')

function search() {
  searchOpponent()
  setTimeout(getOpponents, 500)
}

function getOpponents(){
  fbStore.updateValue('readyToPlay/' + fbStore.gameId).then(res => {
    console.log('res=', res)
    if (res) listReadyPlayers.value = JSON.stringify(res)
  })
}

onMounted(() => {
  getOpponents()
})
</script>