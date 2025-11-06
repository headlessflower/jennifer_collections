<template>
  <section class="w-full">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <header class="mb-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight">Contact</h2>
        <p class="mt-3 text-base/7 sm:text-lg/8 opacity-80">
          Send a note—I'll get back to you soon.
        </p>
      </header>

      <!-- Grid: Info + Form -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Info panel -->
        <aside class="rounded-2xl border border-foreground/10 p-6 shadow-sm hover:shadow-md transition">
          <h3 class="text-xl font-semibold">Get in touch</h3>
          <p class="mt-2 opacity-80">
            For project inquiries, collaborations, or speaking invitations, reach out anytime.
          </p>

          <dl class="mt-5 space-y-4 text-sm">
            <div class="flex items-start gap-3">
              <span class="mt-1 size-1.5 rounded-full bg-foreground/40"></span>
              <div>
                <dt class="font-medium">Email</dt>
                <dd class="opacity-80">
                  <a class="underline underline-offset-4 hover:opacity-80" href="mailto:payanjennifer9@gmail.com">
                    payanjennifer9@gmail.com
                  </a>
                </dd>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="mt-1 size-1.5 rounded-full bg-foreground/40"></span>
              <div>
                <dt class="font-medium">Phone</dt>
                <dd class="opacity-80">
                  <a class="underline underline-offset-4 hover:opacity-80" href="tel:+13232707263">
                    (323) 270-7263
                  </a>
                </dd>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="mt-1 size-1.5 rounded-full bg-foreground/40"></span>
              <div>
                <dt class="font-medium">Based in</dt>
                <dd class="opacity-80">Los Angeles, CA</dd>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="mt-1 size-1.5 rounded-full bg-foreground/40"></span>
              <div>
                <dt class="font-medium">Services</dt>
                <dd class="opacity-80">
                  Collections Management · Archival Research · Digital Preservation · Public Art Conservation
                </dd>
              </div>
            </div>
          </dl>

          <!-- Optional: quick actions -->
          <div class="mt-6 flex flex-wrap gap-3">
            <NuxtLink
                to="/services"
                class="inline-flex items-center justify-center border border-burnt hover:bg-burnt rounded-2xl px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition"
            >
              Explore Services
            </NuxtLink>
            <NuxtLink
                to="/projects"
                class="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium border hover:border-burnt border-foreground/15 hover:border-foreground/30 hover:shadow-sm transition"
            >
              See Projects
            </NuxtLink>
          </div>
        </aside>

        <!-- Form -->
        <div class="lg:col-span-2">
          <form
              @submit.prevent="onSubmit"
              class="rounded-2xl border border-foreground/10 p-6 shadow-sm hover:shadow-md transition"
              novalidate
          >


            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label for="name" class="block text-sm font-medium opacity-80">Name</label>
                <input
                    id="name"
                    v-model.trim="form.name"
                    type="text"
                    required
                    minlength="2"
                    class="mt-2 w-full rounded-xl border border-foreground/15 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-burnt"
                    placeholder="Your full name"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium opacity-80">Email</label>
                <input
                    id="email"
                    v-model.trim="form.email"
                    type="email"
                    required
                    class="mt-2 w-full rounded-xl border border-foreground/15 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-burnt"
                    placeholder="you@example.org"
                />
              </div>

              <div class="sm:col-span-2">
                <label for="org" class="block text-sm font-medium opacity-80">Organization (optional)</label>
                <input
                    id="org"
                    v-model.trim="form.organization"
                    type="text"
                    class="mt-2 w-full rounded-xl border border-foreground/15 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-burnt"
                    placeholder="Organization / Institution"
                />
              </div>

              <div class="sm:col-span-2">
                <label for="msg" class="block text-sm font-medium opacity-80">Message</label>
                <textarea
                    id="msg"
                    v-model.trim="form.message"
                    required
                    minlength="5"
                    rows="6"
                    class="mt-2 w-full rounded-xl border border-foreground/15 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-burnt"
                    placeholder="How can I help?"
                />
              </div>
            </div>

            <div class="mt-6 flex items-center gap-3">
              <button
                  type="submit"
                  :disabled="loading"
                  class="inline-flex items-center justify-center border border-burnt hover:bg-burnt rounded-2xl px-5 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span v-if="!loading">Send message</span>
                <span v-else>Sending…</span>
              </button>

              <p v-if="success" class="text-sm text-green-600">Thanks! Your message has been sent.</p>
              <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const supabase = useSupabaseClient()
type ContactForm = { name: string; email: string; organization?: string; message: string }

const form = reactive<ContactForm>({ name: '', email: '', organization: '', message: '' })
const loading = ref(false)
const success = ref(false)
const error = ref<string | null>(null)

async function onSubmit() {
  error.value = null
  success.value = false

  if (!form.name || !form.email || !form.message) {
    error.value = 'Please fill in name, email, and message.'
    return
  }

  loading.value = true
  try {
    const { error: insertError } = await supabase.from('contact_messages').insert([{
      name: form.name,
      email: form.email,
      organization: form.organization || null,
      message: form.message
    }])

    if (insertError) throw insertError

    success.value = true
    form.name = ''
    form.email = ''
    form.organization = ''
    form.message = ''
  } catch (e: any) {
    error.value = e?.message || 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.rounded-2xl { transition: box-shadow 200ms ease, border-color 200ms ease; }
</style>
