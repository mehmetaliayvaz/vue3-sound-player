<template>
  <svg :height="size" :width="size" viewBox="0 0 32 32">
    <path d="M6 4l20 12-20 12z"></path>
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
