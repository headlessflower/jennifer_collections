<template>
  <section class="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">

    <!-- Inline Avatar Heading (from reference images) -->
    <div class="mb-16 text-center">
      <h2 class="text-3xl md:text-5xl font-serif text-brandDark leading-snug max-w-4xl mx-auto font-normal">
        Hey there! I'm
        <span class="inline-flex items-center align-middle mx-1">
          <NuxtImg src="/images/headshot_2.webp" alt="Jennifer Payan"
            class="w-12 h-12 md:w-16 md:h-16 rounded-full border border-brandDark/15 object-cover shadow-sm" width="64"
            height="64" format="webp" loading="lazy" />
        </span>
        Jennifer, a passionate collections management and preservation specialist who helps cultural institutions and
        private clients protect their heritage.
      </h2>
    </div>

    <!-- Main Bio Block -->
    <div class="bg-brandBg border border-brandDark/10 rounded-[32px] p-8 md:p-12 shadow-sm">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <!-- Text & Stats Column -->
        <div class="lg:col-span-7 space-y-8">
          <div class="space-y-4">
            <h3 class="text-sm font-semibold tracking-wider text-brandDark/60 uppercase">Biography</h3>
            <p class="text-base md:text-lg text-brandDark/85 leading-relaxed font-sans">
              I am a freelance archival consultant and creative professional based in Los Angeles. With a Master of
              Library and Information Science from San Jose State University, I have honed skills in metadata standards,
              cataloging, and digital preservation. My background includes roles at the Academy Museum of Motion
              Pictures as an Assistant Registrar and various archival internships, contributing to my expertise in
              cultural heritage and community-driven projects.
            </p>
            <p class="text-base md:text-lg text-brandDark/85 leading-relaxed font-sans">
              Driven by a passion for preserving marginalized histories and improving access to cultural assets, I
              strive to combine rigorous archival methodology with innovative digital solutions. I am dedicated to
              fostering collaboration between curators, conservators, and educators to deliver impactful exhibitions and
              resources.
            </p>
          </div>

          <!-- Statistics Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-brandDark/10">
            <div class="space-y-1">
              <h4 class="text-3xl font-serif font-bold text-brandDark">10+</h4>
              <p class="text-xs font-semibold text-brandDark/60 tracking-wider uppercase">Years Exp</p>
            </div>
            <div class="space-y-1">
              <h4 class="text-3xl font-serif font-bold text-brandDark">5+</h4>
              <p class="text-xs font-semibold text-brandDark/60 tracking-wider uppercase">Institutions</p>
            </div>
            <div class="space-y-1">
              <h4 class="text-3xl font-serif font-bold text-brandDark">10+</h4>
              <p class="text-xs font-semibold text-brandDark/60 tracking-wider uppercase">Projects</p>
            </div>
          </div>

          <!-- Download CV Button -->
          <div class="pt-2">
            <a href="/jenniferpayanresume2026.pdf" target="_blank"
              class="inline-block bg-brandDark text-brandBg hover:bg-brandDark/90 transition-all px-8 py-3.5 rounded-full font-medium text-sm tracking-wide shadow-sm hover:shadow-md"
              download="">
              Download CV &rarr;
            </a>
          </div>
        </div>

        <!-- Image Column -->
        <div class="lg:col-span-5 flex justify-center">
          <div
            class="w-full max-w-md rounded-[24px] overflow-hidden border border-brandDark/10 shadow-md transition-shadow hover:shadow-lg">
            <NuxtImg src="/images/ellsworth/ellsworth-3.png" alt="Jennifer Payan Working"
              class="w-full h-auto object-cover" format="webp" quality="80" sizes="sm:100vw md:400px" loading="lazy" />
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
