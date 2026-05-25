<script setup></script>
<template>
    <section
        class="education-experience-section py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brandDark/10 text-brandDark"
    >
        <div class="my-10">
            <!-- Section Title -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-serif font-bold text-brandDark tracking-tight">
                    Education &amp; Experience
                </h2>
            </div>
            
            <!-- Columns -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <!-- Column 1: Education -->
                <div class="space-y-8">
                    <strong class="text-xs font-bold tracking-wider text-brandDark/50 uppercase block pb-3 border-b border-brandDark/10">Education</strong>
                    <div class="space-y-1">
                        <p class="text-xs font-semibold text-brandDark/65">2023 - 2026</p>
                        <h3 class="text-lg font-serif font-bold text-brandDark">
                            Master of Library &amp; Information Science
                        </h3>
                        <p class="text-sm text-brandDark/80">
                            San Jose State University
                        </p>
                    </div>
                    <div class="space-y-1">
                        <p class="text-xs font-semibold text-brandDark/65">2020 - 2022</p>
                        <h3 class="text-lg font-serif font-bold text-brandDark">
                            Bachelor of Arts, Art History
                        </h3>
                        <p class="text-sm text-brandDark/80">
                            University of California, Los Angeles
                        </p>
                    </div>
                    <div class="space-y-1">
                        <p class="text-xs font-semibold text-brandDark/65">2016 - 2020</p>
                        <h3 class="text-lg font-serif font-bold text-brandDark">
                            Associate in Arts, Art History &amp; Studio Art
                        </h3>
                        <p class="text-sm text-brandDark/80">
                            Pasadena City College
                        </p>
                    </div>
                </div>

                <!-- Column 2: Professional Experience -->
                <div class="space-y-8">
                    <strong class="text-xs font-bold tracking-wider text-brandDark/50 uppercase block pb-3 border-b border-brandDark/10">Experience</strong>
                    <div class="space-y-1">
                        <p class="text-xs font-semibold text-brandDark/65">May 2023 - Present</p>
                        <h3 class="text-lg font-serif font-bold text-brandDark">
                            Curatorial Assistant
                        </h3>
                        <p class="text-sm text-brandDark/80">
                            Los Angeles Municipal Art Gallery
                        </p>
                    </div>
                    <div class="space-y-1">
                        <p class="text-xs font-semibold text-brandDark/65">
                            July 2024 - March 2025
                        </p>
                        <h3 class="text-lg font-serif font-bold text-brandDark">
                            Assistant Registrar
                        </h3>
                        <p class="text-sm text-brandDark/80">
                            Academy Museum of Motion Pictures
                        </p>
                    </div>
                    <div class="space-y-1">
                        <p class="text-xs font-semibold text-brandDark/65">
                            July 2022 - May 2024
                        </p>
                        <h3 class="text-lg font-serif font-bold text-brandDark">Library Pager</h3>
                        <p class="text-sm text-brandDark/80">
                            Autry Museum of the American West
                        </p>
                    </div>
                </div>

                <!-- Column 3: Related Experience & In Progress -->
                <div class="space-y-8">
                    <strong class="text-xs font-bold tracking-wider text-brandDark/50 uppercase block pb-3 border-b border-brandDark/10">Professional Development</strong>
                    <div class="space-y-1">
                        <p class="text-xs font-semibold text-brandDark/65">
                            June 2025 - August 2025
                        </p>
                        <h3 class="text-lg font-serif font-bold text-brandDark">Archives Intern</h3>
                        <p class="text-sm text-brandDark/80">
                            Ellsworth Kelly Foundation
                        </p>
                    </div>
                    <div class="space-y-1">
                        <p class="text-xs font-semibold text-brandDark/65">
                            July 2024 - March 2025
                        </p>
                        <h3 class="text-lg font-serif font-bold text-brandDark">
                            Conservation Technician
                        </h3>
                        <p class="text-sm text-brandDark/80">
                            The Civic Art Division
                        </p>
                    </div>
                    <div class="space-y-1">
                        <p class="text-xs font-semibold text-brandDark/65">2025 - Present</p>
                        <h3 class="text-lg font-serif font-bold text-brandDark">Conservation</h3>
                        <p class="text-sm text-brandDark/80">
                            Dominguez Sculpture Restoration
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- View Full CV / Experience Button -->
            <div class="mt-16 flex justify-center">
                <NuxtLink
                    to="/experience"
                    class="inline-flex items-center justify-center bg-brandDark text-brandBg hover:bg-brandDark/90 transition-all duration-300 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-sm hover:shadow-md"
                >
                    View Full Resume &amp; Experience &rarr;
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>
