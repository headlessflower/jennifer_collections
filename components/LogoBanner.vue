<template>
  <section class="py-16 bg-brandBg overflow-hidden w-full border-t border-brandDark/5">
    <div class="max-w-7xl mx-auto px-6 md:px-12 mb-8">
      <h2 class="text-center text-xs font-bold uppercase tracking-widest text-brandDark/40">
        Institutional Partners &amp; Collaborators
      </h2>
    </div>

    <!-- Scrolling wrapper with radial gradient fade overlays -->
    <div class="relative w-full overflow-hidden select-none py-2">
      <!-- Gradient Fades -->
      <div
        class="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brandBg to-transparent z-10 pointer-events-none">
      </div>
      <div
        class="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brandBg to-transparent z-10 pointer-events-none">
      </div>

      <!-- Logo Marquee Container -->
      <div class="flex gap-16 md:gap-24 items-center w-max animate-scroll">
        <!-- Render list twice to create seamless loop -->
        <div v-for="(logo, index) in [...logos, ...logos]" :key="index"
          class="shrink-0 flex items-center justify-center">
          <NuxtImg :src="logo.src" :alt="logo.alt"
            class="h-[58px] md:h-[70px] w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer"
            format="webp" quality="80" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = [
  { src: '/logos/Academy-Museum_Logo.jpg', alt: 'Academy Museum of Motion Pictures' },
  { src: '/logos/Autry_Museum_of_the_American_West_Logo.png', alt: 'Autry Museum of the American West' },
  { src: '/logos/csuf-logo-rgb.webp', alt: 'California State University, Fullerton' },
  { src: '/logos/SHG-Logo-Black-Horizontal.png.webp', alt: 'Self Help Graphics & Art' },
  { src: '/logos/VC-Logo-Stacked-Black.png.webp', alt: 'Visual Communications' },
  { src: '/logos/Vincent_Price_Art_Museum_logo.png', alt: 'Vincent Price Art Museum' },
  { src: '/logos/ammpmagnet1.jpg.webp', alt: 'Academy Museum' },
  { src: '/logos/lamag logo 1.png', alt: 'Los Angeles Municipal Art Gallery' }
]
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 40s linear infinite;
}

/* Pause scroll animation on hover to allow detailed viewing */
.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
