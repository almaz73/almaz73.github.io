<template>
  <hr>
  <i>SearchOpponent</i>
  <hr>
  <div v-if="searchStage===1">
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

  </div>
  <div v-if="searchStage===2">
    <h3>Желающие играть</h3>
    <button v-for="el in opponents" :key="el.id" @click="makeCouple(el)">{{ el.name }}</button>
  </div>
  <div v-if="searchStage===3">
    Против вас играет {{ fbStore.opponentName }}
  </div>
  <br><br>
</template>
<script setup>
// используется для связывания с противником и запуском игры
import {onMounted, ref} from 'vue'
import {UsefbStore} from "@/pinia/fbStore.js";
import {searchOpponent} from "@/components/searchOpponent.js";

const fbStore = UsefbStore()
const searchStage = ref(1);
// 0 - получаем игру из локалстораж
// 1 - если нет ищем в базе нет ли пары
// 2 - если нет - подаемся в активный поиск и ждем, получаем списк, выбираем
// 3 - кто-то откликнулся и образовал пару - переходим на игру
const opponents = ref([])

function search() {
  searchOpponent()
  setTimeout(getOpponents, 500)
}

function getOpponents() {
  // получить список желающих
  fbStore.updateValue('readyToPlay/' + fbStore.gameId).then(res => {
    if (res) {
      searchStage.value = 2
      delete res[fbStore.userId]
      Object.keys(res).forEach(el => opponents.value.push({name: res[el].name, id: el}))
    }
  })
}

function getGames() {
  // получить список игр
  // ищем в списке игр, нет ли своего, и подключаемся если есть
  fbStore.updateValue(fbStore.gameId).then(res => {
    let game = Object.keys(res).find(el => el.includes(fbStore.userId))
    if (game) {
      // console.log('game = ', res[game])
      // fbStore.userId = 261538035

      let ind = res[game].start.findIndex(el => el.includes(fbStore.userId))

      if (ind > -1) {
        let opponent = res[game].start[ind === 0 ? 1 : 0].split('::')
        fbStore.opponentId = opponent[0]
        fbStore.opponentName = opponent[1]
        searchStage.value = 3
      }
    }

  })
}

function makeCouple(opponent) {
  // Запретить нажатие на 5сек посл первого нажатия
  fbStore.setGame(opponent).then(res => {
    console.log('> > > >res = ', res)
  })
}

onMounted(() => {
  getOpponents()
  getGames()
})
</script>