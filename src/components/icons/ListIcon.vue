<template>
  <svg :height="size" :width="size" viewBox="0 0 24 24">
    <path
      d="M6 12.984v-1.969h12v1.969h-12zM3 6h18v2.016h-18v-2.016zM9.984 18v-2.016h4.031v2.016h-4.031z"
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
