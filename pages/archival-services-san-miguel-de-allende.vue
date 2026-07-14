<script setup lang="ts">
import { computed, ref } from "vue";

type Locale = "en" | "es";

const locale = ref<Locale>("en");

const money = (n: number) => {
  // simple formatting; keeps it framework-free
  return n.toLocaleString(undefined, { maximumFractionDigits: 0 });
};

// Conservative, resident-friendly ranges.
// Assumption: 1 USD ≈ 17 MXN (rounded). Adjust later if you want.
const USD_TO_MXN = 17;

const pricing = {
  starter: { usd: [350, 650], mxn: [350, 650].map((x) => x * USD_TO_MXN) },
  collector: { usd: [750, 1800], mxn: [750, 1800].map((x) => x * USD_TO_MXN) },
  legacy: { usd: [1200, 3200], mxn: [1200, 3200].map((x) => x * USD_TO_MXN) },
  consult: { usd: [120, 180], mxn: [120, 180].map((x) => x * USD_TO_MXN) },
};

const content = computed(() => {
  const en = {
    metaTitle: "Archival Services in San Miguel de Allende",
    metaDesc:
        "Museum-trained personal archiving for residents, artists, and families in San Miguel de Allende. Bilingual services. Simple packages + clear pricing.",
    nav: {
      services: "Services",
      packages: "Packages",
      pricing: "Pricing",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
    },
    badge: "On-site • Discreet • Bilingual (EN/ES)",
    heroTitle: "Preserve your personal history in San Miguel de Allende",
    heroSub:
        "I help residents, artists, and families organize and preserve photographs, documents, and collections—using museum-trained archival methods adapted for the home.",
    heroCtaPrimary: "Book a consultation",
    heroCtaSecondary: "View packages",
    trustPoints: [
      "Museum & archive experience (collections, registration, digitization)",
      "Clear systems you can maintain (physical + digital)",
      "Careful handling of fragile or meaningful materials",
      "Confidential, client-centered, and calm process",
    ],
    packagesTitle: "Simple packages",
    packagesSub:
        "Choose a starting point. Every project is tailored after an initial assessment.",
    pkg: {
      starter: {
        title: "Personal Archive Starter",
        for: "Best for: families, retirees, downsizing",
        bullets: [
          "On-site assessment of photos, papers, keepsakes",
          "Safe sorting + basic organization",
          "Simple folder system (physical and/or digital)",
          "Quick maintenance guide so it stays organized",
        ],
        duration: "1–2 sessions",
      },
      collector: {
        title: "Artist & Collector Archive",
        for: "Best for: artists, photographers, collectors",
        bullets: [
          "Inventory + documentation for works and materials",
          "Basic metadata (title, date, materials, notes)",
          "File naming + long-term storage structure",
          "Digitization planning or coordination support",
        ],
        duration: "Custom scope",
      },
      legacy: {
        title: "Legacy & Family History Project",
        for: "Best for: multigenerational archives and estates",
        bullets: [
          "Organize family photos + key documents",
          "People/places timeline to keep context",
          "Digitized reference set (selection)",
          "Optional oral-history planning (lightweight + respectful)",
        ],
        duration: "Multi-session project",
      },
    },
    pricingTitle: "Pricing overview",
    pricingSub:
        "Transparent starting prices in USD & MXN. Final cost depends on volume, condition, travel, and desired outputs.",
    pricingNotes: [
      "Consultations can be applied toward a package when you proceed (optional).",
      "MXN estimates use a rounded exchange rate for clarity—final invoices can be USD or MXN.",
    ],
    processTitle: "How it works",
    steps: [
      {
        title: "1) Consultation",
        desc: "We review what you have, your goals, and any constraints (time, space, sensitivity).",
      },
      {
        title: "2) Plan + estimate",
        desc: "You get a clear scope, schedule, and package recommendation—no pressure.",
      },
      {
        title: "3) Organize + document",
        desc: "I sort, rehouse, label, and build a system that makes sense for your life.",
      },
      {
        title: "4) Maintain + access",
        desc: "You receive a simple guide so the archive stays usable for years.",
      },
    ],
    addOnsTitle: "Add-ons",
    addOns: [
      "Digitization coordination (photos/documents)",
      "Cloud storage setup + folder structure",
      "Artwork documentation for insurance",
      "Pre-move or estate organization",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "Do you digitize everything?",
        a: "Not necessarily. Many clients prefer a curated digitization approach: we prioritize what matters most and build a long-term plan.",
      },
      {
        q: "Will this feel overwhelming?",
        a: "No. The process is calm and step-by-step. My job is to reduce stress and make decisions easier.",
      },
      {
        q: "Do you work in both English and Spanish?",
        a: "Yes—bilingual service is available (English and conversational Spanish).",
      },
      {
        q: "What about privacy?",
        a: "Everything is confidential. We set boundaries up front (what to keep, what to discard, what stays private).",
      },
    ],
    contactTitle: "Contact",
    contactSub:
      "If you’ve been meaning to “get organized someday,” this is that moment.",
    contact: {
      name: "Jennifer Payan",
      phoneLabel: "Phone",
      emailLabel: "Email",
      location: "Based in Los Angeles • Available on-site in San Miguel de Allende",
      cta: "Email to schedule",
    },
    footer:
        "Archival services for private residents, families, and artists. Museum-trained methods adapted for the home.",
  };

  const es = {
    metaTitle: "Servicios Archivísticos en San Miguel de Allende",
    metaDesc:
        "Servicios de archivo personal con experiencia en museos para residentes, artistas y familias en San Miguel de Allende. Paquetes simples + precios claros.",
    nav: {
      services: "Servicios",
      packages: "Paquetes",
      pricing: "Precios",
      process: "Proceso",
      faq: "Preguntas",
      contact: "Contacto",
    },
    badge: "En sitio • Discreto • Bilingüe (EN/ES)",
    heroTitle: "Preserve su historia personal en San Miguel de Allende",
    heroSub:
        "Ayudo a residentes, artistas y familias a organizar y preservar fotografías, documentos y colecciones—con métodos archivísticos profesionales adaptados al hogar.",
    heroCtaPrimary: "Agendar consulta",
    heroCtaSecondary: "Ver paquetes",
    trustPoints: [
      "Experiencia en museos y archivos (colecciones, registro, digitalización)",
      "Sistemas claros y fáciles de mantener (físico + digital)",
      "Manejo cuidadoso de materiales frágiles o significativos",
      "Proceso confidencial, respetuoso y sin estrés",
    ],
    packagesTitle: "Paquetes simples",
    packagesSub:
        "Elija un punto de partida. Cada proyecto se adapta después de una evaluación inicial.",
    pkg: {
      starter: {
        title: "Archivo Personal — Inicio",
        for: "Ideal para: familias, jubilados, mudanzas",
        bullets: [
          "Evaluación en sitio (fotos, papeles, recuerdos)",
          "Clasificación segura + organización básica",
          "Sistema simple de carpetas (físico y/o digital)",
          "Guía breve para mantener el orden",
        ],
        duration: "1–2 sesiones",
      },
      collector: {
        title: "Archivo para Artistas y Coleccionistas",
        for: "Ideal para: artistas, fotógrafos, coleccionistas",
        bullets: [
          "Inventario + documentación de obras y materiales",
          "Metadatos básicos (título, fecha, materiales, notas)",
          "Nombres de archivos + estructura de almacenamiento",
          "Apoyo para planear o coordinar digitalización",
        ],
        duration: "Alcance a medida",
      },
      legacy: {
        title: "Proyecto de Legado e Historia Familiar",
        for: "Ideal para: archivos multigeneracionales y patrimonio familiar",
        bullets: [
          "Organización de fotos familiares + documentos clave",
          "Línea de tiempo (personas, lugares, eventos)",
          "Conjunto de referencia digital (selección)",
          "Opcional: planificación de historia oral (ligera y respetuosa)",
        ],
        duration: "Varias sesiones",
      },
    },
    pricingTitle: "Costos de los servicios",
    pricingSub:
        "Precios iniciales estimados en USD y MXN. El costo final depende del volumen, condición, traslados y resultados deseados.",
    pricingNotes: [
      "La consulta puede aplicarse al paquete si decide continuar (opcional).",
      "Estimaciones en MXN con tipo de cambio redondeado—la factura puede ser en USD o MXN.",
    ],
    processTitle: "Cómo funciona",
    steps: [
      {
        title: "1) Consulta",
        desc: "Revisamos lo que tiene, sus metas y límites (tiempo, espacio, sensibilidad).",
      },
      {
        title: "2) Plan + estimación",
        desc: "Recibe un alcance claro, calendario y recomendación de paquete.",
      },
      {
        title: "3) Organizar + documentar",
        desc: "Clasifico, rehúso, etiqueto y creo un sistema que funcione para su vida.",
      },
      {
        title: "4) Mantener + acceder",
        desc: "Entrega de una guía simple para mantener el archivo usable por años.",
      },
    ],
    addOnsTitle: "Servicios adicionales",
    addOns: [
      "Coordinación de digitalización (fotos/documentos)",
      "Configuración de nube + estructura de carpetas",
      "Documentación de obras para seguros",
      "Organización antes de mudanza o sucesión",
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿Digitaliza todo?",
        a: "No necesariamente. Muchas personas prefieren una digitalización curada: priorizamos lo más importante y creamos un plan a largo plazo.",
      },
      {
        q: "¿Será abrumador?",
        a: "No. El proceso es tranquilo y paso a paso. Mi trabajo es reducir el estrés y facilitar decisiones.",
      },
      {
        q: "¿Trabaja en inglés y español?",
        a: "Sí—servicio bilingüe disponible (inglés y español conversacional).",
      },
      {
        q: "¿Y la privacidad?",
        a: "Todo es confidencial. Definimos límites desde el inicio (qué conservar, qué descartar, qué es privado).",
      },
    ],
    contactTitle: "Contacto",
    contactSub:
        "Si ha pensado en organizar su archivo “algún día,” ese día puede ser hoy.",
    contact: {
      name: "Jennifer Payan",
      phoneLabel: "Teléfono",
      emailLabel: "Correo",
      location: "Con base en Los Ángeles • Disponible en sitio en San Miguel de Allende",
      cta: "Enviar correo para agendar",
    },
    footer:
        "Servicios archivísticos para residentes, familias y artistas. Métodos de museo adaptados al hogar.",
  };

  return locale.value === "en" ? en : es;
});

