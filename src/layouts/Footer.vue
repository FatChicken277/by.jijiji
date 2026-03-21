<script setup>
const date = new Date();
const currentYear = date.getFullYear();
</script>

<template>
  <div class="mt-10 flex w-full flex-col items-center justify-center p-10">
    <span class="text-center"
      >Website created by
      <a class="underline" href="https://www.instagram.com/aleejo.rc/" target="_blank">@aleejo.rc</a>
      &
      <a class="underline" href="https://www.instagram.com/d4nni.e?igsh=a3A1YmRjNGxhbmFr&utm_source=qr" target="_blank">@d4nni.e</a>
      ></span
    >
    <h2 class="text-center">
      ©️ Copyright by ByHaski. {{ currentYear }}. All Rights Reserved.
    </h2>
  </div>
</template>

<style scoped></style>
