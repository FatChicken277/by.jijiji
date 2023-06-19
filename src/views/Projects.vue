<script setup></script>

<template>
  <div class="grid grid-cols-3 bg-red-400">
    <div
      v-for="index in 10"
      :key="index"
      class="flex h-[20rem] items-center justify-center"
    >
      {{ index }}
    </div>
  </div>
</template>

<style scoped></style>