const pageTitle = computed(() => content.value.metaTitle);
const pageDesc = computed(() => content.value.metaDesc);

useHead(() => ({
  title: pageTitle.value,
  meta: [
    { name: "description", content: pageDesc.value },
    { property: "og:title", content: pageTitle.value },
    { property: "og:description", content: pageDesc.value },
  ],
}));
</script>

<template>
  <div class="min-h-screen bg-brandBg text-brandDark pt-16">

    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="mx-auto grid max-w-7xl gap-10 px-6 md:px-12 py-16 md:grid-cols-2 md:py-24 items-center">
        <div class="space-y-6">
          <p class="inline-flex items-center gap-2 rounded-full border border-brandDark/15 bg-brandDark/5 px-4 py-1 text-xs font-semibold text-brandDark/70 font-sans tracking-wide uppercase">
            <span class="h-1.5 w-1.5 rounded-full bg-brandDark/40"></span>
            {{ content.badge }}
          </p>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brandDark tracking-tight leading-tight">
            {{ content.heroTitle }}
          </h1>

          <p class="max-w-prose text-base md:text-lg text-brandDark/80 leading-relaxed font-sans">
            {{ content.heroSub }}
          </p>

          <div class="flex flex-wrap gap-4 pt-2">
            <a
                href="#contact"
                class="rounded-full bg-brandDark text-brandBg hover:bg-brandDark/90 transition-all px-8 py-3.5 text-sm font-medium tracking-wide shadow-sm hover:shadow-md"
            >
              {{ content.heroCtaPrimary }}
            </a>
            <a
                href="#packages"
                class="rounded-full border border-brandDark/25 text-brandDark hover:bg-brandDark/5 transition-all px-8 py-3.5 text-sm font-medium tracking-wide"
            >
              {{ content.heroCtaSecondary }}
            </a>
            <button
                class="rounded-full border border-brandDark/25 text-brandDark hover:bg-brandDark/5 transition-all px-5 py-3 text-xs font-bold font-sans uppercase tracking-wider"
                @click="locale = locale === 'en' ? 'es' : 'en'"
                :aria-label="locale === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'"
            >
              <span v-if="locale === 'en'">ES</span>
              <span v-else>EN</span>
            </button>
          </div>

          <ul class="space-y-3 pt-6 border-t border-brandDark/10 text-sm text-brandDark/85 font-sans">
            <li v-for="(p, i) in content.trustPoints" :key="i" class="flex items-start gap-3">
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brandDark/40"></span>
              <span>{{ p }}</span>
            </li>
          </ul>
        </div>

        <!-- Right Side: Clean summary card -->
        <div class="md:pl-8 flex justify-center">
          <div class="w-full max-w-md rounded-[32px] border border-brandDark/15 bg-white p-8 md:p-10 shadow-md text-center space-y-6">
            <div class="space-y-1">
              <h3 class="text-sm font-semibold tracking-wider text-brandDark/60 uppercase font-sans">Archival Service</h3>
              <p class="text-2xl font-serif font-bold text-brandDark">San Miguel de Allende</p>
            </div>
            
            <div class="space-y-4 text-sm text-brandDark/85 font-sans border-y border-brandDark/10 py-6 text-left">
              <div class="flex justify-between">
                <span class="font-medium text-brandDark/70">Consultation</span>
                <span class="font-bold text-brandDark">$120–$180 USD</span>
              </div>
              <div class="flex justify-between">
                <span class="font-medium text-brandDark/70">Location</span>
                <span class="font-bold text-brandDark">On-site (SMA)</span>
              </div>
              <div class="flex justify-between">
                <span class="font-medium text-brandDark/70">Bilingual support</span>
                <span class="font-bold text-brandDark">English / Español</span>
              </div>
            </div>

            <a
                href="#contact"
                class="inline-flex w-full items-center justify-center rounded-full bg-brandDark text-brandBg hover:bg-brandDark/90 transition-all px-6 py-3.5 text-sm font-medium tracking-wide shadow-sm hover:shadow-md"
            >
              {{ content.heroCtaPrimary }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services / Packages -->
    <section id="services" class="border-t border-brandDark/10 py-16 md:py-24 bg-brandBg/30">
      <div class="mx-auto max-w-7xl px-6 md:px-12">
        <header class="mb-12 text-center space-y-4">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-brandDark tracking-tight">
            {{ content.packagesTitle }}
          </h2>
          <p class="text-base md:text-lg text-brandDark/70 max-w-3xl mx-auto font-sans leading-relaxed">
            {{ content.packagesSub }}
          </p>
        </header>

        <div id="packages" class="grid gap-8 grid-cols-1 md:grid-cols-3">
          <!-- Starter (Yellow) -->
          <article class="group bg-brandYellow rounded-[32px] border border-brandDark/15 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 flex flex-col justify-between min-h-[460px]">
            <div>
              <p class="text-xs font-semibold text-brandDark/60 tracking-wider uppercase">
                {{ content.pkg.starter.duration }}
              </p>
              <h3 class="mt-2 text-2xl font-serif font-bold text-brandDark">{{ content.pkg.starter.title }}</h3>
              <p class="mt-2 text-sm text-brandDark/85 font-sans leading-relaxed">{{ content.pkg.starter.for }}</p>

              <ul class="mt-6 space-y-3 text-sm text-brandDark/85 font-sans">
                <li v-for="(b, i) in content.pkg.starter.bullets" :key="i" class="flex items-start gap-2">
                  <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brandDark/40"></span>
                  <span>{{ b }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-8 border-t border-brandDark/10 pt-5">
              <p class="text-xs font-semibold uppercase tracking-wider text-brandDark/60 mb-1">
                {{ locale === "en" ? "Typical cost" : "Costo típico" }}
              </p>
              <p class="text-lg font-serif font-bold text-brandDark">
                ${{ money(pricing.starter.usd[0]) }}–${{ money(pricing.starter.usd[1]) }} USD
              </p>
              <p class="text-sm font-semibold text-brandDark/70">
                MXN ${{ money(pricing.starter.mxn[0]) }}–${{ money(pricing.starter.mxn[1]) }}
              </p>
            </div>
          </article>

          <!-- Collector (Blue) -->
          <article class="group bg-brandBlue rounded-[32px] border border-brandDark/15 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 flex flex-col justify-between min-h-[460px]">
            <div>
              <p class="text-xs font-semibold text-brandDark/60 tracking-wider uppercase">
                {{ content.pkg.collector.duration }}
              </p>
              <h3 class="mt-2 text-2xl font-serif font-bold text-brandDark">{{ content.pkg.collector.title }}</h3>
              <p class="mt-2 text-sm text-brandDark/85 font-sans leading-relaxed">{{ content.pkg.collector.for }}</p>

              <ul class="mt-6 space-y-3 text-sm text-brandDark/85 font-sans">
                <li v-for="(b, i) in content.pkg.collector.bullets" :key="i" class="flex items-start gap-2">
                  <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brandDark/40"></span>
                  <span>{{ b }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-8 border-t border-brandDark/10 pt-5">
              <p class="text-xs font-semibold uppercase tracking-wider text-brandDark/60 mb-1">
                {{ locale === "en" ? "Typical cost" : "Costo típico" }}
              </p>
              <p class="text-lg font-serif font-bold text-brandDark">
                ${{ money(pricing.collector.usd[0]) }}–${{ money(pricing.collector.usd[1]) }} USD
              </p>
              <p class="text-sm font-semibold text-brandDark/70">
                MXN ${{ money(pricing.collector.mxn[0]) }}–${{ money(pricing.collector.mxn[1]) }}
              </p>
            </div>
          </article>

          <!-- Legacy (Purple) -->
          <article class="group bg-brandPurple rounded-[32px] border border-brandDark/15 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 flex flex-col justify-between min-h-[460px]">
            <div>
              <p class="text-xs font-semibold text-brandDark/60 tracking-wider uppercase">
                {{ content.pkg.legacy.duration }}
              </p>
              <h3 class="mt-2 text-2xl font-serif font-bold text-brandDark">{{ content.pkg.legacy.title }}</h3>
              <p class="mt-2 text-sm text-brandDark/85 font-sans leading-relaxed">{{ content.pkg.legacy.for }}</p>

              <ul class="mt-6 space-y-3 text-sm text-brandDark/85 font-sans">
                <li v-for="(b, i) in content.pkg.legacy.bullets" :key="i" class="flex items-start gap-2">
                  <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brandDark/40"></span>
                  <span>{{ b }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-8 border-t border-brandDark/10 pt-5">
              <p class="text-xs font-semibold uppercase tracking-wider text-brandDark/60 mb-1">
                {{ locale === "en" ? "Typical cost" : "Costo típico" }}
              </p>
              <p class="text-lg font-serif font-bold text-brandDark">
                ${{ money(pricing.legacy.usd[0]) }}–${{ money(pricing.legacy.usd[1]) }} USD
              </p>
              <p class="text-sm font-semibold text-brandDark/70">
                MXN ${{ money(pricing.legacy.mxn[0]) }}–${{ money(pricing.legacy.mxn[1]) }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Pricing / Details Guide -->
    <section id="pricing" class="border-t border-brandDark/10 py-16 md:py-24 bg-white">
      <div class="mx-auto max-w-7xl px-6 md:px-12">
        <header class="mb-12 text-center space-y-4">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-brandDark tracking-tight">
            {{ content.pricingTitle }}
          </h2>
          <p class="text-base md:text-lg text-brandDark/70 max-w-3xl mx-auto font-sans leading-relaxed">
            {{ content.pricingSub }}
          </p>
        </header>

        <div class="grid gap-8 md:grid-cols-2">
          <!-- Summary card -->
          <div class="rounded-[32px] border border-brandDark/10 bg-brandBg/40 p-8 shadow-sm space-y-6">
            <h3 class="text-xl font-serif font-bold text-brandDark border-b border-brandDark/10 pb-3">
              {{ locale === "en" ? "At-a-glance" : "Resumen" }}
            </h3>

            <div class="space-y-6 text-sm text-brandDark/85 font-sans">
              <div class="flex items-start justify-between gap-6 border-b border-brandDark/10 pb-4">
                <div>
                  <p class="font-bold text-brandDark">{{ locale === "en" ? "Consultation" : "Consulta" }}</p>
                  <p class="text-brandDark/60 text-xs mt-0.5">{{ locale === "en" ? "Assessment + plan" : "Evaluación + plan" }}</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-brandDark">${{ money(pricing.consult.usd[0]) }}–${{ money(pricing.consult.usd[1]) }}</p>
                  <p class="text-brandDark/60 text-xs mt-0.5">MXN {{ money(pricing.consult.mxn[0]) }}–{{ money(pricing.consult.mxn[1]) }}</p>
                </div>
              </div>

              <div class="flex items-start justify-between gap-6 border-b border-brandDark/10 pb-4">
                <div>
                  <p class="font-bold text-brandDark">{{ content.pkg.starter.title }}</p>
                  <p class="text-brandDark/60 text-xs mt-0.5">{{ content.pkg.starter.duration }}</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-brandDark">${{ money(pricing.starter.usd[0]) }}–${{ money(pricing.starter.usd[1]) }}</p>
                  <p class="text-brandDark/60 text-xs mt-0.5">MXN {{ money(pricing.starter.mxn[0]) }}–{{ money(pricing.starter.mxn[1]) }}</p>
                </div>
              </div>

              <div class="flex items-start justify-between gap-6 border-b border-brandDark/10 pb-4">
                <div>
                  <p class="font-bold text-brandDark">{{ content.pkg.collector.title }}</p>
                  <p class="text-brandDark/60 text-xs mt-0.5">{{ content.pkg.collector.duration }}</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-brandDark">${{ money(pricing.collector.usd[0]) }}–${{ money(pricing.collector.usd[1]) }}</p>
                  <p class="text-brandDark/60 text-xs mt-0.5">MXN {{ money(pricing.collector.mxn[0]) }}–{{ money(pricing.collector.mxn[1]) }}</p>
                </div>
              </div>

              <div class="flex items-start justify-between gap-6">
                <div>
                  <p class="font-bold text-brandDark">{{ content.pkg.legacy.title }}</p>
                  <p class="text-brandDark/60 text-xs mt-0.5">{{ content.pkg.legacy.duration }}</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-brandDark">${{ money(pricing.legacy.usd[0]) }}–${{ money(pricing.legacy.usd[1]) }}</p>
                  <p class="text-brandDark/60 text-xs mt-0.5">MXN {{ money(pricing.legacy.mxn[0]) }}–{{ money(pricing.legacy.mxn[1]) }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Notes card -->
          <div class="rounded-[32px] border border-brandDark/10 bg-brandBg/40 p-8 shadow-sm space-y-6">
            <h3 class="text-xl font-serif font-bold text-brandDark border-b border-brandDark/10 pb-3">
              {{ locale === "en" ? "Notes" : "Notas" }}
            </h3>

            <ul class="space-y-4 text-sm text-brandDark/85 font-sans leading-relaxed">
              <li v-for="(n, i) in content.pricingNotes" :key="i" class="flex items-start gap-3">
                <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brandDark/40"></span>
                <span>{{ n }}</span>
              </li>
            </ul>

            <!-- Inner Callout Card -->
            <div class="rounded-2xl border border-brandDark/15 bg-white p-6 shadow-sm space-y-4">
              <p class="text-sm font-bold text-brandDark">
                {{ locale === "en" ? "Want exact pricing?" : "¿Quiere un precio exacto?" }}
              </p>
              <p class="text-sm text-brandDark/80 font-sans leading-relaxed">
                {{ locale === "en"
                  ? "Send 3–5 photos of the materials + a one-paragraph goal. I’ll reply with a suggested package and a tighter estimate."
                  : "Envíe 3–5 fotos de los materiales + una meta en un párrafo. Le responderé con un paquete recomendado y una estimación más precisa."
                }}
              </p>
              <a
                  href="#contact"
                  class="inline-flex items-center justify-center rounded-full bg-brandDark text-brandBg hover:bg-brandDark/90 transition px-5 py-2.5 text-xs font-semibold shadow-sm hover:shadow-md"
              >
                {{ locale === "en" ? "Contact" : "Contacto" }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section id="process" class="border-t border-brandDark/10 py-16 md:py-24 bg-brandBg/30">
      <div class="mx-auto max-w-7xl px-6 md:px-12">
        <h2 class="text-3xl font-serif font-bold text-brandDark text-center tracking-tight mb-12">
          {{ content.processTitle }}
        </h2>

        <div class="grid gap-6 md:grid-cols-4">
          <div
              v-for="(s, i) in content.steps"
              :key="i"
              class="rounded-[32px] border border-brandDark/15 bg-white p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition duration-300"
          >
            <div>
              <p class="text-xs font-semibold text-brandDark/60 tracking-wider uppercase">
                {{ locale === "en" ? "Step" : "Paso" }} {{ i + 1 }}
              </p>
              <p class="mt-2 text-lg font-serif font-bold text-brandDark">{{ s.title }}</p>
            </div>
            <p class="mt-4 text-sm text-brandDark/80 leading-relaxed font-sans">{{ s.desc }}</p>
          </div>
        </div>

        <!-- Add-ons Box -->
        <div class="mt-10 rounded-[32px] border border-brandDark/15 bg-white p-8 shadow-sm space-y-6">
          <h3 class="text-xl font-serif font-bold text-brandDark border-b border-brandDark/10 pb-3">
            {{ content.addOnsTitle }}
          </h3>
          <ul class="grid gap-4 text-sm text-brandDark/85 font-sans md:grid-cols-2">
            <li v-for="(a, i) in content.addOns" :key="i" class="flex items-start gap-3">
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brandDark/40"></span>
              <span>{{ a }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="border-t border-brandDark/10 py-16 md:py-24 bg-white">
      <div class="mx-auto max-w-7xl px-6 md:px-12">
        <h2 class="text-3xl font-serif font-bold text-brandDark text-center tracking-tight mb-12">
          {{ content.faqTitle }}
        </h2>

        <div class="grid gap-6 md:grid-cols-2">
          <details
              v-for="(f, i) in content.faqs"
              :key="i"
              class="group rounded-2xl border border-brandDark/10 bg-brandBg/20 p-6 hover:bg-brandBg/40 transition duration-200"
          >
            <summary class="cursor-pointer list-none font-serif font-bold text-brandDark focus:outline-none">
              <span class="flex items-start justify-between gap-6">
                <span>{{ f.q }}</span>
                <span class="text-brandDark/60 group-open:rotate-45 transition-transform duration-200">+</span>
              </span>
            </summary>
            <p class="mt-3 text-sm leading-relaxed text-brandDark/80 font-sans">{{ f.a }}</p>
          </details>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* standard smooth transition for open/close faq details */
details[open] summary span span:last-child {
  transform: rotate(45deg);
}
</style>
