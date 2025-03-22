<script setup lang="ts">
import {onMounted, ref} from "vue";
import {UsefbStore} from "@/pinia/fbStore.ts";

const fbStore=UsefbStore()
const element = ref(0)

onMounted(()=>{
  console.log(8888888888888)
  fbStore.onValue(fbStore.gameId + '/games/'+fbStore.gameLink+'/game').then(res =>{
    console.log('res = ', res)
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
    <button class="green-bt">Свериться</button>
  </div>
</template>

<style scoped>
.rama{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  background: white;
  text-align: center;
}

button.active{
  box-shadow: 0 0 10px;
  background: orange;
}
</style>


