<script setup lang="ts">
import {onMounted, ref} from "vue";
import {UsefbStore} from "@/pinia/fbStore.ts";

const fbStore = UsefbStore()
const element = ref<number>(0)
const contex = ref<string | void>()

function sendChoise() {
  fbStore.setField('/games/' + fbStore.gameLink + '/game/' + fbStore.myId, {q:element.value}).then(res => {
    console.log('!!! res', res)
  })
}

onMounted(() => {
  fbStore.getField('/games/' + fbStore.gameLink + '/game').then(res => {
    console.log('? 200? ? ?  ? ?res = ', res)

    console.log(res)
    contex.value = res
  })
  console.log('9999999999999')
  fbStore.onValue('/games/' + fbStore.gameLink + '/game').then(res => {
    console.log('? ? ? ?  ? ?res = ', res)

    console.log(res)
    contex.value = res
  })
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

    <br> <br>
    << {{ contex }} >>
  </div>
</template>

<style scoped>
.rama {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  background: white;
  text-align: center;
}

button.active {
  box-shadow: 0 0 10px;
  background: orange;
}
</style>


