<template>
  <div class="game">
    <h1>♕</h1>
    <div >
      <BinderComp/>
    </div>
  </div>
</template>

<style scoped>
.game {
  background: white;
  font-size: larger;
  text-align: center;
  transition: background 2s;
}

.game button {
  font-size: larger;
}

</style>

<script setup>
import BinderComp from "@/components/__BinderComp.vue";
</script>