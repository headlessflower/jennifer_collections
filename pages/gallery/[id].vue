<template>
  <section class="w-full min-h-screen bg-brandBg text-brandDark pt-16">
    <div class="mx-auto mt-12 max-w-7xl px-6 md:px-12 py-16">
      
      <!-- Fallback Error State -->
      <div v-if="!photo" class="text-center py-24 bg-white/30 border border-brandDark/5 rounded-[32px] max-w-2xl mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-brandDark/40 mx-auto mb-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008h-.008v-.008Z" />
        </svg>
        <h2 class="text-2xl font-serif font-bold text-brandDark mb-2">Photograph Not Found</h2>
        <p class="text-sm text-brandDark/70 mb-8">The photograph you are looking for does not exist or has been moved.</p>
        <NuxtLink 
          to="/gallery" 
          class="inline-flex items-center gap-2 bg-brandDark text-brandBg hover:bg-brandDark/90 transition px-6 py-3 rounded-full text-sm font-medium tracking-wide shadow-sm"
        >
          Return to Gallery
        </NuxtLink>
      </div>

      <!-- Main Detail View -->
      <div v-else class="space-y-16">
        
        <!-- Navigation Top Bar -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-brandDark/10 pb-6">
          <NuxtLink 
            to="/gallery" 
            class="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-75 transition-all text-brandDark underline underline-offset-4 decoration-brandYellow decoration-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Gallery
          </NuxtLink>

          <!-- Gallery Slider Controls (Previous / Next) -->
          <div class="flex items-center gap-3">
            <NuxtLink
              :to="`/gallery/${prevPhoto.id}`"
              class="inline-flex items-center justify-center size-10 rounded-full border border-brandDark/20 bg-white/40 hover:bg-white text-brandDark transition duration-300 shadow-sm"
              title="Previous Photo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </NuxtLink>
            <span class="text-xs font-bold text-brandDark/60 tracking-wider">
              {{ currentIndex + 1 }} of {{ totalPhotos }}
            </span>
            <NuxtLink
              :to="`/gallery/${nextPhoto.id}`"
              class="inline-flex items-center justify-center size-10 rounded-full border border-brandDark/20 bg-white/40 hover:bg-white text-brandDark transition duration-300 shadow-sm"
              title="Next Photo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- 2-Column Focus Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <!-- Image column (Spans 7 columns on desktop) -->
          <div class="lg:col-span-7 space-y-4">
            <div class="rounded-[32px] overflow-hidden border border-brandDark/15 shadow-md bg-neutral-200">
              <img 
                :src="photo.imageUrl" 
                :alt="photo.imageAlt"
                class="w-full h-auto max-h-[70vh] object-contain mx-auto"
              />
            </div>
            <p v-if="photo.photographer" class="text-xs text-brandDark/50 italic text-right px-4">
              Photo Credit: {{ photo.photographer }}
            </p>
          </div>

          <!-- Metadata panel (Spans 5 columns on desktop) -->
          <div class="lg:col-span-5 bg-white/50 border border-brandDark/10 rounded-[32px] p-8 space-y-8 shadow-sm">
            <div class="space-y-3">
              <NuxtLink
                :to="photo.projectUrl"
                class="text-xs font-bold tracking-widest text-brandDark/60 uppercase hover:underline underline-offset-4"
              >
                {{ photo.projectTitle }}
              </NuxtLink>
              <h1 class="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-brandDark leading-tight">
                {{ photo.title }}
              </h1>
            </div>

            <!-- Context highlights Grid -->
            <div class="grid grid-cols-3 gap-4 border-y border-brandDark/10 py-6 text-sm">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-brandDark/50 block">Year</span>
                <span class="font-semibold text-brandDark/85">{{ photo.year }}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-brandDark/50 block">Location</span>
                <span class="font-semibold text-brandDark/85">{{ photo.location }}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-brandDark/50 block">My Role</span>
                <span class="font-semibold text-brandDark/85">{{ photo.role }}</span>
              </div>
            </div>

            <!-- Description -->
            <div class="space-y-4 font-sans text-brandDark/85 leading-relaxed">
              <p class="text-base font-semibold">
                {{ photo.description }}
              </p>
              <p v-if="photo.details" class="text-sm text-brandDark/75">
                {{ photo.details }}
              </p>
            </div>

            <!-- Tags -->
            <div class="space-y-3 pt-2">
              <span class="text-xs font-bold tracking-wider text-brandDark/55 uppercase block">Skills / Areas</span>
              <div class="flex flex-wrap gap-1.5">
                <span 
                  v-for="tag in photo.tags" 
                  :key="tag"
                  class="text-xs bg-brandDark/5 text-brandDark border border-brandDark/10 px-3 py-1.5 rounded-full font-medium"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Link to Case Study -->
            <div class="pt-4 border-t border-brandDark/10">
              <NuxtLink
                :to="photo.projectUrl"
                class="w-full inline-flex items-center justify-center bg-brandDark text-brandBg hover:bg-brandDark/90 transition-all px-6 py-3.5 rounded-full font-medium text-sm tracking-wide shadow-sm hover:shadow-md"
              >
                View Full Project Case Study &rarr;
              </NuxtLink>
            </div>
          </div>

        </div>

        <!-- Related Exploring Section -->
        <div v-if="relatedPhotos.length > 0" class="border-t border-brandDark/10 pt-16">
          <header class="mb-8">
            <h2 class="text-2xl font-serif font-bold text-brandDark tracking-tight">
              Related Photographs
            </h2>
            <p class="text-sm text-brandDark/60 font-sans mt-1">Explore other photos sharing tags or project fields.</p>
          </header>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <NuxtLink
              v-for="related in relatedPhotos"
              :key="related.id"
              :to="`/gallery/${related.id}`"
              class="group bg-brandBg border border-brandDark/10 rounded-[24px] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div class="aspect-[4/3] w-full overflow-hidden bg-neutral-200 border-b border-brandDark/10">
                <img 
                  :src="related.imageUrl" 
                  :alt="related.imageAlt"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div class="space-y-1">
                  <span class="text-[10px] font-bold uppercase tracking-widest text-brandDark/50 block">
                    {{ related.projectTitle }}
                  </span>
                  <h3 class="text-base font-serif font-bold text-brandDark leading-snug group-hover:text-brandDark/90 transition-colors">
                    {{ related.title }}
                  </h3>
                </div>
                
                <span class="text-xs font-bold uppercase tracking-wider text-brandYellow group-hover:text-brandDark transition-colors inline-flex items-center gap-1">
                  Explore
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3 transform group-hover:translate-x-1 transition-transform">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import { photographs, getPhotoById, getRelatedPhotos } from "~/data/gallery";

const route = useRoute();
const photoId = computed(() => String(route.params.id || ""));

// Find current photograph
const photo = computed(() => getPhotoById(photoId.value));

// Page dynamic SEO meta
useHead({
  title: computed(() => photo.value ? `${photo.value.title} — Photo Gallery` : "Photograph Not Found"),
  meta: [
    {
      name: "description",
      content: computed(() => photo.value ? photo.value.description : "Jennifer Payan collections care and restoration practice photo details."),
    },
  ],
});

// Slider index and length
const totalPhotos = photographs.length;
const currentIndex = computed(() => photographs.findIndex(p => p.id === photoId.value));

// Next and previous links (circular list)
const prevPhoto = computed(() => {
  const idx = currentIndex.value;
  if (idx <= 0) return photographs[totalPhotos - 1];
  return photographs[idx - 1];
});

const nextPhoto = computed(() => {
  const idx = currentIndex.value;
  if (idx === -1 || idx >= totalPhotos - 1) return photographs[0];
  return photographs[idx + 1];
});

// Related items list
const relatedPhotos = computed(() => {
  if (!photo.value) return [];
  return getRelatedPhotos(photo.value, 4);
});
</script>

<style scoped>
/* Easing transition for cards */
article {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
