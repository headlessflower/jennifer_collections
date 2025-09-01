
<template>
  <div class="bg-white text-gray-900 mt-10">
    <!-- Hero (one image only) -->
    <section class="max-w-6xl mx-auto px-6 pt-14 pb-10">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 class="text-4xl font-bold mb-4">Digital Preservation</h1>
          <p class="text-lg text-gray-700">
            Stabilize born-digital & digitized assets with practical workflows and documentation.
          </p>
        </div>
        <img
          src="/ellsworth-3.png"
          alt="Workstation with scanners and archival drives"
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
            <li>Practical, standards-informed workflows that fit real institutional constraints.</li>
            <li>Documentation first: repeatable steps, logs, and clear handoffs between teams.</li>
            <li>Risk-based decisions that prioritize stabilization and access without over-engineering.</li>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4">Core Outcomes</h2>
          <ul class="space-y-3 list-disc pl-5 text-gray-800">
            <li>Consistent file naming, inventories, and fixity for audit-ready stewardship.</li>
            <li>Tiered storage with preservation copies and recoverable backups.</li>
            <li>Streamlined digitization intake and clear conservation escalation paths.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Detailed services (itemized) -->
    <section class="max-w-6xl mx-auto px-6 py-10 bg-gray-50 rounded-2xl">
      <div class="grid lg:grid-cols-4 gap-6">
        <div class="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-burnt hover:shadow-lg duration-150">
          <h3 class="font-semibold text-xl mb-3 border-b border-burnt pb-3 mb-4">Digitization Planning & Intake</h3>
          <ul class="list-disc pl-5 space-y-2 text-gray-800">
            <li>Scope definition, priorities, and throughput targets.</li>
            <li>Requests intake forms and queue tracking.</li>
            <li>Specs sheets (resolution, color profile, bit depth, file formats).</li>
          </ul>
        </div>

        <div class="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-burnt hover:shadow-lg duration-150">
          <h3 class="font-semibold text-xl mb-3 border-b border-burnt pb-3 mb-4">File Naming, Inventory & Fixity</h3>
          <ul class="list-disc pl-5 space-y-2 text-gray-800">
            <li>Human-legible, machine-parseable naming conventions.</li>
            <li>Master inventory (CSV) with technical + administrative metadata.</li>
            <li>Fixity checks (e.g., SHA-256) with scheduled verification logs.</li>
          </ul>
        </div>

        <div class="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-burnt hover:shadow-lg duration-150">
          <h3 class="font-semibold text-xl mb-3 border-b border-burnt pb-3 mb-4">Preservation Copies & Storage Tiers</h3>
          <ul class="list-disc pl-5 space-y-2 text-gray-800">
            <li>3-2-1 backup strategy and integrity monitoring.</li>
            <li>Hot/warm/cold tiers mapped to access patterns and budgets.</li>
            <li>Lifecycle policies for migration and deprecation.</li>
          </ul>
        </div>

        <div class="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-burnt hover:shadow-lg duration-150">
          <h3 class="font-semibold text-xl mb-3 border-b border-burnt pb-3 mb-4">Basic Conservation & IPM</h3>
          <ul class="list-disc pl-5 space-y-2 text-gray-800">
            <li>Freezing protocols for at-risk materials.</li>
            <li>Integrated Pest Management (IPM) alignment.</li>
            <li>Condition checks and incident documentation with escalation.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Case Study -->
    <section class="max-w-6xl mx-auto px-6 py-12">
      <div class="p-8 rounded-2xl border border-gray-200">
        <h2 class="text-2xl font-semibold mb-2">Case Study: Stabilizing a Legacy Oral-History Drive</h2>
        <p class="text-gray-700 mb-6">
          Jennifer was tasked with stabilizing a legacy external drive containing mixed born-digital and digitized assets:
          oral-history WAV/MP3 files, interview transcripts (PDF/DOCX), and TIFF/JPEG stills. Working with a small team and limited time,
          she implemented a light-weight but standards-aligned workflow.
        </p>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold mb-2">Approach</h3>
            <ul class="list-disc pl-5 space-y-2 text-gray-800">
              <li>Created a controlled <span class="font-medium">file-naming schema</span> and master inventory (CSV) with IDs, formats, checksums, and rights notes.</li>
              <li>Generated <span class="font-medium">SHA-256 checksums</span> for all masters and instituted scheduled fixity verification.</li>
              <li>Packaged assets using a simple <span class="font-medium">BagIt</span>-style structure for transfer and validation.</li>
              <li>Deployed a <span class="font-medium">3-2-1 backup</span> model with tiered storage (working, preservation, off-site).</li>
              <li>Prepped access derivatives and basic ingest documentation for the discovery platform.</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Results</h3>
            <ul class="list-disc pl-5 space-y-2 text-gray-800">
              <li>Audit-ready documentation (inventory + fixity logs) and faster retrieval.</li>
              <li>Reduced risk of data loss through tiered redundancy and periodic validation.</li>
              <li>Clear handoffs to cataloging and access teams with repeatable steps.</li>
              <li>Improved researcher access via consistent file names and derivatives.</li>
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
          <h3 class="text-xl font-semibold mb-1">Need a practical preservation plan?</h3>
        <p class="text-gray-700">Partner with Jennifer to stabilize assets, document workflows, and safeguard access.</p>
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
