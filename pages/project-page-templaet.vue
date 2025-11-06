<!-- File: pages/projects/[slug].vue -->
<template>
  <section class="w-full">
    <!-- Hero -->
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <nav class="mb-6 text-sm opacity-80">
        <NuxtLink to="/projects" class="underline underline-offset-4 hover:opacity-80">← Back to Projects</NuxtLink>
      </nav>

      <div class="rounded-2xl overflow-hidden border border-foreground/10 shadow-sm">
        <div class="relative">
          <img
              :src="project.hero.src"
              :alt="project.hero.alt"
              class="h-72 sm:h-96 w-full object-cover"
          />
          <!-- Optional overlay for readability -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0"></div>
        </div>

        <header class="p-6 sm:p-8">
          <h1 class="text-3xl sm:text-4xl font-semibold tracking-tight">
            {{ project.title }}
          </h1>
          <p class="mt-3 text-base/7 sm:text-lg/8 opacity-80">
            {{ project.shortDescription }}
          </p>
        </header>
      </div>
    </div>

    <!-- Body -->
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16">
      <!-- Intro / Overview -->
      <article class="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Overview</h2>
        <p>
          [Placeholder] Write a concise overview of the project scope, goals, partners, and your role.
          Mention location, dates, and any relevant context that frames the work.
        </p>
      </article>

      <!-- Image placeholder -->
      <figure class="mt-8 rounded-2xl border border-foreground/10 bg-foreground/5 h-64 sm:h-80 w-full overflow-hidden flex items-center justify-center">
        <span class="opacity-60 text-sm">[ Replace with project image ]</span>
      </figure>

      <!-- Section 1 -->
      <article class="prose prose-neutral dark:prose-invert max-w-none mt-8">
        <h2>Research & Preparation</h2>
        <p>
          [Placeholder] Describe preliminary research, assessment, and planning. Include methods,
          stakeholders, and any standards followed (e.g., DACS, NAGPRA, AIC guidelines).
        </p>
        <p>
          [Placeholder] Note tools, materials, and workflows used. Capture challenges or constraints
          and how you addressed them.
        </p>
      </article>

      <!-- Image placeholder -->
      <figure class="mt-8 rounded-2xl border border-foreground/10 bg-foreground/5 h-64 sm:h-80 w-full overflow-hidden flex items-center justify-center">
        <span class="opacity-60 text-sm">[ Replace with process image / in-situ photo ]</span>
      </figure>

      <!-- Section 2 -->
      <article class="prose prose-neutral dark:prose-invert max-w-none mt-8">
        <h2>Execution & Process</h2>
        <p>
          [Placeholder] Detail step-by-step work: handling, stabilization, cataloging, digitization,
          conservation tasks, documentation, metadata, or public engagement.
        </p>
        <p>
          [Placeholder] Include measurable outcomes (items processed, treatments completed, metadata fields added,
          storage upgrades, etc.).
        </p>
      </article>

      <!-- Image placeholder -->
      <figure class="mt-8 rounded-2xl border border-foreground/10 bg-foreground/5 h-64 sm:h-80 w-full overflow-hidden flex items-center justify-center">
        <span class="opacity-60 text-sm">[ Replace with result image / before-after pair ]</span>
      </figure>

      <!-- Section 3 -->
      <article class="prose prose-neutral dark:prose-invert max-w-none mt-8">
        <h2>Impact & Reflection</h2>
        <p>
          [Placeholder] Summarize impact: improved access, preservation outcomes, community benefits,
          or exhibition/readiness. Reflect on lessons learned and future recommendations.
        </p>
      </article>

      <!-- Meta footer -->
      <div class="mt-10 grid gap-4 sm:grid-cols-3">
        <div class="rounded-2xl border border-foreground/10 p-4">
          <p class="text-xs uppercase tracking-wide opacity-60">Role</p>
          <p class="mt-1 text-sm">[ Placeholder Role ]</p>
        </div>
        <div class="rounded-2xl border border-foreground/10 p-4">
          <p class="text-xs uppercase tracking-wide opacity-60">Location</p>
          <p class="mt-1 text-sm">[ City / Site ]</p>
        </div>
        <div class="rounded-2xl border border-foreground/10 p-4">
          <p class="text-xs uppercase tracking-wide opacity-60">Year</p>
          <p class="mt-1 text-sm">[ YYYY–YYYY ]</p>
        </div>
      </div>

      <div class="mt-10">
        <NuxtLink
            to="/projects"
            class="inline-flex items-center justify-center border border-burnt hover:bg-burnt rounded-2xl px-5 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition"
        >
          Back to all projects
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

type Project = {
  slug: string
  title: string
  shortDescription: string
  hero: { src: string; alt: string }
}

// Mock data (replace with real data/CMS fetch)
const defaults: Record<string, Project> = {
  'inner-resources': {
    slug: 'inner-resources',
    title: '“Inner Resources” Mural Conservation',
    shortDescription:
        'Conservation apprenticeship supporting research, assessment, and on-site treatment at City Terrace Park in East Los Angeles.',
    hero: {
      src: 'https://images.unsplash.com/photo-1520435323-4f1e9a8a1c78?q=80&w=2000&auto=format&fit=crop',
      alt: 'Large public mural with conservation tools nearby'
    }
  },
  'ellsworth-kelly-foundation-archivist': {
    slug: 'ellsworth-kelly-foundation-archivist',
    title: 'Ellsworth Kelly Foundation Archivist (Upstate NY)',
    shortDescription:
        'Library & archives internship focused on processing, digitization, metadata creation, and monograph library support.',
    hero: {
      src: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=2000&auto=format&fit=crop',
      alt: 'Archival stacks and artist monographs on shelving'
    }
  },
  'dominguez-sculpture-restoration': {
    slug: 'dominguez-sculpture-restoration',
    title: 'Dominguez Sculpture Restoration (Whittier Narrows)',
    shortDescription:
        'Public art conservation assisting with documentation, surface stabilization, and community-engaged preservation.',
    hero: {
      src: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2000&auto=format&fit=crop',
      alt: 'Outdoor sculpture under restoration with scaffolding'
    }
  }
}

const route = useRoute()
const slug = String(route.params.slug || '')
const project = defaults[slug] ?? {
  slug,
  title: '[ Project Title ]',
  shortDescription: '[ Short description of the project. ]',
  hero: {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop',
    alt: 'Replace with project hero image'
  }
}
</script>

<style scoped>
/* Keep subtle elevation consistent with Services */
figure,
.rounded-2xl {
  transition: box-shadow 200ms ease, border-color 200ms ease;
}
</style>
