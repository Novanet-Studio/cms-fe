<template>
  <div class="highlight">
    <div class="highlight__info">
      <h2 class="highlight__title" v-html="title"></h2>
      <p class="highlight__text" v-html="description"></p>
      <app-button class="button--blue" :url="url">Ver más</app-button>
    </div>
    <div class="highlight__image">
      <nuxt-picture :src="image" />
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  title: string;
  description: string;
  image: string;
  url?: string;
};

defineProps<Props>();
</script>
