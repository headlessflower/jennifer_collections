<!-- File: pages/projects/[slug].vue -->
<template>
    <section class="w-full">
        <!-- Hero -->
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 mt-16">
            <nav class="mb-6 text-sm opacity-80">
                <NuxtLink
                    to="/projects"
                    class="underline underline-offset-4 hover:opacity-80"
                    >← Back to Projects</NuxtLink
                >
            </nav>

            <div
                class="rounded-2xl overflow-hidden border border-foreground/10 shadow-sm"
            >
                <div class="relative">
                    <NuxtImg
                        :src="project.hero.src"
                        :alt="project.hero.alt"
                        class="w-full max-h-[80vh] object-contain rounded-2xl"
                        format="webp"
                        quality="80"
                        sizes="sm:100vw md:896px"
                        loading="eager"
                        fetchpriority="high"
                    />
                    <!-- Optional overlay for readability -->
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0"
                    ></div>
                </div>

                <header class="p-6 sm:p-8">
                    <h1
                        class="text-3xl sm:text-4xl font-semibold tracking-tight"
                    >
                        {{ project.title }}
                    </h1>
                    <p class="mt-3 text-base/7 sm:text-lg/8 opacity-80">
                        {{ project.shortDescription }}
                    </p>
                </header>
            </div>
        </div>

        <!-- Body -->
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16">
            <!-- Intro / Overview -->
            <article class="prose prose-neutral dark:prose-invert max-w-none">
                <h2>Overview</h2>
                <p>
                    Paul Botello’s <em>Inner Resources</em> mural was created in 2000. The mural is one of the largest in Los Angeles and is part of the LA County Civic Art Collection.
                </p>
                <p>
                    The Los Angeles County Department of Arts and Culture (Arts and Culture)’s Civic Art Division, has contracted Site & Studio Conservation to perform conservation of the <em>Inner Resources</em> mural, located in City Terrace Park (1126 N Hazard Ave, Los Angeles, CA 90063). One of the largest murals in Los Angeles, <em>Inner Resources</em> celebrates East Los Angeles culture, nature, and education. The contract with Site & Studio Conservation includes opportunities for four emerging conservators and/or artists to participate in the conservation.
                </p>
            </article>

            <!-- Image placeholder -->
            <figure
                class="mt-12 rounded-2xl border border-foreground/10 bg-foreground/5
         w-full max-w-5xl mx-auto overflow-hidden"
            >
                <span class="text-sm">
                    <NuxtImg
                        src="/images/dominguez/dominguez-1.png"
                        alt="Data table with project progress"
                        class="w-full h-auto object-contain"
                        format="webp"
                        quality="80"
                        sizes="sm:100vw md:800px"
                        loading="lazy"
                    />
                </span>
            </figure>

            <!-- Section 1 -->
            <article class="prose prose-neutral dark:prose-invert max-w-none mt-8">
                <h2>What is Art Conservation?</h2>
                <p>
                    Art Conservation is a profession devoted to the care of art and items of cultural significance through research, examination, documentation, treatment, preventive care, and education.
                </p>
            </article>

            <!-- Image placeholder -->
            <figure
                class="mt-12 rounded-2xl border border-foreground/10 bg-foreground/5
         w-full max-w-5xl mx-auto overflow-hidden"
            >
                <span class="text-sm"
                    ><NuxtImg
                        src="/images/dominguez/dominguez-2.png"
                        alt="painting dragon scales"
                        class="w-full h-auto object-contain"
                        format="webp"
                        quality="80"
                        sizes="sm:100vw md:800px"
                        loading="lazy"
                /></span>
            </figure>

            <!-- Section 2 -->
            <article class="prose prose-neutral dark:prose-invert max-w-none mt-8">
                <h2>Who is Conserving the Mural?</h2>
                <p>
                    A group of conservators, technicians, and apprentices led by Site & Studio Conservation are working together along with the artist, Paul Botello, to conserve the mural.
                </p>
                <p>
                    The Los Angeles County Department of Arts and Culture, in collaboration with the First Supervisorial District and Department of Parks and Recreation, are funding and managing the project to ensure the mural is preserved.
                </p>
            </article>

            <figure
                class="mt-12 rounded-2xl border border-foreground/10 bg-foreground/5
         w-full max-w-5xl mx-auto overflow-hidden"
            >
                <span class="opacity-60 text-sm"
                    ><img class="w-full h-auto object-contain" src="/" alt=""></span
                >
            </figure>

            <!-- Section 3 -->
            <article class="prose prose-neutral dark:prose-invert max-w-none mt-8">
                <h2>What are the Conservators Doing?</h2>
                <p>
                    The conservation work involves executing on-site treatments to preserve and restore the mural. This includes:
                </p>
                <ul class="list-disc pl-6 space-y-2 mt-4">
                    <li>Performing thorough surface cleaning to remove accumulated dirt, grime, and environmental accretions.</li>
                    <li>Stabilizing flaking and blistering paint layers to prevent further paint loss.</li>
                    <li>Documenting condition assessments and conservation steps for long-term records.</li>
                    <li>Fostering public engagement and mentorship opportunities for emerging conservators and local artists.</li>
                </ul>
            </article>

            <!-- Meta footer -->
            <div class="mt-10 grid gap-4 sm:grid-cols-3">
                <div class="rounded-2xl border border-foreground/10 p-4">
                    <p class="text-xs uppercase tracking-wide opacity-60">
                        Role
                    </p>
                    <p class="mt-1 text-sm">Conservation Technician</p>
                </div>
                <div class="rounded-2xl border border-foreground/10 p-4">
                    <p class="text-xs uppercase tracking-wide opacity-60">
                        Location
                    </p>
                    <p class="mt-1 text-sm">City Terrace, CA / City Terrace Park</p>
                </div>
                <div class="rounded-2xl border border-foreground/10 p-4">
                    <p class="text-xs uppercase tracking-wide opacity-60">
                        Year
                    </p>
                    <p class="mt-1 text-sm">2024</p>
                </div>
            </div>

            <div class="mt-10">
                <NuxtLink
                    to="/projects"
                    class="inline-flex items-center justify-center border border-burnt hover:bg-burnt rounded-2xl px-5 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition"
                >
                    Back to all projects
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

