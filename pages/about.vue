<script setup></script>
<template>
    <div>
        <div
            class="bg-[url('/archives-hero.webp')] h-96 grid place-items-center"
        ></div>

        <h1 class="text-5xl">About</h1>
        <div class="grid md:grid-cols-2 mt-8">
            <img
                src="/headshot_2.webp"
                alt="Image of Jennifer Payan"
                class="p-16"
            />
            <div>
                <h2
                    class="text-5xl font-bold"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                >
                    Hello!
                </h2>

                <div
                    class="about-info px-6 pb-6 md:py-16 md:pl-16 md:pr-32 mt-8 md:mt-16 self-end text-lg md:text-2xl"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                >
                    I am a recent graduate from the University of California,
                    Los Angeles and majored in Art History. I currently work as
                    a Library Pager at the Autry Museum of the American West and
                    as a teaching artist assistant with Barrio Mobile Art Studio
                    at Self Help Graphics & Art. Prior to my internship at the
                    Vincent Price Art Museum, I interned at Self Help Graphics &
                    Art, UCLA Chicano Studies Research Center, Artbook at Hauser
                    & Wirth, Distributed Art Publishers Showroom, Elliott
                    Hundley Art Studio, and Visual Communications.
                </div>
            </div>
        </div>

        <Experience />
    </div>
</template>
