<script setup>
import { ref } from "vue";

import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// computed
const currentRoute = computed(() => {
  return router.currentRoute.value.name;
});

let isMenuOpen = ref(false);

function openMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <header
    class="absolute top-0 z-20 flex w-full flex-wrap items-center justify-between p-5 font-mono font-black md:flex-nowrap"
  >
    <!-- Desktop -->
    <router-link
      to="/"
      class="hidden md:mr-auto md:block md:text-lg xl:text-2xl"
      >PROPERTY OF CREATIVE CONTROL BY.HASKI©️
    </router-link>

    <nav class="hidden md:block">
      <ul class="flex text-lg">
        <li class="p-4"><router-link to="/">HOME</router-link></li>
        <li class="p-4"><router-link to="/projects">PROJECTS</router-link></li>
        <li class="p-4"><router-link to="/about">ABOUT ME</router-link></li>
        <li class="p-4"><router-link to="/contact">CONTACT</router-link></li>
      </ul>
    </nav>

    <!-- mobile -->
    <router-link to="/" class="text-xl md:hidden">BY.HASKI©️</router-link>

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
        <li class="p-4">
          <router-link @click="openMenu" to="/">HOME</router-link>
        </li>
        <li class="p-4">
          <router-link @click="openMenu" to="/projects">PROJECTS</router-link>
        </li>
        <li class="p-4">
          <router-link @click="openMenu" to="/about">ABOUT ME</router-link>
        </li>
        <li class="p-4">
          <router-link @click="openMenu" to="/contact">CONTACT</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
