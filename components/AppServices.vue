<script setup>

</script>
<template>
  <div>
    <h2 class="text-5xl font-bold mb-16 m-auto">Collections Care Services</h2>


    <div class="flex flex-col md:flex-row md:space-x-8">

      <div class="services-images grid md:grid-cols-2 w-1/2 gap-4">
        <NuxtImg src="/archives-1.webp" alt="woman archiving  old film" sizes="sm:100vw md:25vw">
        </NuxtImg>
        <NuxtImg src="/archives-2.webp" sizes="sm:100vw md:25vw">
        </NuxtImg>
        <NuxtImg src="/archives-3.webp" sizes="sm:100vw md:25vw">
        </NuxtImg>
        <NuxtImg src="/archives-4.webp" sizes="sm:100vw md:25vw">
        </NuxtImg>
      </div>
      <div class="services-description">
        <ul class="flex flex-col space-y-8 mb-12">
          <li class="text-2xl ">
            Exhibition Logistics</li>
          <li class="text-2xl ">Reigistration</li>

          <li class="text-2xl ">Database Management</li>
          <li class="text-2xl ">Archival Storage Solutions</li>
          <li class="text-2xl ">Collections Inventory</li>
          <li class="text-2xl ">Operations</li>


        </ul>

        <NuxtLink to="/services" class="text-xl hover:text-red-200 hover:font-bold">Learn More</NuxtLink>




      </div>
    </div>
  </div>
</template>
