<script setup>
import { watchEffect, ref } from "vue";
import tailwindConfig from "../../tailwind.config.js";

let image = ref("");

let backgrounds = {
  1: "https://i0.wp.com/mattsmusicmine.com/wp-content/uploads/2020/06/kanye_west_wash_us_in_the_blood_01.gif?resize=533%2C300&ssl=1",
  2: "https://64.media.tumblr.com/978096c8d35c136219a85a0e39fd3cb1/tumblr_p3l67puILl1u8vq52o1_500.gifv",
  3: "https://images.squarespace-cdn.com/content/v1/603c54bc5646d67cf7bdee70/d3f83d1e-6863-4244-865a-0890c5cf1574/donda.gif",
  4: "https://64.media.tumblr.com/060f6fa59803a403968583733ca0a395/tumblr_ozcpkzDbZA1vi5e1to1_400.gifv",
  5: "https://64.media.tumblr.com/671ec3cbf3781e6db1512ebc4f5924c8/tumblr_ot1zp75Oqd1qgz1poo1_1280.gif",
  6: "https://media.tenor.com/edgWWPnK-psAAAAd/don-toliver.gif",
  7: "https://64.media.tumblr.com/369fd0dfd0729758a581d9ea53d14f9c/92180a66f1c17ba8-9b/s540x810/be459e86d3d55f18ea1d6f72d2d7fefe7b9630d1.gif",
  8: "https://i.gifer.com/ChO.gif",
  9: "https://i.pinimg.com/originals/6a/5e/38/6a5e386f372fd6568fad5ffb2c252697.gif",
  10: "https://i0.wp.com/the-avocado.org/wp-content/uploads/2023/03/tumblr_pt7n69tj9S1rn5gv3o1_500.gif?fit=469%2C354&ssl=1",
  11: "https://media.tenor.com/-2eykglRl6UAAAAC/travis-scott.gif",
  12: "https://64.media.tumblr.com/153139fe10c81d53d4f7fca75b6c10cc/tumblr_obhzxyQRyH1twiik6o1_500.gifv",
  13: "https://i.redd.it/0dxmdqfdva991.gif",
};

function changeBg(index) {
  image.value = "url('" + backgrounds[index] + "')";
}

let intervalId = 0;
let activeIndex = 1;

function stopInterval() {
  clearInterval(intervalId);
}

function startInterval() {
  stopInterval(); // Ensure only one interval is running at a time

  changeBg(activeIndex);

  intervalId = setInterval(() => {
    activeIndex = (activeIndex + 1) % (Object.keys(backgrounds).length + 1);

    if (activeIndex == 0) {
      activeIndex = 1;
    }

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
  <div id="home" :style="{ 'background-image': image }" class="h-[100vh]">
    <div id="logo" class="absolute h-full w-full"></div>
    <!-- Desktop -->
    <div
      class="relative hidden md:z-10 md:grid md:h-full md:grid-flow-col md:py-20"
    >
      <div
        v-for="index in 13"
        :key="index"
        @mouseover="changeBg(index)"
        class="group flex justify-center"
      >
        <h1 class="mt-auto hidden text-[6rem] group-hover:block">
          {{ index }}
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
#home {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

#logo {
  background-image: url("https://byhaski.com/img/logo.d20b1b89.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 40vh;
}
</style>
