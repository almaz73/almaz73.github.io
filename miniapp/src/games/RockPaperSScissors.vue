<template>
  <div class="game" :style="{background:stage===2?'orange':stage===1?'pink':''}">
    <h1>♕</h1>
    <h2>
      Камень Ножницы Бумага
    </h2>
    <div v-if="stage===1">
      <p>
        Привет, {{ fbStore.nickname || fbStore.userName }} !
      </p>
      <p>
        <input v-model="nickName"
               style="font-size: larger; padding: 4px; text-align: center"
               @input="fbStore.nickname=nickName"
               placeholder="Сменить nickName">
      </p>
      <button @click="searchOpp()">
        Искать соперника!
      </button>
      <br>
      <SearchOpponent/>
      <br><br>
    </div>

    <div v-if="stage===2">
      <p> Против вас играет: <br>
       <b style="font-size: larger"> {{ name2 || id2 }}</b>
      </p>
      <p> Выбери: </p>
      <p>
        <button>камень</button>
        <button>ножницы</button>
        <button>бумага</button>
      </p>
      <br>
      <p>
        <button> ИГРАТЬ</button>
      </p>
    </div>
  </div>
</template>

<style scoped>
.game {
  background: white;
  font-size: larger;
  text-align: center;
  transition: background 2s;
}

.game button {
  font-size: larger;
}

</style>

<script setup>
import {ref} from 'vue'
import {usefbStore} from "@/pinia/fbStore.js";
import {searchOpponent} from "@/components/searchOpponent.js";
import SearchOpponent from "@/components/SearchOpponent.vue";

const fbStore = usefbStore()
const stage = ref(0)
const nickName = ref('')
const id2 = ref('')
const name2 = ref('')

fbStore.gameId='g1'

let opponent = fbStore.getOpponent()
console.log('opponent', opponent)
if (!opponent) {
 setTimeout(()=>{stage.value = 1}, 1000)
} else {
  setTimeout(()=>{stage.value = 2}, 100)

  name2.value = opponent.name
  id2.value = opponent.id
}

function searchOpp() {
  searchOpponent()
}
</script>