<script setup></script>
<template>
    <div class="py-16 bg-black grid place-items-center w-full">
        <h3 class="text-white text-3xl font-bold mb-8">Contact</h3>
        <div class="container bg-white mx-6 w-3/4">
            <form action="submit" class="flex flex-col p-6">
                <label for="name" class="text-xl font-bold mb-2">Name:</label>
                <input
                    type="text"
                    id="name"
                    placeholder="First and Last Name"
                    class="border-2 border-gray-300 p-2"
                />
                <label for="email" class="text-xl font-bold mb-2">Email:</label>
                <input
                    type="email"
                    placeholder="Email"
                    class="border-2 border-gray-300 p-2"
                />
                <label for="subject" class="text-xl font-bold mb-2"
                    >Subject:
                </label>
                <input
                    type="text"
                    id="subject"
                    class="border-2 border-gray-300 p-2"
                />
                <label for="message" class="text-xl font-bold mb-2">
                    Message:
                </label>
                <textarea
                    rows="10"
                    id="message"
                    placeholder="Tell me about your project or need"
                    class="border-2 border-gray-300 p-2"
                ></textarea>

                <button
                    action="submit"
                    class="text-xl font-bold border-2 border-black p-4 w-32 self-center mt-12 hover:bg-black hover:text-white"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>
