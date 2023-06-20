<script setup></script>

<template>
  <div class="app">
    <router-view name="header"></router-view>
    <router-view v-slot="{ Component }">
      <transition name="page-opacity" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "Monument Extended Bold";
  src: url("./fonts/monumentextended-bold.woff2");
}

.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 200ms ease all;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}

@keyframes vhs-effect {
  10%,
  90% {
    transform: translate(-0.3px, -0.2px);
    opacity: 100%;
  }

  20%,
  80% {
    transform: translate(0.2px, 0.4px);
    opacity: 98%;
  }

  30%,
  50%,
  70% {
    transform: translate(-0.2px, -0.3px);
    opacity: 91%;
  }

  40%,
  60% {
    transform: translate(0.2px, 0.2px);
    opacity: 99%;
  }
}

.app {
  animation: vhs-effect 1s infinite;
}
</style>
