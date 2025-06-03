<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
<template>
  <header >
    <nav class="hero-nav flex justify-between bg-cream items-center px-8 py-6 relative">
      <div class="nav-left">
        <h1 class="logo text-2xl font-bold lowercase">jennifer payan</h1>
      </div>

      <!-- Desktop Menu Links -->
      <ul class="nav-links hidden md:flex space-x-8">
        <li><NuxtLink to="/" class="hover:underline">Home</NuxtLink></li>
        <li><NuxtLink to="/about" class="hover:underline">About Me</NuxtLink></li>
        <li><NuxtLink to="/collections" class="hover:underline">Collections</NuxtLink></li>
        <li><NuxtLink to="/services" class="hover:underline">Experience</NuxtLink></li>
      </ul>

      <!-- Mobile Menu Toggle -->
      <button
          class="md:hidden focus:outline-none"
          @click="isOpen = !isOpen"
          aria-label="Toggle navigation"
      >
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Contact Button (Desktop) -->
      <div class="nav-right hidden md:block">
        <a href="#contact" class="contact-button bg-terracotta text-white hover:bg-terracotta-hover transition-colors px-4 py-2 rounded-full font-medium">
          Let&apos;s talk
        </a>
      </div>

      <!-- Mobile Dropdown Menu -->
      <transition name="fade">
        <div
            v-if="isOpen"
            class="mobile-menu absolute top-full left-0 w-full bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg z-50 md:hidden"
        >
          <ul class="flex flex-col items-center py-4 space-y-4">
            <li><NuxtLink @click="isOpen = false" to="/" class="text-indigo-900 hover:underline">Home</NuxtLink></li>
            <li><NuxtLink @click="isOpen = false" to="/about" class="text-indigo-900 hover:underline">About Me</NuxtLink></li>
            <li><NuxtLink @click="isOpen = false" to="/services" class="text-indigo-900 hover:underline">Work</NuxtLink></li>
            <li><NuxtLink @click="isOpen = false" to="/collections" class="text-indigo-900 hover:underline">Collections</NuxtLink></li>
            <li>
              <button
                  @click="isOpen = false"
                  class="contact-button bg-terracotta text-indigo-900 hover:bg-terracotta-hover transition-colors px-4 py-2 rounded-full font-medium"
              >
                Let&apos;s talk
              </button>
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
