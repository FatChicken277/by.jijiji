<script setup>
import { ref, onMounted } from "vue";
import VueLoadImage from "vue-load-image";

let cards = [
   {
    title: "Adrenalina - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/xZwOcURKvdg/hqdefault.jpg",
    yt: "xZwOcURKvdg",
  },
   {
    title: "Algo Mejor 11/11 - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/K4dK76P1yA4/hqdefault.jpg",
    yt: "K4dK76P1yA4",
  },
   {
    title: "Swaggy - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/I0k31Hi1GmI/hqdefault.jpg",
    yt: "I0k31Hi1GmI",
  },
   {
    title: "Anubis - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/VpgnF8aAo9U/hqdefault.jpg",
    yt: "VpgnF8aAo9U",
  },
   {
    title: "VEO - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/LrnGg2XWPKA/hqdefault.jpg",
    yt: "LrnGg2XWPKA",
  },
   {
    title: "NO TE ENAMORES (REMIX) - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/ETWxcIX224I/hqdefault.jpg",
    yt: "ETWxcIX224I",
  },
   {
    title: "Élite - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/mXtuLjEktG4/hqdefault.jpg",
    yt: "mXtuLjEktG4",
  },
   {
    title: "EN BAJITA - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/6wtN96ccHYU/hqdefault.jpg",
    yt: "6wtN96ccHYU",
  },
   {
    title: "Le Piso La Cara - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/MQh1FTzyJfw/hqdefault.jpg",
    yt: "MQh1FTzyJfw",
  },
   {
    title: "alasbuenasoalasmalas - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/rK4d05M0zmU/hqdefault.jpg",
    yt: "rK4d05M0zmU",
  },
   {
    title: "302 - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/ucDkHGy6fWE/hqdefault.jpg",
    yt: "ucDkHGy6fWE",
  },
   {
    title: "FORD - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/TGk3GrcrFGU/hqdefault.jpg",
    yt: "TGk3GrcrFGU",
  },
   {
    title: "EL DUEÑO DEL TRAP - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/E5SfkCjmqh8/hqdefault.jpg",
    yt: "E5SfkCjmqh8",
  },
   {
    title: "METRALLO - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/kpG50uKYnM8/hqdefault.jpg",
    yt: "kpG50uKYnM8",
  },
    {
    title: "TU VENENO - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/jZ5vJMZvZx0/hqdefault.jpg",
    yt: "jZ5vJMZvZx0",
  },
   {
    title: "CUENTAS - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/gzBwHP-2yzU/hqdefault.jpg",
    yt: "gzBwHP-2yzU",
  },
{
    title: "HOES - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/u6SL-Zv8eTc/hqdefault.jpg",
    yt: "u6SL-Zv8eTc",
  },
   {
    title: "KAZAJISTÁN - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/r9mq2UXF3Y4/hqdefault.jpg",
    yt: "r9mq2UXF3Y4",
  },
   {
    title: "OUIJA - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/UxQnMeAnSIE/hqdefault.jpg",
    yt: "UxQnMeAnSIE",
  },
   {
    title: "Stunt4 - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/DHNr2zeRGSc/hqdefault.jpg",
    yt: "DHNr2zeRGSc",
  },
   {
    title: "Juguito E' Piña - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/80I6zbGL7zI/hqdefault.jpg",
    yt: "80I6zbGL7zI",
  },
   {
    title: "Río - Music Video",
    work: "Oneshot",
    src: "https://img.youtube.com/vi/37aZfou8qSk/hqdefault.jpg",
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
    src: "https://img.youtube.com/vi/JZFtBb2EmkQ/hqdefault.jpg",
    yt: "JZFtBb2EmkQ",
  },
    {
    title: "Carita Loca - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/_GrBLXU1vEY/hqdefault.jpg",
    yt: "_GrBLXU1vEY",
  },
   {
    title: "Se Viró - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/rK2SfyQG2R4/hqdefault.jpg",
    yt: "rK2SfyQG2R4",
  },
   {
    title: "UNDER - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/2J-FlE1ZwkE/hqdefault.jpg",
    yt: "2J-FlE1ZwkE",
  },
   {
    title: "Narcos Bandidos - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/IPG4pW4N12M/hqdefault.jpg",
    yt: "IPG4pW4N12M",
  },
  {
    title: "Super Eazy - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/lNmdB0HjYAI/hqdefault.jpg",
    yt: "lNmdB0HjYAI",
  },
  {
    title: "Cartier - Music Video",
    work: "Dirección, Edición",
    src: "https://i.imgur.com/b0jV5iA.png",
    yt: "aV6-YSH2-PY",
  },
  {
    title: "Barrio de Oro - Music Video",
    work: "Dirección, Edición",
    src: "https://i.imgur.com/t3gWLPd.png",
    yt: "K_NmojZgxT4",
  },
  {
    title: "Pal Pueblo - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/j7YbnyP9JvE/hqdefault.jpg",
    yt: "j7YbnyP9JvE",
  },
  {
    title: "Simple - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/vY80SuGPaX4/hqdefault.jpg",
    yt: "vY80SuGPaX4",
  },
  {
    title: "Bélico - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/vnoZodRdVns/hqdefault.jpg",
    yt: "vnoZodRdVns",
  },
  {
    title: "2 De Marzo - Music Video",
    work: "Edición",
    src: "https://i.imgur.com/85VT8WY.png",
    yt: "h9--Bxd9EOg",
  },
  {
    title: "Bota - Music Video",
    work: "Edición",
    src: "https://i.imgur.com/T9F2hPp.jpg",
    yt: "_8QpwXfd3zQ",
  },
  {
    title: "Plastic - Music Video",
    work: "Dirección, Edición",
    src: "https://i.imgur.com/Vh3zQK2.png",
    yt: "JCihXid0tmI",
  },
  {
    title: "Doble Máscara - Music Video",
    work: "Edición",
    src: "https://i.imgur.com/EHrP7lK.jpg",
    yt: "FyA8Us3eB4w",
  },
  {
    title: "Click Clock - Music Video",
    work: "Edición",
    src: "https://i.imgur.com/2eFKBFf.png",
    yt: "EgR8lPaV6rc",
  },
  {
    title: "Promethazine - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/H9xrxDe1b28/hqdefault.jpg",
    yt: "H9xrxDe1b28",
  },
  {
    title: "Todavía Te Quiero - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/tRTZBeJn23c/hqdefault.jpg",
    yt: "tRTZBeJn23c",
  },
  {
    title: "Cachai - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/aAOtBT9Z8gM/hqdefault.jpg",
    yt: "aAOtBT9Z8gM",
  },
  {
    title: "Swaggy - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/C_5DxCYbZ8g/hqdefault.jpg",
    yt: "C_5DxCYbZ8g",
  },
  {
    title: "Deseos - Music Video",
    work: "Edición",
    src: "https://i.imgur.com/G0x0vEb.jpg",
    yt: "FjjeJwY9qfc",
  },
  {
    title: "My Way - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/HvcGbC2Aq5U/hqdefault.jpg",
    yt: "HvcGbC2Aq5U",
  },
  {
    title: "Clásico - Music Video",
    work: "Dirección, Edición",
    src: "https://i.imgur.com/hIZSA8T.png",
    yt: "GO84ySMFQr4",
  },
  {
    title: "Finco - Music Video",
    work: "Edición",
    src: "https://i.imgur.com/lEICVEO.png",
    yt: "ZueYvOuX510",
  },
  {
    title: "Palabreo - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/UpE7eAjN8XE/hqdefault.jpg",
    yt: "UpE7eAjN8XE",
  },
  {
    title: "Por Mí - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/VRDNh-FF9B4/hqdefault.jpg",
    yt: "VRDNh-FF9B4",
  },
  {
    title: "Déjà vu - Music Video",
    work: "Edición",
    src: "https://i.imgur.com/k7nhORv.jpg",
    yt: "WIkZlUOg9o4",
  },
  {
    title: "Itagüi - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/-jO69omrKnY/hqdefault.jpg",
    yt: "-jO69omrKnY",
  },
  {
    title: "No Marketing - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/1m1DmcMOkv4/hqdefault.jpg",
    yt: "1m1DmcMOkv4",
  },
  {
    title: "Piso con Flores REMIX - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/fHxEPvelWKI/hqdefault.jpg",
    yt: "fHxEPvelWKI",
  },
  {
    title: "Viernes XIII - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/vxgaQSXXROY/hqdefault.jpg",
    yt: "vxgaQSXXROY",
  },
  {
    title: "Lit - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/zFmj8vMyEE0/hqdefault.jpg",
    yt: "zFmj8vMyEE0",
  },
  {
    title: "Aquella Noche - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/IRQ71rHqADQ/hqdefault.jpg",
    yt: "IRQ71rHqADQ",
  },
  {
    title: "No se siente bien - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/kGwIpduda6Y/hqdefault.jpg",
    yt: "kGwIpduda6Y",
  },
  {
    title: "Lokisima - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/6jla7gzEGgI/hqdefault.jpg",
    yt: "6jla7gzEGgI",
  },
  {
    title: "Sadboy - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/NiquNUx9zXw/hqdefault.jpg",
    yt: "NiquNUx9zXw",
  },
  {
    title: "Gatubella - Music Video",
    work: "Edición",
    src: "https://i.imgur.com/w7t2JPS.png",
    yt: "2jOStSXiSeQ",
  },
  {
    title: "06 - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/9mtV_Ir0nsE/hqdefault.jpg",
    yt: "9mtV_Ir0nsE",
  },
  {
    title: "Medallo Shit - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/Kqz0aSLAO3E/hqdefault.jpg",
    yt: "Kqz0aSLAO3E",
  },
  {
    title: "La Ubi - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/NaPS7phSKp4/hqdefault.jpg",
    yt: "NaPS7phSKp4",
  },
  {
    title: "Blackjack - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/Pw78Gea1FW0/hqdefault.jpg",
    yt: "Pw78Gea1FW0",
  },
  {
    title: "Números - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/vaoYH19sKW4/hqdefault.jpg",
    yt: "vaoYH19sKW4",
  },
  {
    title: "Todavía me piensas - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/u9Z7CZ4FCgs/hqdefault.jpg",
    yt: "u9Z7CZ4FCgs",
  },
  {
    title: "Estilo y Pepas - Music Video",
    work: "Dirección, Edición",
    src: "https://i.imgur.com/mEXry0q.png",
    yt: "2Ws3N5soMms",
  },
  {
    title: "No Pregunten - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/w7dDHpcVUsA/hqdefault.jpg",
    yt: "w7dDHpcVUsA",
  },
  {
    title: "Under Club - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/xOfgniX20fo/hqdefault.jpg",
    yt: "xOfgniX20fo",
  },
  {
    title: "Traición - Music Video",
    work: "Edición",
    src: "https://i.imgur.com/v5STOI5.png",
    yt: "1NXR9e7aolo",
  },
  {
    title: "Decidete - Music Video",
    work: "Edición",
    src: "https://i.imgur.com/yZuIPjW.png",
    yt: "ErER5PN1KAs",
  },
  {
    title: "La Luna - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/a0yI4N8Qo3Y/hqdefault.jpg",
    yt: "a0yI4N8Qo3Y",
  },
  {
    title: "Sin Paranoias - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/a56eM-cVwNU/hqdefault.jpg",
    yt: "a56eM-cVwNU",
  },
  {
    title: "Valdiri - Music Video",
    work: "Dirección, Edición",
    src: "https://i.imgur.com/IeofniX.png",
    yt: "atmEodOLH8s",
  },
  {
    title: "Gangoso World - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/svycs9c2KIc/hqdefault.jpg",
    yt: "svycs9c2KIc",
  },
  {
    title: "No queda nada - Music Video",
    work: "Dirección, Edición",
    src: "https://i.imgur.com/EWxuuQ0.png",
    yt: "1f5Wh_4ST5Q",
  },
  {
    title: "Artistaje - Music Video",
    work: "Dirección, Edición",
    src: "https://i.imgur.com/XCy7ynq.png",
    yt: "NB1IoMTUlpY",
  },
  {
    title: "Kien soy, K kiero - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/qM-Ir7wqGcs/hqdefault.jpg",
    yt: "qM-Ir7wqGcs",
  },
  {
    title: "De la noche a la mañana - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/5gMzT2bn_bU/hqdefault.jpg",
    yt: "5gMzT2bn_bU",
  },
  {
    title: "Los Amantes - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/UjPp-pFLP-w/hqdefault.jpg",
    yt: "UjPp-pFLP-w",
  },
  {
    title: "11/11 - Music Video",
    work: "Oneshot",
    src: "https://img.youtube.com/vi/HiFv_YvlcaE/hqdefault.jpg",
    yt: "HiFv_YvlcaE",
  },
  {
    title: "Chacales - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/iUvRnu6ucDA/hqdefault.jpg",
    yt: "iUvRnu6ucDA",
  },
  {
    title: "Puesto Pa Mí - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/rWrQVtEKmwY/hqdefault.jpg",
    yt: "rWrQVtEKmwY",
  },
  {
    title: "KIDD - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/NfAXHE4PDNw/hqdefault.jpg",
    yt: "NfAXHE4PDNw",
  },
  {
    title: "Piso con Flores - Music Video",
    work: "Dirección, Edición",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/32c2fb136980925.62033afbd9829.png",
    yt: "2CYqMpFEPyk",
  },
  {
    title: "No kiero otro love - Music Video",
    work: "Dirección, Edición",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/12c302136976721.620320de2f277.png",
    yt: "QJiaddtTMvo",
  },
  {
    title: "DIME - Music Video",
    work: "Dirección, Edición",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/daeb4f136975405.620318caed501.png",
    yt: "bI4mdQO7O98",
  },
  {
    title: "AQQE - Music Video",
    work: "Dirección, Edición",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/83188f136974385.6203123b4c2cb.png",
    yt: "gy_LIIS7aVc",
  },
  {
    title: "Call Me Future - Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/5WffW-e_iHs/hqdefault.jpg",
    yt: "5WffW-e_iHs",
  },
  {
    title: "AutentiK - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/XRGNCF41Wb0/hqdefault.jpg",
    yt: "XRGNCF41Wb0",
  },
  {
    title: "Esperan por ti - Music Video",
    work: "Oneshot",
    src: "https://img.youtube.com/vi/yduDm4FXFrk/hqdefault.jpg",
    yt: "yduDm4FXFrk",
  },
  {
    title: "Merchopercho - GTA Music Video",
    work: "Edición",
    src: "https://img.youtube.com/vi/IX9vbw-sFsE/hqdefault.jpg",
    yt: "IX9vbw-sFsE",
  },
  {
    title: "Sin Pagar El Vuelo - Music Video",
    work: "Dirección, Edición",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/baad2d136974913.62031b9c98915.png",
    yt: "HelyULdXDyE",
  },
  {
    title: "Cero Estrés - Music Video",
    work: "Dirección, Edición",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/c691d5136106535.61f33d3e49093.png",
    yt: "fUB-Ad4P9N8",
  },
  {
    title: "Her Way - Edit Video Music",
    work: "Edición",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/957dbe136379529.61f8c227ee342.png",
    yt: "Ngd6fCuHHnU",
  },
  {
    title: "Cero Ocho - Music Video",
    work: "Dirección, Edición",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/efdd5e136379011.61f8bedf79384.png",
    yt: "0bNNoNKO7GY",
  },
  {
    title: "No te vayas - Music Video",
    work: "Dirección, Edición",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a46806136039491.61f24d54a5820.png",
    yt: "FHj_6k5CLj4",
  },
  {
    title: "Tan Lejos - Music Video",
    work: "Dirección, Edición",
    src: "https://img.youtube.com/vi/DELbaZMabaE/hqdefault.jpg",
    yt: "DELbaZMabaE",
  },
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
        <VueLoadImage>
          <template v-slot:image>
            <img
              class="h-full aspect-video object-cover transition ease-in-out md:group-hover:opacity-10 md:group-hover:blur-sm"
              :alt="card.title"
              :src="card.src"
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
