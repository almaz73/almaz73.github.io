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

const fbStore = UsefbStore()
let game = shallowRef(RockPaperSScissors)

function setGame(val) {
  switch (val) {
    case 1:
      game.value = FireBaseCheck;
      break
    case 2:
      game.value = KrestikiNoliki;
      break
    case 3:
      game.value = RockPaperSScissors;
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