<script setup>


import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

function handleSubmit() {

  console.log('Form submitted:', form.value)

  // Reset fields after submission
  form.value = { name: '', email: '', message: '' }
}
</script>
<template>
  <section class="contact-section bg-burnt text-white py-16" id="contact">
    <div class="container mx-auto px-6 md:px-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Left Side: Heading + Contact Info + Portfolio Button -->
        <div class="space-y-8">
          <h2 class="text-4xl md:text-5xl font-semibold">Let’s Collaborate</h2>

          <!-- Contact Details -->
          <div class="space-y-4">


            <div class="flex items-center space-x-3">
              <!-- Phone Icon  -->
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-cream flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 7.89a5 5 0 007.07 0L21 11m-9-2V3m0 0L7 7m4-4l4 4"
                />
              </svg>
              <p class="text-base">(310) 555-1234</p>
            </div>

            <div class="flex items-center space-x-3">
              <!-- Email Icon  -->
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-cream flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12l-4-4m0 0l-4 4m4-4v12"
                />
              </svg>
              <p class="text-base">j.payan@academymuseum.org</p>
            </div>
          </div>

          <!-- “View Portfolio” Button

          <NuxtLink
              to="/work"
              class="inline-block bg-white text-indigo-900 hover:bg-gray-100 transition-colors font-medium px-6 py-3 rounded-full"
          >
            View Portfolio →
          </NuxtLink>
          -->
        </div>

        <!-- Right Side: Contact Form -->
        <div>
          <div class="bg-cream rounded-lg p-8 md:p-12 text-indigo-900">
            <h3 class="text-2xl font-semibold mb-6">Send a note</h3>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name Field -->
              <div>
                <label for="name" class="sr-only">Name</label>
                <input
                    v-model="form.name"
                    id="name"
                    type="text"
                    placeholder="Name"
                    class="w-full px-4 py-3 rounded-lg bg-yellow-50 border border-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-900"
                    required
                />
              </div>

              <!-- Email Field -->
              <div>
                <label for="email" class="sr-only">Email</label>
                <input
                    v-model="form.email"
                    id="email"
                    type="email"
                    placeholder="Email"
                    class="w-full px-4 py-3 rounded-lg bg-yellow-50 border border-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-900"
                    required
                />
              </div>

              <!-- Message Field -->
              <div>
                <label for="message" class="sr-only">Message</label>
                <textarea
                    v-model="form.message"
                    id="message"
                    rows="6"
                    placeholder="Write me a message..."
                    class="w-full px-4 py-3 rounded-lg bg-yellow-50 border border-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-900 resize-none"
                    required
                ></textarea>
              </div>

              <!-- Submit Button -->
              <div>
                <button
                    type="submit"
                    class="bg-terracotta text-white hover:bg-terracotta-hover transition-colors font-medium px-6 py-2 rounded-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



