<script setup>
import TimeCounter from "../components/TimeCounter.vue";
</script>

<template>
  <div class="mt-auto flex justify-between p-5">
    <h1 class="text-lg md:text-xl xl:text-[3rem]">
      PLAY <font-awesome-icon icon="fa-solid fa-play" />
    </h1>
    <TimeCounter class="text-lg md:text-xl xl:text-[3rem]" />
  </div>
</template>

<style scoped></style>
