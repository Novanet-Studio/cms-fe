<template>
  <div class="flex gap-8 mt-8 mb-10" :class="class">
    <slot />
  </div>
</template>
<script lang="ts" setup>
withDefaults(defineProps<{
  class?: string;
}>(), {
  class: '',
});
</script>