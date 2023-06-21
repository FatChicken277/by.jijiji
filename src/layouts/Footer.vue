<script setup>
const date = new Date();
const currentYear = date.getFullYear();
</script>

<template>
  <div class="mt-10 flex w-full flex-col items-center justify-center p-10">
    <span
      >Website created by
      <a class="underline" href="https://www.instagram.com/aleejo.rc/"
        >@aleejo.rc</a
      ></span
    >
    <h2>©️ Copyright by ByHaski. {{ currentYear }}. All Rights Reserved.</h2>
  </div>
</template>

<style scoped></style>
