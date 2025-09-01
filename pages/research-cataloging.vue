
<template>
  <div class="bg-white text-gray-900 mt-10">
    <!-- Hero (one image only) -->
    <section class="max-w-6xl mx-auto px-6 pt-14 pb-10">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 class="text-4xl font-bold mb-4">Archival Research & Cataloging</h1>
          <p class="text-lg text-gray-700">
            Standards-aligned description and discovery to make materials findable and usable.
          </p>
        </div>
        <img
          src="/ellsworth-2.png"
          alt="Reading room with archival boxes"
          class="w-full rounded-2xl shadow-lg"
        />
      </div>
    </section>

    <!-- Service pillars (itemized) -->
    <section class="max-w-6xl mx-auto px-6 py-10 border-t border-gray-100">
      <div class="grid md:grid-cols-2 gap-10">
        <div>
          <h2 class="text-2xl font-semibold mb-4">What Jennifer Delivers</h2>
          <ul class="space-y-3 list-disc pl-5 text-gray-800">
            <li>Standards-aligned description to support discovery, access, and long-term stewardship.</li>
            <li>Clear, reproducible workflows that reduce ambiguity between teams.</li>
            <li>Collaborative, detail-driven documentation that withstands audits and time.</li>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4">Core Outcomes</h2>
          <ul class="space-y-3 list-disc pl-5 text-gray-800">
            <li>Consistent descriptive metadata and authority control across systems.</li>
            <li>Streamlined research handoffs (curatorial, registration, education).</li>
            <li>Rights/citation clarity to minimize legal and ethical risk.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Detailed services (itemized) -->
    <section class="max-w-6xl mx-auto px-6 py-10 bg-gray-50 rounded-2xl">
      <div class="grid lg:grid-cols-3 gap-10">
        <div class="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-burnt hover:shadow-lg duration-150">
          <h3 class="font-semibold text-xl mb-3 border-b border-burnt pb-3 mb-4">Descriptive Metadata</h3>
          <ul class="list-disc pl-5 space-y-2 text-gray-800 ">
            <li>DACS-aligned description for archival collections and components.</li>
            <li>Authority control with AAT and Library of Congress vocabularies.</li>
            <li>Controlled fields, notes, and relationships for reliable retrieval.</li>
          </ul>
        </div>

        <div class="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-burnt hover:shadow-lg duration-150">
          <h3 class="font-semibold text-xl mb-3 border-b border-burnt pb-3 mb-4">Cataloging Systems</h3>
          <ul class="list-disc pl-5 space-y-2 text-gray-800">
            <li>Axiell Collections: object/archival record creation and updates.</li>
            <li>CONTENTdm: digital object metadata and discoverability prep.</li>
            <li>ArchivesSpace: component-level description and hierarchy control.</li>
          </ul>
        </div>

        <div class="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-burnt hover:shadow-lg duration-150">
          <h3 class="font-semibold text-xl mb-3 border-b border-burnt pb-3 mb-4">Research & Use</h3>
          <ul class="list-disc pl-5 space-y-2 text-gray-800">
            <li>Research dossiers for curatorial development and loans.</li>
            <li>Exhibition checklists with locations, lender data, and notes.</li>
            <li>Rights, citation, and permissions guidance for safe reuse.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Case Study -->
    <section class="max-w-6xl mx-auto px-6 py-12">
      <div class="p-8 rounded-2xl border border-gray-200">
        <h2 class="text-2xl font-semibold mb-2">Case Study: Oscar Trophies—Cataloging & Condition Reporting</h2>
        <p class="text-gray-700 mb-6">
          At a major film museum, Jennifer supported the cataloging and condition reporting of a set of Oscar® statuettes.
          Using an industry-standard collections management system (<span class="font-medium">TMS</span>), she worked in close
          coordination with Registration to unify records, document condition, and prepare the objects for exhibition.
        </p>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold mb-2">Approach</h3>
            <ul class="list-disc pl-5 space-y-2 text-gray-800">
              <li>Verified object identifiers; linked creators, events, and provenance in TMS.</li>
              <li>Standardized titles, materials, and inscriptions; added award categories and dates.</li>
              <li>Performed visual examination and drafted condition notes with consistent terminology.</li>
              <li>Attached high-quality reference images and location data for pulls and mounts.</li>
              <li>Cross-checked rights/citation details and lender information for labels and credits.</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Results</h3>
            <ul class="list-disc pl-5 space-y-2 text-gray-800">
              <li>Single, authoritative record set supporting exhibition and research requests.</li>
              <li>Faster object retrieval and clearer accountability for movements/handling.</li>
              <li>Exhibit-ready condition documentation and images for mountmaking and lighting.</li>
              <li>Reduced duplication by aligning controlled vocabularies and fields across teams.</li>
            </ul>
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-6">
          Note: Institutional details are summarized to respect internal policies and confidentiality.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="max-w-6xl mx-auto px-6 pb-16">
      <div class="flex flex-col md:flex-row items-stretch md:items-center gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-100">
        <div class="flex-1">
          <h3 class="text-xl font-semibold mb-1">Ready to elevate description and discovery?</h3>
          <p class="text-gray-700">Partner with Jennifer to make your materials more findable, citable, and usable.</p>
        </div>
        <a href="/contact" class="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-burnt text-white font-medium hover:opacity-90 transition">
          Start a Request
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
// Static service page; no props needed.
</script>

<style>
/* Burnt accent utility (tweak to your palette) */
.bg-burnt { background-color: #CC5500; }
.text-burnt { color: #CC5500; }
</style>
