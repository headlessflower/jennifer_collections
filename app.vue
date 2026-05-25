<template>
    <div class="bg-brandBg text-brandDark min-h-screen font-sans selection:bg-brandYellow selection:text-brandDark">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
