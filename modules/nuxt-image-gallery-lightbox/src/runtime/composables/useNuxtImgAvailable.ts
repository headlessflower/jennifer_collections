import { ref, onMounted } from "vue";

export function useNuxtImgAvailable() {
    const available = ref(false);

    onMounted(() => {
        // Nuxt Image registers a global component named "NuxtImg" (usually).
        const anyVue = (window as any)?.__VUE__ || null;
        // We can’t reliably read app context here, so we do a safe heuristic:
        // If custom element / component exists, we still attempt render via dynamic component.
        // The SmartImg component will try NuxtImg first; if it errors, it falls back.
        available.value = true;
    });

    return { nuxtImgAvailable: available };
}