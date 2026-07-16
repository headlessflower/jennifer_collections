<template>
  <section class="w-full py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brandDark/10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

      <!-- Left Column: Sticky Title -->
      <div class="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
        <span class="text-xs font-bold tracking-wider text-brandDark/60 uppercase">Our Process</span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brandDark tracking-tight leading-tight">
          I've perfected collections care and offer bespoke guidance through the preservation lifecycle.
        </h2>
        <p class="text-base text-brandDark/70 max-w-md font-sans">
          From initial audit to hands-on preservation and digital access, every stage of your collection's journey is
          carefully planned and executed.
        </p>
        <div class="pt-2">
          <NuxtLink to="/contact"
            class="inline-block bg-brandDark text-brandBg hover:bg-brandDark/90 transition-all px-8 py-3.5 rounded-full font-medium text-sm tracking-wide shadow-sm hover:shadow-md">
            Get Started
          </NuxtLink>
        </div>
      </div>

      <!-- Right Column: Scrolling Stacked Cards -->
      <div class="lg:col-span-7 space-y-16 lg:pb-32">

        <!-- Card 1: Discovery Phase (Green) -->
        <div
          class="sticky top-[120px] bg-brandGreen border border-brandDark/15 rounded-[32px] p-8 sm:p-10 shadow-lg min-h-[320px] flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
          <div>
            <span
              class="inline-block border border-brandDark/25 text-brandDark/70 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full w-fit bg-brandBg/20">
              Discovery Phase
            </span>
            <h3 class="text-2xl sm:text-3xl font-serif font-bold text-brandDark mt-12 mb-4">
              Research &amp; Evaluate
            </h3>
            <p class="text-sm sm:text-base text-brandDark/85 font-sans leading-relaxed">
              Assess the present nature of your archival infrastructureResearch the broader record-keeping implications
              of your industryIdentify and analyze the gaps in your archival strategy
            </p>
          </div>
          <div class="mt-8 text-xs font-bold text-brandDark/50 tracking-widest uppercase">
            01
          </div>
        </div>

        <!-- Card 2: Planning Phase (Yellow) -->
        <div
          class="sticky top-[172px] bg-brandYellow border border-brandDark/15 rounded-[32px] p-8 sm:p-10 shadow-lg min-h-[320px] flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
          <div>
            <span
              class="inline-block border border-brandDark/25 text-brandDark/70 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full w-fit bg-brandBg/20">
              Planning Phase
            </span>
            <h3 class="text-2xl sm:text-3xl font-serif font-bold text-brandDark mt-12 mb-4">
              Strategize
            </h3>
            <p class="text-sm sm:text-base text-brandDark/85 font-sans leading-relaxed">
              Establish goals and determine goals and address the gaps identified during the records evaluation.
              Communicate timeline for implementation and delivery.
            </p>
          </div>
          <div class="mt-8 text-xs font-bold text-brandDark/50 tracking-widest uppercase">
            02
          </div>
        </div>

        <!-- Card 3: Implementation Phase (Blue) -->
        <div
          class="sticky top-[224px] bg-brandBlue border border-brandDark/15 rounded-[32px] p-8 sm:p-10 shadow-lg min-h-[320px] flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
          <div>
            <span
              class="inline-block border border-brandDark/25 text-brandDark/70 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full w-fit bg-brandBg/20">
              Ongoing Care Phase
            </span>
            <h3 class="text-2xl sm:text-3xl font-serif font-bold text-brandDark mt-12 mb-4">
              Project Management
            </h3>
            <p class="text-sm sm:text-base text-brandDark/85 font-sans leading-relaxed">
              Collaborate closely with your team to ensure project goals align with business goals. Provide consistent
              progress updates. Facilitate any outsourced vendor coordination.
            </p>
          </div>
          <div class="mt-8 text-xs font-bold text-brandDark/50 tracking-widest uppercase">
            03
          </div>
        </div>

        <!-- Card 4: Planning Phase (Yellow) -->
        <div
          class="sticky top-[172px] bg-brandYellow border border-brandDark/15 rounded-[32px] p-8 sm:p-10 shadow-lg min-h-[320px] flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
          <div>
            <span
              class="inline-block border border-brandDark/25 text-brandDark/70 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full w-fit bg-brandBg/20">
              Ongoing Care Phase
            </span>
            <h3 class="text-2xl sm:text-3xl font-serif font-bold text-brandDark mt-12 mb-4">
              Records Management
            </h3>
            <p class="text-sm sm:text-base text-brandDark/85 font-sans leading-relaxed">
              Develop comprehensive inventory of existing recordsCatalog archival assets. Evaluate efficacy of digital
              and physical storage conditions.

            </p>
          </div>
          <div class="mt-8 text-xs font-bold text-brandDark/50 tracking-widest uppercase">
            04
          </div>
        </div>


      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Smooth box-shadow transitions for cards */
.sticky {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
</style>
