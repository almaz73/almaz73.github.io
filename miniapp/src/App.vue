<template>
  <component :is="game"></component>

<!--  игры-->
<!--  <button @click="setGame(1)">1</button>-->
<!--  <button @click="setGame(2)">2</button>-->
<!--  <button @click="setGame(3)">3</button>-->


<!--<DevelopPart/>-->

</template>


<script setup>
import {onMounted, shallowRef} from 'vue'
import KrestikiNoliki from "@/games/KrestikiNoliki.vue";
import RockPaperSScissors from "@/games/RockPaperSScissors.vue";
import {UsefbStore} from "@/pinia/fbStore.ts";

const fbStore=UsefbStore()
let game = shallowRef(RockPaperSScissors)

function setGame(val) {
  switch (val){
    case 1: game.value = FireBaseCheck; break
    case 2: game.value = KrestikiNoliki; break
    case 3: game.value = RockPaperSScissors; break
  }
}

onMounted(() => {
  let webApp = window.Telegram?.WebApp;
  if (webApp) {
    // console.log('webApp=',webApp)
    fbStore.myId = webApp.initDataUnsafe.user?.id || ''
    fbStore.myName = webApp.initDataUnsafe.user?.username || ''
  }
})



</script>