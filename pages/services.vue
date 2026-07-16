<template>
    <section class="w-full">
        <!-- Page Header -->
        <div class="mx-auto mt-20 max-w-7xl px-6 md:px-12 py-16">
            <header class="text-center mb-16 space-y-4">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-brandDark">
                    Professional Services
                </h1>
                <p class="mt-3 text-lg md:text-xl text-brandDark/70 max-w-3xl mx-auto font-sans leading-relaxed">
                    Practical, standards‑aligned support for archives, museums, and studios—delivered with clear scope and predictable timelines.
                </p>

                <div class="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
                    <NuxtLink
                        to="/contact"
                        class="inline-flex items-center justify-center bg-brandDark text-brandBg hover:bg-brandDark/90 transition px-8 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-sm hover:shadow-md"
                    >
                        Request a Quote
                    </NuxtLink>
                    <NuxtLink
                        to="/about"
                        class="inline-flex items-center justify-center border border-brandDark/25 text-brandDark hover:bg-brandDark/5 transition px-8 py-3.5 rounded-full text-sm font-medium tracking-wide"
                    >
                        Learn More
                    </NuxtLink>
                </div>
            </header>

            <!-- Image Row with borders & soft shadow -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div class="rounded-[24px] border border-brandDark/10 overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                    <NuxtImg src="/images/ellsworth/ellsworth-1.png" alt="Collections Management" class="object-cover w-full h-48 hover:scale-105 transition-transform duration-500" format="webp" quality="80" sizes="sm:50vw lg:280px" loading="lazy" />
                </div>
                <div class="rounded-[24px] border border-brandDark/10 overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                    <NuxtImg src="/images/ellsworth/ellsworth-2.png" alt="Archival Research" class="object-cover w-full h-48 hover:scale-105 transition-transform duration-500" format="webp" quality="80" sizes="sm:50vw lg:280px" loading="lazy" />
                </div>
                <div class="rounded-[24px] border border-brandDark/10 overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                    <NuxtImg src="/images/ellsworth/ellsworth-3.png" alt="Digital Preservation" class="object-cover w-full h-48 hover:scale-105 transition-transform duration-500" format="webp" quality="80" sizes="sm:50vw lg:280px" loading="lazy" />
                </div>
                <div class="rounded-[24px] border border-brandDark/10 overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                    <NuxtImg src="/images/ellsworth/ellsworth-4.png" alt="Consulting & Training" class="object-cover w-full h-48 hover:scale-105 transition-transform duration-500" format="webp" quality="80" sizes="sm:50vw lg:280px" loading="lazy" />
                </div>
            </div>

            <!-- Areas of Focus Bar -->
            <div class="mb-16 rounded-[24px] border border-brandDark/10 bg-brandBg/60 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <p class="text-sm sm:text-base text-brandDark/85 font-sans">
                    <span class="font-bold text-brandDark">Areas of focus:</span> Collections Management &middot; Archival Research &middot; Digital Preservation &middot; Consulting
                </p>
                <NuxtLink
                    to="#packages"
                    class="text-sm font-semibold underline underline-offset-4 decoration-brandYellow decoration-2 text-brandDark hover:text-brandDark/70 transition"
                >
                    Jump to packages
                </NuxtLink>
            </div>

            <!-- Services Grid with Colorful Cards -->
            <div id="packages" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                
                <!-- Card 1: Collections Management (Yellow) -->
                <article class="group bg-brandYellow rounded-[32px] border border-brandDark/15 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[460px]">
                    <div>
                        <h2 class="text-2xl font-serif font-bold text-brandDark mb-3">Collections Management</h2>
                        <p class="text-sm text-brandDark/80 leading-relaxed font-sans mb-6">
                            Clean, accurate control of materials and data to support access and care.
                        </p>
                        <ul class="space-y-3 text-sm text-brandDark/85 font-sans">
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Accessioning, barcoding, and rehousing</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Database support: ArchivesSpace, Mimsy XG, TMS</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Object handling, location tracking, condition notes</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Preparation for loans &amp; exhibitions</span>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-8 pt-4 border-t border-brandDark/10 flex gap-4">
                        <NuxtLink to="/contact" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
                            Start a request
                        </NuxtLink>
                        <NuxtLink to="/collection-management" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
                            Scope details
                        </NuxtLink>
                    </div>
                </article>

                <!-- Card 2: Archival Research & Cataloging (Blue) -->
                <article class="group bg-brandBlue rounded-[32px] border border-brandDark/15 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[460px]">
                    <div>
                        <h2 class="text-2xl font-serif font-bold text-brandDark mb-3">Archival Research &amp; Cataloging</h2>
                        <p class="text-sm text-brandDark/80 leading-relaxed font-sans mb-6">
                            Standards‑aligned description and discovery to make materials findable and usable.
                        </p>
                        <ul class="space-y-3 text-sm text-brandDark/85 font-sans">
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Descriptive metadata (DACS, AAT, LoC)</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Cataloging in Axiell, CONTENTdm, ArchivesSpace</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Research dossiers &amp; exhibition checklists</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Rights, citation, and permissions guidance</span>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-8 pt-4 border-t border-brandDark/10 flex gap-4">
                        <NuxtLink to="/contact" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
                            Get research help
                        </NuxtLink>
                        <NuxtLink to="/research-cataloging" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
                            Learn more
                        </NuxtLink>
                    </div>
                </article>

                <!-- Card 3: Digital Preservation (Purple) -->
                <article class="group bg-brandPurple rounded-[32px] border border-brandDark/15 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[460px]">
                    <div>
                        <h2 class="text-2xl font-serif font-bold text-brandDark mb-3">Digital Preservation</h2>
                        <p class="text-sm text-brandDark/80 leading-relaxed font-sans mb-6">
                            Stabilize born‑digital and digitized assets with practical workflows and documentation.
                        </p>
                        <ul class="space-y-3 text-sm text-brandDark/85 font-sans">
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Digitization planning &amp; intake</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>File‑naming, inventory, and fixity checks</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Storage tiers, backups, and retention</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Basic conservation tasks incl. freezing/IPM</span>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-8 pt-4 border-t border-brandDark/10 flex gap-4">
                        <NuxtLink to="/contact" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
                            Plan preservation
                        </NuxtLink>
                        <NuxtLink to="/digital-preservation" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
                            Workflow overview
                        </NuxtLink>
                    </div>
                </article>

                <!-- Card 4: Consulting & Training (Green) -->
                <article class="group bg-brandGreen rounded-[32px] border border-brandDark/15 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[460px]">
                    <div>
                        <h2 class="text-2xl font-serif font-bold text-brandDark mb-3">Consulting &amp; Training</h2>
                        <p class="text-sm text-brandDark/80 leading-relaxed font-sans mb-6">
                            Short, focused engagements to diagnose issues and upskill teams.
                        </p>
                        <ul class="space-y-3 text-sm text-brandDark/85 font-sans">
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Policy &amp; procedure tune‑ups</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>System audits &amp; recommendations</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Hands‑on workshops &amp; documentation</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>On‑call support blocks</span>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-8 pt-4 border-t border-brandDark/10 flex gap-4">
                        <NuxtLink to="/contact" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
                            Book a consult
                        </NuxtLink>
                        <NuxtLink to="/services#rates" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
                            Rates
                        </NuxtLink>
                    </div>
                </article>

                <!-- Card 5: Website Care (Yellow) -->
                <article class="group bg-brandYellow rounded-[32px] border border-brandDark/15 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[460px]">
                    <div>
                        <h2 class="text-2xl font-serif font-bold text-brandDark mb-3">Website Care (Optional)</h2>
                        <p class="text-sm text-brandDark/80 leading-relaxed font-sans mb-6">
                            Monthly maintenance for security, uptime, and content updates.
                        </p>
                        <ul class="space-y-3 text-sm text-brandDark/85 font-sans">
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Core/plugin updates &amp; testing</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Backups &amp; monitoring</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Performance &amp; accessibility checks</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Up to 1 hr content edits/mo</span>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-8 pt-4 border-t border-brandDark/10 flex gap-4">
                        <NuxtLink to="https://headlessflower.dev/monthly-maintenance" target="_blank" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
                            Ask about plans
                        </NuxtLink>
                        <NuxtLink to="https://headlessflower.dev/databases" target="_blank" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
                            Plan details
                        </NuxtLink>
                    </div>
                </article>

                <!-- Card 6: Custom Projects (Blue) -->
                <article class="group bg-brandBlue rounded-[32px] border border-brandDark/15 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[460px]">
                    <div>
                        <h2 class="text-2xl font-serif font-bold text-brandDark mb-3">Custom Projects</h2>
                        <p class="text-sm text-brandDark/80 leading-relaxed font-sans mb-6">
                            Tailored scopes for unique collections or timelines.
                        </p>
                        <ul class="space-y-3 text-sm text-brandDark/85 font-sans">
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Short sprints (1–2 weeks)</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Quarterly roadmaps</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Remote or on‑site options</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 size-1.5 rounded-full bg-brandDark/60 flex-shrink-0"></span>
                                <span>Clear deliverables &amp; documentation</span>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-8 pt-4 border-t border-brandDark/10 flex gap-4">
                        <NuxtLink to="/contact" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
                            Share your scope
                        </NuxtLink>
                        <NuxtLink to="/services#process" class="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brandDark/70 transition">
                            Process
                        </NuxtLink>
                    </div>
                </article>
            </div>

            <!-- Process Strip Redesigned -->
            <div id="process" class="mt-20 rounded-[32px] border border-brandDark/10 bg-brandBg/60 p-8 lg:p-10 shadow-sm">
                <h3 class="text-3xl font-serif font-bold text-brandDark mb-2">Process</h3>
                <p class="text-sm text-brandDark/70 font-sans mb-8">Four simple stages to align, execute, and deliver projects.</p>
                <ol class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-sm font-sans">
                    <li class="bg-white/40 border border-brandDark/10 rounded-2xl p-5 hover:bg-white/60 transition shadow-sm">
                        <p class="font-bold text-brandDark text-base">1) Discovery</p>
                        <p class="text-brandDark/85 mt-2 leading-relaxed">
                            Quick call to align on goals, scope, and access.
                        </p>
                    </li>
                    <li class="bg-white/40 border border-brandDark/10 rounded-2xl p-5 hover:bg-white/60 transition shadow-sm">
                        <p class="font-bold text-brandDark text-base">2) Plan</p>
                        <p class="text-brandDark/85 mt-2 leading-relaxed">
                            Timeline, milestones, and deliverables.
                        </p>
                    </li>
                    <li class="bg-white/40 border border-brandDark/10 rounded-2xl p-5 hover:bg-white/60 transition shadow-sm">
                        <p class="font-bold text-brandDark text-base">3) Execute</p>
                        <p class="text-brandDark/85 mt-2 leading-relaxed">
                            On‑site or remote work with regular updates.
                        </p>
                    </li>
                    <li class="bg-white/40 border border-brandDark/10 rounded-2xl p-5 hover:bg-white/60 transition shadow-sm">
                        <p class="font-bold text-brandDark text-base">4) Handoff</p>
                        <p class="text-brandDark/85 mt-2 leading-relaxed">
                            Summary, documentation, and next steps.
                        </p>
                    </li>
                </ol>
                <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink
                        to="/contact"
                        class="inline-flex items-center justify-center bg-brandDark text-brandBg hover:bg-brandDark/90 transition px-8 py-3 rounded-full text-sm font-medium tracking-wide shadow-sm"
                    >
                        Contact Form
                    </NuxtLink>
                    <NuxtLink
                        to="/services#rates"
                        class="inline-flex items-center justify-center border border-brandDark/20 text-brandDark hover:bg-brandDark/5 transition px-8 py-3 rounded-full text-sm font-medium tracking-wide"
                    >
                        View Rates
                    </NuxtLink>
                </div>
            </div>

            <!-- FAQ / Notes -->
            <div id="rates" class="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
                <article class="lg:col-span-2 rounded-[32px] border border-brandDark/10 bg-brandBg/60 p-8 lg:p-10 shadow-sm flex flex-col justify-between">
                    <div>
                        <h3 class="text-3xl font-serif font-bold text-brandDark mb-6">Rates &amp; Terms</h3>
                        <ul class="space-y-4 text-sm font-sans text-brandDark/85">
                            <li class="flex flex-col sm:flex-row sm:items-baseline gap-1">
                                <span class="font-bold text-brandDark min-w-[120px]">Hourly:</span>
                                <span>Project‑based quotes available; on‑call blocks for short tasks.</span>
                            </li>
                            <li class="flex flex-col sm:flex-row sm:items-baseline gap-1">
                                <span class="font-bold text-brandDark min-w-[120px]">Deposit:</span>
                                <span>50% to start; balance due within 90 days of final delivery.</span>
                            </li>
                            <li class="flex flex-col sm:flex-row sm:items-baseline gap-1">
                                <span class="font-bold text-brandDark min-w-[120px]">Scope:</span>
                                <span>Work not listed in the agreement is billed as a new service order.</span>
                            </li>
                            <li class="flex flex-col sm:flex-row sm:items-baseline gap-1">
                                <span class="font-bold text-brandDark min-w-[120px]">Fixes window:</span>
                                <span>7 days from final submission for error corrections (typos, incorrect info, etc).</span>
                            </li>
                        </ul>
                    </div>
                </article>
                
                <aside class="rounded-[32px] border border-brandDark/15 bg-brandYellow p-8 shadow-sm flex flex-col justify-between min-h-[260px]">
                    <div>
                        <h4 class="text-2xl font-serif font-bold text-brandDark mb-3">
                            Need something custom?
                        </h4>
                        <p class="text-sm text-brandDark/80 leading-relaxed font-sans">
                            Share goals and constraints—I'll respond with options and a clear estimate.
                        </p>
                    </div>
                    <NuxtLink
                        to="/contact"
                        class="mt-6 inline-flex items-center justify-center bg-brandDark text-brandBg hover:bg-brandDark/90 transition px-6 py-3 rounded-full text-sm font-medium tracking-wide shadow-sm"
                    >
                        Talk to Jennifer
                    </NuxtLink>
                </aside>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
useHead({
    title: "Services — Jennifer Payan",
    meta: [
        {
            name: "description",
            content:
                "Collections management, archival research, cataloging, digital preservation, and consulting services for archives, museums, and studios.",
        },
    ],
});
</script>

<style scoped></style>
