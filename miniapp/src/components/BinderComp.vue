<script setup lang="ts">
import {ref, watch} from 'vue'
import {UsefbStore} from "@/pinia/fbStore.ts";
import ListGames from "@/components/ListGames.vue";
import MenuButton from "@/components/MenuButton.vue";

const islocalhost = false//location.host.includes('localhost')
const fbStore = UsefbStore()
const nickName = ref<string>(localStorage.getItem('myNickName') || 'nick')
const pretendents = ref<{ id: string; name: any; }[]>([])
const opponent = ref<any>() //{ id: number | null, name: string | undefined }
const isMySelf = ref<boolean>()
const gameContent = ref('')
const myText = ref('')
const alertTx = ref('* можете поменять ваш Никнейм')
const setNikcname = function () {
  if (nickName.value) localStorage.setItem('myNickName', nickName.value)
}


function getMyGame() {
  if (!nickName.value) nickName.value = fbStore.myName
  fbStore.getField('/list/' + fbStore.myId).then(res => {
    if (res) {
      opponent.value = {id: res.id, name: res.name}

      fbStore.getField('/games/' + res.gameLink).then(context => {
        console.log('context', context)
        fbStore.gameId = context.gameId
        gameContent.value = context

        fbStore.stage = 5
        fbStore.gameLink = res.gameLink
        openGame()
      })
    }
  })
}

const ANALIZ = function (res: any) {
  console.log('>>>> ANALIZ ', res)

  pretendents.value = []
  if (fbStore.stage === 0) return false
  fbStore.stage = 1
  let exist = false
  res && Object.keys(res).forEach(el => {
    if (res[el].id2 && res[el].id2 === fbStore.myId) opponent.value = {id: el, name: res[el].name}
    if (el === String(fbStore.myId)) opponent.value = {id: res[el].id2, name: res[el].name2}
    if (fbStore.stage > 3) return false
    if (el === String(fbStore.myId) && el) {
      exist = true
      if (fbStore.stage !== 3) fbStore.stage = 2 // уже в списке
      if (res[el].id2) {
        fbStore.stage = 4
      }
    }
    if (res[el].id2 == fbStore.myId) {
      exist = true
      fbStore.stage = 3
    }
    if (fbStore.stage > 2 && !exist) location.reload()
    if (res[el].accept) gotoStartGame()
    if (el && res[el]) pretendents.value.push({id: el, name: res[el].name})
  })
}

watch(() => fbStore.myId, res => res && setTimeout(getMyGame, 500))

function gameChanged() {
  onValue_Look()
  fbStore.stage = 1
}

function onValue_Look() {
  fbStore.onValue(fbStore.gameId + '/look').then(res => ANALIZ(res))
  watch(() => fbStore.lookField, res => ANALIZ(res))
}


function goToReadyToPlay() {
  if (nickName.value.length < 2) {
    alertTx.value = '* nickname не может быть меньше 2 букв'
    return false
  }
  fbStore.setField(fbStore.gameId + '/look/' + fbStore.myId, {name: nickName.value})
}

function makeCouple(val: any) {
  if (val.id == fbStore.myId) {
    isMySelf.value = true
    setTimeout(() => isMySelf.value = false, 2000)
    return false
  }
  fbStore.setField(fbStore.gameId + '/look/' + val.id, {
    name: val.name,
    id2: fbStore.myId,
    name2: nickName.value || fbStore.myName
  }).then(res => {
    console.log('res', res)
    opponent.value = {id: val.id, name: val.name}
    fbStore.stage = 3
  })
}


function toAccept(bool: boolean) {
  if (bool && opponent.value) {
    fbStore.setField(fbStore.gameId + '/look/' + opponent.value.id,
        {
          name: opponent.value.name,
          id2: fbStore.myId,
          name2: nickName.value || fbStore.myName,
          accept: true
        })
  }
  if (!bool) {
    fbStore.setField(fbStore.gameId + '/look/' + fbStore.myId, {name: nickName.value || fbStore.myName}).then(() => fbStore.stage = 2)
  }
}

function toReject() { // не дождался отклика, отменяю
  fbStore.setField(fbStore.gameId + '/look/' + opponent.value.id, {name: opponent.value.name}).then(() => fbStore.stage = 2)
}

function toRejectGame() {
  // вернемся к странице с играми, никто не появляется среди желающих
  fbStore.removeField(fbStore.gameId + '/look/' + fbStore.myId).then(() => fbStore.stage = 0)
}



function toExit() {
  debugger
  myText.value = 'Хорошо бы сообщить сопернику, что вы ушли из игры'
  let gameLink = String(opponent.value.id)
  if (opponent.value.id > fbStore.myId) gameLink += '::' + fbStore.myId
  else gameLink = fbStore.myId + '::' + gameLink

  fbStore.removeField('/list/' + fbStore.myId)
  fbStore.removeField('/list/' + opponent.value?.id)
  fbStore.removeField('/games/' + gameLink)

  setTimeout(() => location.reload(), 3000)
}

