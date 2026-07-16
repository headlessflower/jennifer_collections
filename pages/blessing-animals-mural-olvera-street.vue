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
          <NuxtImg
              :src="project.hero.src"
              :alt="project.hero.alt"
              class="h-72 sm:h-96 w-full object-cover"
              format="webp"
              quality="80"
              sizes="sm:100vw md:896px"
              loading="eager"
              fetchpriority="high"
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
          The Blessing of the Animals mural and mosaic created by Leo Politi from 1974–1978 are located in front of the Biscailuz building in the El Pueblo Historic Monument. The mural is acrylic executed on plaster and wood substrates. The mural was last treated by Zebala and Partners in 2015. Since the last treatment new damage has occurred, particularly along the base of the wall, where paint is blistering and flaking, most likely due to water splash-back from sidewalk cleaning. Some old cracks and losses are visible. The mural has accumulated surface grime, and the paint is beginning to lose its gloss.
        </p>
      </article>

      <!-- Image placeholder -->
      <figure class="mt-12 rounded-2xl border border-foreground/10 bg-foreground/5
         w-full max-w-5xl mx-auto overflow-hidden">
        <NuxtImg class="w-full h-auto object-contain" src="/images/blessings_animals/olvera-st-3.JPEG" alt="jennifer payan standing in front of the Blessing of the animals mural" format="webp" quality="80" sizes="sm:100vw md:800px" loading="lazy" />
      </figure>

      <!-- Section 1 -->
      <article class="prose prose-neutral dark:prose-invert max-w-none mt-8">
        <h2>Condition of Mural & Mosaic</h2>
        <p>
          The Politi mural was damaged by graffiti and foodstuff in 2022. The maintenance staff used acetone solvent to remove graffiti from the goat figure and removed the foodstuff. The mural and mosaic were examined by Zebala & Partners on December 2, 2022.
        </p>
        <p>
          The examination found that the mural is in fair to good condition and the mosaic is in poor condition. Sections of the mural and the mosaic are exposed to direct sunlight streaming in through the arched porch. Sun exposure, salt migration from water, and vandalism have led to the following conditions:
        </p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
          <li>Small losses in the paint layer.</li>
          <li>Flaking and blistering paint in multiple locations.</li>
          <li>Graffiti damage on the goat with a drip of red paint remaining.</li>
          <li>Suspected area of overpaint that does not match the surrounding paint layer.</li>
          <li>Foodstuff, drips, and accretions on the surface of the paint layer.</li>
          <li>A heavy layer of dirt and grime on the surface, overall.</li>
        </ul>
      </article>

      <!-- Image placeholder -->
      <figure class="mt-12 rounded-2xl border border-foreground/10 bg-foreground/5
         w-full max-w-5xl mx-auto overflow-hidden">
        <span class=" text-sm"><NuxtImg class="w-full h-auto object-contain" src="/images/blessings_animals/ovlvera-st-2.JPEG" alt="" format="webp" quality="80" sizes="sm:100vw md:800px" loading="lazy" /></span>
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
      <figure class="mt-12 rounded-2xl border border-foreground/10 bg-foreground/5
         w-full max-w-5xl mx-auto overflow-hidden">
        <span class="text-sm"><NuxtImg class="w-full h-auto object-contain" src="/images/blessings_animals/befora-after-olvera-st.png" alt="Before and after of the book section of the mural assigned to Jennifer" format="webp" quality="80" sizes="sm:100vw md:800px" loading="lazy" /></span>
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
          <p class="mt-1 text-sm">Conservationist</p>
        </div>
        <div class="rounded-2xl border border-foreground/10 p-4">
          <p class="text-xs uppercase tracking-wide opacity-60">Location</p>
          <p class="mt-1 text-sm">Los Angeles, CA / Olvera St.</p>
        </div>
        <div class="rounded-2xl border border-foreground/10 p-4">
          <p class="text-xs uppercase tracking-wide opacity-60">Year</p>
          <p class="mt-1 text-sm"> 2025 </p>
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
  title: 'Blessing of the Animals Mural',
  shortDescription: 'Conservation and condition assessment of the Leo Politi mural and mosaic (1974–1978) located at El Pueblo Historic Monument, Olvera Street.',
  hero: {
    src: '/images/blessings_animals/olvera-st-1.png',
    alt: 'Blessing of the Animals mural and mosaic by Leo Politi'
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
