<script setup>
const props = defineProps(['title'])
const showMenu = ref(false)
function toggleShow() {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <client-only>
    <li class="font-semibold text-sm list-none block text-start">
      <div class="flex items-center justify-between mb-2 cursor-pointer" @click="toggleShow">
        {{ title }}
        <p :class="[showMenu ? 'rotate_90' : '']">
          ⮞
        </p>
      </div>
      <transition-group name="dropdown_animate" tag="li">
        <ul v-if="showMenu" class="ml-4 overflow-hidden dropdown-menu font-normal">
          <slot />
        </ul>
      </transition-group>
    </li>
  </client-only>
</template>

<style scoped>
.dropdown_animate-enter-active,
.dropdown_animate-leave-active {
  transition: all 0.5s ease;
}
.dropdown_animate-enter-from,
.dropdown_animate-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
p.rotate_90 {
  transform: rotate(90deg);
}

ul li{
  @apply text-left;
 }
</style>
