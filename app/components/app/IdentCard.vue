<script lang="ts" setup>
type Props = {
  imagen?: string;
  alternativeText?: string;
  title?: string;
  description?: string;
};

defineProps<Props>();
</script>

<template>
  <div class="identidad__item">
    <div class="identidad__imagen">
      <NuxtPicture :src="imagen" :alt="alternativeText ?? 'Nuxt image'" />
    </div>
    <div class="identidad__info">
      <h3 class="identidad__title" v-html="title"></h3>
      <div class="identidad__description" v-html="description"></div>
    </div>
  </div>
</template>
