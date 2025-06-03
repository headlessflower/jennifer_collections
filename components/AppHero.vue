<script setup>

</script>
<template>
  <!-- Hero Content -->
  <div class="hero-content flex flex-col md:flex-row items-center px-8 pb-16 py-16 md:h-[75vh] bg-[#f5f5dc]">
    <div class="hero-left flex-1 text-left p-2">
      <p class="greeting text-base mb-2">👋 Hey, my name is</p>
      <h2 class="hero-name text-5xl md:text-6xl font-bold">Jennifer Payan</h2>
    </div>

    <div class="hero-center flex-1 relative flex flex-col items-center p-2">
      <!-- Placeholder for hero image -->
      <div class="image-wrapper rounded-full overflow-hidden w-64 h-80 md:w-80 md:h-96 transition-shadow duration-300 hover:shadow-2xl">
        <img src="/headshot_2.webp" alt="Jennifer Payan" class="hero-image w-full h-full object-cover" />
      </div>

    </div>

    <div class="hero-right flex-1 text-left p-2">
      <p class="intro-label text-base mb-2">I am an</p>
      <h2 class="hero-role text-4xl md:text-5xl font-bold relative inline-block">
          <span class="relative inline-block">
            Freelance Archivist
            <span class="absolute left-0 -bottom-1 w-full h-1 bg-terracotta"></span>
          </span>
      </h2>
      <p class="hero-subtitle text-base mt-4">
        and registrar currently working at the Los Angeles Municipal Art Gallery.
      </p>
      <p class="hero-description text-base mt-4">
        Passionate about collections management, preservation, and archival research.
      </p>
      <!-- Social Icons Placeholder -->
      <div class="social-icons flex space-x-6 mt-6">
        <a href="#" aria-label="LinkedIn" class="icon text-indigo-900 hover:text-yellow-500 font-medium">LinkedIn</a>
        <a href="#" aria-label="Instagram" class="icon text-indigo-900 hover:text-yellow-500 font-medium">Instagram</a>
        <a href="#" aria-label="Facebook" class="icon text-indigo-900 hover:text-yellow-500 font-medium">Facebook</a>
        <a href="#" aria-label="Twitter" class="icon text-indigo-900 hover:text-yellow-500 font-medium">Twitter</a>
      </div>
    </div>
  </div>
</template>
