<script setup lang="ts">
const images = [
  { src: "/images/dominguez/dominguez-1.png", thumb: "/images/dominguez/dominguez-1.png", alt: "One", caption: "Caption 1" },
  { src: "/images/ellsworth/ellsworth-1.png", thumb: "/images/ellsworth/ellsworth-1.png", alt: "Two" },
  { src: "/images/blessings_animals/olvera-st-1.png", thumb: "/images/blessings_animals/olvera-st-1.png", alt: "Three" },
];


</script>
<template>
  <main style="max-width: 1100px; margin: 0 auto; padding: 24px;">
    <h1 style="margin-bottom: 16px;">Gallery Test</h1>
    <NuxtGallery :images="images"  />
  </main>
</template>
