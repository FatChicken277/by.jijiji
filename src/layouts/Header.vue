<script setup>
import { ref } from "vue";

import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Social Links
const igLink = "https://www.instagram.com/by.haski/";
const fbLink = "https://www.facebook.com/profile.php?id=100054453782766";
const bhLink = "https://www.behance.net/ByHaski";

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
    class="absolute top-0 z-20 flex w-full flex-wrap items-center justify-between p-5 font-black md:flex-nowrap"
  >
    <!-- Desktop -->
    <router-link to="/" class="hidden md:block md:text-lg xl:text-2xl"
      >BY.HASKI<font-awesome-icon
        class="ml-2 align-text-bottom text-lg"
        icon="fa-regular fa-copyright"
      />
    </router-link>

    <nav class="hidden md:flex md:items-center md:text-lg">
      <ul class="flex">
        <li class="p-4"><router-link to="/">HOME</router-link></li>
        <li class="p-4"><router-link to="/projects">PROJECTS</router-link></li>
        <li class="p-4"><router-link to="/about">ABOUT ME</router-link></li>
        <li class="p-4"><router-link to="/contact">CONTACT</router-link></li>
      </ul>

      <div class="ml-5 space-x-5 px-5">
        <a :href="igLink">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
        <a :href="fbLink">
          <font-awesome-icon icon="fa-brands fa-square-facebook" />
        </a>
        <a :href="bhLink">
          <font-awesome-icon icon="fa-brands fa-behance" />
        </a>
      </div>
    </nav>

    <!-- mobile -->
    <router-link to="/" class="text-xl md:hidden"
      >BY.HASKI<font-awesome-icon
        class="ml-2 align-text-bottom text-base"
        icon="fa-regular fa-copyright"
    /></router-link>

    <font-awesome-icon
      @click="openMenu"
      class="text-2xl md:hidden"
      icon="fa-solid fa-bars"
    />

    <nav
      v-if="isMenuOpen"
      class="mt-10 flex basis-full flex-col justify-center space-y-10 bg-black py-10 md:hidden"
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

      <div class="flex justify-center space-x-10 p-4">
        <a :href="igLink">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
        <a :href="fbLink">
          <font-awesome-icon icon="fa-brands fa-square-facebook" />
        </a>
        <a :href="bhLink">
          <font-awesome-icon icon="fa-brands fa-behance" />
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
