<script setup>
import TimeCounter from "../components/TimeCounter.vue";

// Create a new Date object
const currentDate = new Date();

// Define the options for date formatting
const options = { year: "numeric", month: "short", day: "2-digit" };

// Format the date string
const formattedDate = currentDate.toLocaleDateString("en-US", options);
</script>

<template>
  <div
    class="absolute bottom-0 z-10 mt-auto flex w-full justify-between p-5 align-baseline"
  >
    <div class="mt-auto flex divide-x text-xl xl:text-[2.5rem]">
      <h1 class="text-red-600">
        REC <font-awesome-icon icon="fa-solid fa-circle" />
      </h1>
    </div>

    <div
      class="mt-auto flex flex-col text-right text-xl md:flex-row md:divide-x xl:text-[2.5rem]"
    >
      <TimeCounter class="md:px-5" />
      <h1 class="md:px-5">{{ formattedDate }}</h1>
    </div>
  </div>
</template>

<style scoped></style>
