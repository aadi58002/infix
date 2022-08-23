<script setup>
useHead({
  title: 'Vitesse Nuxt 3',
})
</script>

<template>
  <Header>
    <NuxtPage w="full" />
  </Header>
</template>

<style>
*::-webkit-scrollbar { width: 0 !important; display: none}

html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
