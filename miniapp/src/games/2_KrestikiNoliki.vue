<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {UsefbStore} from "@/pinia/fbStore.ts";

const fbStore = UsefbStore()
const contex = ref<string | void>()

watch(() => fbStore.lookField, res => ANALIZ(res))

function ANALIZ(res: any){
  console.log('крестики нолики ANALIZ=', res)
  contex.value = res
}

onMounted(() => fbStore.onValue('/games/' + fbStore.gameLink + '/game'))


</script>

<template>
  <div class="rama">
    <br>
    <h2>Крестики нолики</h2>
    <br><br>
    Under construction

    <br>
    << <b style="font-size: 20px">{{ contex }} </b>>>
  </div>
</template>

<style scoped>
.rama {
  height: 100vh;
  background: orange;
  text-align: center;
}

</style>


