<script setup lang="ts">
import {ref, watch} from 'vue'
import {UsefbStore} from "@/pinia/fbStore.ts";

const {game} = defineProps<{ game?: string }>()
const fbStore = UsefbStore()
const nickName = ref<string | null>(localStorage.getItem('myNickName'))
const pretendents = ref<{ id: string; name: any; }[]>([])
const opponent = ref<any>() //{ id: number | null, name: string | undefined }
const isMySelf = ref<boolean>()
const gameContent = ref('')
const setNikcname = function () {
  fbStore.nickName = nickName.value
  if (nickName.value) localStorage.setItem('myNickName', nickName.value)
}

function getMyGame() {
  console.log('game = ', game)
  fbStore.getField(game + '/play/' + fbStore.myId).then(res => {
    if (!res) {
      onValue_Look()
      fbStore.stage = 1
    } else {
      opponent.value = {id: res.id, name: res.name + '::::' + res.id}
      fbStore.stage = 5

      fbStore.getField(game + '/game/' + res.game).then(context => {
        gameContent.value = context
      })
    }

  })
}

const ANALIZ = function (res: any) {
  console.log('ANALIZ ', res)
  pretendents.value = []
  fbStore.stage = 1
  let exist = false
  res && Object.keys(res).forEach(el => {
    if (fbStore.stage > 3) return false
    if (el === String(fbStore.myId) && el) {
      exist = true
      fbStore.stage = 2 // уже в списке
      if (res[el].id2) {
        fbStore.stage = 4
        let opp = localStorage.getItem('Opponent')
        if (opp) opponent.value = JSON.parse(opp)
      }
    }
    if (res[el].id2 == fbStore.myId) {
      exist = true
      fbStore.stage = 3
    }

    if (fbStore.stage > 2 && !exist) {
      console.log('................ОБНОВИЛСЯ А Я ПРОПАЛ')
      alert()
      location.reload()
    }

    if (res[el].accept) gotoStartGame()

    if (el && res[el]) pretendents.value.push({id: el, name: res[el].name})
  })
}

watch(() => fbStore.myId, res => res && setTimeout(getMyGame, 500))

function onValue_Look() {
  fbStore.onValue('g1/look').then(res => {
    console.log('111', res)
    ANALIZ(res)
  })

  watch(() => fbStore.lookField, res => ANALIZ(res))
}


function goToReadyToPlay() {
  fbStore.setField('g1/look/' + fbStore.myId, {name: fbStore.nickName || fbStore.myName})
}

function makeCouple(val: any) {
  if (val.id == fbStore.myId) {
    isMySelf.value = true
    setTimeout(() => isMySelf.value = false, 1500)
    return false
  }
  fbStore.setField('g1/look/' + val.id, {
    name: val.name,
    id2: fbStore.myId,
    name2: fbStore.nickName || fbStore.myName
  }).then(res => {
    console.log('res', res)
    opponent.value = {id: val.id, name: val.name}
    fbStore.stage = 3
  })
}


function toAccept(bool: boolean) {
  if (bool && opponent.value) {
    fbStore.setField('g1/look/' + opponent.value.id,
        {
          name: opponent.value.name,
          id2: fbStore.myId,
          name2: fbStore.myName,
          accept: true
        })
        .then(res => {
          let opp: any = {id: opponent.value.id, name: opponent.value.name}
          localStorage.setItem('Opponent', JSON.stringify(opp))
          console.log('res', res)
        })
  }
  if (!bool && opponent.value) {
    fbStore.setField('g1/look/' + opponent.value.id, {name: opponent.value.name})
        .then(() => {
          fbStore.stage = 2
        })
  }
}

function gotoStartGame() {
  let date = Date.now()
  let gameLink = String(opponent.value.id)
  if (opponent.value.id > fbStore.myId) gameLink += '::' + fbStore.myId
  else gameLink = fbStore.myId + '::' + gameLink

  console.log('gameLink', gameLink)


  console.log('> >> > >> gotoStartgane')
  // переводим в список play / удаляем из лок
  fbStore.setField('g1/play/' + fbStore.myId, {
    id: opponent.value?.id,
    name: opponent.value?.name,
    game: gameLink,
    date
  })
  fbStore.setField('g1/play/' + opponent.value?.id, {
    id: fbStore.myId,
    name: fbStore.myName,
    game: gameLink,
    date
  })
  fbStore.setField('g1/game/' + gameLink, {game: 'ВСЕ НАСТРОЙКИ ИГРЫ'})

  setTimeout(() => {
    fbStore.removeField('g1/look/' + opponent.value?.id)
    fbStore.removeField('g1/look/' + fbStore.myId)
    location.reload()
  }, 2000) /// удаляем

}

</script>


<template>
  <hr>
  <i>::::::: Связывание :::::::</i>
  <br>
  {{ fbStore.myId }} : {{ fbStore.myName }}
  <br>
  stage:{{ fbStore.stage }}
  <hr>

  <!----------1---------->
  <div v-if="fbStore.stage === 1">
    <p>
      Привет, {{ fbStore.nickName || fbStore.myName }} !
    </p>
    <p>
      <input v-model="nickName"
             maxlength="16"
             style="font-size: larger; padding: 4px; text-align: center"
             @input="setNikcname()"
             placeholder="Сменить nickName">
    </p>
    <div class="red-notice">* тут можно поменять ваш Никнейм</div>

    <div v-if="pretendents && pretendents.length>1">
      <h3>Список желающих играть:</h3>
      <button class="green-bt" v-for="el in pretendents" :key="el.id" @click="makeCouple(el)">{{ el.name }}</button>
      <br><br>
    </div>


    <button class="red-bt" @click="goToReadyToPlay()">
      Зарегистрироваться в поиске
    </button>
    <br>
    <br>
  </div>

  <div v-if="fbStore.stage === 2">
    <p>Добавился в список, жду</p>

    <div v-if="pretendents.length">
      <h3>Список желающих играть:</h3>
      <button class="green-bt" v-for="el in pretendents" :key="el.id" @click="makeCouple(el)">{{ el.name }}</button>
      <br><br>
    </div>
    <div class="red-notice" v-if="isMySelf">* нельзя выбирать себя</div>
  </div>

  <div v-if="fbStore.stage === 3">
    <p> Жду игрока <br><b>{{ opponent?.name }}</b>, <br>пока не откликнится </p>
  </div>

  <div v-if="fbStore.stage === 4 && opponent?.id">
    Вас выбрал игрок: <br><br><b>{{ opponent.name }}</b>
    <br><br>
    <button class="green-bt" @click="toAccept(false)">Отказаться</button>
    <button class="green-bt" @click="toAccept(true)">Согласиться</button>
  </div>

  <div v-if="fbStore.stage === 5 && opponent">
    <h3>Играем</h3>
    с игроком <br><b>{{ opponent.name }}</b><br><br>
    Контекс игры:<br> {{ gameContent }}
    <br><br>
  </div>


  <br><br>
</template>
