<script setup>
import { ref, onMounted } from "vue";
import VueLoadImage from "vue-load-image";

let cards = [
  {
    title: "Me quebraste - Music Video",
    work: "Edición",
    yt: "DQXoj7vzy8Y",
  },
  {
    title: "DEFJAM - Music Video",
    work: "Edición",
    yt: "wbXsZFWX2GE",
  },
  {
    title: "Sexy Malacara - Music Video",
    work: "Dirección, Edición",
    yt: "GH7c8mv8yms",
  },
  {
    title: "Tom y Jerry - Music Video",
    work: "Edición",
    yt: "hgpzgePAluw",
  },
  {
    title: "Dopada - Music Video",
    work: "Dirección, Edición",
    yt: "-_EEW1dq2pE",
  },
  {
    title: "Escapulario - Music Video",
    work: "Dirección, Edición",
    yt: "dy7963DREbs",
  },
  {
    title: "TOKI - Music Video",
    work: "Dirección, Edición",
    yt: "hug5tV6N0nU",
  },
  {
    title: "Si te vas - Music Video",
    work: "Edición",
    yt: "i901lCdZ3Dw",
  },
  {
    title: "LVB - Music Video",
    work: "Dirección, Edición",
    yt: "e9OSCWZ8ZP0",
  },
  {
    title: "Safari - Music Video",
    work: "Edición",
    yt: "lyNgbjqFqEA",
  },
  {
    title: "Portales - Music Video",
    work: "Dirección, Edición",
    yt: "bD3SDWGxF9s",
  },
  {
    title: "ROLLIN - Music Video",
    work: "Dirección, Edición",
    yt: "MQ5_-fnfnzU",
  },
  {
    title: "La Reina de la noche - Music Video",
    work: "Edición",
    yt: "C3WDRDLrDho",
  },
  {
    title: "La Facha - Music Video",
    work: "Edición",
    yt: "nSJEtoE5cvI",
  },
  {
    title: "Materclass- Music Video",
    work: "Dirección",
    yt: "Hjxoh_M6Ors",
  },
  {
    title: "Adrenalina - Music Video",
    work: "Edición",
    yt: "xZwOcURKvdg",
  },
  {
    title: "Algo Mejor 11/11 - Music Video",
    work: "Dirección, Edición",
    yt: "K4dK76P1yA4",
  },
  {
    title: "Swaggy - Music Video",
    work: "Edición",
    yt: "I0k31Hi1GmI",
  },
  {
    title: "Anubis - Music Video",
    work: "Edición",
    yt: "VpgnF8aAo9U",
  },
  {
    title: "VEO - Music Video",
    work: "Edición",
    yt: "LrnGg2XWPKA",
  },
  {
    title: "NO TE ENAMORES (REMIX) - Music Video",
    work: "Edición",
    yt: "ETWxcIX224I",
  },
  {
    title: "Élite - Music Video",
    work: "Edición",
    yt: "mXtuLjEktG4",
  },
  {
    title: "EN BAJITA - Music Video",
    work: "Edición",
    yt: "6wtN96ccHYU",
  },
  {
    title: "Le Piso La Cara - Music Video",
    work: "Edición",
    yt: "MQh1FTzyJfw",
  },
  {
    title: "alasbuenasoalasmalas - Music Video",
    work: "Dirección, Edición",
    yt: "rK4d05M0zmU",
  },
  {
    title: "302 - Music Video",
    work: "Dirección, Edición",
    yt: "ucDkHGy6fWE",
  },
  {
    title: "FORD - Music Video",
    work: "Edición",
    yt: "TGk3GrcrFGU",
  },
  {
    title: "EL DUEÑO DEL TRAP - Music Video",
    work: "Edición",
    yt: "E5SfkCjmqh8",
  },
  {
    title: "METRALLO - Music Video",
    work: "Edición",
    yt: "kpG50uKYnM8",
  },
  {
    title: "TU VENENO - Music Video",
    work: "Edición",
    yt: "jZ5vJMZvZx0",
  },
  {
    title: "CUENTAS - Music Video",
    work: "Dirección, Edición",
    yt: "gzBwHP-2yzU",
  },
  {
    title: "HOES - Music Video",
    work: "Dirección, Edición",
    yt: "u6SL-Zv8eTc",
  },
  {
    title: "KAZAJISTÁN - Music Video",
    work: "Dirección, Edición",
    yt: "r9mq2UXF3Y4",
  },
  {
    title: "OUIJA - Music Video",
    work: "Edición",
    yt: "UxQnMeAnSIE",
  },
  {
    title: "Stunt4 - Music Video",
    work: "Edición",
    yt: "DHNr2zeRGSc",
  },
  {
    title: "Juguito E' Piña - Music Video",
    work: "Edición",
    yt: "80I6zbGL7zI",
  },
  {
    title: "Río - Music Video",
    work: "Oneshot",
    yt: "37aZfou8qSk",
  },
  /*
   {
    title: "NVIDIA - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/HkoguZmF_Vg/hqdefault.jpg",
    yt: "HkoguZmF_Vg",
  },
   */
  /*
   {
    title: "Trendy - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/ppethsJ1pM4/hqdefault.jpg",
    yt: "ppethsJ1pM4",
  },
  */
  {
    title: "Ganjah - Music Video",
    work: "Edición",
    yt: "JZFtBb2EmkQ",
  },
  {
    title: "Carita Loca - Music Video",
    work: "Edición",
    yt: "_GrBLXU1vEY",
  },
  {
    title: "Se Viró - Music Video",
    work: "Edición",
    yt: "rK2SfyQG2R4",
  },
  {
    title: "UNDER - Music Video",
    work: "Edición",
    yt: "2J-FlE1ZwkE",
  },
  {
    title: "Narcos Bandidos - Music Video",
    work: "Edición",
    yt: "IPG4pW4N12M",
  },
  {
    title: "Super Eazy - Music Video",
    work: "Dirección, Edición",
    yt: "lNmdB0HjYAI",
  },
  {
    title: "Cartier - Music Video",
    work: "Dirección, Edición",
    yt: "aV6-YSH2-PY",
  },
  {
    title: "Barrio de Oro - Music Video",
    work: "Dirección, Edición",
    yt: "K_NmojZgxT4",
  },
  {
    title: "Pal Pueblo - Music Video",
    work: "Edición",
    yt: "j7YbnyP9JvE",
  },
  {
    title: "Simple - Music Video",
    work: "Dirección, Edición",
    yt: "vY80SuGPaX4",
  },
  {
    title: "Bélico - Music Video",
    work: "Edición",
    yt: "vnoZodRdVns",
  },
  {
    title: "2 De Marzo - Music Video",
    work: "Edición",
    yt: "h9--Bxd9EOg",
  },
  {
    title: "Bota - Music Video",
    work: "Edición",
    yt: "_8QpwXfd3zQ",
  },
  {
    title: "Plastic - Music Video",
    work: "Dirección, Edición",
    yt: "JCihXid0tmI",
  },
  {
    title: "Doble Máscara - Music Video",
    work: "Edición",
    yt: "FyA8Us3eB4w",
  },
  {
    title: "Click Clock - Music Video",
    work: "Edición",
    yt: "EgR8lPaV6rc",
  },
  {
    title: "Promethazine - Music Video",
    work: "Edición",
    yt: "H9xrxDe1b28",
  },
  {
    title: "Todavía Te Quiero - Music Video",
    work: "Dirección, Edición",
    yt: "tRTZBeJn23c",
  },
  {
    title: "Cachai - Music Video",
    work: "Edición",
    yt: "aAOtBT9Z8gM",
  },
  {
    title: "Swaggy - Music Video",
    work: "Edición",
    yt: "C_5DxCYbZ8g",
  },
  {
    title: "Deseos - Music Video",
    work: "Edición",
    yt: "FjjeJwY9qfc",
  },
  {
    title: "My Way - Music Video",
    work: "Dirección, Edición",
    yt: "HvcGbC2Aq5U",
  },
  {
    title: "Clásico - Music Video",
    work: "Dirección, Edición",
    yt: "GO84ySMFQr4",
  },
  {
    title: "Finco - Music Video",
    work: "Edición",
    yt: "ZueYvOuX510",
  },
  {
    title: "Palabreo - Music Video",
    work: "Edición",
    yt: "UpE7eAjN8XE",
  },
  {
    title: "Por Mí - Music Video",
    work: "Edición",
    yt: "VRDNh-FF9B4",
  },
  {
    title: "Déjà vu - Music Video",
    work: "Edición",
    yt: "WIkZlUOg9o4",
  },
  {
    title: "Itagüi - Music Video",
    work: "Edición",
    yt: "-jO69omrKnY",
  },
  {
    title: "No Marketing - Music Video",
    work: "Edición",
    yt: "1m1DmcMOkv4",
  },
  {
    title: "Piso con Flores REMIX - Music Video",
    work: "Dirección, Edición",
    yt: "fHxEPvelWKI",
  },
  {
    title: "Viernes XIII - Music Video",
    work: "Dirección, Edición",
    yt: "vxgaQSXXROY",
  },
  {
    title: "Lit - Music Video",
    work: "Edición",
    yt: "zFmj8vMyEE0",
  },
  {
    title: "No se siente bien - Music Video",
    work: "Dirección, Edición",
    yt: "kGwIpduda6Y",
  },
  /*   {
    title: "Lokisima - Music Video",
    work: "Edición",
    yt: "6jla7gzEGgI",
  }, */
  {
    title: "Sadboy - Music Video",
    work: "Dirección, Edición",
    yt: "NiquNUx9zXw",
  },
  {
    title: "Gatubella - Music Video",
    work: "Edición",
    yt: "2jOStSXiSeQ",
  },
  {
    title: "06 - Music Video",
    work: "Dirección, Edición",
    yt: "9mtV_Ir0nsE",
  },
  {
    title: "Medallo Shit - Music Video",
    work: "Dirección, Edición",
    yt: "Kqz0aSLAO3E",
  },
  {
    title: "La Ubi - Music Video",
    work: "Edición",
    yt: "NaPS7phSKp4",
  },
  {
    title: "Blackjack - Music Video",
    work: "Dirección, Edición",
    yt: "Pw78Gea1FW0",
  },
  {
    title: "Números - Music Video",
    work: "Edición",
    yt: "vaoYH19sKW4",
  },
  {
    title: "Todavía me piensas - Music Video",
    work: "Dirección, Edición",
    yt: "u9Z7CZ4FCgs",
  },
  {
    title: "Estilo y Pepas - Music Video",
    work: "Dirección, Edición",
    yt: "2Ws3N5soMms",
  },
  {
    title: "No Pregunten - Music Video",
    work: "Edición",
    yt: "w7dDHpcVUsA",
  },
  {
    title: "Under Club - Music Video",
    work: "Edición",
    yt: "xOfgniX20fo",
  },
  {
    title: "Traición - Music Video",
    work: "Edición",
    yt: "1NXR9e7aolo",
  },
  {
    title: "Decidete - Music Video",
    work: "Edición",
    yt: "ErER5PN1KAs",
  },
  {
    title: "La Luna - Music Video",
    work: "Edición",
    yt: "a0yI4N8Qo3Y",
  },
  {
    title: "Sin Paranoias - Music Video",
    work: "Dirección, Edición",
    yt: "a56eM-cVwNU",
  },
  {
    title: "Valdiri - Music Video",
    work: "Dirección, Edición",
    yt: "atmEodOLH8s",
  },
  {
    title: "Gangoso World - Music Video",
    work: "Dirección, Edición",
    yt: "svycs9c2KIc",
  },
  /*   {
    title: "No queda nada - Music Video",
    work: "Dirección, Edición",
    yt: "1f5Wh_4ST5Q",
  }, */
  {
    title: "Artistaje - Music Video",
    work: "Dirección, Edición",
    yt: "NB1IoMTUlpY",
  },
  {
    title: "Kien soy, K kiero - Music Video",
    work: "Dirección, Edición",
    yt: "qM-Ir7wqGcs",
  },
  {
    title: "De la noche a la mañana - Music Video",
    work: "Dirección, Edición",
    yt: "5gMzT2bn_bU",
  },
  /*   {
    title: "Los Amantes - Music Video",
    work: "Dirección, Edición",
    yt: "UjPp-pFLP-w",
  }, */
  {
    title: "11/11 - Music Video",
    work: "Oneshot",
    yt: "HiFv_YvlcaE",
  },
  {
    title: "Chacales - Music Video",
    work: "Edición",
    yt: "iUvRnu6ucDA",
  },
  {
    title: "Puesto Pa Mí - Music Video",
    work: "Dirección, Edición",
    yt: "rWrQVtEKmwY",
  },
  {
    title: "KIDD - Music Video",
    work: "Edición",
    yt: "NfAXHE4PDNw",
  },
  {
    title: "Piso con Flores - Music Video",
    work: "Dirección, Edición",
    yt: "2CYqMpFEPyk",
  },
  {
    title: "No kiero otro love - Music Video",
    work: "Dirección, Edición",
    yt: "QJiaddtTMvo",
  },
  {
    title: "DIME - Music Video",
    work: "Dirección, Edición",
    yt: "bI4mdQO7O98",
  },
  {
    title: "AQQE - Music Video",
    work: "Dirección, Edición",
    yt: "gy_LIIS7aVc",
  },
  {
    title: "Call Me Future - Music Video",
    work: "Edición",
    yt: "5WffW-e_iHs",
  },
  {
    title: "AutentiK - Music Video",
    work: "Dirección, Edición",
    yt: "XRGNCF41Wb0",
  },
  {
    title: "Esperan por ti - Music Video",
    work: "Oneshot",
    yt: "yduDm4FXFrk",
  },
  {
    title: "Merchopercho - GTA Music Video",
    work: "Edición",
    yt: "IX9vbw-sFsE",
  },
  {
    title: "Sin Pagar El Vuelo - Music Video",
    work: "Dirección, Edición",
    yt: "HelyULdXDyE",
  },
  {
    title: "Cero Estrés - Music Video",
    work: "Dirección, Edición",
    yt: "fUB-Ad4P9N8",
  },
  /*   {
    title: "Her Way - Edit Video Music",
    work: "Edición",
    yt: "Ngd6fCuHHnU",
  }, */
  {
    title: "Cero Ocho - Music Video",
    work: "Dirección, Edición",
    yt: "0bNNoNKO7GY",
  },
  {
    title: "No te vayas - Music Video",
    work: "Dirección, Edición",
    yt: "FHj_6k5CLj4",
  },
  /*   {
    title: "Tan Lejos - Music Video",
    work: "Dirección, Edición",
    yt: "DELbaZMabaE",
  }, */
];

