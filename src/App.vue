<template>
  <div class="soundPlayer">
    <div
      v-for="(soundItem, soundIndex) in sounds"
      :key="soundIndex"
      class="soundPlayer-item"
    >
      <h2>{{ soundItem.title }}</h2>
    </div>
    <div>
      <button>Prev</button>
      <button>Play</button>
      <button>Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const sounds = ref([
  {
    title: "Sound 1",
    media: "/sound/sound-1.mp3",
  },
  {
    title: "Sound 2",
    media: "/sound/sound-2.mp3",
  },
  {
    title: "Sound 3",
    media: "/sound/sound-3.mp3",
  },
  {
    title: "Sound 4",
    media: "/sound/sound-4.mp3",
  },
]);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.soundPlayer {
  position: absolute;
  width: 40%;
  background: #97c8ff;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.soundPlayer-item {
  padding: 1rem;
  border-bottom: 1px solid #fff;
}
</style>
