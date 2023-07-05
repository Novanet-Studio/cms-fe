<template>
  <div :class="estilo">
    <div class="highlight__info">
      <h2 class="highlight__title" v-html="title"></h2>
      <p class="highlight__text" v-html="description"></p>
      <div v-if="buttonText && url">
        <app-button class="button--blue" :url="url">{{
          buttonText
        }}</app-button>
      </div>
      <div v-else></div>
    </div>
    <div class="highlight__image">
      <nuxt-picture :src="image" :alt="alt" />
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  estilo: string;
  title: string;
  description?: string;
  image: string;
  url?: string;
  alt?: string;
  buttonText?: string;
};

defineProps<Props>();
</script>
