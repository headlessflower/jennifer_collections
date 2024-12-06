<script setup>
import { useRouter } from "vue-router"
defineProps({
  text: String,
  link: String
});
const router = useRouter();

function navigate() {
  router.push(link);
}
</script>
<template>
  <div>
    <div class="relative group inline-block">
      <button @click='navigate'
        class="relative z-10 px-6 py-2 font-medium text-black bg-transparent border border-blue-500 rounded-md overflow-hidden">
        {{ text }}
      </button>
      <span
        class="absolute top-0 left-0 w-full h-full bg-blue-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
    </div>
  </div>
</template>
