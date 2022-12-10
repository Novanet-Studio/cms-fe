<template>
  <div class="identidad__item">
    <div class="identidad__imagen">
      <nuxt-img :src="imagen" :alt="alternativeText" />
    </div>
    <div class="identidad__info">
      <h3 class="identidad__title" v-html="title"></h3>
      <div class="identidad__description" v-html="description"></div>
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
