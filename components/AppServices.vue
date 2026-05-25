<template>
  <section class="w-full py-16 md:py-24">
    <!-- Header -->
    <div class="mx-auto max-w-7xl px-6 md:px-12">
      <header class="mb-12 text-center space-y-4">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-brandDark tracking-tight">
          Professional Services
        </h2>
        <p class="mt-3 text-lg text-brandDark/70 max-w-2xl mx-auto font-sans">
          Clear, reliable support across collections management, archival research, and digital preservation.
        </p>
      </header>

      <!-- Quick CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <NuxtLink
            to="/services"
            class="inline-flex items-center justify-center bg-brandDark text-brandBg hover:bg-brandDark/90 transition-all px-6 py-3 rounded-full text-sm font-medium tracking-wide shadow-sm"
        >
          Explore All Services
        </NuxtLink>
        <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center border border-brandDark/20 text-brandDark hover:bg-brandDark/5 transition-all px-6 py-3 rounded-full text-sm font-medium tracking-wide"
        >
          Request a Quote
        </NuxtLink>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Card 1: Collections Management (Yellow) -->
        <article
            class="group bg-brandYellow rounded-[32px] border border-brandDark/15 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[460px]">
          <div>
            <!-- Icon -->
            <div class="mb-6 p-1 text-brandDark">
              <svg class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            
            <h3 class="text-2xl font-serif font-bold text-brandDark mb-3">Collections Management</h3>
            <p class="text-sm text-brandDark/80 leading-relaxed font-sans mb-6">
              Maintain accurate records and preserve materials with clean cataloging systems and preventive care.
            </p>
            <ul class="space-y-3 text-sm text-brandDark/85 font-sans">
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Accessioning, barcoding, and rehousing</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Database support: ArchivesSpace, Mimsy XG, TMS</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Object handling, tracking, and location control</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Condition reporting &amp; IPM coordination</span>
              </li>
            </ul>
          </div>
          
          <div class="mt-8 pt-4 border-t border-brandDark/10 flex gap-4">
            <NuxtLink to="/collection-management" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
              Details
            </NuxtLink>
            <NuxtLink to="/contact" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
              Book now
            </NuxtLink>
          </div>
        </article>

        <!-- Card 2: Archival Research & Cataloging (Blue) -->
        <article
            class="group bg-brandBlue rounded-[32px] border border-brandDark/15 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[460px]">
          <div>
            <!-- Icon -->
            <div class="mb-6 p-1 text-brandDark">
              <svg class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            
            <h3 class="text-2xl font-serif font-bold text-brandDark mb-3">Archival Research &amp; Cataloging</h3>
            <p class="text-sm text-brandDark/80 leading-relaxed font-sans mb-6">
              Create usable, standards‑aligned description and findability for your cultural assets.
            </p>
            <ul class="space-y-3 text-sm text-brandDark/85 font-sans">
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Descriptive metadata (DACS, LoC, AAT)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Catalog records in Axiell, CONTENTdm, ArchivesSpace</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Research dossiers &amp; exhibition checklists</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Rights, permissions, and citation guidance</span>
              </li>
            </ul>
          </div>
          
          <div class="mt-8 pt-4 border-t border-brandDark/10 flex gap-4">
            <NuxtLink to="/research-cataloging" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
              Details
            </NuxtLink>
            <NuxtLink to="/contact" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
              Start a request
            </NuxtLink>
          </div>
        </article>

        <!-- Card 3: Digital Preservation (Purple) -->
        <article
            class="group bg-brandPurple rounded-[32px] border border-brandDark/15 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[460px]">
          <div>
            <!-- Icon -->
            <div class="mb-6 p-1 text-brandDark">
              <svg class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            
            <h3 class="text-2xl font-serif font-bold text-brandDark mb-3">Digital Preservation</h3>
            <p class="text-sm text-brandDark/80 leading-relaxed font-sans mb-6">
              Stabilize born‑digital &amp; digitized assets with practical workflows and detailed documentation.
            </p>
            <ul class="space-y-3 text-sm text-brandDark/85 font-sans">
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Digitization planning &amp; requests intake</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>File‑naming, inventorying, and fixity checks</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Preservation copies, backups, and storage tiers</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Basic conservation tasks incl. pest mitigation</span>
              </li>
            </ul>
          </div>
          
          <div class="mt-8 pt-4 border-t border-brandDark/10 flex gap-4">
            <NuxtLink to="/digital-preservation" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
              Details
            </NuxtLink>
            <NuxtLink to="/contact" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
              Consultation
            </NuxtLink>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
