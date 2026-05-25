<template>
  <div class="w-full pt-16">
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center space-y-6">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brandDark tracking-tight">
        Collections Management
      </h1>
      <p class="text-lg md:text-xl text-brandDark/70 max-w-3xl mx-auto font-sans leading-relaxed">
        Clean, accurate control of materials and data to support access and long-term care.
      </p>
      
      <div class="max-w-4xl mx-auto rounded-[32px] border border-brandDark/15 overflow-hidden shadow-md">
        <img src="/ellsworth-2.png" alt="Collections Management Work" class="w-full h-auto object-cover" />
      </div>

      <div class="pt-4">
        <NuxtLink to="/contact" class="inline-block bg-brandDark text-brandBg hover:bg-brandDark/90 transition px-8 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-sm">
          Start a Request
        </NuxtLink>
      </div>
    </section>

    <!-- Why Work with Jennifer -->
    <section class="max-w-4xl mx-auto px-6 md:px-12 py-12 space-y-6">
      <h2 class="text-3xl font-serif font-bold text-brandDark tracking-tight">Why Work with Jennifer</h2>
      <div class="space-y-4 text-base md:text-lg text-brandDark/85 font-sans leading-relaxed">
        <p>
          With experience at leading cultural institutions such as the Academy Museum of Motion Pictures,
          the Autry Museum of the American West, and the Los Angeles Municipal Art Gallery, Jennifer excels
          at maintaining precise control over collections through database management, careful handling,
          and adherence to best practices in preventive conservation.
        </p>
        <p>
          Her work supports curators, registrars, and researchers by ensuring that every material is
          accessible, trackable, and preserved. She emphasizes proactive communication and detail-oriented
          record-keeping, strengthening collaboration across departments while minimizing risks to collections.
        </p>
      </div>
    </section>

    <!-- Core Services (Colorful Cards) -->
    <section class="py-16 md:py-24 border-t border-brandDark/10">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <h2 class="text-3xl font-serif font-bold text-brandDark text-center tracking-tight mb-12">Core Capabilities</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Card 1: Accessioning (Yellow) -->
          <div class="bg-brandYellow rounded-[32px] border border-brandDark/15 p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div>
              <h3 class="text-2xl font-serif font-bold text-brandDark mb-3">Accessioning, Barcoding &amp; Rehousing</h3>
              <p class="text-sm text-brandDark/80 font-sans leading-relaxed mb-6">
                Efficient workflows for cataloging incoming acquisitions, applying unique identifiers, and preparing safe storage enclosures.
              </p>
            </div>
            <div class="rounded-[20px] border border-brandDark/10 overflow-hidden shadow-sm">
              <img src="/ellsworth-1.png" alt="Accessioning Work" class="w-full h-48 object-cover" />
            </div>
          </div>

          <!-- Card 2: Database Support (Blue) -->
          <div class="bg-brandBlue rounded-[32px] border border-brandDark/15 p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div>
              <h3 class="text-2xl font-serif font-bold text-brandDark mb-3">Database Support</h3>
              <p class="text-sm text-brandDark/80 font-sans leading-relaxed mb-6">
                Expertise in industry databases like ArchivesSpace, Mimsy XG, TMS, and Axiell Collections to maintain reliable descriptions and digital catalog tracking.
              </p>
            </div>
            <div class="rounded-[20px] border border-brandDark/10 overflow-hidden shadow-sm">
              <img src="/ellsworth-3.png" alt="Database Support" class="w-full h-48 object-cover" />
            </div>
          </div>

          <!-- Card 3: Object Handling (Purple) -->
          <div class="bg-brandPurple rounded-[32px] border border-brandDark/15 p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div>
              <h3 class="text-2xl font-serif font-bold text-brandDark mb-3">Object Handling &amp; Tracking</h3>
              <p class="text-sm text-brandDark/80 font-sans leading-relaxed mb-6">
                Safe handling, packing, tracking, and condition monitoring during storage reorganization, loans, and exhibitions.
              </p>
            </div>
            <div class="rounded-[20px] border border-brandDark/10 overflow-hidden shadow-sm">
              <img src="/ellsworth-4.png" alt="Object Handling" class="w-full h-48 object-cover" />
            </div>
          </div>

          <!-- Card 4: Loan & Exhibition (Green) -->
          <div class="bg-brandGreen rounded-[32px] border border-brandDark/15 p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div>
              <h3 class="text-2xl font-serif font-bold text-brandDark mb-3">Loan &amp; Exhibition Preparation</h3>
              <p class="text-sm text-brandDark/80 font-sans leading-relaxed mb-6">
                Coordination of shipping logistics, documentation, and display mount installation with strong preventive conservation controls.
              </p>
            </div>
            <div class="rounded-[20px] border border-brandDark/10 overflow-hidden shadow-sm">
              <img src="/ellsworth-5.png" alt="Loan Preparation" class="w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 pb-20">
      <div class="bg-brandBg border border-brandDark/10 rounded-[32px] p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-sm">
        <h2 class="text-3xl font-serif font-bold text-brandDark tracking-tight">Partner with Jennifer</h2>
        <p class="text-base text-brandDark/70 max-w-xl mx-auto font-sans leading-relaxed">
          Reliable collections management that blends precision with care. Safeguard your institution’s collections today.
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
    title: "Collections Management — Jennifer Payan",
    meta: [
        {
            name: "description",
            content: "Professional collections management services including accessioning, database administration (TMS, ArchivesSpace), object handling, and exhibition prep.",
        },
    ],
});
</script>

<style scoped>
</style>