type Project = {
    slug: string;
    title: string;
    shortDescription: string;
    hero: { src: string; alt: string };
};

// Mock data (replace with real data/CMS fetch)
const defaults: Record<string, Project> = {
    "inner-resources": {
        slug: "inner-resources",
        title: "“Inner Resources” Mural Conservation",
        shortDescription:
            "Conservation apprenticeship supporting research, assessment, and on-site treatment at City Terrace Park in East Los Angeles.",
        hero: {
            src: "https://images.unsplash.com/photo-1520435323-4f1e9a8a1c78?q=80&w=2000&auto=format&fit=crop",
            alt: "Large public mural with conservation tools nearby",
        },
    },
    "ellsworth-kelly-foundation-archivist": {
        slug: "ellsworth-kelly-foundation-archivist",
        title: "Ellsworth Kelly Foundation Archivist (Upstate NY)",
        shortDescription:
            "Library & archives internship focused on processing, digitization, metadata creation, and monograph library support.",
        hero: {
            src: "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=2000&auto=format&fit=crop",
            alt: "Archival stacks and artist monographs on shelving",
        },
    },
    "dominguez-sculpture-restoration": {
        slug: "dominguez-sculpture-restoration",
        title: "Dominguez Sculpture Restoration (Whittier Narrows)",
        shortDescription:
            "Public art conservation assisting with documentation, surface stabilization, and community-engaged preservation.",
        hero: {
            src: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2000&auto=format&fit=crop",
            alt: "Outdoor sculpture under restoration with scaffolding",
        },
    },
};

const route = useRoute();
const slug = String(route.params.slug || "");
const project = defaults[slug] ?? {
    slug,
    title: "Inner Resources Mural",
    shortDescription:
        "Restoration and conservation of the Inner Resources Mural by Paul Botello located at City Terrace Park",
    hero: {
        src: "/images/inner_resources/inner-resources.png",
        alt: "Jennifer on scaffolding working on her section of the mural",
    },
};
</script>

<style scoped>
/* Keep subtle elevation consistent with Services */
figure,
.rounded-2xl {
    transition:
        box-shadow 200ms ease,
        border-color 200ms ease;
}
</style>
