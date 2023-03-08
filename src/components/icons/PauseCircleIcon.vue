<template>
  <svg :height="size" :width="size" viewBox="0 0 32 32">
    <path
      d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM10 10h4v12h-4zM18 10h4v12h-4z"
    ></path>
  </svg>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  size: {
    type: Number,
    required: false,
    default: 20,
  },
});
</script>

<style></style>
