<template>
  <component :is="game"></component>

  <!--  игры-->
<!--    <button @click="setGame(1)">1</button>-->
<!--    <button @click="setGame(2)">2</button>-->
  <!--  <button @click="setGame(3)">3</button>-->


  <!--<DevelopPart/>-->

</template>


<script setup>
import {onMounted, shallowRef, watch} from 'vue'
import StartPage from "@/games/StartPage.vue";
import StounScissorsPaper from "@/games/1_StounScissorsPaper.vue"
import KrestikiNoliki from "@/games/2_KrestikiNoliki.vue";
import SeaWar from "@/games/3_SeaWar.vue"
import {UsefbStore} from "@/pinia/fbStore.ts";

const fbStore = UsefbStore()
let game = shallowRef(StartPage)
watch(()=>fbStore.playNumber, res=>setGame (res))



function setGame(val) {
  console.log(val)
  switch (val) {
    case 1:
      game.value = StounScissorsPaper;
      break
    case 2:
      game.value = KrestikiNoliki;
      break
    case 3:
      game.value = SeaWar;
      break
  }
}

onMounted(() => {
  let webApp = window.Telegram?.WebApp;
  if (webApp) {
    // console.log('webApp=',webApp)
    fbStore.myId = webApp.initDataUnsafe.user?.id || 0
    fbStore.myName = webApp.initDataUnsafe.user?.username || ''

    if (!fbStore.myId) setTimeout(() => {
      fbStore.myId = fbStore.myId || parseInt(String(Math.random() * 1000))
      fbStore.myName = fbStore.nickName || fbStore.myName || 'Имя_' + parseInt(String(Math.random() * 100))

      if (location.host.includes('localhost')) {
        fbStore.myId =261538035
        // fbStore.myId =953446309
        // fbStore.myId = 4444444
      }
    }, 500)
  }
})


</script>