<template>
  <sound-player :sounds="sounds" />
</template>

<script setup>
import SoundPlayer from "./components/SoundPlayer.vue";
const sounds = [
  {
    id: 1,
    title: "Sound 1",
    file_url: "/sound/sound-1.mp3",
  },
  {
    id: 2,
    title: "Sound 2",
    file_url: "/sound/sound-2.mp3",
  },
  {
    id: 3,
    title: "Sound 3",
    file_url: "/sound/sound-3.mp3",
  },
  {
    id: 4,
    title: "Sound 4",
    file_url: "/sound/sound-4.mp3",
  },
];
</script>

<style>
@import "./css/main.css";
</style>
