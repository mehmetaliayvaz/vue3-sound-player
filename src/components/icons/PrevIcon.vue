<template>
  <svg :height="size" :width="size" viewBox="0 0 32 32">
    <path d="M8 28v-24h4v11l10-10v22l-10-10v11z"></path>
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
