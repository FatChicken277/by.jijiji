<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Breakpoint "md" de Tailwind. Antes se leia importando tailwind.config.js, que
// deja de ser fuente de verdad en Tailwind 4.
const MD_BREAKPOINT = "768px";

const TOTAL = 13;
const ROTATE_MS = 3000;

// Rutas absolutas: con history mode la URL puede tener segmentos y una ruta
// relativa resolveria contra ellos.
const sources = Array.from({ length: TOTAL }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { low: `/videos/lowres/Video${n}.mp4`, high: `/videos/Video${n}.mp4` };
});

const activeIndex = ref(0);
const isMobile = ref(false);
// Se empieza en baja y se sube a alta cuando termino de precargarse, igual que
// antes. El hover tiene que ser instantaneo: si el archivo no esta en cache, el
// <video> se recrea y queda en negro mientras descarga.
const quality = ref("low");
const video = ref(sources[0].low);

function srcFor(index) {
  const s = sources[index] || sources[0];
  return s[quality.value];
}

function changeBg(index) {
  activeIndex.value = index;
  video.value = srcFor(index);
}

// ── Precarga ──────────────────────────────────────────────────────────────────
// En segundo plano y de a uno, para no pelear por el ancho de banda con el video
// que se esta viendo. A diferencia de la version anterior no se usa
// fetch -> createObjectURL (que retenia los 43 MB en memoria y nunca llamaba a
// revokeObjectURL): alcanza con que el archivo quede en la cache HTTP.
let preloaders = [];
let cancelled = false;

function preload(src) {
  return new Promise((resolve) => {
    const v = document.createElement("video");
    v.preload = "auto";
    v.muted = true;
    v.playsInline = true;
    v.style.display = "none";
    const done = () => resolve();
    v.addEventListener("canplaythrough", done, { once: true });
    v.addEventListener("error", done, { once: true });
    v.src = src;
    document.body.appendChild(v);
    preloaders.push(v);
    v.load();
  });
}

async function preloadSequence() {
  // Primero las de baja: son livianas y dejan el hover utilizable enseguida.
  for (const s of sources) {
    if (cancelled) return;
    await preload(s.low);
  }
  // En mobile no se usan las de alta: no tiene sentido bajar 32 MB.
  if (cancelled || isMobile.value) return;

  for (const s of sources) {
    if (cancelled) return;
    await preload(s.high);
  }
  if (cancelled) return;

  quality.value = "high";
  video.value = srcFor(activeIndex.value);
}

function clearPreloaders() {
  preloaders.forEach((v) => {
    v.removeAttribute("src");
    v.load();
    v.remove();
  });
  preloaders = [];
}

// ── Rotacion en mobile ────────────────────────────────────────────────────────
let intervalId = 0;
function stopInterval() {
  clearInterval(intervalId);
  intervalId = 0;
}
function startInterval() {
  stopInterval();
  changeBg(activeIndex.value);
  intervalId = setInterval(() => {
    changeBg((activeIndex.value + 1) % TOTAL);
  }, ROTATE_MS);
}

// El watchEffect anterior devolvia una funcion de limpieza, pero watchEffect
// ignora el valor de retorno (la limpieza va por el callback onCleanup). El
// listener quedaba vivo y el intervalo seguia corriendo al cambiar de seccion.
const mediaQuery = window.matchMedia(`(max-width: ${MD_BREAKPOINT})`);

function handleMediaChange() {
  isMobile.value = mediaQuery.matches;
  if (mediaQuery.matches) {
    startInterval();
  } else {
    stopInterval();
  }
}

onMounted(() => {
  mediaQuery.addEventListener("change", handleMediaChange);
  handleMediaChange();
  preloadSequence();
});

onUnmounted(() => {
  cancelled = true;
  mediaQuery.removeEventListener("change", handleMediaChange);
  stopInterval();
  clearPreloaders();
});
</script>

<template>
  <div class="h-[100dvh]">
    <!-- Sin z-index: el apilado lo da el orden del DOM (overlay, fondo, logo).
         Este elemento pedia z-index 5, valor que Tailwind 3 ignoraba por estar
         fuera de su escala (0/10/20/30/40/50). Tailwind 4 si lo genera, y el
         overlay pasaba a tapar el video de fondo y el logo. -->
    <video
      class="absolute h-full w-full object-cover"
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
        v-for="(value, index) in TOTAL"
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
