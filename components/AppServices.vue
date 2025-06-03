<script setup></script>
<template>
  <section class="services-section bg-cream text-indigo-900 py-16">
    <div class="container mx-auto px-6 md:px-12">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold inline-block">
         Services
          <span class="block w-24 h-1 bg-yellow-400 mt-2 mx-auto"></span>
        </h2>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Collections Management Card -->
        <div class="service-card flex flex-col items-center text-center px-6 py-8">
          <!-- Icon Placeholder -->
          <div class="bg-terracotta p-4 rounded-lg mb-4">
            <!-- Replace with actual SVG icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold mb-4">Collections Management</h3>
          <p class="text-base text-gray-700 mb-6">
            Oversee database management systems like ArchivesSpace, Mimsy XG, and TMS for accessioning,
            barcoding, rehousing, and maintaining archival collections to ensure accurate tracking and preservation.
          </p>
          <!-- <button class="mt-auto inline-block bg-burnt text-white hover:bg-burnt-hover transition-colors px-6 py-2 rounded-full font-medium">
            Get Started →
          </button> -->
        </div>

        <!-- Archival Research & Cataloging Card (Highlighted) -->
        <div class="service-card bg-white shadow-lg rounded-lg flex flex-col items-center text-center px-6 py-8">
          <!-- Icon Placeholder -->
          <div class="bg-terracotta p-4 rounded-lg mb-4">
            <!-- Replace with actual SVG icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20l9-7-9-7-9 7 9 7z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12V2m0 0L5 7.5M12 2l7 5.5" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold mb-4">Archival Research & Cataloging</h3>
          <p class="text-base text-gray-700 mb-6">
            Conduct detailed archival research, prepare descriptive metadata, and create catalog records using
            Axiell Collections, CONTENTdm, and ArchivesSpace, following DACS and other archival standards.
          </p>
         <!-- <button class="mt-auto inline-block bg-burnt text-white hover:bg-burnt-hover transition-colors px-6 py-2 rounded-full font-medium">
            Get Started →
          </button> -->
        </div>

        <!-- Digital Preservation Card -->
        <div class="service-card flex flex-col items-center text-center px-6 py-8">
          <!-- Icon Placeholder -->
          <div class="bg-terracotta p-4 rounded-lg mb-4">
            <!-- Replace with actual SVG icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3H8a2 2 0 00-2 2v14l6-3 6 3V5a2 2 0 00-2-2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold mb-4">Digital Preservation</h3>
          <p class="text-base text-gray-700 mb-6">
            Implement digitization workflows, manage digitization requests, and perform preservation tasks such as
            integrated pest management, freezing, and condition reporting to extend the life of physical materials.
          </p>
         <!--  <button class="mt-auto inline-block bg-burnt text-white hover:bg-burnt-hover transition-colors px-6 py-2 rounded-full font-medium">
            Get Started →
          </button> -->
        </div>
      </div>
    </div>
  </section>
</template>
