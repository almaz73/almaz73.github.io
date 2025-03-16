

<template>
<h3>Крестики нолики!!!</h3>
<textarea v-model="result" style="width: 100%;" placeholder="данные с сайта"/>
  <br><br>
</template>

<script setup>
import {ref} from 'vue'
import {usefbStore} from "@/pinia/fbStore.js";
const fbStore = usefbStore()
const result= ref('')

fbStore.updateValue('guest').then(res=>{
  result.value = JSON.stringify(res)
})

</script>