
<template>
  <section class="w-full">
    <!-- Header -->
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <header class="mb-10 text-center">
        <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight">
          Professional Services
        </h2>
        <p class="mt-3 text-base/7 sm:text-lg/8 opacity-80">
          Clear, reliable support across collections management, archival research, and digital preservation.
        </p>
      </header>

      <!-- Quick CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
        <NuxtLink
          to="/services"
          class="inline-flex items-center justify-center border border-burnt hover:bg-burnt rounded-2xl px-5 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition"
        >
          Explore All Services
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium border hover:border-burnt border-foreground/15 hover:border-foreground/30 hover:shadow-sm transition"
        >
          Request a Quote
        </NuxtLink>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <!-- Collections Management -->
        <article class="group rounded-2xl border border-foreground/10 p-6 shadow-sm hover:shadow-md hover:border hover:border-burnt transition">
          <h3 class="text-xl font-semibold">Collections Management</h3>
          <p class="mt-2 opacity-80">
            Maintain accurate records and preserve materials with clean systems and preventive care.
          </p>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-foreground/40"></span>Accessioning, barcoding, and rehousing</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-foreground/40"></span>Database support: ArchivesSpace, Mimsy XG, TMS</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-foreground/40"></span>Object handling, tracking, and location control</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-foreground/40"></span>Condition reporting & IPM coordination</li>
          </ul>
          <div class="mt-6 flex gap-3">
            <NuxtLink to="/collection-management" class="text-sm underline underline-offset-4 hover:opacity-80">Details</NuxtLink>
            <NuxtLink to="/contact" class="text-sm underline underline-offset-4 hover:opacity-80">Book now</NuxtLink>
          </div>
        </article>

        <!-- Archival Research & Cataloging -->
        <article class="group rounded-2xl border border-foreground/10 p-6 shadow-sm hover:shadow-md hover:border hover:border-burnt transition">
          <h3 class="text-xl font-semibold">Archival Research & Cataloging</h3>
          <p class="mt-2 opacity-80">
            Create usable, standards‑aligned description and findability for your collections.
          </p>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-foreground/40"></span>Descriptive metadata (DACS, LoC, AAT)</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-foreground/40"></span>Catalog records in Axiell Collections, CONTENTdm, ArchivesSpace</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-foreground/40"></span>Research dossiers & exhibition checklists</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-foreground/40"></span>Rights, permissions, and citation guidance</li>
          </ul>
          <div class="mt-6 flex gap-3">
            <NuxtLink to="/research-cataloging" class="text-sm underline underline-offset-4 hover:opacity-80">Details</NuxtLink>
            <NuxtLink to="/contact" class="text-sm underline underline-offset-4 hover:opacity-80">Start a request</NuxtLink>
          </div>
        </article>

        <!-- Digital Preservation -->
        <article class="group rounded-2xl border border-foreground/10 p-6 shadow-sm hover:shadow-md hover:border hover:border-burnt transition">
          <h3 class="text-xl font-semibold">Digital Preservation</h3>
          <p class="mt-2 opacity-80">
            Stabilize born‑digital & digitized assets with practical workflows and documentation.
          </p>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-foreground/40"></span>Digitization planning & requests intake</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-foreground/40"></span>File‑naming, inventorying, and fixity checks</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-foreground/40"></span>Preservation copies, backups, and storage tiers</li>
            <li class="flex gap-2"><span class="mt-1 size-1.5 rounded-full bg-foreground/40"></span>Basic conservation tasks incl. freezing & pest mitigation</li>
          </ul>
          <div class="mt-6 flex gap-3">
            <NuxtLink to="/digital-preservation" class="text-sm underline underline-offset-4 hover:opacity-80">Details</NuxtLink>
            <NuxtLink to="/contact" class="text-sm underline underline-offset-4 hover:opacity-80">Consultation</NuxtLink>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>

</style>
