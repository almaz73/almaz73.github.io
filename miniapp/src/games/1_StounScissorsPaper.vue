<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {UsefbStore} from "@/pinia/fbStore.ts";

const fbStore = UsefbStore()
const element = ref<number>(0)
const contex = ref<string | void>()

watch(() => fbStore.lookField, res => ANALIZ(res))

function ANALIZ(res: any){
  console.log('res=', res)
  contex.value = res
}

function sendChoise() {
  fbStore.setField('/games/' + fbStore.gameLink + '/game/' + fbStore.myId, {q:element.value}).then(res => {
    console.log('!!! res', res)
  })
}

onMounted(() => {
  // fbStore.getField('/games/' + fbStore.gameLink + '/game').then(res => {
  // })
  console.log('9999999999999')
  fbStore.onValue('/games/' + fbStore.gameLink + '/game')
})


</script>

<template>
  <div class="rama">
    <br>
    <h2>Камень ножницы бумага</h2>
    <br><br>

    Выбери:
    <br><br><br>
    <button :class="{active:element===1}" @click="element=1">Камень</button>
    <br><br>
    <button :class="{active:element===2}" @click="element=2">Ножницы</button>
    <br><br>
    <button :class="{active:element===3}" @click="element=3">Бумага</button>
    <br><br><br><br><br><br>
    <button class="green-bt" @click="sendChoise()">Свериться</button>

    <br>
    << <b style="font-size: 20px">{{ contex }} </b>>>
  </div>
</template>

<style scoped>
.rama {
  height: 100vh;
  background: pink;
  text-align: center;
}

button.active {
  box-shadow: 0 0 10px;
  background: orange;
}
</style>


