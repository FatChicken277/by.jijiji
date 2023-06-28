<script setup>
import { watchEffect, ref, onMounted } from "vue";
import tailwindConfig from "../../tailwind.config.js";

const video = ref("videos/Video01.mp4");

let backgrounds = {
  1: "videos/Video01.mp4",
  2: "videos/Video02.mp4",
  3: "videos/Video03.mp4",
  4: "videos/Video04.mp4",
  5: "videos/Video05.mp4",
  6: "videos/Video06.mp4",
  7: "videos/Video07.mp4",
  8: "videos/Video08.mp4",
  9: "videos/Video09.mp4",
  10: "videos/Video10.mp4",
  11: "videos/Video11.mp4",
  12: "videos/Video12.mp4",
  13: "videos/Video13.mp4",
};

async function loadVideo(src) {
  const response = await fetch(src);
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  let v = document.createElement("video");
  v.style.display = "none";
  v.preload = "auto";
  v.src = url;

  document.body.appendChild(v);

  return await new Promise((resolve, reject) => {
    v.addEventListener("loadeddata", () => {
      resolve(url);
    });

    v.addEventListener("error", () => {
      reject();
    });
  });
}

function preloadVideos() {
  const videoPromises = Object.values(backgrounds).map((url) => loadVideo(url));

  return Promise.all(videoPromises);
}

const blobUrls = ref([]);

onMounted(async () => {
  try {
    blobUrls.value = await preloadVideos();
    // All videos have been fully loaded and cached as Blob URLs
    // You can store the blobUrls for later use, if needed
  } catch (error) {
    // An error occurred while loading the videos
  }
});

function changeBg(index) {
  video.value = blobUrls.value[index];
}

let intervalId = 0;
let activeIndex = 0;

function stopInterval() {
  clearInterval(intervalId);
}

function startInterval() {
  stopInterval(); // Ensure only one interval is running at a time

  changeBg(activeIndex);

  intervalId = setInterval(() => {
    activeIndex = (activeIndex + 1) % Object.keys(backgrounds).length;

    changeBg(activeIndex);
  }, 5000);
}

watchEffect(() => {
  const mediaQuery = window.matchMedia(
    `(max-width: ${tailwindConfig.theme.screens.md})`
  );
  const handleResize = () => {
    if (mediaQuery.matches) {
      startInterval();
    } else {
      stopInterval();
    }
  };
  mediaQuery.addEventListener("change", handleResize);
  handleResize(); // Call the handler immediately to handle the initial state
  // Cleanup the event listener when no longer needed
  return () => {
    mediaQuery.removeEventListener("change", handleResize);
  };
});
</script>

<template>
  <div class="h-[100dvh]">
    <video
      id="video"
      class="absolute h-full w-full object-cover"
      :src="video"
      type="video/mp4"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      :key="video"
    ></video>
    <div id="logo" class="absolute h-full w-full"></div>
    <!-- Desktop -->
    <div
      class="relative hidden md:z-10 md:grid md:h-full md:grid-flow-col md:py-20"
    >
      <div
        v-for="(value, index) in 13"
        :key="index"
        @mouseover="changeBg(index)"
        class="group flex justify-center"
      >
        <h1
          class="mt-auto hidden group-hover:block md:text-[5rem] xl:text-[7rem]"
        >
          {{ value }}
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
#logo {
  background-image: url("../assets/logo.webp");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 40vh;
}
</style>
