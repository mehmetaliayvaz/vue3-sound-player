<template>
  <svg
    :height="size * 2.5"
    :width="size"
    viewBox="0 0 7 17"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="-" transform="translate(-52.000000, -34.000000)" fill="#B6B6B6">
        <g id="drag-dots" transform="translate(52.000000, 34.000000)">
          <rect id="Rectangle" x="0" y="0" width="2" height="2" rx="1"></rect>
          <rect x="0" y="5" width="2" height="2" rx="1"></rect>
          <rect x="0" y="10" width="2" height="2" rx="1"></rect>
          <rect x="0" y="15" width="2" height="2" rx="1"></rect>
          <rect x="5" y="0" width="2" height="2" rx="1"></rect>
          <rect x="5" y="5" width="2" height="2" rx="1"></rect>
          <rect x="5" y="10" width="2" height="2" rx="1"></rect>
          <rect x="5" y="15" width="2" height="2" rx="1"></rect>
        </g>
      </g>
    </g>
  </svg>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  size: {
    type: Number,
    required: false,
    default: 10,
  },
});
</script>

<style></style>
