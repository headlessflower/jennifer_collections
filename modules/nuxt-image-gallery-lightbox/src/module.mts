import { addComponentsDir, addImportsDir, createResolver, defineNuxtModule, addTypeTemplate } from "@nuxt/kit";

export interface GalleryModuleOptions {
    css?: boolean;
    defaults?: {
        gap?: number;
        radius?: number;
        backdrop?: string;
        columns?: { base?: number; sm?: number; md?: number; lg?: number };
        nuxtImg?: {
            preset?: string;
            format?: string;
            quality?: number;
            sizes?: string;
            densities?: string;
        };
    };
}

function detectNuxtImage(mods: any[] | undefined) {
    if (!mods?.length) return false;

    // modules can be:
    // - "string"
    // - [ "string", options ]
    // - function/module
    // We'll only reliably detect by string id / tuple first element.
    for (const m of mods) {
        const id =
            typeof m === "string"
                ? m
                : Array.isArray(m) && typeof m[0] === "string"
                    ? m[0]
                    : "";

        if (
            id === "@nuxt/image" ||
            id === "@nuxt/image-edge" ||
            id.includes("@nuxt/image")
        ) {
            return true;
        }
    }
    return false;
}

export default defineNuxtModule<GalleryModuleOptions>({
    meta: {
        name: "nuxt-image-gallery-lightbox",
        configKey: "imageGallery",
    },
    defaults: {
        css: true,
        defaults: {
            gap: 12,
            radius: 14,
            backdrop: "rgba(0,0,0,0.92)",
            columns: { base: 2, sm: 3, md: 4, lg: 5 },
            nuxtImg: {
                format: "webp",
                quality: 80,
                sizes: "sm:33vw md:25vw lg:20vw",
                densities: "1x 2x",
            },
        },
    },

    setup(options: GalleryModuleOptions, nuxt) {
        const resolver = createResolver(import.meta.url);

        const pub = (nuxt.options.runtimeConfig.public ||= {}) as any;
        pub.imageGallery ||= {};

        // ✅ autodetect @nuxt/image presence
        pub.imageGallery.hasNuxtImage = detectNuxtImage(nuxt.options.modules as any[]);

        const existing = (pub.imageGallery.defaults ||= {}) as any;

        pub.imageGallery.defaults = {
            ...(options.defaults || {}),
            ...(existing || {}),
            columns: {
                ...(options.defaults?.columns || {}),
                ...(existing.columns || {}),
            },
            nuxtImg: {
                ...(options.defaults?.nuxtImg || {}),
                ...(existing.nuxtImg || {}),
            },
        };

        addComponentsDir({
            path: resolver.resolve("runtime/components"),
            global: true,
            pathPrefix: false,
        });

        addImportsDir(resolver.resolve("runtime/composables"));

        addTypeTemplate({
            filename: "types/nuxt-image-gallery-lightbox.d.ts",
            getContents: () => `
declare module '#app' {
  interface PublicRuntimeConfig {
    imageGallery?: {
      hasNuxtImage?: boolean
      defaults?: {
        gap?: number
        radius?: number
        backdrop?: string
        columns?: { base?: number; sm?: number; md?: number; lg?: number }
        nuxtImg?: {
          preset?: string
          format?: string
          quality?: number
          sizes?: string
          densities?: string
        }
      }
    }
  }
}
export {}
      `.trim(),
        });

        if (options.css !== false) {
            nuxt.options.css ||= [];
            nuxt.options.css.push(resolver.resolve("runtime/styles/gallery.css"));
        }
    },
});