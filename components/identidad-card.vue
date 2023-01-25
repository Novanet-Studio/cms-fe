<template>
  <div class="identidad__item">
    <div class="identidad__imagen">
      <nuxt-picture :src="imagen" :alt="alternativeText" />
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  imagen: string;
  alternativeText: string;
  title?: string;
  description?: string;
};

defineProps<Props>();
</script>
