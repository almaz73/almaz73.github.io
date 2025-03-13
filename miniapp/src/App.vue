<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
body {
  --color-border: #0000ff;
}


nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 10px solid var(--color-border);
}
</style>
