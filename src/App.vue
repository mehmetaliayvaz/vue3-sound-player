<template>
  <sound-player :sounds="sounds" />
</template>

<script setup>
import SoundPlayer from "./components/SoundPlayer.vue";
const sounds = [
  {
    title: "Sound 1",
    file_url: "/sound/sound-1.mp3",
  },
  {
    title: "Sound 2",
    file_url: "/sound/sound-2.mp3",
  },
  {
    title: "Sound 3",
    file_url: "/sound/sound-3.mp3",
  },
  {
    title: "Sound 4",
    file_url: "/sound/sound-4.mp3",
  },
];
</script>

<style scoped>
@import "./css/main.css";
</style>
