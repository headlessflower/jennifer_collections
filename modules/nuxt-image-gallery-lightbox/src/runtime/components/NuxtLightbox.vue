<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRuntimeConfig } from "#imports";
import type { GalleryImage } from "../types";
import SmartImg from "./SmartImg.vue";

const props = defineProps<{
  open: boolean;
  image?: GalleryImage;
  index: number;
  count: number;

  nuxtImg?: {
    preset?: string;
    format?: string;
    quality?: number;
    sizes?: string;
    densities?: string;
    fit?: string;
  };

  forceImg?: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "next"): void;
  (e: "prev"): void;
}>();

const cfg = useRuntimeConfig();
const backdrop = computed(
    () => cfg.public?.imageGallery?.defaults?.backdrop ?? "rgba(0,0,0,0.92)"
);

const dialogRef = ref<HTMLDivElement | null>(null);

watch(
    () => props.open,
    (v) => {
      if (!process.client) return;
      if (v) setTimeout(() => dialogRef.value?.focus(), 0);
    }
);

function onBackdropClick(e: MouseEvent) {
  if (e.target === e.currentTarget) emit("close");
}
</script>

<template>
  <Teleport to="body">
    <div
        v-if="open"
        class="nlb"
        role="dialog"
        aria-modal="true"
        :aria-label="`Image ${index + 1} of ${count}`"
        :style="{ '--nlb-backdrop': backdrop }"
        @click="onBackdropClick"
        ref="dialogRef"
        tabindex="-1"
    >
      <button class="nlb__close" type="button" @click="emit('close')" aria-label="Close">
        ✕
      </button>

      <button
          v-if="count > 1"
          class="nlb__nav nlb__nav--prev"
          type="button"
          @click="emit('prev')"
          aria-label="Previous image"
      >
        ‹
      </button>

      <figure class="nlb__figure">
        <SmartImg
            class="nlb__img"
            :src="image?.src || ''"
            :alt="image?.alt || ''"
            loading="eager"
            decoding="async"
            :preset="nuxtImg?.preset"
            :format="nuxtImg?.format"
            :quality="nuxtImg?.quality"
            :sizes="nuxtImg?.sizes"
            :densities="nuxtImg?.densities"
            :fit="nuxtImg?.fit"
            :force-img="forceImg"
        />

        <figcaption class="nlb__cap">
          <div v-if="image?.caption" class="nlb__caption">{{ image.caption }}</div>
          <div class="nlb__count">{{ index + 1 }} / {{ count }}</div>
          <div v-if="image?.credit" class="nlb__credit">{{ image.credit }}</div>
        </figcaption>
      </figure>

      <button
          v-if="count > 1"
          class="nlb__nav nlb__nav--next"
          type="button"
          @click="emit('next')"
          aria-label="Next image"
      >
        ›
      </button>
    </div>
  </Teleport>
</template>