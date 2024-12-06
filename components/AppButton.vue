<script setup>
defineProps({
  text: String,
  link: String
});
</script>
<template>
  <div>
    <div class="relative group inline-block ">
      <NuxtLink :to="link"
        class="relative z-10 px-6 py-2 font-medium text-black bg-transparent border border-black rounded-md overflow-hidden group-hover:text-white duration-300 flex items-center">
        {{ text }}
        <Icon name="mingcute:arrow-right-up-line" class="ml-2" />
      </NuxtLink>
      <span
        class="absolute inset-0  w-full h-full bg-black rounded-md transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
    </div>
  </div>
</template>
