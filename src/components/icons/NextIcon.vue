<template>
  <svg :height="size" :width="size" viewBox="0 0 32 32">
    <path d="M24 4v24h-4v-11l-10 10v-22l10 10v-11z"></path>
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
