<template>
  <section class="w-full">
    <!-- Page Header -->
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <header class="text-center mb-10">
        <h1 class="text-3xl sm:text-4xl font-semibold tracking-tight">Services</h1>
        <p class="mt-3 text-base sm:text-lg opacity-80">
          Practical, standards‑aligned support for archives, museums, and studios—delivered with clear scope and predictable timelines.
        </p>

        <div class="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center">
          <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium bg-burnt text-white hover:bg-burnt/90 focus:outline-none focus:ring-4 focus:ring-burnt/20 transition"
          >
            Request a Quote
          </NuxtLink>
          <NuxtLink
              to="/about"
              class="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium border border-foreground/15 hover:border-foreground/30 hover:shadow-sm focus:outline-none focus:ring-4 focus:ring-burnt/10 transition"
          >
            Learn More
          </NuxtLink>
        </div>
      </header>

      <!-- Image Row -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <img src="/ellsworth-1.png" alt="Collections Management" class="rounded-xl shadow-sm object-cover w-full h-48" />
        <img src="/ellsworth-2.png" alt="Archival Research" class="rounded-xl shadow-sm object-cover w-full h-48" />
        <img src="/ellsworth-3.png" alt="Digital Preservation" class="rounded-xl shadow-sm object-cover w-full h-48" />
        <img src="/ellsworth-4.png" alt="Consulting & Training" class="rounded-xl shadow-sm object-cover w-full h-48" />
      </div>

      <!-- Quick Tagline Bar -->
      <div class="mb-12 rounded-2xl border border-foreground/10 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-sm sm:text-base opacity-90">
          <span class="font-medium">Areas of focus:</span> Collections Management · Archival Research · Digital Preservation · Consulting
        </p>
        <NuxtLink to="#packages" class="text-sm underline underline-offset-4 decoration-burnt hover:opacity-80">Jump to packages</NuxtLink>
      </div>

      <!-- Services Grid -->
      <div id="packages" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <!-- Card: Collections Management -->
        <article class="rounded-2xl border border-foreground/10 p-6 shadow-sm hover:shadow-md transition">
          <h2 class="text-xl font-semibold">Collections Management</h2>
          <p class="mt-2 opacity-80">Clean, accurate control of materials and data to support access and care.</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Accessioning, barcoding, and rehousing</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Database support: ArchivesSpace, Mimsy XG, TMS</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Object handling, location tracking, condition notes</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Preparation for loans & exhibitions</li>
          </ul>
          <div class="mt-6 flex gap-3">
            <NuxtLink to="/contact" class="text-sm inline-flex items-center gap-1 font-medium text-burnt hover:opacity-90">Start a request</NuxtLink>
            <NuxtLink to="/services#scope" class="text-sm underline underline-offset-4 decoration-burnt hover:opacity-80">Scope details</NuxtLink>
          </div>
        </article>

        <!-- Card: Archival Research & Cataloging -->
        <article class="rounded-2xl border border-foreground/10 p-6 shadow-sm hover:shadow-md transition">
          <h2 class="text-xl font-semibold">Archival Research & Cataloging</h2>
          <p class="mt-2 opacity-80">Standards‑aligned description and discovery to make materials findable and usable.</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Descriptive metadata (DACS, AAT, LoC)</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Cataloging in Axiell, CONTENTdm, ArchivesSpace</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Research dossiers & exhibition checklists</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Rights, citation, and permissions guidance</li>
          </ul>
          <div class="mt-6 flex gap-3">
            <NuxtLink to="/contact" class="text-sm inline-flex items-center gap-1 font-medium text-burnt hover:opacity-90">Get research help</NuxtLink>
            <NuxtLink to="/services#deliverables" class="text-sm underline underline-offset-4 decoration-burnt hover:opacity-80">Sample deliverables</NuxtLink>
          </div>
        </article>

        <!-- Card: Digital Preservation -->
        <article class="rounded-2xl border border-foreground/10 p-6 shadow-sm hover:shadow-md transition">
          <h2 class="text-xl font-semibold">Digital Preservation</h2>
          <p class="mt-2 opacity-80">Stabilize born‑digital and digitized assets with practical workflows and documentation.</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Digitization planning & intake</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>File‑naming, inventory, and fixity checks</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Storage tiers, backups, and retention</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Basic conservation tasks incl. freezing/IPM</li>
          </ul>
          <div class="mt-6 flex gap-3">
            <NuxtLink to="/contact" class="text-sm inline-flex items-center gap-1 font-medium text-burnt hover:opacity-90">Plan preservation</NuxtLink>
            <NuxtLink to="/services#workflow" class="text-sm underline underline-offset-4 decoration-burnt hover:opacity-80">Workflow overview</NuxtLink>
          </div>
        </article>

        <!-- Card: Consulting & Training -->
        <article class="rounded-2xl border border-foreground/10 p-6 shadow-sm hover:shadow-md transition">
          <h2 class="text-xl font-semibold">Consulting & Training</h2>
          <p class="mt-2 opacity-80">Short, focused engagements to diagnose issues and upskill teams.</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Policy & procedure tune‑ups</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>System audits & recommendations</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Hands‑on workshops & documentation</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>On‑call support blocks</li>
          </ul>
          <div class="mt-6 flex gap-3">
            <NuxtLink to="/contact" class="text-sm inline-flex items-center gap-1 font-medium text-burnt hover:opacity-90">Book a consult</NuxtLink>
            <NuxtLink to="/services#rates" class="text-sm underline underline-offset-4 decoration-burnt hover:opacity-80">Rates</NuxtLink>
          </div>
        </article>

        <!-- Card: Website Maintenance (Optional if applicable) -->
        <article class="rounded-2xl border border-foreground/10 p-6 shadow-sm hover:shadow-md transition">
          <h2 class="text-xl font-semibold">Website Care (Optional)</h2>
          <p class="mt-2 opacity-80">Monthly maintenance for security, uptime, and content updates.</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Core/plugin updates & testing</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Backups & monitoring</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Performance & accessibility checks</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Up to 1 hr content edits/mo</li>
          </ul>
          <div class="mt-6 flex gap-3">
            <NuxtLink to="/contact" class="text-sm inline-flex items-center gap-1 font-medium text-burnt hover:opacity-90">Ask about plans</NuxtLink>
            <NuxtLink to="/services#care" class="text-sm underline underline-offset-4 decoration-burnt hover:opacity-80">Plan details</NuxtLink>
          </div>
        </article>

        <!-- Card: Custom Projects -->
        <article class="rounded-2xl border border-foreground/10 p-6 shadow-sm hover:shadow-md transition">
          <h2 class="text-xl font-semibold">Custom Projects</h2>
          <p class="mt-2 opacity-80">Tailored scopes for unique collections or timelines.</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Short sprints (1–2 weeks)</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Quarterly roadmaps</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Remote or on‑site options</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-burnt/70"></span>Clear deliverables & documentation</li>
          </ul>
          <div class="mt-6 flex gap-3">
            <NuxtLink to="/contact" class="text-sm inline-flex items-center gap-1 font-medium text-burnt hover:opacity-90">Share your scope</NuxtLink>
            <NuxtLink to="/services#process" class="text-sm underline underline-offset-4 decoration-burnt hover:opacity-80">Process</NuxtLink>
          </div>
        </article>
      </div>

      <!-- Process Strip -->
      <div id="process" class="mt-14 rounded-2xl border border-foreground/10 p-6 lg:p-8">
        <h3 class="text-xl font-semibold">Process</h3>
        <ol class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <li class="rounded-xl border border-foreground/10 p-4">
            <p class="font-medium">1) Discovery</p>
            <p class="opacity-80 mt-1">Quick call to align on goals, scope, and access.</p>
          </li>
          <li class="rounded-xl border border-foreground/10 p-4">
            <p class="font-medium">2) Plan</p>
            <p class="opacity-80 mt-1">Timeline, milestones, and deliverables.</p>
          </li>
          <li class="rounded-xl border border-foreground/10 p-4">
            <p class="font-medium">3) Execute</p>
            <p class="opacity-80 mt-1">On‑site or remote work with updates.</p>
          </li>
          <li class="rounded-xl border border-foreground/10 p-4">
            <p class="font-medium">4) Handoff</p>
            <p class="opacity-80 mt-1">Summary, documentation, and next steps.</p>
          </li>
        </ol>
        <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium bg-burnt text-white hover:bg-burnt/90 focus:outline-none focus:ring-4 focus:ring-burnt/20 transition"
          >
            Contact Form
          </NuxtLink>
          <NuxtLink
              to="/services#rates"
              class="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium border border-foreground/15 hover:border-foreground/30 hover:shadow-sm focus:outline-none focus:ring-4 focus:ring-burnt/10 transition"
          >
            View Rates
          </NuxtLink>
        </div>
      </div>

      <!-- FAQ / Notes -->
      <div id="rates" class="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article class="lg:col-span-2 rounded-2xl border border-foreground/10 p-6 lg:p-8">
          <h3 class="text-xl font-semibold">Rates & Terms</h3>
          <ul class="mt-4 space-y-2 text-sm">
            <li><span class="font-medium text-burnt">Hourly:</span> Project‑based quotes available; on‑call blocks for short tasks.</li>
            <li><span class="font-medium text-burnt">Deposit:</span> 50% to start; balance due within 90 days of final delivery.</li>
            <li><span class="font-medium text-burnt">Scope:</span> Work not listed in the agreement is billed as a new service order.</li>
            <li><span class="font-medium text-burnt">Fixes window:</span> 7 days from final submission for error corrections (typos, wrong color, bugs).</li>
          </ul>
        </article>
        <aside class="rounded-2xl border border-foreground/10 p-6 lg:p-8">
          <h4 class="text-lg font-semibold">Need something custom?</h4>
          <p class="mt-2 text-sm opacity-80">Share goals and constraints—I'll respond with options and a clear estimate.</p>
          <NuxtLink
              to="/contact"
              class="mt-4 inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium bg-burnt text-white hover:bg-burnt/90 focus:outline-none focus:ring-4 focus:ring-burnt/20 transition"
          >
            Talk to Jennifer
          </NuxtLink>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Services — Jennifer Payan',
  meta: [
    { name: 'description', content: 'Collections management, archival research, cataloging, digital preservation, and consulting services for archives, museums, and studios.' },
  ],
})
</script>

<style scoped>

</style>