<template>
  <section class="w-full min-h-screen bg-brandBg text-brandDark pt-16">
    <div class="mx-auto mt-12 max-w-7xl px-6 md:px-12 py-16">

      <!-- Page Header -->
      <header class="text-center mb-12 space-y-4">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-brandDark">
          Photo Gallery
        </h1>
        <p class="text-lg text-brandDark/75 max-w-2xl mx-auto font-sans leading-relaxed">
          A visual record of collections care, registration, archives, and public art conservation.
        </p>
      </header>

      <!-- Tag Filters Bar -->
      <div class="mb-12">
        <div class="flex items-center justify-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            class="w-4 h-4 text-brandDark/60">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
          </svg>
          <span class="text-xs font-bold uppercase tracking-wider text-brandDark/60">Filter by Tag / Project</span>
        </div>

        <!-- Filter scroll container -->
        <div class="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto px-4">
          <button @click="activeTag = 'All'"
            class="text-xs px-4 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm border" :class="activeTag === 'All'
              ? 'bg-brandDark text-brandBg border-brandDark'
              : 'bg-white/50 text-brandDark border-brandDark/10 hover:bg-white hover:border-brandDark/25'">
            All Photos
          </button>

          <button v-for="tag in allTags" :key="tag" @click="activeTag = tag"
            class="text-xs px-4 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm border whitespace-nowrap"
            :class="activeTag === tag
              ? 'bg-brandDark text-brandBg border-brandDark'
              : 'bg-white/50 text-brandDark border-brandDark/10 hover:bg-white hover:border-brandDark/25'">
            {{ tag }}
          </button>
        </div>
      </div>

      <!-- Photo Accordion Grid -->
      <div v-if="rows.length > 0" class="space-y-6">
        <div v-for="(row, rowIndex) in rows" :key="rowIndex"
          class="flex flex-col md:flex-row gap-6 w-full md:h-[400px]">
          <NuxtLink v-for="photo in row" :key="photo.id" :to="`/gallery/${photo.id}`"
            class="flex-1 md:hover:flex-[2.2] h-[260px] md:h-full transition-all duration-500 ease-out relative group overflow-hidden rounded-[24px] border border-brandDark/10 shadow-sm hover:shadow-md cursor-pointer bg-neutral-200">
            <NuxtImg :src="photo.imageUrl" :alt="photo.imageAlt"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              format="webp"
              quality="80"
              sizes="sm:100vw md:50vw lg:400px" />

            <!-- Dark Gradient Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-brandDark/95 via-brandDark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
            </div>

            <!-- Card Content Overlay -->
            <div class="absolute inset-0 p-6 flex flex-col justify-end text-brandBg">

              <!-- Tag indicators (top left of card) -->
              <div class="absolute top-6 left-6 flex flex-wrap gap-1.5 max-w-[85%]">
                <span v-for="t in photo.tags.slice(0, 2)" :key="t"
                  class="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-brandBg px-2 py-0.5 rounded-full border border-white/10">
                  {{ t }}
                </span>
              </div>

              <!-- Metadata detail overlay (reveals/expands slightly on hover) -->
              <div
                class="space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span class="text-[10px] font-bold uppercase tracking-widest text-brandYellow/90 block">
                  {{ photo.projectTitle }}
                </span>

                <h2 class="text-xl md:text-2xl font-serif font-bold text-white tracking-tight leading-tight">
                  {{ photo.title }}
                </h2>

                <p
                  class="text-xs text-brandBg/75 font-sans line-clamp-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                  {{ photo.description }}
                </p>

                <!-- Action CTA -->
                <div
                  class="pt-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brandYellow">
                  <span>Explore Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                    stroke="currentColor" class="w-3 h-3 transform group-hover:translate-x-1 transition-transform">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>

            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20 bg-white/30 border border-brandDark/5 rounded-[32px]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-12 h-12 text-brandDark/40 mx-auto mb-4">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        <h3 class="text-xl font-serif font-bold text-brandDark mb-1">No photographs found</h3>
        <p class="text-sm text-brandDark/60">Try clearing your filters to see all photographs.</p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { photographs, getAllTags } from "~/data/gallery";

useHead({
  title: "Photo Gallery — Jennifer Payan",
  meta: [
    {
      name: "description",
      content: "Explore high-quality photographs and documentation detailing Jennifer Payan's collection management, archives, registration, and public art conservation work.",
    },
  ],
});

// Tags
const allTags = computed(() => getAllTags());
const activeTag = ref("All");

// Filtering
const filteredPhotographs = computed(() => {
  if (activeTag.value === "All") {
    return photographs;
  }
  return photographs.filter(photo => photo.tags.includes(activeTag.value));
});

// Dynamic accordion rows of 4 (desktop)
const itemsPerRow = 4;
const rows = computed(() => {
  const result = [];
  const items = filteredPhotographs.value;
  for (let i = 0; i < items.length; i += itemsPerRow) {
    result.push(items.slice(i, i + itemsPerRow));
  }
  return result;
});
</script>

<style scoped>
/* Ensure smooth transitions for flexible growing */
a {
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}
</style>
