<script type="text/javascript" setup>
const data = ref('testing')
</script>

<template>
  <div class="p-2 w-[280px] overflow-y-auto text-center dark:bg-gray-900 bg-red-300 min-h-screen">
    <p class="py-2 text-xl">
      Table of Content
    </p>
    <DropDown title="Test Menu">
      <ul>
        <li>Testing 1</li>
        <li>Testing 1</li>
        <li>Testing 1</li>
        <li>Testing 1</li>
        <li>Testing 1</li>
        <li>Testing 1</li>
      </ul>
    </DropDown>
  </div>
</template>
