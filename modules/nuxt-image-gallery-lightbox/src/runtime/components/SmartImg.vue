<script setup lang="ts">
import { computed, ref } from "vue";
import { useRuntimeConfig } from "#imports";

const props = defineProps<{
  src: string;
  alt?: string;
  class?: string;

  width?: number;
  height?: number;

  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";

  preset?: string;
  format?: string;
  quality?: number;
  sizes?: string;
  densities?: string;
  fit?: string;

  // optional manual override
  forceImg?: boolean;
}>();

const cfg = useRuntimeConfig();
const hasNuxtImage = computed(() => !!cfg.public?.imageGallery?.hasNuxtImage);

// If Nuxt Image isn't installed, never attempt NuxtImg
const useFallback = ref(false);

const canUseNuxtImg = computed(() => {
  if (props.forceImg) return false;
  if (!hasNuxtImage.value) return false;
  if (useFallback.value) return false;
  return true;
});

function onNuxtImgError() {
  // if NuxtImg exists but fails for some reason, fall back to <img>
  useFallback.value = true;
}
</script>

<template>
  <component
      v-if="canUseNuxtImg"
      :is="'NuxtImg'"
      :src="src"
      :alt="alt || ''"
      :class="class"
      :width="width"
      :height="height"
      :loading="loading"
      :decoding="decoding"
      :preset="preset"
      :format="format"
      :quality="quality"
      :sizes="sizes"
      :densities="densities"
      :fit="fit"
      @error="onNuxtImgError"
  />
  <img
      v-else
      :src="src"
      :alt="alt || ''"
      :class="class"
      :width="width"
      :height="height"
      :loading="loading"
      :decoding="decoding"
  />
</template>