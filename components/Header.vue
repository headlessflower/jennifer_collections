<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const mobileServicesOpen = ref(false)
const mobileProjectsOpen = ref(false)
</script>
<template>
  <header class="fixed top-0 w-full z-20" >
    <nav class="hero-nav flex justify-between bg-brandBg/80 backdrop-blur-md items-center px-8 py-5 relative border-b border-brandDark/10">
      <div class="nav-left">
        <h1 class="logo text-2xl font-serif font-bold tracking-tight text-brandDark lowercase">jennifer payan</h1>
      </div>

      <!-- Desktop Menu Links -->
      <ul class="nav-links hidden md:flex items-center space-x-8 text-sm font-medium text-brandDark/85">
        <li><NuxtLink to="/" class="hover:text-brandDark hover:underline underline-offset-4 decoration-brandYellow decoration-2 transition">Home</NuxtLink></li>
        <li><NuxtLink to="/about" class="hover:text-brandDark hover:underline underline-offset-4 decoration-brandYellow decoration-2 transition">About Me</NuxtLink></li>
        <li><NuxtLink to="/experience" class="hover:text-brandDark hover:underline underline-offset-4 decoration-brandYellow decoration-2 transition">Experience</NuxtLink></li>
        <li class="relative group py-2">
          <div class="flex items-center gap-1 cursor-pointer">
            <NuxtLink to="/projects" class="hover:text-brandDark hover:underline underline-offset-4 decoration-brandYellow decoration-2 transition">Projects</NuxtLink>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brandDark/60 group-hover:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <!-- Dropdown menu -->
          <ul class="absolute left-0 mt-1 w-72 bg-brandBg/95 backdrop-blur-md border border-brandDark/10 rounded-2xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 py-3">
            <li>
              <NuxtLink to="/projects" class="block px-5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brandDark hover:bg-brandDark/5 transition">
                All Projects
              </NuxtLink>
            </li>
            <hr class="border-t border-brandDark/10 my-1" />
            <li>
              <NuxtLink to="/inner-resources-mural" class="block px-5 py-2 text-sm text-brandDark/80 hover:text-brandDark hover:bg-brandDark/5 transition">
                “Inner Resources” Mural
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/ellsworth-kelly-foundation-archivist" class="block px-5 py-2 text-sm text-brandDark/80 hover:text-brandDark hover:bg-brandDark/5 transition">
                Ellsworth Kelly Foundation
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/dominguez-sculpture-restoration" class="block px-5 py-2 text-sm text-brandDark/80 hover:text-brandDark hover:bg-brandDark/5 transition">
                Benjamin Dominguez Sculptures
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blessing-animals-mural-olvera-street" class="block px-5 py-2 text-sm text-brandDark/80 hover:text-brandDark hover:bg-brandDark/5 transition">
                Blessing of the Animals Mural
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li><NuxtLink to="/gallery" class="hover:text-brandDark hover:underline underline-offset-4 decoration-brandYellow decoration-2 transition">Gallery</NuxtLink></li>
        <li class="relative group py-2">
          <div class="flex items-center gap-1 cursor-pointer">
            <NuxtLink to="/services" class="hover:text-brandDark hover:underline underline-offset-4 decoration-brandYellow decoration-2 transition">Services</NuxtLink>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brandDark/60 group-hover:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <!-- Dropdown menu -->
          <ul class="absolute left-0 mt-1 w-64 bg-brandBg/95 backdrop-blur-md border border-brandDark/10 rounded-2xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 py-3">
            <li>
              <NuxtLink to="/services" class="block px-5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brandDark hover:bg-brandDark/5 transition">
                All Services
              </NuxtLink>
            </li>
            <hr class="border-t border-brandDark/10 my-1" />
            <li>
              <NuxtLink to="/collection-management" class="block px-5 py-2 text-sm text-brandDark/80 hover:text-brandDark hover:bg-brandDark/5 transition">
                Collections Management
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/research-cataloging" class="block px-5 py-2 text-sm text-brandDark/80 hover:text-brandDark hover:bg-brandDark/5 transition">
                Archival Research &amp; Cataloging
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/digital-preservation" class="block px-5 py-2 text-sm text-brandDark/80 hover:text-brandDark hover:bg-brandDark/5 transition">
                Digital Preservation
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/archival-services-san-miguel-de-allende" class="block px-5 py-2 text-sm text-brandDark/80 hover:text-brandDark hover:bg-brandDark/5 transition">
                San Miguel de Allende Services
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li><NuxtLink to="/mentorship" class="hover:text-brandDark hover:underline underline-offset-4 decoration-brandYellow decoration-2 transition">Mentorship</NuxtLink></li>
      </ul>

      <!-- Mobile Menu Toggle -->
      <button
          class="md:hidden focus:outline-none"
          @click="isOpen = !isOpen"
          aria-label="Toggle navigation"
      >
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brandDark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brandDark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Contact Button (Desktop) -->
      <div class="nav-right hidden md:block">
        <NuxtLink to="/contact" class="contact-button bg-brandDark text-brandBg hover:bg-brandDark/90 transition px-6 py-2.5 rounded-full text-sm font-medium tracking-wide">
          Let's talk
        </NuxtLink>
      </div>

      <!-- Mobile Dropdown Menu -->
      <transition name="fade">
        <div
            v-if="isOpen"
            class="mobile-menu absolute top-full left-0 w-full bg-brandBg/95 backdrop-filter backdrop-blur-lg z-50 md:hidden border-b border-brandDark/10"
        >
          <ul class="flex flex-col items-center py-6 space-y-4 font-medium">
            <li><NuxtLink @click="isOpen = false" to="/" class="text-brandDark hover:underline">Home</NuxtLink></li>
            <li><NuxtLink @click="isOpen = false" to="/about" class="text-brandDark hover:underline">About Me</NuxtLink></li>
            <li><NuxtLink @click="isOpen = false" to="/experience" class="text-brandDark hover:underline">Experience</NuxtLink></li>
            <!-- Mobile Projects with Dropdown Toggle -->
            <li class="w-full text-center">
              <div class="flex items-center justify-center gap-2">
                <NuxtLink @click="isOpen = false" to="/projects" class="text-brandDark hover:underline">Projects</NuxtLink>
                <button @click.stop="mobileProjectsOpen = !mobileProjectsOpen" class="p-1 focus:outline-none" aria-label="Toggle projects menu">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform text-brandDark" :class="{ 'rotate-180': mobileProjectsOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <transition name="fade">
                <ul v-if="mobileProjectsOpen" class="mt-2 space-y-2 bg-brandDark/5 py-3 rounded-2xl max-w-[280px] mx-auto px-4 border border-brandDark/5">
                  <li><NuxtLink @click="isOpen = false" to="/inner-resources-mural" class="block text-sm text-brandDark/85 hover:text-brandDark">“Inner Resources” Mural</NuxtLink></li>
                  <li><NuxtLink @click="isOpen = false" to="/ellsworth-kelly-foundation-archivist" class="block text-sm text-brandDark/85 hover:text-brandDark">Ellsworth Kelly Foundation</NuxtLink></li>
                  <li><NuxtLink @click="isOpen = false" to="/dominguez-sculpture-restoration" class="block text-sm text-brandDark/85 hover:text-brandDark">Benjamin Dominguez Sculptures</NuxtLink></li>
                  <li><NuxtLink @click="isOpen = false" to="/blessing-animals-mural-olvera-street" class="block text-sm text-brandDark/85 hover:text-brandDark">Blessing of the Animals Mural</NuxtLink></li>
                </ul>
              </transition>
            </li>
            <li><NuxtLink @click="isOpen = false" to="/gallery" class="text-brandDark hover:underline">Gallery</NuxtLink></li>
            
            <!-- Mobile Services with Dropdown Toggle -->
            <li class="w-full text-center">
              <div class="flex items-center justify-center gap-2">
                <NuxtLink @click="isOpen = false" to="/services" class="text-brandDark hover:underline">Services</NuxtLink>
                <button @click.stop="mobileServicesOpen = !mobileServicesOpen" class="p-1 focus:outline-none" aria-label="Toggle services menu">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform text-brandDark" :class="{ 'rotate-180': mobileServicesOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <transition name="fade">
                <ul v-if="mobileServicesOpen" class="mt-2 space-y-2 bg-brandDark/5 py-3 rounded-2xl max-w-[280px] mx-auto px-4 border border-brandDark/5">
                  <li><NuxtLink @click="isOpen = false" to="/collection-management" class="block text-sm text-brandDark/85 hover:text-brandDark">Collections Management</NuxtLink></li>
                  <li><NuxtLink @click="isOpen = false" to="/research-cataloging" class="block text-sm text-brandDark/85 hover:text-brandDark">Archival Research &amp; Cataloging</NuxtLink></li>
                  <li><NuxtLink @click="isOpen = false" to="/digital-preservation" class="block text-sm text-brandDark/85 hover:text-brandDark">Digital Preservation</NuxtLink></li>
                  <li><NuxtLink @click="isOpen = false" to="/archival-services-san-miguel-de-allende" class="block text-sm text-brandDark/85 hover:text-brandDark">San Miguel de Allende Services</NuxtLink></li>
                </ul>
              </transition>
            </li>
            
            <li><NuxtLink @click="isOpen = false" to="/mentorship" class="text-brandDark hover:underline">Mentorship</NuxtLink></li>

            <li class="pt-2">
              <NuxtLink
                  @click="isOpen = false"
                  to="/contact"
                  class="contact-button bg-brandDark text-brandBg hover:bg-brandDark/90 transition px-6 py-2.5 rounded-full text-sm font-medium tracking-wide inline-block"
              >
                Let's talk
              </NuxtLink>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  </header>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
