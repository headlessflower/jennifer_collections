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
                    <img
                        :src="project.hero.src"
                        :alt="project.hero.alt"
                        class="h-72 sm:h-96 w-full object-cover"
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
            <article
                class="prose prose-neutral dark:prose-invert max-w-none space-y-4"
            >
                <h2>Overview</h2>
                <p>
                    From June–August 2025, I worked as an Archives and Library
                    Intern at the Ellsworth Kelly Studio in Spencertown, New
                    York, a Hudson Valley institution that stewards the artist’s
                    archive and a collection of more than 10,000 works. The
                    Studio and the Ellsworth Kelly Foundation maintain Kelly’s
                    artistic and philanthropic legacy, supporting work in the
                    arts, historic preservation, environmental conservation, and
                    education.
                </p>
                <p>
                    My project supported two major initiatives: the development
                    of the Studio’s new artist monograph library and the
                    long-term preservation of Carlson Fabrication sculpture
                    files. Working with Studio archivists and librarians, I
                    processed, cataloged, and shelved collected artist
                    monographs and exhibition catalogues, creating metadata
                    records in TinyCat and implementing Library of Congress
                    classification to make the library discoverable and
                    accessible.
                </p>
                <p>
                    In partnership with Studio staff, I also contributed to the
                    digitization of the Carlson Fabrication Files. Records were
                    transferred to the Studio after Peter Carlson’s Los Angeles
                    fabrication and conservation studio closed in 2023. These
                    files document the fabrication, cleaning, and restoration
                    histories of sculptures made by both Carlson and Lippincott,
                    and they will support future conservation research. My role
                    included preparing and digitizing each Sculpture File
                    according to established Digital File Naming Conventions to
                    ensure accurate, long-term remote access for researchers and
                    conservators.
                </p>
            </article>

            <!-- Image placeholder -->
            <figure
                class="mt-12 rounded-2xl border border-foreground/10 bg-foreground/5
         w-full max-w-5xl mx-auto overflow-hidden"
            >
                <img
                    src="/ellsworth-4.png"
                    alt="Jennifer standing in Ellsworth's Studio"
                    class="w-full h-auto object-contain"
                />
            </figure>

            <!-- Section 1 -->
            <article
                class="prose prose-neutral dark:prose-invert max-w-none mt-8 space-y-4"
            >
                <h2>Research & Preparation</h2>
                <p>
                    Before beginning digitization, I conducted a preliminary
                    assessment of the Carlson Fabrication sculpture
                    files—reviewing their physical condition, existing
                    organization, and the metadata needs required for long-term
                    digital access. I met with Studio archivists, the project
                    supervisor, and fellow interns to clarify goals, establish
                    benchmarks, and refine a weekly production target of 25
                    files per week, or approximately 8–9 files per intern, to
                    ensure full project completion within the internship period.
                </p>
                <p>
                    Our planning process drew on archival standards such as DACS
                    for description and AIC conservation guidelines for handling
                    and imaging condition-sensitive materials. We also reviewed
                    the Studio’s established Digital File Naming Conventions,
                    created by previous interns, to maintain consistency and
                    support future researcher usability.
                </p>
                <p>
                    To prepare the files, I used flatbed scanning equipment,
                    gloves, book cradles, and other preservation-oriented
                    supports depending on the materials housed in each folder.
                    Workflows included pre-scan review, arrangement
                    verification, metadata capture, high-resolution imaging,
                    quality control, and systematic upload into the Studio’s
                    digital storage environment.
                </p>
                <p>
                    Challenges included variable file sizes, mixed media
                    formats, and documentation created across multiple decades
                    by both Carlson and Lippincott fabrication teams. I
                    addressed these constraints by coordinating with archivists
                    on handling protocols, adjusting scanning strategies for
                    oversized or fragile materials, and documenting any
                    deviations from standard workflow for future reference.
                    Continuous communication among interns and staff ensured
                    that the digitization pace remained steady while upholding
                    accuracy, preservation practices, and long-term
                    accessibility goals.
                </p>
            </article>

            <!-- Image placeholder -->
            <figure
                class="mt-12 rounded-2xl border border-foreground/10 bg-foreground/5
         w-full max-w-5xl mx-auto overflow-hidden"
            >
                <img
                    src="/ellsworth-2.png"
                    alt="Jennifer entering artifact information into the database.  "
                    class="w-full h-auto object-contain"
                />
            </figure>

            <!-- Section 2 -->
            <article
                class="prose prose-neutral dark:prose-invert max-w-none mt-8 space-y-4"
            >
                <h2>Execution & Process</h2>
                <p>
                    For the Carlson Fabrication Files digitization, I followed a
                    consistent workflow developed with Studio archivists and
                    fellow interns. Each file was retrieved from storage,
                    checked for fragile or oversized materials, and stabilized
                    before imaging. I verified the internal order of
                    documents—such as correspondence, fabrication drawings,
                    treatment reports, and photographs—and flagged any condition
                    issues for staff review.
                </p>

                <p>
                    Digitization included scanning all materials at
                    preservation-appropriate resolutions and applying the
                    Studio’s established Digital File Naming Conventions so each
                    digital surrogate clearly reflected the sculpture ID, file
                    type, and sequence. I recorded descriptive metadata for each
                    file, including artist, fabricator, sculpture ID or title,
                    date range, and document types. Any missing records, unusual
                    treatments, or links to Lippincott-fabricated works were
                    noted to support future conservation research.
                </p>

                <p>
                    After scanning, I completed quality control checks for
                    clarity, completeness, and correct orientation, re-scanning
                    items as needed. Approved files were saved into the Studio’s
                    digital storage system following established folder
                    hierarchies to maintain the original intellectual order.
                </p>

                <p>
                    To meet project goals, the internship team maintained a
                    production target of <strong>25 files per week</strong>, or
                    approximately <strong>8–9 files per intern</strong>,
                    ensuring all Carlson Fabrication Files were digitized by the
                    end of the program.
                </p>

                <p>
                    In parallel, I contributed to building the Studio’s Artist
                    Monograph Library. This included creating and updating
                    catalog records in TinyCat, applying consistent metadata
                    fields (author, title, publisher, year, subjects), and
                    implementing Library of Congress classification to assign
                    call numbers. I labeled and shelved materials alphabetically
                    by artist, improving accessibility and browse-ability for
                    staff and researchers.
                </p>

                <p>
                    Measurable outcomes include: steady digitization of 25
                    sculpture files weekly; complete metadata capture for each
                    digitized file; and the establishment of a searchable,
                    systematically organized monograph library with LOC call
                    numbers, TinyCat records, and improved physical arrangement.
                </p>
            </article>

            <!-- Image placeholder -->
            <figure
                class="mt-12 rounded-2xl border border-foreground/10 bg-foreground/5
         w-full max-w-5xl mx-auto overflow-hidden"
            >
                <img
                    src="/ellsworth-project-4.png"
                    alt="Data table with project progress"
                    class="w-full h-auto object-contain"
                />
            </figure>

            <!-- Section 3 -->
            <article
                class="prose prose-neutral dark:prose-invert max-w-none mt-8 space-y-4"
            >
                <h2>Impact & Reflection</h2>
                <p>
                    This project significantly enhanced long-term access to the
                    Ellsworth Kelly Studio’s archival holdings while
                    strengthening the preservation of key historical
                    documentation. The digitization of the Carlson Fabrication
                    Files ensures that future conservators, scholars, and Studio
                    staff can remotely consult detailed fabrication and
                    treatment records—resources that are essential for
                    responsible preservation, exhibition planning, and ongoing
                    research into Kelly’s sculptural practice. By completing
                    digitization at a steady rate of 25 files per week, the
                    internship cohort transformed a previously inaccessible body
                    of material into a usable, well-organized digital archive.
                </p>

                <p>
                    The development of the Artist Monograph Library further
                    improved access by establishing a discoverable,
                    systematically cataloged reference collection. Implementing
                    Library of Congress classification and creating consistent
                    TinyCat metadata made the library a functional research tool
                    that will continue to grow and support curatorial, archival,
                    and scholarly work at the Studio.
                </p>

                <p>
                    Through this experience, I gained a deeper understanding of
                    the relationship between physical preservation and digital
                    access, especially the importance of clear workflows,
                    quality control, and consistent metadata in large-scale
                    digitization projects. I also learned how fabrication
                    records can directly shape conservation decision-making and
                    how access improvements can support institutional memory and
                    interdisciplinary research.
                </p>

                <p>
                    For future recommendations, I suggest establishing a
                    periodic review of file naming conventions and metadata
                    fields to ensure they evolve with researcher needs.
                    Additionally, implementing a standardized intake process for
                    new monographs and archival materials would maintain
                    consistency as the library and digital archive continue to
                    expand.
                </p>
            </article>

            <!-- Meta footer -->
            <div class="mt-10 grid gap-4 sm:grid-cols-3">
                <div class="rounded-2xl border border-foreground/10 p-4">
                    <p class="text-xs uppercase tracking-wide opacity-60">
                        Role
                    </p>
                    <p class="mt-1 text-sm">Archivist Intern</p>
                </div>
                <div class="rounded-2xl border border-foreground/10 p-4">
                    <p class="text-xs uppercase tracking-wide opacity-60">
                        Location
                    </p>
                    <p class="mt-1 text-sm">Spencertown / New York</p>
                </div>
                <div class="rounded-2xl border border-foreground/10 p-4">
                    <p class="text-xs uppercase tracking-wide opacity-60">
                        Year
                    </p>
                    <p class="mt-1 text-sm">2025</p>
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

const defaults: Record<string, Project> = {
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
};

const route = useRoute();
const slug = String(route.params.slug || "");
const project = defaults[slug] ?? {
    slug,
    title: "Ellsworth Kelly Foundation Archivist",
    shortDescription:
        "Carlson Fabrication in Los Angeles produced Ellsworth Kelly’s sculptures beginning in 1977 and also handled conservation and restoration of works fabricated by both Carlson and Lippincott. After the studio closed in 2023, its sculpture files were transferred to the Ellsworth Kelly Studio. These records will support future conservators in understanding fabrication methods and past treatments. Summer interns are digitizing each Carlson Sculpture File and applying established Digital File Naming Conventions to ensure long-term remote access and research use.",
    hero: {
        src: "ellsworth-project-1.png",
        alt: "Image of Ellsworth Kelly Studio totems",
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
