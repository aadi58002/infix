<script setup>
const open = ref(null)
const right = false
</script>

<template>
  <div>
    <!-- Sidebar with Dimmer -->
    <div class="fixed inset-0 flex">
      <!-- Sidebar -->
      <div
        class="absolute flex top-0 h-screen z-20"
        :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
      >
        <!-- Drawer -->
        <button
          class="w-8 h-12 p-1 my-auto text-white bg-gray-600 text-center focus:outline-none hover:bg-gray-500 transition-color duration-300"
          @click.prevent="open = !open"
        >
          <span
            :class="[right ? '-rotate-90' : 'rotate-90']"
            class="block transform origin-center font-bold"
          >
            A
          </span>
        </button>
        <!-- Sidebar Content -->
        <div
          ref="content"
          class="transition-all duration-700 bg-blue-200 overflow-hidden flex items-center justify-center"
          :class="[open ? 'max-w-lg' : 'max-w-0']"
        >
          <div class="w-48 text-center font-bold text-xl">
            <slot name="sidebar_body" />
          </div>
        </div>
      </div>
    </div>
    <slot name="main_body" />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
