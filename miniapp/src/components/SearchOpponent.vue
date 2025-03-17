<template>
  <br>
  <textarea v-model="listReadyPlayers" rows="5" style="width: 95%"/>
</template>
<script setup>
import {ref, onMounted} from 'vue'
import {usefbStore} from "@/pinia/fbStore.js";

const fbStore = usefbStore()
const listReadyPlayers = ref('')

onMounted(() => {
  fbStore.updateValue('readyToPlay/' + fbStore.gameId).then(res => {
    console.log('res=', res)
    if (res) listReadyPlayers.value = JSON.stringify(res)
  })
})
</script>