<template>
    <footer
        class="w-full border-t border-neutral-200 py-6 text-center text-sm text-neutral-600"
    >
        <p
            class="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2"
        >
            <span>© {{ year }} Jennifer Payan</span>
            <span class="hidden sm:inline">·</span>
            <span>
                Built by
                <a
                    href="https://headlessflower.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
                >
                    HeadlessFlower
                </a>
            </span>
        </p>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
