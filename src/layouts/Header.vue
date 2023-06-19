<script setup>
import { ref } from "vue";

let isMenuOpen = ref(false);

function openMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <header
    class="z-10 flex flex-wrap items-center justify-between p-5 font-mono font-black md:flex-nowrap"
  >
    <!-- Desktop -->
    <span class="hidden md:block md:text-lg xl:text-2xl"
      >PROPERTY OF CREATIVE CONTROL BY.HASKI©️</span
    >

    <nav class="hidden md:block">
      <ul class="flex text-lg">
        <li class="p-4"><a href="#">PROJECTS</a></li>
        <li class="p-4"><a href="#">ABOUT ME</a></li>
        <li class="p-4"><a href="#">CONTACT</a></li>
      </ul>
    </nav>

    <!-- mobile -->
    <span class="text-xl md:hidden">BY.HASKI©️</span>

    <font-awesome-icon
      @click="openMenu"
      class="text-2xl md:hidden"
      icon="fa-solid fa-bars"
    />

    <nav
      v-if="isMenuOpen"
      class="my-10 flex basis-full justify-center bg-black md:hidden"
    >
      <ul class="flex flex-col items-center">
        <li class="p-4"><a href="#">PROJECTS</a></li>
        <li class="p-4"><a href="#">ABOUT ME</a></li>
        <li class="p-4"><a href="#">CONTACT</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
