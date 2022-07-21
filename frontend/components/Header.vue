<script setup>
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
  <div class="flex flex-row justify-between border-2 m-2 rounded shadow-md dark:bg-slate-800">
    <ul class="flex flex-column item-center">
      <p class="text-2xl mx-2 dark:text-white">℘</p>
      <li class="m-2 dark:text-white">
        <a> Home</a>
      </li>
      <li class="m-2 dark:text-white">
        <a>Food</a>
      </li>
      <li class="m-2 dark:text-white">
        <a>Maps</a>
      </li>
      <li class="m-2 dark:text-white">
        <a>Notfound</a>
      </li>
      <li class="m-2 dark:text-white">
        <a>Login</a>
      </li>
    </ul>
    <label class="relative child:absolute p-[11px] mx-[50px]">
      <input type="checkbox" class="peer appearance-none" @click="theme_toggle" ref="toggle_button"/>
      <div class="w-9 h-5 bg-slate-300 rounded-full transition child:inline peer-checked:bg-slate-400">
        <!-- <Icon src={Sun} class="w-6 text-yellow-300" /> -->
        <!-- <Icon src={Moon} class="w-6 text-violet-500" /> -->
      </div>
      <div class="w-4 h-4 rounded-full bg-slate-50 ml-0.5 my-0.5 transition peer-checked:translate-x-4"/>
    </label>
  </div>
</template>
