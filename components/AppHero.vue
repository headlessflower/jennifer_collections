<template>
  <div class="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 px-8 max-w-7xl mx-auto">
    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      
      <!-- Left Column: Content -->
      <div class="flex-1 text-left space-y-6 lg:max-w-2xl">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-brandDark leading-[1.15]">
          Empower your <br class="hidden sm:inline" />
          <span class="italic font-serif font-normal decoration-brandYellow decoration-wavy decoration-3 underline underline-offset-4">collections' potential</span>
        </h2>
        <p class="text-lg md:text-xl text-brandDark/85 leading-relaxed font-sans max-w-xl">
          Professional collections care, cataloging, and digital preservation solutions designed for cultural institutions, museums, and private archives.
        </p>
        
        <!-- Actions & Social Proof -->
        <div class="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
          <NuxtLink 
            to="/services" 
            class="inline-block text-center bg-brandDark text-brandBg hover:bg-brandDark/90 transition-all duration-300 px-8 py-3.5 rounded-full font-medium tracking-wide shadow-sm hover:shadow-md"
          >
            My Services
          </NuxtLink>
          
          <!-- Proof: overlapping avatars -->
          <div class="flex items-center gap-3">
            <div class="flex -space-x-3">
              <img src="/jenny_exp_1.webp" alt="Archive Work" class="w-10 h-10 rounded-full border-2 border-brandBg object-cover" />
              <img src="/jenny_exp_3.webp" alt="Museum Work" class="w-10 h-10 rounded-full border-2 border-brandBg object-cover" />
              <img src="/jenny_exp_4.webp" alt="Art Conservation" class="w-10 h-10 rounded-full border-2 border-brandBg object-cover" />
            </div>
            <div class="text-xs font-semibold text-brandDark/70 tracking-wide">
              Trusted by SoCal institutions
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right Column: Image in Arch Frame -->
      <div class="flex-1 flex justify-center relative py-4">
        <!-- SVG curves pointing to image -->
        <svg class="absolute -top-4 -left-2 w-10 h-10 text-brandDark/30 rotate-12" viewBox="0 0 50 50" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M10 40 C 15 20, 25 15, 40 10" />
          <path d="M15 45 C 22 25, 30 20, 45 15" />
        </svg>
        
        <div class="relative w-[300px] h-[380px] sm:w-[340px] sm:h-[430px] flex-shrink-0">
          <!-- Arch Image Wrapper -->
          <div class="w-full h-full rounded-t-[170px] overflow-hidden border border-brandDark/15 shadow-xl bg-neutral-200">
            <img 
              src="/profile-pic-1.JPEG" 
              alt="Jennifer Payan Portrait" 
              class="w-full h-full object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-500 ease-out" 
            />
          </div>
          
          <!-- Floating Tags -->
          <span class="absolute -top-2 -right-4 bg-brandPurple text-brandDark border border-brandDark/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-md rotate-[6deg] transform hover:scale-105 transition duration-200 cursor-default select-none">
            registration
          </span>
          <span class="absolute bottom-28 -left-8 bg-brandGreen text-brandDark border border-brandDark/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-md -rotate-[4deg] transform hover:scale-105 transition duration-200 cursor-default select-none">
            preservation
          </span>
          <span class="absolute bottom-6 -right-6 bg-brandYellow text-brandDark border border-brandDark/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-md rotate-[3deg] transform hover:scale-105 transition duration-200 cursor-default select-none">
            archiving
          </span>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
