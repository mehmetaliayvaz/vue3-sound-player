<template>
  <svg :height="size" :width="size" viewBox="0 0 20 20">
    <path
      d="M10 8.586l-7.071-7.071-1.414 1.414 7.071 7.071-7.071 7.071 1.414 1.414 7.071-7.071 7.071 7.071 1.414-1.414-7.071-7.071 7.071-7.071-1.414-1.414-7.071 7.071z"
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
