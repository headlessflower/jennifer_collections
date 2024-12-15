<script setup></script>
<template>
  <div>
    <h2 class="text-5xl font-bold mb-16 m-auto">
      Collections Care Services
    </h2>

    <div class="flex flex-col md:flex-row md:space-x-8">
      <div class="services-images grid md:grid-cols-2 md:w-1/2 gap-4">
        <img src="/archives-1.webp" alt="woman archiving  old film" sizes="sm:100vw md:25vw" class="hidden md:block" />

        <img src="/archives-2.webp" alt="woman archiving  old film" sizes="sm:100vw md:25vw" class="hidden md:block" />

        <img src="/archives-3.webp" alt="woman archiving  old film" sizes="sm:100vw md:25vw" class="hidden md:block" />

        <img src="/jenny_exp_3.webp" alt="woman archiving  old film" sizes="sm:100vw md:25vw" class="hidden md:block" />
      </div>
      <div class="services-description">
        <ul class="flex flex-col space-y-8 mb-12">
          <li class="text-2xl">Registration</li>
          <li class="text-2xl">Database Management</li>
          <li class="text-2xl">Archival Storage Solutions</li>
          <li class="text-2xl">Collections Inventory</li>
        </ul>

        <AppButton text="Explore Services" link="/services" />
      </div>
    </div>
  </div>
</template>
