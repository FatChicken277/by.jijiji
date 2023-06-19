<script setup>
import { ref } from "vue";

let startTime = 0;
let elapsedTime = 0;
let textContent = ref("00:00:00");

startTime = Date.now() - elapsedTime;
setInterval(updateTime, 1000);

let secs = 0;
let mins = 0;
let hrs = 0;

function updateTime() {
  elapsedTime = Date.now() - startTime;

  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  textContent.value = `${hrs}:${mins}:${secs}`;

  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}
</script>

<template>
  <h1>{{ textContent }}</h1>
</template>

<style scoped></style>
