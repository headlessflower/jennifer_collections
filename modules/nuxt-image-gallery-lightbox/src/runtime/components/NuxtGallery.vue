<script setup lang="ts">
import { computed } from "vue";
import { useRuntimeConfig } from "#imports";
import type { GalleryImage } from "../types";
import NuxtLightbox from "./NuxtLightbox.vue";
import SmartImg from "./SmartImg.vue";
import { useLightbox } from "../composables/useLightbox";

const props = withDefaults(
    defineProps<{
      images: GalleryImage[];
      gap?: number;
      radius?: number;
      columns?: { base?: number; sm?: number; md?: number; lg?: number };
      preferThumbs?: boolean;
      lazy?: boolean;

      // NuxtImg options (override module defaults)
      nuxtImg?: {
        preset?: string;
        format?: string;
        quality?: number;
        sizes?: string;
        densities?: string;
        fit?: string;
      };

      // If true, disables NuxtImg usage and uses <img> everywhere.
      forceImg?: boolean;
    }>(),
    {
      preferThumbs: true,
      lazy: true,
    }
);

const cfg = useRuntimeConfig();
const defaults = computed(() => cfg.public?.imageGallery?.defaults || {});
const imgDefaults = computed(() => defaults.value.nuxtImg || {});

const gap = computed(() => props.gap ?? defaults.value.gap ?? 12);
const radius = computed(() => props.radius ?? defaults.value.radius ?? 14);
const cols = computed(() => ({
  base: props.columns?.base ?? defaults.value.columns?.base ?? 2,
  sm: props.columns?.sm ?? defaults.value.columns?.sm ?? 3,
  md: props.columns?.md ?? defaults.value.columns?.md ?? 4,
  lg: props.columns?.lg ?? defaults.value.columns?.lg ?? 5,
}));

const nuxtImg = computed(() => ({
  ...imgDefaults.value,
  ...(props.nuxtImg || {}),
}));

const { isOpen, index, active, open, close, next, prev } = useLightbox(props.images);

function displaySrc(img: GalleryImage) {
  if (props.preferThumbs && img.thumb) return img.thumb;
  return img.src;
}

const styleVars = computed(() => ({
  "--ng-gap": `${gap.value}px`,
  "--ng-radius": `${radius.value}px`,
  "--ng-cols": String(cols.value.base),
  "--ng-cols-sm": String(cols.value.sm),
  "--ng-cols-md": String(cols.value.md),
  "--ng-cols-lg": String(cols.value.lg),
}));
</script>

<template>
  <div class="ng" :style="styleVars">
    <div class="ng__grid" role="list">
      <button
          v-for="(img, i) in images"
          :key="img.src + i"
          class="ng__item"
          type="button"
          role="menuitem"
          @click="open(i)"
          :aria-label="`Open image ${i + 1} of ${images.length}`"
      >
        <SmartImg
            class="ng__img"
            :src="displaySrc(img)"
            :alt="img.alt || ''"
            :loading="lazy ? 'lazy' : 'eager'"
            decoding="async"
            :preset="nuxtImg.preset"
            :format="nuxtImg.format"
            :quality="nuxtImg.quality"
            :sizes="nuxtImg.sizes"
            :densities="nuxtImg.densities"
            :fit="nuxtImg.fit"
            :force-img="forceImg"
        />
      </button>
    </div>

    <NuxtLightbox
        :open="isOpen"
        :image="active"
        :index="index"
        :count="images.length"
        :nuxt-img="nuxtImg"
        :force-img="forceImg"
        @close="close"
        @next="next"
        @prev="prev"
    />
  </div>
</template>