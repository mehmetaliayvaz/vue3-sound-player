<template>
  <div class="soundPlayer">
    <div
      v-for="(soundItem, soundIndex) in sounds"
      :key="soundIndex"
      class="soundPlayer-item"
    >
      <h2>{{ soundItem.title }}</h2>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const sounds = ref([
  {
    title: "Prof. Dr. Mehmet - Epilepsi tedavisinde yapılan hatalar",
    media:
      "https://sf-norozone.s3.eu-west-2.amazonaws.com/854/Prof.-Dr.-Bar%C4%B1%C5%9F-Baklan-Epilepsinin-tan%C4%B1m%C4%B1-nedir--Hastaya-nas%C4%B1l-a%C3%A7%C4%B1klan%C4%B1r-.mp3",
  },
  {
    title: "Prof. Dr. Ahmet Baklan - Epilepsi tanısı koymak kolay mıdır?",
    media:
      "https://sf-norozone.s3.eu-west-2.amazonaws.com/853/Prof.-Dr.-Bar%C4%B1%C5%9F-Baklan-Epilepsi-tedavisinde-yap%C4%B1lan-hatalar.mp3",
  },
  {
    title: "Prof. Dr. Mustafa Kasım - Epilepsi tedavisinde yapılan hatalar",
    media:
      "https://sf-norozone.s3.eu-west-2.amazonaws.com/852/Prof.-Dr.-Bar%C4%B1%C5%9F-Baklan-Epilepsi-tan%C4%B1s%C4%B1-koymak-kolay-m%C4%B1d%C4%B1r-.wav",
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
