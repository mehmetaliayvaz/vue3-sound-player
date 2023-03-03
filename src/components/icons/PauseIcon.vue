<template>
  <svg :height="size" :width="size" viewBox="0 0 32 32">
    <path d="M4 4h10v24h-10zM18 4h10v24h-10z"></path>
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
