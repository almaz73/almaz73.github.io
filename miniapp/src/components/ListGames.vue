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
    Начальная страница
    <h3>Выберите игру</h3>
    <br>
    <button @click="toGame(1)">
      Камень ножницы бумага
    </button>
    <br> <br>
    <button @click="toGame(2)">
      Крестики нолики
    </button>
    <br> <br>
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
    <br> <br>
    Необходимо будет попросить другого участника найти этот miniapp по имени:
    <br> <br>
    <b>iAmWaitingForYou</b>
    <br> <br>
    и договориться о выборе игры
  </div>
</template>
