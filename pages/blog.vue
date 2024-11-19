<script setup>
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->


    <div class="flex flex-1">
      <!-- Sidebar -->
      <nav class="w-64 bg-gray-200 p-6 sticky top-0 h-screen hidden md:block">
        <ul>
          <li class="mb-4">
            <a href="/blog/preventive-conservation-guide" class="text-gray-800 hover:text-gray-600">Preventative
              Conservation
              Guide</a>
          </li>
          <li class="mb-4">
            <a href="#" class="text-gray-800 hover:text-gray-600">About Me</a>
          </li>
          <li class="mb-4">
            <a href="#" class="text-gray-800 hover:text-gray-600">Archives</a>
          </li>
          <li class="mb-4">
            <a href="#" class="text-gray-800 hover:text-gray-600">Contact</a>
          </li>
        </ul>
      </nav>

      <!-- Main Content -->
      <main class="flex-1 p-8">
        <NuxtPage />
      </main>
    </div>



  </div>
</template>
