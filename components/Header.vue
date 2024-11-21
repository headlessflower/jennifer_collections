<script setup></script>
<template>
    <header class="flex flex-col w-full justify-center items-center py-4">
        <strong class="text-3xl mb-4">Jennifer Payan</strong>
        <nav class="space-x-6">
            <NuxtLink
                to="/"
                class="uppercase text-xl hover:font-bold hover:underline ease-in-out duration-150"
                >Home</NuxtLink
            >
            <NuxtLink
                to="/about"
                class="uppercase text-xl hover:font-bold hover:underline ease-in-out duration-150"
                >About</NuxtLink
            >

            <NuxtLink
                to="/services"
                class="uppercase text-xl hover:font-bold hover:underline ease-in-out duration-150"
                >Services</NuxtLink
            >
            <NuxtLink
                to="/contact"
                class="uppercase text-xl hover:font-bold hover:underline ease-in-out duration-150"
                >Contact</NuxtLink
            >
        </nav>
    </header>
</template>
