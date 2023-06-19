<script setup></script>

<template>
  <div class="app flex h-[100vh] flex-col">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<style scoped></style>
