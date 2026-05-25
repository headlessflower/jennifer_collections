<template>
  <div class="w-full pt-16">
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brandDark tracking-tight leading-tight">
            Archival Research &amp; Cataloging
          </h1>
          <p class="text-lg md:text-xl text-brandDark/70 leading-relaxed font-sans">
            Standards-aligned description and discovery to make materials findable and usable.
          </p>
        </div>
        <div class="rounded-[32px] border border-brandDark/15 overflow-hidden shadow-md">
          <img
            src="/ellsworth-2.png"
            alt="Reading room with archival boxes"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Service pillars (itemized) -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-brandDark/10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="space-y-4">
          <h2 class="text-2xl font-serif font-bold text-brandDark tracking-tight">What Jennifer Delivers</h2>
          <ul class="space-y-3 text-sm sm:text-base text-brandDark/85 font-sans">
            <li class="flex items-start gap-2">
              <span class="mt-2 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
              <span>Standards-aligned description to support discovery, access, and long-term stewardship.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-2 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
              <span>Clear, reproducible workflows that reduce ambiguity between teams.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-2 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
              <span>Collaborative, detail-driven documentation that withstands audits and time.</span>
            </li>
          </ul>
        </div>
        <div class="space-y-4">
          <h2 class="text-2xl font-serif font-bold text-brandDark tracking-tight">Core Outcomes</h2>
          <ul class="space-y-3 text-sm sm:text-base text-brandDark/85 font-sans">
            <li class="flex items-start gap-2">
              <span class="mt-2 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
              <span>Consistent descriptive metadata and authority control across systems.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-2 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
              <span>Streamlined research handoffs (curatorial, registration, education).</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-2 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
              <span>Rights/citation clarity to minimize legal and ethical risk.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Detailed services (itemized pastel grid) -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Pillar 1: Metadata (Yellow) -->
        <div class="bg-brandYellow rounded-[32px] border border-brandDark/15 p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <h3 class="font-serif font-bold text-2xl text-brandDark mb-4 pb-2 border-b border-brandDark/10">Descriptive Metadata</h3>
            <ul class="space-y-3 text-sm text-brandDark/85 font-sans">
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/65 flex-shrink-0"></span>
                <span>DACS-aligned description for archival collections and components.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/65 flex-shrink-0"></span>
                <span>Authority control with AAT and Library of Congress vocabularies.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/65 flex-shrink-0"></span>
                <span>Controlled fields, notes, and relationships for reliable retrieval.</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Pillar 2: Systems (Blue) -->
        <div class="bg-brandBlue rounded-[32px] border border-brandDark/15 p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <h3 class="font-serif font-bold text-2xl text-brandDark mb-4 pb-2 border-b border-brandDark/10">Cataloging Systems</h3>
            <ul class="space-y-3 text-sm text-brandDark/85 font-sans">
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/65 flex-shrink-0"></span>
                <span>Axiell Collections: object/archival record creation and updates.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/65 flex-shrink-0"></span>
                <span>CONTENTdm: digital object metadata and discoverability prep.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/65 flex-shrink-0"></span>
                <span>ArchivesSpace: component-level description and hierarchy control.</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Pillar 3: Research (Purple) -->
        <div class="bg-brandPurple rounded-[32px] border border-brandDark/15 p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <h3 class="font-serif font-bold text-2xl text-brandDark mb-4 pb-2 border-b border-brandDark/10">Research &amp; Use</h3>
            <ul class="space-y-3 text-sm text-brandDark/85 font-sans">
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/65 flex-shrink-0"></span>
                <span>Research dossiers for curatorial development and loans.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/65 flex-shrink-0"></span>
                <span>Exhibition checklists with locations, lender data, and notes.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/65 flex-shrink-0"></span>
                <span>Rights, citation, and permissions guidance for safe reuse.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    <!-- Case Study (Green) -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div class="bg-brandGreen border border-brandDark/15 rounded-[32px] p-8 md:p-12 shadow-sm space-y-6">
        <div class="space-y-2">
          <span class="text-xs font-bold tracking-wider text-brandDark/60 uppercase">Highlights</span>
          <h2 class="text-2xl md:text-3xl font-serif font-bold text-brandDark">Case Study: Oscar Trophies—Cataloging &amp; Condition Reporting</h2>
        </div>
        <p class="text-base text-brandDark/85 font-sans leading-relaxed">
          At a major film museum, Jennifer supported the cataloging and condition reporting of a set of Oscar® statuettes.
          Using an industry-standard collections management system (<span class="font-bold">TMS</span>), she worked in close
          coordination with Registration to unify records, document condition, and prepare the objects for exhibition.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-brandDark/10">
          <div class="space-y-3">
            <h3 class="font-serif font-bold text-xl text-brandDark">Approach</h3>
            <ul class="space-y-2.5 text-sm text-brandDark/85 font-sans">
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Verified object identifiers; linked creators, events, and provenance in TMS.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Standardized titles, materials, and inscriptions; added award categories.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Performed visual examination and drafted condition notes with consistent terms.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Attached high-quality reference images and location data for mounts.</span>
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="font-serif font-bold text-xl text-brandDark">Results</h3>
            <ul class="space-y-2.5 text-sm text-brandDark/85 font-sans">
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Single, authoritative record set supporting exhibition and research requests.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Faster object retrieval and clearer accountability for movements.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Exhibit-ready condition documentation and reference images.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                <span>Reduced duplication by aligning controlled vocabularies across teams.</span>
              </li>
            </ul>
          </div>
        </div>
        <p class="text-xs text-brandDark/50 pt-2">
          Note: Institutional details are summarized to respect internal policies and confidentiality.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 pb-20">
      <div class="bg-brandBg border border-brandDark/10 rounded-[32px] p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-sm">
        <h2 class="text-3xl font-serif font-bold text-brandDark tracking-tight">Ready to elevate description and discovery?</h2>
        <p class="text-base text-brandDark/70 max-w-xl mx-auto font-sans leading-relaxed">
          Partner with Jennifer to make your materials more findable, citable, and usable.
        </p>
        <div class="pt-2">
          <NuxtLink to="/contact" class="inline-block bg-brandDark text-brandBg hover:bg-brandDark/90 transition px-8 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-sm">
            Start a Request
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
    title: "Archival Research & Cataloging — Jennifer Payan",
    meta: [
        {
            name: "description",
            content: "Standards-aligned metadata description, archival research, cataloging services in Axiell Collections/CONTENTdm/ArchivesSpace, and research dossiers.",
        },
    ],
});
</script>

<style scoped>
</style>
