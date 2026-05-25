<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
<template>
  <header class="fixed top-0 w-full z-20" >
    <nav class="hero-nav flex justify-between bg-brandBg/80 backdrop-blur-md items-center px-8 py-5 relative border-b border-brandDark/10">
      <div class="nav-left">
        <h1 class="logo text-2xl font-serif font-bold tracking-tight text-brandDark lowercase">jennifer payan</h1>
      </div>

      <!-- Desktop Menu Links -->
      <ul class="nav-links hidden md:flex space-x-8 text-sm font-medium text-brandDark/85">
        <li><NuxtLink to="/" class="hover:text-brandDark hover:underline underline-offset-4 decoration-brandYellow decoration-2 transition">Home</NuxtLink></li>
        <li><NuxtLink to="/about" class="hover:text-brandDark hover:underline underline-offset-4 decoration-brandYellow decoration-2 transition">About Me</NuxtLink></li>
        <li><NuxtLink to="/experience" class="hover:text-brandDark hover:underline underline-offset-4 decoration-brandYellow decoration-2 transition">Experience</NuxtLink></li>
        <li><NuxtLink to="/projects" class="hover:text-brandDark hover:underline underline-offset-4 decoration-brandYellow decoration-2 transition">Projects</NuxtLink></li>
        <li><NuxtLink to="/services" class="hover:text-brandDark hover:underline underline-offset-4 decoration-brandYellow decoration-2 transition">Services</NuxtLink></li>
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
           <li><NuxtLink @click="isOpen = false" to="/projects" class="text-brandDark hover:underline">Projects</NuxtLink></li>
            <li><NuxtLink @click="isOpen = false" to="/services" class="text-brandDark hover:underline">Services</NuxtLink></li>

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
