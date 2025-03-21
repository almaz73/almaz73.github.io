<template>
  <hr>
  <i>::::::: Связывание :::::::</i>
  <hr>

  <!----------1---------->
  <div v-if="searchStage===1">
    <p>
      Привет, {{ fbStore.nickname || fbStore.userName }} !
    </p>
    <p>
      <input v-model="nickName"
             style="font-size: larger; padding: 4px; text-align: center"
             @input="setNikcname(nickName)"
             placeholder="Сменить nickName">
    </p>
    <div class="red-notice">* тут можно поменять Никнейм</div>
    <button class="red-bt" @click="goToReadyToPlay()">
      Искать соперника!
    </button>
    <br>
    <br>
  </div>

  <!----------2---------->
  <div v-if="searchStage===2">
    <h2>ИГРА {{ fbStore.gameId }}</h2>
    <h3>Список желающих играть:</h3>
    <button class="green-bt" v-for="el in opponents" :key="el.id" @click="makeCouple(el)">{{ el.name }}</button>
    {{ !opponents.length ? ' ... тут пока пусто, ждем ...' : '' }}
    <br><br>
    Вы в списке желающих. Ждем отклика.
    <br><br>
    <!--    <button v-if="opponents.length" @click="goToReadyToPlay()" class="red-bt">-->
    <!--      Искать нового соперника!-->
    <!--    </button>-->
  </div>

  <!----------3---------->
  <div v-if="searchStage===3">
    Вы пригласили играть. Ждем. <b>{{ fbStore.opponentName }}</b>. <br>
    Соперник может принять приглашение или отказаться
    <br><br>
    <button @click="goToReadyToPlay()" class="red-bt">
      Отказаться от {{ fbStore.opponentName }}. Искать нового соперника
    </button>
  </div>

  <!----------4---------->
  <div v-if="searchStage===4">
    Ваше приглашение принял <b>{{ fbStore.opponentName }}</b>
    <br><br>
    <button class="green-bt" @click="toAccept(false)">Отказаться</button>
    <button class="green-bt" @click="toAccept(true)">Согласиться</button>
    <br><br>
    <small>Ваш никнейм : <b>{{ nickName }}</b> </small>
  </div>
  <br><br>
</template>
<script setup>
// используется для связывания с противником и запуском игры
import {onMounted, ref} from 'vue'
import {UsefbStore} from "@/pinia/fbStore.js";

const fbStore = UsefbStore()
const nickName = ref(localStorage.getItem('myNickName'))
const searchStage = ref(1);
// 0 - получаем игру из локалстораж
// 1 - если нет ищем в базе нет ли пары
// 2 - если нет - подаемся в активный поиск и ждем, получаем списк, выбираем
// 3 - если выбрали соперника, ждем ответа, примет, или откажет
// 4 - кто-то откликнулся и образовал пару - переходим на игру
const opponents = ref([])
let delayTimeChoiseOpponent = false
let currentGame

function setNikcname() {
  fbStore.nickname = nickName.value
  localStorage.setItem('myNickName', nickName.value)
}

function goToReadyToPlay() {
  fbStore.setReadyToPlay().then(res => {
    console.log('99 99 99 ',res)
    searchStage.value = 2
  })
}

function listenOpponents() {
  // получить список желающих
  fbStore.updateValue('readyToPlay/' + fbStore.gameId).then(res => {
    console.log('CЛУШАЮ  READY ')
    if (res) {
      searchStage.value = 2
      // delete res[fbStore.userId]
      Object.keys(res).forEach(el => opponents.value.push({name: res[el].name, id: el}))
    }
  })
}

function listenGames() {
  // получить список игр
  // ищем в списке игр, нет ли своего, и подключаемся если есть
  fbStore.updateValue(fbStore.gameId).then(res => {
    console.log('res', res)

    if (!res) return listenOpponents()

    currentGame = res

    let gameKey = Object.keys(res).find(el => el.includes(fbStore.userId))

    console.log('!!! game', gameKey)

    if(res[gameKey].start) {
      if (gameKey && gameKey.ask !== fbStore.userId) {
        let ind = res[gameKey].start.findIndex(el => el.includes(fbStore.userId))
        if (ind > -1) {
          let opponent = res[gameKey].start[ind === 0 ? 1 : 0].split('::')
          fbStore.opponentId = opponent[0]
          fbStore.opponentName = opponent[1]
          searchStage.value = 4
        }
      } else searchStage.value = 3
    }
    console.log('888')
  })
}

function toAccept(val) {
  console.log('currentGame = ', currentGame)
  if (val) {
    // согласиться
    let gamers = `{${ fbStore.opponentId}: ${fbStore.opponentName}, ${this.userId}: ${this.userName}}`
    console.log(gamers)
    fbStore.setGameStages(Object.keys(currentGame)[0],gamers, 1).then(res=>{
      console.log(' ? // //  searchStage.value = 2 res', res)

      if(res === 'игра') {
        // сохраним c локалстораж игру

        localStorage.setItem('GAME', )
      }

      searchStage.value = 4
    })


  } else {
    fbStore.removeField(fbStore.gameId + '/' + game)
    searchStage.value = 2
  }
}

function makeCouple(opponent) {
  if (delayTimeChoiseOpponent) return false // запрещаем нажатие на 3сек посл первого нажатия
  delayTimeChoiseOpponent = setTimeout(() => delayTimeChoiseOpponent = false, 3000)

  fbStore.acceptInvitation(opponent).then(res => {
    if (res) searchStage.value = 3
  })
}

onMounted(() => {
  listenGames()
})
</script>