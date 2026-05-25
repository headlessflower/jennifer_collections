<template>
  <section class="w-full py-16 md:py-24" :class="{ 'border-t border-brandDark/10': showBorder }">
    <div class="mx-auto max-w-7xl px-6 md:px-12">
      <header class="mb-12 text-center space-y-4">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-brandDark tracking-tight">
          Recent Projects
        </h2>
        <p class="mt-3 text-lg text-brandDark/70 max-w-2xl mx-auto font-sans">
          Conservation, archives, and public art highlights from Jennifer’s practice.
        </p>
      </header>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <article
            v-for="project in projects"
            :key="project.slug"
            class="group bg-brandBg rounded-[28px] border border-brandDark/15 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
        >
          <NuxtLink :to="project.href" class="block h-full flex flex-col justify-between focus:outline-none">
            <div>
              <!-- Image -->
              <div class="overflow-hidden h-52 w-full border-b border-brandDark/10 bg-neutral-200">
                <img
                    :src="project.image"
                    :alt="project.imageAlt"
                    class="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                />
              </div>

              <!-- Content -->
              <div class="p-6 space-y-2">
                <h3 class="text-xl font-serif font-bold text-brandDark leading-snug group-hover:text-brandDark/90 transition-colors">
                  {{ project.title }}
                </h3>
                <p class="text-sm text-brandDark/85 font-sans leading-relaxed">
                  {{ project.description }}
                </p>
              </div>
            </div>

            <!-- Action Link -->
            <div class="p-6 pt-0 mt-auto">
              <div class="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brandDark underline underline-offset-4 decoration-brandYellow decoration-2 group-hover:text-brandDark/70 transition">
                View project
                <svg class="ml-2 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a.997.997 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  showBorder: {
    type: Boolean,
    default: true
  }
})

type ProjectCard = {
  slug: string
  title: string
  description: string
  href: string
  image: string
  imageAlt: string
}

// JSON-style project data (edit copy/links/images later)
const projects: ProjectCard[] = [
  {
    slug: "inner-resources-mural",
    title: "“Inner Resources” Mural (City Terrace Park)",
    description:
        "Apprenticeship supporting historical research, condition assessment, and on-site conservation in East Los Angeles.",
    href: "/inner-resources-mural",
    image: "/inner-resources.png",
    imageAlt: "Detail of a public mural surface and conservation tools."
  },
  {
    slug: "ellsworth-kelly-foundation-archivist",
    title: "Ellsworth Kelly Foundation Archivist (Upstate NY)",
    description:
        "Library & archives internship: processing, digitization, metadata, and support for an artist monograph library.",
    href: "/ellsworth-kelly-foundation-archivist",
    image: "/ellsworth-5.png",
    imageAlt: "Archival shelves with boxes and monographs."
  },
  {
    slug: "dominguez-sculpture-restoration",
    title: "Dominguez Sculpture Restoration (Whittier Narrows)",
    description:
        "Public art conservation assisting with documentation, surface stabilization, and community-engaged preservation.",
    href: "/dominguez-sculpture-restoration",
    image: "/dominguez-thumbnail.png",
    imageAlt: "Outdoor sculpture under restoration with scaffolding."
  },
  {
    slug: "blessing-animals-mural-olvera-street",
    title: "Blessing of the Animals Mural - Olvera St.",
    description:
        "Public art conservation assisting with mural clean up and restoration.",
    href: "/blessing-animals-mural-olvera-street",
    image: "/jennifer_olvera-street.JPG",
    imageAlt: "Outdoor sculpture under restoration with scaffolding."
  },
]
</script>

<style scoped>
</style>
