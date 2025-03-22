<script setup lang="ts">
import {UsefbStore} from "@/pinia/fbStore.ts";

const fbStore = UsefbStore()
const emits = defineEmits(['gameChanged'])

function toGame(val: number) {
  console.log(val)
  fbStore.gameId = 'g' + val
  emits('gameChanged')
}
</script>
<template>
  <div>
    <h3>Выберите игру</h3>

    <button @click="toGame(1)">
      Камень ножницы бумага
    </button>
    <br>
    <button @click="toGame(2)">
      Крестики нолики
    </button>
    <br>
    <button @click="toGame(3)">
      Морской бой
    </button>
    <br>
    <!--    <button @click="toGame(4)">-->
    <!--      Шашки-->
    <!--    </button>-->
    <!--    <br>-->
    <!--    <button @click="toGame(5)">-->
    <!--     Шахматы-->
    <!--    </button>-->
  </div>
</template>
