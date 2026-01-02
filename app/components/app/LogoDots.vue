<template>
  <div class="w-[1.875rem] flex justify-between" :class="class">
    <div class="w-2 h-2 rounded-full bg-secondary"></div>
    <div class="w-2 h-2 rounded-full bg-primary"></div>
    <div class="w-2 h-2 rounded-full bg-tertiary"></div>
  </div>
</template>

<script setup>
defineProps({
  class: String,
})
</script>