<script lang="ts" setup>
const layout = 'sidebar'
</script>

<template>
  <Body class="bg-white text-gray-800 antialiased transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200">
    <NuxtLayout :name="layout">
      <template #sidebar_body>
        <p>This is a example test case</p>
      </template>
      <template #main_body>
        <Infix-Header />
        <NuxtPage />
      </template>
    </NuxtLayout>
  </Body>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-800;
}
.global-text {
  @apply text-gray-900 dark:text-gray-50;
}
</style>