let displayCards = ref([]);
let popupIsActive = ref(false);
let popupUrl = ref("");
let from = 0;

function openVideo(code) {
  popupIsActive.value = !popupIsActive.value;
  popupUrl.value = "https://www.youtube.com/embed/" + code;
}

function getCards(initial) {
  from += 9;
  return cards.slice(initial, from);
}

function handleScroll() {
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
    displayCards.value = [...displayCards.value, ...getCards(from)];
  }
}

onMounted(() => {
  displayCards.value = getCards(from);
  window.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <div>
    <div
      v-if="popupIsActive"
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
      class="absolute z-50 flex h-full w-full flex-col items-center"
    >
      <div class="absolute h-full w-full bg-zinc-900 opacity-90"></div>
      <div
        class="sticky top-0 z-10 flex h-[100vh] flex-col items-center justify-center"
      >
        <button
          @click="openVideo()"
          class="mb-4 h-14 w-14 rounded-full bg-black text-2xl"
        >
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
        <div
          class="aspect-video w-[90dvw] shadow-[0_0px_30px_rgba(0,0,0,0.5)] md:h-[60dvh] md:w-full"
        >
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
    <div class="grid grid-cols-1 gap-3 px-5 md:grid-cols-2 xl:grid-cols-3">
      <div
        v-for="card in displayCards"
        :key="card.title"
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
        <div
          class="flex flex-col break-words group-hover:flex md:absolute md:hidden md:items-center md:text-center"
        >
          <h1 class="mt-2 box-content break-words text-xl font-bold md:mt-0">
            {{ card.title.toUpperCase() }}
          </h1>
          <h2 class="text-xs">{{ card.work.toUpperCase() }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
