<template>
  <label class="relative child:absolute">
    <input type="checkbox" class="peer appearance-none" />
    <div class="w-16 h-9 bg-cyan-40b0 rounded-full transition child:inline peer-checked:bg-slate-400" id="theme-switcher">
      <Icon src={Sun} class="w-6 text-yellow-300" />
      <Icon src={Moon} class="w-6 text-violet-500" />
    </div>
    <div class="w-8 h-8 rounded-full bg-slate-200 ml-0.5 my-0.5 transition peer-checked:translate-x-7" /> <!-- w-x = 9 -->
  </label>
</template>
