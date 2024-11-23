<script setup>
import { watchEffect, ref, onMounted } from "vue";
import tailwindConfig from "../../tailwind.config.js";

const video = ref("videos/lowres/Video01.mp4");
const videoUrls = ref([]);
const highResVideoUrls = ref([]);
const loadedVideos = ref(0);
const progress = ref(0);
const totalVideos = 13;
const highResLoaded = ref(false); // Flag to track if high-quality videos are loaded

let intervalId = 0;
let activeIndex = 0;

let backgrounds = {
  1: { low: "videos/lowres/Video01.mp4", high: "videos/Video01.mp4" },
  2: { low: "videos/lowres/Video02.mp4", high: "videos/Video02.mp4" },
  3: { low: "videos/lowres/Video03.mp4", high: "videos/Video03.mp4" },
  4: { low: "videos/lowres/Video04.mp4", high: "videos/Video04.mp4" },
  5: { low: "videos/lowres/Video05.mp4", high: "videos/Video05.mp4" },
  6: { low: "videos/lowres/Video06.mp4", high: "videos/Video06.mp4" },
  7: { low: "videos/lowres/Video07.mp4", high: "videos/Video07.mp4" },
  8: { low: "videos/lowres/Video08.mp4", high: "videos/Video08.mp4" },
  9: { low: "videos/lowres/Video09.mp4", high: "videos/Video09.mp4" },
  10: { low: "videos/lowres/Video10.mp4", high: "videos/Video10.mp4" },
  11: { low: "videos/lowres/Video11.mp4", high: "videos/Video11.mp4" },
  12: { low: "videos/lowres/Video12.mp4", high: "videos/Video12.mp4" },
  13: { low: "videos/lowres/Video13.mp4", high: "videos/Video13.mp4" },
};

async function loadVideo(src) {
  const response = await fetch(src);
  const blob = await response.blob();
  const videoUrl = URL.createObjectURL(blob);

  let v = document.createElement("video");
  v.style.display = "none";
  v.preload = "auto";
  v.src = videoUrl;

  document.body.appendChild(v);

  v.load(); // Trigger explicit loading (ios fix??)

  return await new Promise((resolve, reject) => {
    v.addEventListener("loadeddata", () => {
      loadedVideos.value++;
      progress.value = Math.round((loadedVideos.value / totalVideos) * 100);

      resolve(videoUrl);
    });

    v.addEventListener("error", () => {
      reject();
    });
  });
}

async function preloadLowResVideos() {
  const videoPromises = Object.values(backgrounds).map((urls) =>
    loadVideo(urls.low)
  );
  return Promise.all(videoPromises);
}

async function preloadHighResVideos() {
  const videoPromises = Object.values(backgrounds).map((urls) =>
    loadVideo(urls.high)
  );
  return Promise.all(videoPromises);
}

onMounted(async () => {
  try {
    videoUrls.value = await preloadLowResVideos();
    // Load high-resolution videos in the background after low-resolution videos are loaded
    preloadHighResVideos().then((urls) => {
      highResVideoUrls.value = urls;
      highResLoaded.value = true; // Set the flag when high-quality videos are loaded
    });
  } catch (error) {
    // An error occurred while loading the videos
  }
});

function changeBg(index) {
  if (highResLoaded.value) {
    video.value = highResVideoUrls.value[index] || videoUrls.value[index];
  } else {
    video.value = videoUrls.value[index];
  }
}

function stopInterval() {
  clearInterval(intervalId);
}

function startInterval() {
  stopInterval(); // Ensure only one interval is running at a time

  changeBg(activeIndex);

  intervalId = setInterval(() => {
    activeIndex = (activeIndex + 1) % Object.keys(backgrounds).length;

    changeBg(activeIndex);
  }, 3000);
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
    <div
      v-if="!(videoUrls.length === 13)"
      class="absolute top-0 z-[15] flex h-[100dvh] w-[100dvw] items-center justify-center bg-black"
    >
      <h1>Loading: {{ progress }}%</h1>
    </div>
    <video
      class="z-5 absolute h-full w-full object-cover"
      src="../assets/overlay.mp4"
      muted
      autoplay
      loop
      preload="auto"
      playsinline
    ></video>
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