function gotoStartGame() {
  let date = Date.now()
  let gameLink = String(opponent.value.id)
  if (opponent.value.id > fbStore.myId) gameLink += '::' + fbStore.myId
  else gameLink = fbStore.myId + '::' + gameLink

  console.log('gameLink', gameLink)


  // переводим в список list / удаляем из лок
  fbStore.setField('/list/' + fbStore.myId, {
    id: opponent.value?.id,
    name: opponent.value?.name,
    gameLink: gameLink,
    date
  })
  fbStore.setField('/list/' + opponent.value?.id, {
    id: fbStore.myId,
    name: nickName.value || fbStore.myName,
    gameLink: gameLink,
    date
  })
  fbStore.setField('/games/' + gameLink, {game: 'ВСЕ НАСТРОЙКИ ИГРЫ', gameId: fbStore.gameId})


  setTimeout(() => {
    fbStore.removeField(fbStore.gameId + '/look/' + opponent.value?.id)
    fbStore.removeField(fbStore.gameId + '/look/' + fbStore.myId)
    location.reload()
  }, 2000) /// удаляем


}

function openGame() {
  fbStore.playNumber = +fbStore.gameId.slice(1)
}

</script>


<template>
  <div v-if="islocalhost">
    <hr>
    <i>::::::: Связывание :::::::</i>
    <br>
    {{ fbStore.myId }} : {{ nickName }}
    <br>
    stage:{{ fbStore.stage }}
    <hr>
  </div>

  <div v-if="fbStore.stage === 5">
    <MenuButton @toExit="toExit()"/>

  </div>
  <!-----------1---------->
  <div v-if="fbStore.stage ===-1">
    <br><br>
    <br><br>
    ИГРАЙТЕ ВДВОЕМ
    <br><br>
    <br><br>
    <button @click="fbStore.stage=0">Вперед</button>
    <br><br>
  </div>
  <!----------0---------->
  <div v-if="fbStore.stage === 0">
    <ListGames @gameChanged="gameChanged"/>
  </div>

  <!----------1---------->

  <div v-if="fbStore.stage === 1">
    <p>
      Привет
    </p>
    <p>
      <input v-model="nickName"
             maxlength="16"
             minlength="3"
             style="font-size: larger; padding: 4px; text-align: center"
             @input="setNikcname()"
             placeholder="Сменить nickName">
    </p>
    <div class="red-notice">{{ alertTx }}</div>


    <div v-if="pretendents && pretendents.length>1">
      <h3>Список желающих играть:</h3>
      <button class="green-bt" v-for="el in pretendents" :key="el.id" @click="makeCouple(el)">{{ el.name }}</button>
      <br><br>
    </div>


    <button class="red-bt" @click="goToReadyToPlay()">
      Зарегистрироваться в поиске
    </button>
    <br> <br>
    <small>Нужно дать ссылку на бот другому игроку. И сообщить какую игру выбрать</small>
    <br>
    <br>

  </div>


  <div v-if="fbStore.stage === 2">
    <p>Нахожусь в списке, жду соперника</p>
    <div v-if="pretendents.length">
      <h3>Список желающих играть:</h3>
      <button class="green-bt" v-for="el in pretendents" :key="el.id" @click="makeCouple(el)">{{ el.name }}</button>
      <br><br>
    </div>
    <div class="red-notice" v-if="isMySelf">* нельзя выбирать себя</div>

    <br><br>
    <button @click="toRejectGame()">Нет желающих, отменяю ожидание</button>
    <br><br>
  </div>

  <div v-if="fbStore.stage === 3">
    <p> Выбрал игрока <br><b>{{ opponent?.name }}</b> <br>жду пока не откликнится </p>
    <button @click="toReject()">Нет ответа, отменяю выбор</button>
  </div>
  <div v-if="fbStore.stage === 4 && opponent?.id">
    Вас выбрал игрок: <br><br><b>{{ opponent.name }}</b>
    <br><br>
    <button class="green-bt" @click="toAccept(false)">Отказаться</button>
    <button class="green-bt" @click="toAccept(true)">Согласиться</button>
  </div>

  <div v-if="fbStore.stage === 5 && opponent">
    <h3>Играем</h3>
    с игроком <br><br>
    <div style="font-size: 30px"><b>{{ opponent.name }}</b></div>
    <!--      <br><br>-->
    <!--    Контекс игры:<br> {{ gameContent }}-->
    <br><br>

    <div style="color: red; font-size: 20px"><b>{{ myText }}</b></div>
  </div>

  <div v-if="fbStore.stage && [1,2,3,4,5].includes(fbStore.stage)">
    <hr>
    <br>
    <div style="font-size: 30px; background: #ddd">{{ fbStore.gameNames[fbStore.gameId] }}</div>
    <br><br>
  </div>

  <div v-if="fbStore.stage === 5">
    <button @click="openGame()">Играть</button>
  </div>

  <br><br>
</template>
