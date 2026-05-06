import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import type { GalleryImage } from "../types";

export function useLightbox(images: GalleryImage[]) {
    const isOpen = ref(false);
    const index = ref(0);

    const active = computed(() => images[index.value]);

    function open(i: number) {
        index.value = clamp(i, 0, images.length - 1);
        isOpen.value = true;
    }
    function close() {
        isOpen.value = false;
    }
    function next() {
        index.value = (index.value + 1) % images.length;
    }
    function prev() {
        index.value = (index.value - 1 + images.length) % images.length;
    }

    function onKeydown(e: KeyboardEvent) {
        if (!isOpen.value) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
    }

    onMounted(() => window.addEventListener("keydown", onKeydown));
    onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));

    watch(isOpen, (v) => {
        if (!process.client) return;
        const el = document.documentElement;
        if (v) el.style.overflow = "hidden";
        else el.style.overflow = "";
    });

    return { isOpen, index, active, open, close, next, prev };
}

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}