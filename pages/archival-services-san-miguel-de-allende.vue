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
    pricingTitle: "Pricing ranges",
    pricingSub:
        "Transparent starting ranges in USD & MXN. Final cost depends on volume, condition, travel, and desired outputs.",
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
    pricingTitle: "Rangos de precios",
    pricingSub:
        "Rangos iniciales en USD y MXN. El costo final depende del volumen, condición, traslados y resultados deseados.",
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
  <div class="min-h-screen bg-[#FAFAF8]  text-zinc-800">

    <!-- Hero -->
    <section class="relative overflow-hidden">

      <div class="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p class="inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-100/5 px-3 py-1 text-xs font-zinc-600">
            <span class="h-1.5 w-1.5 rounded-full bg-zinc-300/80"></span>
            {{ content.badge }}
          </p>

          <h1 class="mt-5 text-4xl font-medium tracking-tight md:text-5xl">
            {{ content.heroTitle }}
          </h1>

          <p class="mt-4 max-w-prose text-base leading-relaxed font-zinc-600 md:text-lg">
            {{ content.heroSub }}
          </p>

          <div class="mt-7 flex flex-wrap gap-3">
            <a
                href="#contact"
                class="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-600"
            >
              {{ content.heroCtaPrimary }}
            </a>
            <a
                href="#packages"
                class="rounded-2xl border border-zinc-700/70 bg-zinc-100/5 px-5 py-3 text-sm font-medium text-zinc-600 hover:bg-zinc-100/10"
            >
              {{ content.heroCtaSecondary }}
            </a>
          </div>

          <button
              class="rounded-xl border border-zinc-700/70 bg-zinc-100/5 px-3 py-2 text-xs font-medium text-zinc-600 hover:bg-zinc-100/10"
              @click="locale = locale === 'en' ? 'es' : 'en'"
              :aria-label="locale === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'"
          >
            <span v-if="locale === 'en'">ES</span>
            <span v-else>EN</span>
          </button>
          <ul class="mt-8 space-y-2 text-sm font-zinc-600">
            <li v-for="(p, i) in content.trustPoints" :key="i" class="flex gap-3">
              <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300/70"></span>
              <span>{{ p }}</span>
            </li>
          </ul>
        </div>

        <!-- Right: “quiet luxury” card -->
        <div class="md:pl-8">
          <div class="rounded-none border-t border-zinc-200 bg-transparent p-6 md:p-8 ring-1 ring-zinc-700/30 m-auto align-center">
            <div class="mt-8 space-y-3 text-sm text-zinc-600">
              <p><strong>Consultation:</strong> $120–$180 USD</p>
              <p><strong>Location:</strong> On-site in San Miguel de Allende</p>
              <p><strong>Languages:</strong> English / Español</p>
            </div>

            <a
                href="#contact"
                class="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
            >
              {{ content.heroCtaPrimary }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services / Packages -->
    <section id="services" class="border-t border-zinc-900">
      <div class="mx-auto max-w-6xl px-4 py-14">
        <h2 class="text-2xl font-medium tracking-tight md:text-3xl">
          {{ content.packagesTitle }}
        </h2>
        <p class="mt-3 max-w-3xl font-zinc-600">
          {{ content.packagesSub }}
        </p>

        <div id="packages" class="mt-10 grid gap-6 md:grid-cols-3">
          <!-- Starter -->
          <article class="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 ring-1 ring-zinc-700/20">
            <p class="text-xs font-medium tracking-wide text-zinc-400">
              {{ content.pkg.starter.duration }}
            </p>
            <h3 class="mt-2 text-xl font-medium">{{ content.pkg.starter.title }}</h3>
            <p class="mt-2 text-sm font-zinc-600">{{ content.pkg.starter.for }}</p>

            <ul class="mt-5 space-y-2 text-sm font-zinc-600">
              <li v-for="(b, i) in content.pkg.starter.bullets" :key="i" class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300/70"></span>
                <span>{{ b }}</span>
              </li>
            </ul>

            <div class="mt-6 border-t border-zinc-800 pt-5">
              <p class="mt-4 text-sm text-zinc-600">{{ locale === "en" ? "Typical range" : "Rango típico" }}</p>
              <p class="text-base text-zinc-800">
                ${{ money(pricing.starter.usd[0]) }}–${{ money(pricing.starter.usd[1]) }} USD
              </p>
              <p class="text-base text-zinc-800">
                MXN ${{ money(pricing.starter.mxn[0]) }}–${{ money(pricing.starter.mxn[1]) }}
              </p>
            </div>
          </article>

          <!-- Collector -->
          <article class="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 ring-1 ring-zinc-700/20">
            <p class="text-xs font-medium tracking-wide text-zinc-400">
              {{ content.pkg.collector.duration }}
            </p>
            <h3 class="mt-2 text-xl font-medium">{{ content.pkg.collector.title }}</h3>
            <p class="mt-2 text-sm font-zinc-600">{{ content.pkg.collector.for }}</p>

            <ul class="mt-5 space-y-2 text-sm font-zinc-600">
              <li v-for="(b, i) in content.pkg.collector.bullets" :key="i" class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300/70"></span>
                <span>{{ b }}</span>
              </li>
            </ul>

            <div class="mt-6 border-t border-zinc-800 pt-5">
              <p class="mt-4 text-sm text-zinc-600">{{ locale === "en" ? "Typical range" : "Rango típico" }}</p>
              <p class="text-base text-zinc-800">
                ${{ money(pricing.collector.usd[0]) }}–${{ money(pricing.collector.usd[1]) }} USD
              </p>
              <p class="text-base text-zinc-800">
                MXN ${{ money(pricing.collector.mxn[0]) }}–${{ money(pricing.collector.mxn[1]) }}
              </p>
            </div>
          </article>

          <!-- Legacy -->
          <article class="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 ring-1 ring-zinc-700/20">
            <p class="text-xs font-medium tracking-wide text-zinc-400">
              {{ content.pkg.legacy.duration }}
            </p>
            <h3 class="mt-2 text-xl font-medium">{{ content.pkg.legacy.title }}</h3>
            <p class="mt-2 text-sm font-zinc-600">{{ content.pkg.legacy.for }}</p>

            <ul class="mt-5 space-y-2 text-sm font-zinc-600">
              <li v-for="(b, i) in content.pkg.legacy.bullets" :key="i" class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300/70"></span>
                <span>{{ b }}</span>
              </li>
            </ul>

            <div class="mt-6 border-t border-zinc-800 pt-5">
              <p class="mt-4 text-sm text-zinc-600">{{ locale === "en" ? "Typical range" : "Rango típico" }}</p>
              <p class="text-base text-zinc-800">
                ${{ money(pricing.legacy.usd[0]) }}–${{ money(pricing.legacy.usd[1]) }} USD
              </p>
              <p class="text-base text-zinc-800">
                MXN ${{ money(pricing.legacy.mxn[0]) }}–${{ money(pricing.legacy.mxn[1]) }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="border-t border-zinc-900">
      <div class="mx-auto max-w-6xl px-4 py-14">
        <h2 class="text-2xl font-medium tracking-tight md:text-3xl">
          {{ content.pricingTitle }}
        </h2>
        <p class="mt-3 max-w-3xl font-zinc-600">
          {{ content.pricingSub }}
        </p>

        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h3 class="text-lg font-medium">
              {{ locale === "en" ? "At-a-glance" : "Resumen" }}
            </h3>

            <div class="mt-5 space-y-4 text-sm font-zinc-600">
              <div class="flex items-start justify-between gap-6">
                <div>
                  <p class="font-medium text-white">{{ locale === "en" ? "Consultation" : "Consulta" }}</p>
                  <p class="text-zinc-400">{{ locale === "en" ? "Assessment + plan" : "Evaluación + plan" }}</p>
                </div>
                <div class="text-right">
                  <p class="font-medium">${{ money(pricing.consult.usd[0]) }}–${{ money(pricing.consult.usd[1]) }}</p>
                  <p class="text-zinc-400">MXN {{ money(pricing.consult.mxn[0]) }}–{{ money(pricing.consult.mxn[1]) }}</p>
                </div>
              </div>

              <div class="flex items-start justify-between gap-6">
                <div>
                  <p class="font-medium text-white">{{ content.pkg.starter.title }}</p>
                  <p class="text-zinc-400">{{ content.pkg.starter.duration }}</p>
                </div>
                <div class="text-right">
                  <p class="font-medium">${{ money(pricing.starter.usd[0]) }}–${{ money(pricing.starter.usd[1]) }}</p>
                  <p class="text-zinc-400">MXN {{ money(pricing.starter.mxn[0]) }}–{{ money(pricing.starter.mxn[1]) }}</p>
                </div>
              </div>

              <div class="flex items-start justify-between gap-6">
                <div>
                  <p class="font-medium text-white">{{ content.pkg.collector.title }}</p>
                  <p class="text-zinc-400">{{ content.pkg.collector.duration }}</p>
                </div>
                <div class="text-right">
                  <p class="font-medium">${{ money(pricing.collector.usd[0]) }}–${{ money(pricing.collector.usd[1]) }}</p>
                  <p class="text-zinc-400">MXN {{ money(pricing.collector.mxn[0]) }}–{{ money(pricing.collector.mxn[1]) }}</p>
                </div>
              </div>

              <div class="flex items-start justify-between gap-6">
                <div>
                  <p class="font-medium text-white">{{ content.pkg.legacy.title }}</p>
                  <p class="text-zinc-400">{{ content.pkg.legacy.duration }}</p>
                </div>
                <div class="text-right">
                  <p class="font-medium">${{ money(pricing.legacy.usd[0]) }}–${{ money(pricing.legacy.usd[1]) }}</p>
                  <p class="text-zinc-400">MXN {{ money(pricing.legacy.mxn[0]) }}–{{ money(pricing.legacy.mxn[1]) }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h3 class="text-lg font-medium">
              {{ locale === "en" ? "Notes" : "Notas" }}
            </h3>

            <ul class="mt-4 space-y-2 text-sm font-zinc-600">
              <li v-for="(n, i) in content.pricingNotes" :key="i" class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300/70"></span>
                <span>{{ n }}</span>
              </li>
            </ul>

            <div class="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
              <p class="text-sm font-medium text-white">
                {{ locale === "en" ? "Want exact pricing?" : "¿Quiere un precio exacto?" }}
              </p>
              <p class="mt-2 text-sm font-zinc-600">
                {{ locale === "en"
                  ? "Send 3–5 photos of the materials + a one-paragraph goal. I’ll reply with a suggested package and a tighter estimate."
                  : "Envíe 3–5 fotos de los materiales + una meta en un párrafo. Le responderé con un paquete recomendado y una estimación más precisa."
                }}
              </p>
              <a
                  href="#contact"
                  class="mt-4 inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
              >
                {{ locale === "en" ? "Contact" : "Contacto" }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section id="process" class="border-t border-zinc-900">
      <div class="mx-auto max-w-6xl px-4 py-14">
        <h2 class="text-2xl font-medium tracking-tight md:text-3xl">
          {{ content.processTitle }}
        </h2>

        <div class="mt-8 grid gap-6 md:grid-cols-4">
          <div
              v-for="(s, i) in content.steps"
              :key="i"
              class="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6"
          >
            <p class="text-xs font-medium tracking-wide text-zinc-400">
              {{ locale === "en" ? "Step" : "Paso" }} {{ i + 1 }}
            </p>
            <p class="mt-2 font-medium text-white">{{ s.title }}</p>
            <p class="mt-2 text-sm font-zinc-600">{{ s.desc }}</p>
          </div>
        </div>

        <div class="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
          <h3 class="text-lg font-medium">{{ content.addOnsTitle }}</h3>
          <ul class="mt-4 grid gap-2 text-sm font-zinc-600 md:grid-cols-2">
            <li v-for="(a, i) in content.addOns" :key="i" class="flex gap-3">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300/70"></span>
              <span>{{ a }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="border-t border-zinc-900">
      <div class="mx-auto max-w-6xl px-4 py-14">
        <h2 class="text-2xl font-medium tracking-tight md:text-3xl">
          {{ content.faqTitle }}
        </h2>

        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <details
              v-for="(f, i) in content.faqs"
              :key="i"
              class="group rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6"
          >
            <summary class="cursor-pointer list-none font-medium text-white">
              <span class="flex items-start justify-between gap-6">
                <span>{{ f.q }}</span>
                <span class="text-zinc-400 group-open:rotate-45 transition">+</span>
              </span>
            </summary>
            <p class="mt-3 text-sm leading-relaxed font-zinc-600">{{ f.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="border-t border-zinc-900">
      <div class="mx-auto max-w-6xl px-4 py-14">
        <div class="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-10">
          <h2 class="text-2xl font-medium tracking-tight md:text-3xl">
            {{ content.contactTitle }}
          </h2>
          <p class="mt-3 max-w-2xl font-zinc-600">
            {{ content.contactSub }}
          </p>

          <div class="mt-8 grid gap-6 md:grid-cols-3">
            <div class="rounded-2xl border border-zinc-800 bg-zinc-950/30 p-5">
              <p class="text-xs font-medium tracking-wide text-zinc-400">
                {{ content.contact.phoneLabel }}
              </p>
              <a class="mt-2 block text-lg font-medium hover:underline" href="tel:+13232707263">
                +1 (323) 270-7263
              </a>
            </div>

            <div class="rounded-2xl border border-zinc-800 bg-zinc-950/30 p-5">
              <p class="text-xs font-medium tracking-wide text-zinc-400">
                {{ content.contact.emailLabel }}
              </p>
              <a class="mt-2 block text-lg font-medium hover:underline" href="mailto:payanjenndifer9@gmail.com">
                payanjennifer9@gmail.com
              </a>
            </div>

            <div class="rounded-2xl border border-zinc-800 bg-zinc-950/30 p-5">
              <p class="text-xs font-medium tracking-wide text-zinc-400">
                {{ locale === "en" ? "Availability" : "Disponibilidad" }}
              </p>
              <p class="mt-2 text-sm font-zinc-600">
                {{ content.contact.location }}
              </p>
            </div>
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <a
                class="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
                href="mailto:payanjennifer9@gmail.com?subject=San%20Miguel%20Archive%20Consultation"
            >
              {{ content.contact.cta }}
            </a>

            <p class="text-xs text-zinc-400">
              {{ locale === "en"
                ? "Tip: include 3–5 photos of materials + your main goal."
                : "Tip: incluya 3–5 fotos de los materiales + su meta principal."
              }}
            </p>
          </div>
        </div>

        <footer class="mt-10 pb-10 text-center text-xs text-zinc-500">
          {{ content.footer }}
        </footer>
      </div>
    </section>
  </div>
</template>
