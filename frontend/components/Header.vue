<script setup>
const sidebar = useState('sidebar', () => { return true })
</script>

<template>
  <div>
    <div class="flex justify-between bg-gray-700 light:bg-gray-300 min-h-30px p-2 m-2 rounded">
      <p class="text-2xl i-carbon-text-mining" />
      <div class="flex">
        <span class="text-2xl cursor-pointer" @click="sidebar = !sidebar">
          <p class="i-carbon-catalog" />
        </span>
        <DarkToggle class="text-2xl" />
      </div>
    </div>
    <div class="flex">
      <transition name="slide-fade">
        <Sidebar v-if="sidebar" class="absolute lg:block top-0 left-0 z-2" />
      </transition>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s ease-in;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}
</style>
