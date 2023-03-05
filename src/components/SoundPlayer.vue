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
    <div class="soundPlayer-content">
      <h2 class="soundPlayer-title">{{ current.title }}</h2>
      <input
        v-model="slider"
        type="range"
        min="0"
        max="100"
        class="soundPlayer-slider"
        @change="change_duration"
      />
      <div class="soundPlayer-actions">
        <button class="soundPlayer-actions-btn soundPlayer-volume">
          <volume-icon />
          <div class="soundPlayer-volume-box">
            <input
              v-model="volume"
              type="range"
              min="0"
              max="100"
              class="soundPlayer-volume-slider"
              @change="volume_change"
            />
          </div>
        </button>
        <button
          class="soundPlayer-actions-btn"
          @click="changeSpeed(parseFloat(speeds[speedIndex + 1]))"
        >
          {{ speedIndex == -1 ? "0.5" : speeds[speedIndex] }}x
        </button>
        <button @click="prevSound()" class="soundPlayer-actions-btn">
          <prev-icon />
        </button>
        <button
          v-if="isPlaying"
          @click="pause()"
          class="soundPlayer-actions-btn"
        >
          <pause-icon />
        </button>
        <button v-else @click="play()" class="soundPlayer-actions-btn">
          <play-icon />
        </button>
        <button @click="nextSound()" class="soundPlayer-actions-btn">
          <next-icon />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, defineProps } from "vue";
import PlayIcon from "./icons/PlayIcon.vue";
import PauseIcon from "./icons/PauseIcon.vue";
import PrevIcon from "./icons/PrevIcon.vue";
import NextIcon from "./icons/NextIcon.vue";
import VolumeIcon from "./icons/VolumeIcon.vue";
// import { draggable } from "./helpers/draggable";

onMounted(() => {
  // draggable("player");
});

const props = defineProps({
  sounds: {
    type: Array,
    required: true,
  },
});

const index = ref(0);
const current = ref(props.sounds ? props.sounds[index.value] : {});
const isPlaying = ref(false);
const slider = ref(0);
const timer = ref();
const player = new Audio();
player.src = current.value?.file_url;

const speedIndex = ref(0);
const speeds = [1, 1.5, 2, 0.5];
const volume = ref(70);

watch(
  () => props.sounds,
  () => {
    console.log(props.sounds);
    if (props.sounds.length) {
      current.value = props.sounds[index.value];
      player.src = current.value.file_url;
    }
  }
);

const init = () => {
  player.addEventListener("ended", function () {
    clearInterval(timer);
    index.value++;
    if (index.value > props.sounds.length - 1) {
      index.value = 0;
    }

    current.value = props.sounds[index.value];
    play(current.value);
  });
};
init();

const play = (song) => {
  if (typeof song != "undefined") {
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

const prevSound = () => {
  index.value--;
  if (index.value < 0) {
    index.value = props.sounds.length - 1;
  }
  current.value = props.sounds[index.value];
  play(current.value);
};

const nextSound = () => {
  index.value++;
  if (index.value > props.sounds.length - 1) {
    index.value = 0;
  }
  current.value = props.sounds[index.value];
  play(current.value);
};

const changeSpeed = (speed) => {
  player.playbackRate = speed;
  if (speedIndex.value < 2) {
    speedIndex.value++;
  } else {
    speedIndex.value = -1;
  }
};

const volume_change = () => {
  player.volume = volume.value / 100;
};
</script>

<style></style>
