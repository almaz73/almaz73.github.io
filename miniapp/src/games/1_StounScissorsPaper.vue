<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {UsefbStore} from "@/pinia/fbStore.ts";

const fbStore = UsefbStore()
const element = ref<number>(0)
const contex = ref<string | void>()
const stage = ref<number>(1)
const win = ref<number>(-1) // 0 : проигрыш / 1 : выигрыш / 2 : ничья
const Thing = ['Камень', 'Ножницы', 'Бумага']
let oppNumber: number
let myNumber: number

watch(() => fbStore.lookField, res => ANALIZ(res))

function ANALIZ(res: any) {
  console.log('--- res', res)

  let len = res && Object.keys(res).length
  contex.value = res

  if (len === 2) {
    oppNumber = +res[fbStore.opponentId]
    myNumber = +res[fbStore.myId]

    let together = myNumber + '' + oppNumber

    switch (together) {
      case '21':
      case '32':
      case '13':
        win.value = 0;
        break
      case '12':
      case '23':
      case '31':
        win.value = 1;
        break
      case '22':
      case '33':
      case '11':
        win.value = 2;
    }

    stage.value = 2
  }
}

function sendChoise() {
  fbStore.setField('/games/' + fbStore.gameLink + '/game/' + fbStore.myId, element.value).then(res => {
    console.log('!!! res', res)
  })
}

function save() {
  if (win.value === 0) fbStore.scoreOpp++
  if (win.value === 1) fbStore.scoreMy++

  if (win.value === 0 || win.value === 1) {
    let result = ''
    if (fbStore.myPlaceInLine === 0) result = fbStore.scoreMy + '::' + fbStore.scoreOpp
    if (fbStore.myPlaceInLine === 1) result = fbStore.scoreOpp + '::' + fbStore.scoreMy
    fbStore.setField('/scores/' + fbStore.gameLink, result)
  }
  fbStore.removeField('/games/' + fbStore.gameLink + '/game')
  stage.value = 1
  element.value = 0
}

onMounted(() => {
  fbStore.onValue('/games/' + fbStore.gameLink + '/game')
  fbStore.onValue('/scores/' + fbStore.gameLink)
})


</script>

<template>
  <div class="rama">
    <br>
    <h2>Камень ножницы бумага</h2>
    <br><br>

    <div v-if="stage === 1">
      Выбери:
      <br><br><br>
      <button :class="{active:element===1}" @click="element=1">Камень</button>
      <br><br>
      <button :class="{active:element===2}" @click="element=2">Ножницы</button>
      <br><br>
      <button :class="{active:element===3}" @click="element=3">Бумага</button>
      <br><br><br><br><br><br>
      <button class="green-bt" :disabled="!element" @click="sendChoise()">Сохранить</button>

      <br>
    </div>
    <div v-if="stage === 2">
      <div v-if="win===0" style="background: #fdd">
        <br><br>
        <h3>Выиграл соперник:</h3>
        <p style="font-size: 30px">{{ fbStore.opponentName }}</p>
        <br><br>
      </div>

      <div v-if="win===1" style="background: #dfd">
        <br><br>
        <h1>Вы выиграли !!!</h1>
        <br><br>
      </div>

      <div v-if="win===2" style="background: white">
        <br><br>
        <h1>Ничья</h1>
        <br><br>
      </div>


      <div>
        Вы выбрали {{ Thing[myNumber] }}<br>
        Соперник {{ Thing[oppNumber] }}
      </div>

      <br><br>
      <br><br>
      <button @click="save()"> Еще играть</button>
    </div>

    <br><br>
    <h2>Общий счет за все время</h2>
    <div class="scoreTable">
      <div>
        <small> Соперник </small><br>
        {{ fbStore.opponentName }}
        <br>
        {{ fbStore.scoreOpp }}
      </div>
      <div>
        <small>Вы</small> <br>
        {{ fbStore.myName }}
        <br>
        {{ fbStore.scoreMy }}
      </div>
    </div>

  </div>
</template>

<style scoped>
.rama {
  height: 100vh;
  background: white;
  text-align: center;
}

button.active {
  box-shadow: 0 0 10px;
  background: orange;
}

.scoreTable {
  border: 8px double #999;
  display: flex;
  font-size: 18px;
  justify-content: space-around;
  padding: 12px;

  div {
    margin: 12px 0;
    line-height: 32px;
  }
}


</style>


