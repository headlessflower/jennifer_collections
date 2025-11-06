<template>
  <section class="w-full">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <header class="mb-10 text-center">
        <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight">
          Recent Projects
        </h2>
        <p class="mt-3 text-base/7 sm:text-lg/8 opacity-80">
          Conservation, archives, and public art highlights from Jennifer’s practice.
        </p>
      </header>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <article
            v-for="project in projects"
            :key="project.slug"
            class="group rounded-2xl border border-foreground/10 shadow-sm hover:shadow-md hover:border hover:border-burnt transition"
        >
          <NuxtLink :to="project.href" class="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/40">
            <!-- Image -->
            <div class="overflow-hidden rounded-2xl rounded-b-none">
              <img
                  :src="project.image"
                  :alt="project.imageAlt"
                  class="h-48 w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105 "
                  loading="lazy"
              />
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-semibold">{{ project.title }}</h3>
              <p class="mt-2 opacity-80">
                {{ project.description }}
              </p>

              <div class="mt-6 inline-flex items-center text-sm underline underline-offset-4 group-hover:opacity-80">
                View project
                <svg class="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
  }
]
</script>

<style scoped>
/* Keep hover/tap elevation subtle like Services */
article.group {
  transition: box-shadow 200ms ease, border-color 200ms ease;
}
</style>
