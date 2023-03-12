<template>
  <sound-player :sounds="sounds" @active-sound="activeSound = $event" />
  <p><b>Active Sound:</b> {{ activeSound?.title }}</p>
</template>

<script setup>
import { ref } from "vue";
import SoundPlayer from "./components/SoundPlayer.vue";
const activeSound = ref();
const sounds = [
  {
    id: 1,
    title: "Waterfall",
    file_url:
      "https://cdn.pixabay.com/audio/2023/02/28/audio_550d815fa5.mp3?filename=waterfall-140894.mp3",
  },
  {
    id: 2,
    title: "Only Forward",
    file_url:
      "https://cdn.pixabay.com/audio/2023/02/28/audio_6cacf0bae3.mp3?filename=only-forward-140896.mp3",
  },
  {
    id: 3,
    title: "Inspiring Dream",
    file_url:
      "https://cdn.pixabay.com/audio/2023/02/28/audio_398ffa294b.mp3?filename=inspiring-dream-140960.mp3",
  },
  {
    id: 4,
    title: "Voice Over Music",
    file_url:
      "https://cdn.pixabay.com/audio/2023/03/04/audio_cebf2ec54a.mp3?filename=voice-over-music-141541.mp3",
  },
];
</script>

<style></style>
