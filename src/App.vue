<template>
  <div id="player" class="soundPlayer">
    <template v-if="false">
      <div
        v-for="(soundItem, soundIndex) in sounds"
        :key="soundIndex"
        class="soundPlayer-item"
      >
        <h2>{{ soundItem.title }}</h2>
      </div>
    </template>
    <div>
      <input
        v-model="slider"
        type="range"
        min="0"
        max="100"
        class="soundPlayer-slider"
        @change="change_duration"
      />
    </div>
    <div class="soundPlayer-actions">
      <button class="soundPlayer-actions-btn">
        <prev-icon />
      </button>
      <button @click="play(sounds[0])" class="soundPlayer-actions-btn">
        <play-icon />
      </button>
      <button @click="pause()" class="soundPlayer-actions-btn">
        <pause-icon />
      </button>
      <button class="soundPlayer-actions-btn">
        <next-icon />
      </button>
    </div>
  </div>
</template>

//
<script setup>
// import { draggable } from "./helpers/draggable";
import { ref, onMounted } from "vue";
import PlayIcon from "./components/icons/PlayIcon.vue";
import PauseIcon from "./components/icons/PauseIcon.vue";
import PrevIcon from "./components/icons/PrevIcon.vue";
import NextIcon from "./components/icons/NextIcon.vue";

onMounted(() => {
  // draggable("player");
});

const current = ref();
const isPlaying = ref(false);
const slider = ref(0);
const timer = ref();
const player = new Audio();

const play = (song) => {
  if (typeof song.file_url != "undefined") {
    current.value = song;
    player.src = current.value.file_url;
  }
  timer.value = setInterval(range_slider, 500);
  player.play();
  player.muted = false;
  isPlaying.value = true;
};

const pause = () => {
  player.pause();
  isPlaying.value = false;
  clearInterval(timer);
};

const change_duration = (e) => {
  player.currentTime = e.target.value * (player.duration / 100);
};

const range_slider = () => {
  if (!isNaN(player.duration)) {
    slider.value = player.currentTime * (100 / player.duration);
  }
};

const sounds = ref([
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
  padding: 1rem;
  border-radius: 0.5rem;
  background: #282828;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.soundPlayer-slider {
  width: 100%;
  background-color: #e07aaf;
  border-radius: 5px;
}

.soundPlayer-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.soundPlayer-actions-btn {
  background: #fff;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
}

.soundPlayer-actions-btn:hover {
  background: #e07aaf;
  color: #fff;
}

.soundPlayer-item {
  padding: 1rem;
  border-bottom: 1px solid #fff;
}

button {
  padding: 1rem 2rem;
  background: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem;
}
</style>
