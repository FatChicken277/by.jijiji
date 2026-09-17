<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import VueLoadImage from "vue-load-image";
import { useProjects } from "../composables/useProjects";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const { getAll } = useProjects();

const allCards = ref([]);
const displayCards = ref([]);
const loading = ref(true);
const error = ref("");
let from = 0;
const BATCH = 9;

const popupIsActive = ref(false);
const popupUrl = ref("");

const screenWidth = ref(window.innerWidth);
const itemsToShow = computed(() => {
  if (screenWidth.value < 640) return 1;
  if (screenWidth.value < 768) return 2;
  return 3;
});

function openVideo(code) {
  popupIsActive.value = !popupIsActive.value;
  popupUrl.value = "https://www.youtube.com/embed/" + code;
}

function getNextBatch() {
  const next = allCards.value.slice(from, from + BATCH);
  from += BATCH;
  return next;
}

function handleScroll() {
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
    const more = getNextBatch();
    if (more.length) displayCards.value = [...displayCards.value, ...more];
  }
}

// Con nombre para poder removerlo en onUnmounted. Como arrow inline era
// imposible de desregistrar y se acumulaba uno por cada visita a /projects.
function handleResize() {
  screenWidth.value = window.innerWidth;
}

async function load() {
  loading.value = true;
  error.value = "";
  try {
    allCards.value = await getAll();
    from = 0;
    displayCards.value = getNextBatch();
  } catch (e) {
    error.value = e.message || "No se pudieron cargar los videos";
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  await load();
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div>
    <!-- Loading -->
    <div v-if="loading" class="absolute top-0 z-[15] flex h-[100dvh] w-[100dvw] items-center justify-center bg-black">
      <h1>Loading...</h1>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="absolute top-0 z-[15] flex h-[100dvh] w-[100dvw] flex-col items-center justify-center bg-black px-8 text-center">
      <h1 class="mb-3 text-xl">No se pudieron cargar los videos</h1>
      <p class="mb-8 text-sm text-white/40">{{ error }}</p>
      <button @click="load" class="border-2 border-white px-8 py-3 text-sm tracking-widest transition hover:bg-white hover:text-black">
        REINTENTAR
      </button>
    </div>

    <!-- Video popup -->
    <div
      v-if="popupIsActive"
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
      class="absolute z-50 flex h-full w-full flex-col items-center"
    >
      <div class="absolute h-full w-full bg-zinc-900 opacity-90"></div>
      <div class="sticky top-0 z-10 flex h-[100vh] flex-col items-center justify-center">
        <button @click="openVideo()" class="mb-4 h-14 w-14 rounded-full bg-black text-2xl">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
        <div class="aspect-video w-[90dvw] shadow-[0_0px_30px_rgba(0,0,0,0.5)] md:h-[60dvh] md:w-full">
          <iframe
            width="100%"
            height="100%"
            :src="popupUrl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <div v-if="!loading && !error">
      <!-- Highlights carousel -->
      <div class="mx-5 mt-5 shadow-[0_0_40px_0_rgba(255,255,255,0.4)]">
        <carousel
          :autoplay="1000"
          :transition="1000"
          :items-to-show="itemsToShow"
          :wrap-around="true"
          :pauseAutoplayOnHover="true"
        >
          <slide v-for="(card, index) in allCards.filter((c) => c.highlight)" :key="index">
            <div
              @click="openVideo(card.yt)"
              class="group relative my-2 flex aspect-video w-full cursor-pointer flex-col md:my-0 md:items-center md:justify-center"
            >
              <VueLoadImage class="w-full">
                <template v-slot:image>
                  <img
                    class="aspect-video w-full object-cover transition ease-in-out md:group-hover:opacity-10 md:group-hover:blur-sm"
                    :alt="card.title"
                    :src="`https://img.youtube.com/vi/${card.yt}/hqdefault.jpg`"
                  />
                </template>
                <template v-slot:preloader>
                  <div class="flex h-[10rem] w-full items-center justify-center">
                    <img class="h-10 w-10" src="../assets/loading.gif" />
                  </div>
                </template>
              </VueLoadImage>
              <div class="hidden flex-col break-words md:absolute md:items-center md:text-center md:group-hover:flex">
                <h1 class="mt-2 box-content break-words text-xl font-bold md:mt-0">
                  {{ card.title.toUpperCase() }}
                </h1>
                <h2 class="text-xs">{{ card.work.toUpperCase() }}</h2>
              </div>
            </div>
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>

      <!-- Grid -->
      <h1 class="my-5 text-center text-xl font-bold md:my-10">Latest releases</h1>
      <div class="grid grid-cols-1 gap-3 px-5 md:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="card in displayCards"
          :key="card.id ?? card.title"
          @click="openVideo(card.yt)"
          class="group relative my-2 flex aspect-video w-full cursor-pointer flex-col md:my-0 md:items-center md:justify-center"
        >
          <VueLoadImage class="w-full">
            <template v-slot:image>
              <img
                class="aspect-video w-full object-cover transition ease-in-out md:group-hover:opacity-10 md:group-hover:blur-sm"
                :alt="card.title"
                :src="`https://img.youtube.com/vi/${card.yt}/hqdefault.jpg`"
              />
            </template>
            <template v-slot:preloader>
              <div class="flex h-[10rem] w-full items-center justify-center">
                <img class="h-10 w-10" src="../assets/loading.gif" />
              </div>
            </template>
          </VueLoadImage>
          <div class="flex flex-col break-words group-hover:flex md:absolute md:hidden md:items-center md:text-center">
            <h1 class="mt-2 box-content break-words text-xl font-bold md:mt-0">
              {{ card.title.toUpperCase() }}
            </h1>
            <h2 class="text-xs">{{ card.work.toUpperCase() }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
