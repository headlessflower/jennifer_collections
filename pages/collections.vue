<script setup lang="ts">
const images = [
  { src: "/images/dominguez-1.png", thumb: "/images/dominguez-1.png", alt: "One", caption: "Caption 1" },
  { src: "/ellsworth-1.png", thumb: "/ellsworth-1.png", alt: "Two" },
  { src: "/olvera-st-1.png", thumb: "/olvera-st-1.png", alt: "Three" },
];


</script>
<template>
  <main style="max-width: 1100px; margin: 0 auto; padding: 24px;">
    <h1 style="margin-bottom: 16px;">Gallery Test</h1>
    <NuxtGallery :images="images"  />
  </main>
</template>
