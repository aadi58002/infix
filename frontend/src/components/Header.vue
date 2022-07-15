<script setup>
 import { ref, onMounted } from 'vue';

const toggle_button = ref(null);

onMounted(() => {
    if (localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        toggle_button.value.checked = true;
    }
});

function theme_toggle(event) {
    let dark = event.target.checked;

    if (dark) {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark');
    } else {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark');
    }
}
</script>

<template>
    <p class="dark:text-white dark:bg-red-700">Testing final words</p>
    <label class="relative child:absolute">
      <input type="checkbox" class="peer appearance-none" @click="theme_toggle" ref="toggle_button"/>
      <div class="w-16 h-9 bg-cyan-40b0 rounded-full transition child:inline peer-checked:bg-slate-400">
          <!-- <Icon src={Sun} class="w-6 text-yellow-300" /> -->
          <!-- <Icon src={Moon} class="w-6 text-violet-500" /> -->
      </div>
      <div class="w-8 h-8 rounded-full bg-slate-200 ml-0.5 my-0.5 transition peer-checked:translate-x-7"/>
    </label>
</template>
