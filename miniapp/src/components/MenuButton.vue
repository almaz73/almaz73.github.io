<script setup lang="ts">
import {ref} from "vue";

const emits = defineEmits(['toExit'])
const isVisible = ref<boolean>()

function commmand(val: number) {
  switch (val) {
    case val = 1 :
      emits('toExit');
      break
  }
  isVisible.value = false
}


</script>
<template>
  <div class="menuBt">
    <div>
      <button class="menuBt_bt" @click="isVisible=!isVisible">❁</button>
    </div>
    <div class="panel" v-if="isVisible">
      <a @click="commmand(1)">Удалить игру</a> <br>
      <a>Инфо</a>
    </div>
  </div>
</template>

<style scoped>
.menuBt {
  position: absolute;
  right: 30px;
  top: 35px;
  text-align: right;
}

.menuBt_bt {
  border-radius: 50%;
  font-size: 20px;
  margin: 0;
  padding: 8px;
  line-height: 1;
}

.panel {
  margin: 30px 10px;
  box-shadow: 0 0 20px #999;
  padding: 8px 0;
  background: white;
  line-height: 40px;

  a {
    padding: 8px 60px;
  }
}
</style>
