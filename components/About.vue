<script setup lang="ts">

</script>

<template>
  <section class="biography-section bg-gray-50 text-indigo-900 py-16">
    <div class="container mx-auto px-6 md:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Biography -->
        <div class="bio-text space-y-6">
          <h2 class="text-4xl md:text-5xl font-bold">Biography</h2>
          <p class="text-base md:text-lg">
            I am a currently a Curatorial Assistant at the Los Angeles Municipal Art Gallery, where I oversee collections management, archiving, and preservation initiatives. With a Master of Library and Information Science from San Jose State University, I have honed skills in metadata standards, cataloging, and digital preservation. My background includes roles at Self Help Graphics as a Teaching Artist Assistant and various archival internships, contributing to my expertise in cultural heritage and community-driven projects.
          </p>
          <p class="text-base md:text-lg">
            Driven by a passion for preserving marginalized histories and improving access to cultural assets, I strive to combine rigorous archival methodology with innovative digital solutions. I am dedicated to fostering collaboration between curators, conservators, and educators to deliver impactful exhibitions and resources.
          </p>

          <!-- Personal Details
          <div class="details space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span class="font-semibold">Name:</span>
              <span>Jennifer Payan</span>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span class="font-semibold">Email:</span>
              <span>j.payan@academymuseum.org</span>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span class="font-semibold">Location:</span>
              <span>Los Angeles, CA</span>
            </div>
          </div>
-->
          <!-- Statistics -->
          <div class="stats grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
            <div class="stat-item text-center">
              <h3 class="text-3xl font-bold">3+</h3>
              <p class="text-sm text-gray-700">Years of Experience</p>
            </div>
            <div class="stat-item text-center">
              <h3 class="text-3xl font-bold">5+</h3>
              <p class="text-sm text-gray-700">Institutions</p>
            </div>
            <div class="stat-item text-center">
              <h3 class="text-3xl font-bold">10+</h3>
              <p class="text-sm text-gray-700">Projects Completed</p>
            </div>
            <div class="stat-item text-center">
              <h3 class="text-3xl font-bold">2</h3>
              <p class="text-sm text-gray-700">Awards</p>
            </div>
          </div>

          <!-- Download CV Button -->
          <div class="mt-8">
            <a
                href="/PayanJ_Resume_2025.pdf"
                target="_blank"
                class="inline-block bg-burnt text-white hover:bg-burnt-hover transition-colors px-6 py-3 rounded-full font-medium"
                download=""
            >
              Download CV →
            </a>
          </div>
        </div>

        <!-- Image Content -->
        <div class="bio-image flex justify-center">
          <div class="w-full max-w-md rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src="/jenny_exp_1.webp" alt="Jennifer Payan Portrait" class="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>