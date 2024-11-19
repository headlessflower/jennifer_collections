<script setup>

</script>
<template>
  <div class="py-16 bg-black">
    <h3 class="text-white text-3xl font-bold mb-8">Contact</h3>
    <div class="container bg-white mx-6">

      <form action="submit" class="flex flex-col">

        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="First and Last Name">
        <label for="email">Email:</label>
        <input type="email" placeholder="Email">
        <label for="subject">Subject: </label>
        <input type="text" id="subject">
        <label for="message"> Message: </label>
        <textarea rows="10" id="message" placeholder="Tell me about your project or need"></textarea>

        <button action="submit">Submit</button>
      </form>


    </div>
  </div>
</template>
